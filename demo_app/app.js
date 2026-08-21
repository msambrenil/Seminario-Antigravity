/**
 * CultivaRío 2026 - Demo App JavaScript Engine
 * Ecosistema Agentico: SPA Router, Mock Data, Live Filter, LocalStorage, Dark/Light Mode
 */

// ==========================================
// 1. MOCK DATASETS DE EVENTOS
// ==========================================
const MOCK_EVENTS = [
  {
    id: 'evt-01',
    title: 'Peña Folclórica & Cuarteto del Sur',
    category: 'musica',
    categoryName: '🎸 Música en Vivo',
    date: '14 de Noviembre 2026',
    time: '20:00 hs',
    location: 'Escenario Principal - Parque del Andino',
    price: 'Entrada Libre',
    icon: '🎸',
    description: 'Noche de peña con grandes referentes del folclore nacional y cierre a puro cuarteto cordobés.',
    artist: 'Raly Barrionuevo + Los Caligaris',
    capacity: '5.000 personas'
  },
  {
    id: 'evt-02',
    title: 'Muralismo & Arte Urbano en Vivo',
    category: 'arte',
    categoryName: '🎨 Muestra de Arte',
    date: '14 y 15 de Noviembre 2026',
    time: '16:00 hs',
    location: 'Galpón de la Cultura - Paseo de las Artes',
    price: 'Gratis con QR',
    icon: '🎨',
    description: 'Muestra interactiva de 12 muralistas riocuartenses interviniendo contenedores reciclables.',
    artist: 'Colectivo Arte Río Cuarto',
    capacity: '1.200 personas'
  },
  {
    id: 'evt-03',
    title: 'Festival Gastronómico "Sabores de las Sierras"',
    category: 'gastronomia',
    categoryName: '🍷 Gastronomía',
    date: '15 de Noviembre 2026',
    time: '12:00 hs',
    location: 'Patio Gastronómico Bvrd. Roca',
    price: 'Entrada Gratuita',
    icon: '🍷',
    description: 'Patios de comida con asado a la estaca, empanadas criollas, cerveza artesanal y cocina en vivo.',
    artist: 'Chefs Invitados de Córdoba',
    capacity: '3.000 personas'
  },
  {
    id: 'evt-04',
    title: 'Taller de Cerámica Criolla & Telar',
    category: 'talleres',
    categoryName: '🧵 Talleres & Artesanías',
    date: '15 de Noviembre 2026',
    time: '17:30 hs',
    location: 'Carpa de Artesanos - Sector Norte',
    price: 'Gratuito',
    icon: '🏺',
    description: 'Aprende a moldear arcilla del Río Chocancharava y técnicas de telar huarpe con materiales incluidos.',
    artist: 'Maestros Artesanos de la Región',
    capacity: '200 cupos'
  },
  {
    id: 'evt-05',
    title: 'Noche de Rock Indie & Synthpop',
    category: 'musica',
    categoryName: '🎸 Música en Vivo',
    date: '16 de Noviembre 2026',
    time: '21:30 hs',
    location: 'Anfiteatro del Parque',
    price: 'Entrada Libre',
    icon: '🎺',
    description: 'Festival emergente con bandas jóvenes de la Provincia de Córdoba y espectáculo de luces LED.',
    artist: 'Rayos Laser + Bandas Locales',
    capacity: '2.500 personas'
  },
  {
    id: 'evt-06',
    title: 'Feria de Emprendedores y Diseño Sostenible',
    category: 'talleres',
    categoryName: '🧵 Talleres & Artesanías',
    date: '14 al 16 de Noviembre 2026',
    time: '15:00 hs',
    location: 'Paseo del Ferrocarril',
    price: 'Acceso Libre',
    icon: '🌱',
    description: 'Más de 80 stands de diseño local, moda sustentable, botánica y productos orgánicos.',
    artist: 'Red de Emprendedores del Sur',
    capacity: 'Entrada continua'
  }
];

