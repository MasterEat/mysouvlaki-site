(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.getElementById('mobile-navigation');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeButton = document.querySelector('.mobile-menu-close');

    if (!toggle || !drawer || !overlay || !closeButton || toggle.dataset.mobileNavBound === 'true') {
      return;
    }

    toggle.dataset.mobileNavBound = 'true';
    let isOpen = false;

    function openMenu() {
      if (isOpen) return;
      isOpen = true;
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(function () {
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
      });
      closeButton.focus({ preventScroll: true });
    }

    function closeMenu(options) {
      if (!isOpen) return;
      isOpen = false;
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      drawer.classList.add('-translate-x-full');
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      document.body.style.overflow = '';
      window.setTimeout(function () {
        if (!isOpen) overlay.classList.add('hidden');
      }, 300);
      if (!options || options.restoreFocus !== false) {
        toggle.focus({ preventScroll: true });
      }
    }

    toggle.addEventListener('click', openMenu);
    closeButton.addEventListener('click', function () { closeMenu(); });
    overlay.addEventListener('click', function () { closeMenu(); });
    drawer.querySelectorAll('a[href]').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu({ restoreFocus: false }); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  });
})();
