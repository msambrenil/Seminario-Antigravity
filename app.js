/**
 * GUÍA DEL ESTUDIANTE — INTERACTIVIDAD & ULTRA MOBILE UX
 * Manejo de temas, scrollspy, copiado de prompts, drawer móvil táctil y badges.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. TEMA CLARO / OSCURO CON LOCALSTORAGE
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('antigravity_student_theme');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('antigravity_student_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
    }
  };

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. DRAWER MOBILE & CONTROLES DE NAVEGACIÓN
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const sidebarClose = document.getElementById('sidebar-close');
  const btnQuickMenu = document.getElementById('btn-quick-menu');
  const btnScrollTop = document.getElementById('btn-scroll-top');

  const openDrawer = () => {
    if (sidebar) sidebar.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (sidebar) sidebar.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (btnQuickMenu) btnQuickMenu.addEventListener('click', openDrawer);
  if (sidebarClose) sidebarClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Cerrar drawer con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Cerrar drawer al hacer clic en un link en pantallas móviles
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        closeDrawer();
      }
    });
  });

  // 3. BARRA DE PROGRESO DE LECTURA
  const progressBar = document.getElementById('read-progress-bar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });

  // 4. SCROLLSPY (RESALTADO DE SECCIÓN ACTIVA)
  const sections = document.querySelectorAll('.doc-section');
  const observerOptions = {
    root: null,
    rootMargin: '-15% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        sidebarLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // 5. COPIADO DE CÓDIGO Y PROMPTS
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBox = btn.closest('.code-box');
      if (!codeBox) return;
      const codeElement = codeBox.querySelector('pre') || codeBox.querySelector('code');
      if (!codeElement) return;

      const textToCopy = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<span>✓</span> <span>¡Copiado!</span>`;

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2200);
      } catch (err) {
        console.error('Error al copiar:', err);
        btn.innerText = 'Error';
      }
    });
  });

  // 6. ACORDEONES (14 PREGUNTAS)
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  });

  // 7. BUSCADOR INSTANTÁNEO
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      sidebarLinks.forEach(link => {
        const text = link.innerText.toLowerCase();
        const listItem = link.closest('li');
        if (listItem) {
          if (!query || text.includes(query)) {
            listItem.style.display = '';
          } else {
            listItem.style.display = 'none';
          }
        }
      });

      const accordionItems = document.querySelectorAll('.accordion-item');
      accordionItems.forEach(item => {
        const itemText = item.innerText.toLowerCase();
        if (!query || itemText.includes(query)) {
          item.style.display = '';
          if (query) item.classList.add('open');
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 8. RASTREADOR DE BADGES CON LOCALSTORAGE
  const badgeItems = document.querySelectorAll('.badge-item');
  const badgeFill = document.getElementById('badge-progress-fill');
  const badgeCounter = document.getElementById('badge-counter');

  const updateBadgeProgress = () => {
    let completedCount = 0;
    const totalCount = badgeItems.length;

    badgeItems.forEach((item, index) => {
      const isCompleted = item.classList.contains('completed');
      if (isCompleted) completedCount++;
      localStorage.setItem(`antigravity_student_badge_${index}`, isCompleted ? 'true' : 'false');
    });

    const percent = Math.round((completedCount / totalCount) * 100);
    if (badgeFill) badgeFill.style.width = `${percent}%`;
    if (badgeCounter) badgeCounter.innerText = `${completedCount} de ${totalCount} (${percent}%)`;
  };

  badgeItems.forEach((item, index) => {
    const savedState = localStorage.getItem(`antigravity_student_badge_${index}`);
    if (savedState === 'true') {
      item.classList.add('completed');
    }

    item.addEventListener('click', () => {
      item.classList.toggle('completed');
      updateBadgeProgress();
    });
  });

  updateBadgeProgress();
});