// ==========================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================
let currentCategory = 'all';
let searchQuery = '';
let reservations = JSON.parse(localStorage.getItem('cultivario_reservas')) || [];
let activeTheme = localStorage.getItem('cultivario_theme') || 'dark';

// ==========================================
// 3. INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCatalogFilters();
  initModalListeners();
  initFormHandler();
  renderCatalog();
  updateReservationsBadge();
  renderDashboard();
});

// ==========================================
// 4. CONTROLADOR DE TEMA (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  applyTheme(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('cultivario_theme', activeTheme);
      applyTheme(activeTheme);
    });
  }
}

function applyTheme(theme) {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');

  if (theme === 'light') {
    body.classList.remove('bg-slate-950', 'text-slate-100');
    body.classList.add('bg-slate-50', 'text-slate-900', 'light-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeLabel) themeLabel.textContent = 'Modo Claro';
  } else {
    body.classList.remove('bg-slate-50', 'text-slate-900', 'light-mode');
    body.classList.add('bg-slate-950', 'text-slate-100');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeLabel) themeLabel.textContent = 'Modo Oscuro';
  }
}

// ==========================================
// 5. ROUTER SPA (CONMUTACIÓN DE VISTAS)
// ==========================================
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-view-target]');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.dataset.viewTarget;
      switchView(targetView);

      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Set initial view state
  switchView('landing');
}

function switchView(viewName) {
  const views = document.querySelectorAll('.spa-view');
  views.forEach(v => v.classList.add('hidden'));

  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update active style in nav links
  document.querySelectorAll('[data-view-target]').forEach(link => {
    if (link.dataset.viewTarget === viewName) {
      link.classList.add('active-nav-link');
    } else {
      link.classList.remove('active-nav-link');
    }
  });

  // Re-render dashboard when entering dashboard view
  if (viewName === 'dashboard') {
    renderDashboard();
  }
}

