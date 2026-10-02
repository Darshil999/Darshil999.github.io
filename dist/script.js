/* Progressive enhancement: content, links, navigation and project details all work without JavaScript. */
(() => {
  'use strict';
  document.body.classList.add('js-enabled');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  const mobile = window.matchMedia('(max-width: 760px)');
  const setMenu = (open) => {
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  menu.hidden = false;
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menu.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header-inner')) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));

  const config = window.PORTFOLIO || {};
  const validLink = (value) => {
    if (typeof value !== 'string' || !value.trim()) return false;
    try {
      const parsed = new URL(value, document.baseURI);
      return ['https:', 'http:', 'file:'].includes(parsed.protocol);
    } catch { return false; }
  };

  // Repository links: the HTML already holds working URLs; the config can override them.
  document.querySelectorAll('.repo-link').forEach((link) => {
    const url = config.projects?.[link.dataset.project];
    if (validLink(url)) link.href = url;
  });

  // Screenshots: swap a placeholder panel for a real image once its path is configured.
  document.querySelectorAll('.project-visual[data-screenshot]').forEach((panel) => {
    const src = config.screenshots?.[panel.dataset.screenshot];
    if (!validLink(src)) return;
    const img = new Image();
    img.className = 'project-screenshot';
    img.src = src;
    img.alt = panel.dataset.alt || '';
    img.width = 1200;
    img.height = 675;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => panel.replaceWith(img), { once: true });
  });

  if (validLink(config.resumeUrl)) {
    document.querySelectorAll('.resume-link').forEach((link) => {
      link.href = config.resumeUrl;
      link.textContent = 'Résumé ↓';
      link.setAttribute('download', 'Darshil_Kalyani_Resume.pdf');
    });
    const resumeSection = document.getElementById('resume');
    resumeSection.querySelector('h2').textContent = 'My experience, at a glance.';
    resumeSection.querySelector('p:not(.eyebrow)').textContent = 'Download my one-page résumé as a PDF.';
    const link = resumeSection.querySelector('a');
    link.href = config.resumeUrl;
    link.textContent = 'Download résumé ↓';
    link.setAttribute('download', 'Darshil_Kalyani_Resume.pdf');
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
