/*
 * wilkins.js
 * Drop into: assets/js/wilkins.js
 * Add AFTER the existing script tags in every page:
 *   <script src="assets/js/wilkins.js"></script>
 */

(function () {
  'use strict';

  /* ── Scroll reveal via IntersectionObserver ── */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ── Subtle hero logo parallax (respects reduced-motion) ── */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var heroLogo = document.querySelector('#intro .logo-img');
    if (heroLogo) {
      window.addEventListener('scroll', function () {
        heroLogo.style.transform = 'translateY(' + (window.scrollY * 0.1) + 'px)';
      }, { passive: true });
    }
  }

})();
