/* Progressive enhancement: content, navigation and project details work without JavaScript. */
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
  document.querySelectorAll('.repo-link').forEach((link) => {
    const url = config.projects?.[link.dataset.project];
    if (validLink(url)) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
      link.textContent = 'View on GitHub ↗';
      link.setAttribute('aria-label', `View ${link.closest('article').querySelector('h3').textContent} on GitHub`);
    } else {
      link.addEventListener('click', (event) => event.preventDefault());
    }
  });
  if (validLink(config.resumeUrl)) {
    document.querySelectorAll('.resume-link').forEach((link) => {
      link.href = config.resumeUrl;
      link.textContent = 'Download résumé ↓';
      link.setAttribute('download', 'Darshil_Kalyani_Resume.pdf');
    });
    const resumeSection = document.getElementById('resume');
    resumeSection.querySelector('.eyebrow').textContent = 'Résumé';
    resumeSection.querySelector('h2').textContent = 'My experience, at a glance.';
    resumeSection.querySelector('p:not(.eyebrow)').textContent = 'Download my résumé as a PDF.';
    const link = resumeSection.querySelector('a');
    link.href = config.resumeUrl;
    link.textContent = 'Download résumé ↓';
    link.setAttribute('download', 'Darshil_Kalyani_Resume.pdf');
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