// ==========================================
// 6. CATÁLOGO CON FILTROS Y BÚSQUEDA EN VIVO
// ==========================================
function initCatalogFilters() {
  const searchInput = document.getElementById('catalog-search');
  const categoryBtns = document.querySelectorAll('[data-filter-category]');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'force-text-white');
        b.classList.add('bg-slate-900', 'text-slate-300', 'border-slate-800');
      });

      btn.classList.remove('bg-slate-900', 'text-slate-300', 'border-slate-800');
      btn.classList.add('bg-purple-600', 'text-white', 'force-text-white');

      currentCategory = btn.dataset.filterCategory;
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  const countDisplay = document.getElementById('catalog-count');
  if (!grid) return;

  const filteredEvents = MOCK_EVENTS.filter(evt => {
    const matchesCategory = currentCategory === 'all' || evt.category === currentCategory;
    const matchesSearch = evt.title.toLowerCase().includes(searchQuery) ||
                          evt.description.toLowerCase().includes(searchQuery) ||
                          evt.artist.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (countDisplay) {
    countDisplay.textContent = `${filteredEvents.length} Atracciones Encontradas`;
  }

  if (filteredEvents.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/60 rounded-3xl border border-slate-800 p-8">
        <span class="text-5xl">🔍</span>
        <h3 class="text-xl font-bold text-white card-title-text mt-4">No se encontraron atracciones</h3>
        <p class="text-slate-400 text-sm mt-2">Intenta modificar la búsqueda o seleccionar otra categoría.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredEvents.map(evt => {
    const isReserved = reservations.includes(evt.id);
    return `
      <article class="bg-slate-900 border border-slate-800/80 hover:border-purple-500/50 rounded-3xl overflow-hidden p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold badge-category bg-purple-950/80 text-purple-300 border border-purple-800/40">
              ${evt.categoryName}
            </span>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full badge-price bg-emerald-950 text-emerald-300 border border-emerald-800/40">
              ${evt.price}
            </span>
          </div>

          <div class="flex items-start gap-4">
            <span class="text-4xl p-3 bg-slate-950 rounded-2xl border border-slate-800 text-purple-400 shrink-0 icon-bg-box">${evt.icon}</span>
            <div>
              <h3 class="font-heading font-bold text-lg text-white card-title-text leading-tight">${evt.title}</h3>
              <p class="text-xs text-purple-400 font-semibold mt-1">👤 ${evt.artist}</p>
            </div>
          </div>

          <p class="mt-4 text-slate-400 text-sm leading-relaxed">${evt.description}</p>

          <div class="mt-4 pt-4 border-t border-slate-800/60 space-y-1 text-xs text-slate-300">
            <p>📅 <strong>Fecha:</strong> ${evt.date} (${evt.time})</p>
            <p>📍 <strong>Lugar:</strong> ${evt.location}</p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button onclick="openEventModal('${evt.id}')" class="px-3.5 py-2.5 rounded-xl btn-detail-action bg-slate-950 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-purple-500 transition-colors">
            ℹ️ Detalle
          </button>
          
          <button onclick="toggleReserva('${evt.id}')" class="flex-1 py-2.5 rounded-xl ${isReserved ? 'bg-emerald-600 hover:bg-emerald-700 btn-emerald-success' : 'bg-purple-600 hover:bg-purple-700 btn-purple-primary'} text-white force-text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5">
            ${isReserved ? '✓ Entrada Reservada' : '🎫 Reservar Entrada'}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 7. SISTEMA DE RESERVAS Y PERSISTENCIA (LOCALSTORAGE)
// ==========================================
function toggleReserva(eventId) {
  const index = reservations.indexOf(eventId);
  if (index > -1) {
    reservations.splice(index, 1);
  } else {
    reservations.push(eventId);
  }

  localStorage.setItem('cultivario_reservas', JSON.stringify(reservations));
  updateReservationsBadge();
  renderCatalog();
  renderDashboard();
}

function updateReservationsBadge() {
  const badges = document.querySelectorAll('.reservas-badge-count');
  badges.forEach(b => {
    b.textContent = reservations.length;
    if (reservations.length > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

// ==========================================
// 8. MODAL EMERGENTE DE DETALLE
// ==========================================
function initModalListeners() {
  const modal = document.getElementById('event-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

function openEventModal(eventId) {
  const evt = MOCK_EVENTS.find(e => e.id === eventId);
  const modal = document.getElementById('event-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!evt || !modal || !modalBody) return;

  const isReserved = reservations.includes(evt.id);

  modalBody.innerHTML = `
    <div class="flex items-center gap-4">
      <span class="text-5xl p-4 bg-slate-950 rounded-2xl border border-slate-800 text-purple-400 icon-bg-box">${evt.icon}</span>
      <div>
        <span class="px-3 py-1 rounded-full text-xs font-semibold badge-category bg-purple-950 text-purple-300 border border-purple-800">${evt.categoryName}</span>
        <h2 class="font-heading font-extrabold text-2xl text-white card-title-text mt-2">${evt.title}</h2>
        <p class="text-sm font-semibold text-purple-400">Presenta: ${evt.artist}</p>
      </div>
    </div>

    <div class="mt-6 space-y-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300">
      <p>📅 <strong>Fecha y Hora:</strong> ${evt.date} - ${evt.time}</p>
      <p>📍 <strong>Ubicación Exacta:</strong> ${evt.location}</p>
      <p>👥 <strong>Capacidad del Lugar:</strong> ${evt.capacity}</p>
      <p>🎟️ <strong>Condición de Ingreso:</strong> ${evt.price}</p>
    </div>

    <p class="mt-4 text-slate-300 text-sm leading-relaxed">${evt.description}</p>

    <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
      <button onclick="closeModal()" class="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold">Cerrar</button>
      <button onclick="toggleReserva('${evt.id}'); closeModal();" class="px-6 py-2.5 rounded-xl ${isReserved ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'} text-white force-text-white font-bold text-xs shadow-lg">
        ${isReserved ? 'Cancelar Reserva' : 'Confirmar Reserva de Entrada'}
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('event-modal');
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// 9. DASHBOARD DE ADMINISTRACIÓN Y MÉTRICAS
// ==========================================
function renderDashboard() {
  const statsContainer = document.getElementById('dashboard-stats');
  const reservationsTable = document.getElementById('dashboard-reservations-table');
  if (!statsContainer || !reservationsTable) return;

  const totalEvents = MOCK_EVENTS.length;
  const totalReserved = reservations.length;
  const totalCapacitySimulated = totalEvents * 1500;
  const reservedCapacitySimulated = totalReserved * 1500;
  const percentage = Math.round((totalReserved / totalEvents) * 100);

  statsContainer.innerHTML = `
    <div class="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
      <span class="text-xs font-semibold text-slate-400 uppercase">Entradas Reservadas</span>
      <p class="font-heading font-extrabold text-3xl text-purple-400 mt-2">${totalReserved} <span class="text-sm font-normal text-slate-400">/ ${totalEvents} atracciones</span></p>
    </div>
    <div class="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
      <span class="text-xs font-semibold text-slate-400 uppercase">Ocupación Estimada</span>
      <p class="font-heading font-extrabold text-3xl text-cyan-400 mt-2">${percentage}% <span class="text-sm font-normal text-slate-400">de la capacidad total</span></p>
    </div>
    <div class="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
      <span class="text-xs font-semibold text-slate-400 uppercase">Lugares Reservados</span>
      <p class="font-heading font-extrabold text-3xl text-amber-400 mt-2">${reservedCapacitySimulated.toLocaleString()} <span class="text-sm font-normal text-slate-400">personas</span></p>
    </div>
  `;

  const reservedEvents = MOCK_EVENTS.filter(e => reservations.includes(e.id));

  if (reservedEvents.length === 0) {
    reservationsTable.innerHTML = `
      <div class="text-center py-12 text-slate-400 text-sm">
        <span class="text-4xl block mb-2">🎟️</span>
        Aún no has reservado ninguna entrada. Explora el <a href="#" onclick="switchView('catalogo')" class="text-purple-400 underline font-semibold">Catálogo de Atracciones</a> para reservar.
      </div>
    `;
  } else {
    reservationsTable.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs sm:text-sm text-slate-300">
          <thead class="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase font-semibold">
            <tr>
              <th class="p-4">Atracción</th>
              <th class="p-4">Categoría</th>
              <th class="p-4">Fecha & Hora</th>
              <th class="p-4">Lugar</th>
              <th class="p-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            ${reservedEvents.map(evt => `
              <tr class="hover:bg-slate-900/60">
                <td class="p-4 font-bold text-white card-title-text flex items-center gap-2">
                  <span>${evt.icon}</span> ${evt.title}
                </td>
                <td class="p-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-category bg-purple-950 text-purple-300 border border-purple-800">${evt.categoryName}</span></td>
                <td class="p-4">${evt.date} (${evt.time})</td>
                <td class="p-4">${evt.location}</td>
                <td class="p-4 text-right">
                  <button onclick="toggleReserva('${evt.id}')" class="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white force-text-white text-xs font-bold shadow-sm">
                    Eliminar
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

// ==========================================
// 10. FORMULARIO DE RESERVA DE TICKET (LANDING)
// ==========================================
function initFormHandler() {
  const ticketForm = document.getElementById('ticket-form');
  const formMsg = document.getElementById('form-msg');

  if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Auto-reserve first event if none reserved
      if (reservations.length === 0 && MOCK_EVENTS.length > 0) {
        reservations.push(MOCK_EVENTS[0].id);
        localStorage.setItem('cultivario_reservas', JSON.stringify(reservations));
        updateReservationsBadge();
      }

      if (formMsg) {
        formMsg.classList.remove('hidden');
      }
      ticketForm.reset();
    });
  }
}
