// ========================================
// PERSONAL SITE — JS
// Minimal: nav scroll, mobile menu, expandable drawers
// ========================================

(function() {
  'use strict';

  // Nav scroll effect
  var nav = document.getElementById('nav');
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        nav.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile menu toggle
  var toggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      toggle.classList.toggle('active');
    });
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // Expandable project drawers
  document.querySelectorAll('.post-item.expandable').forEach(function(item) {
    item.addEventListener('click', function() {
      var detail = item.nextElementSibling;
      if (!detail || !detail.classList.contains('project-expanded')) return;
      item.classList.toggle('active');
      detail.classList.toggle('active');
    });
  });

  // Intersection Observer for fade-in sections
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.section');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(function(s) { observer.observe(s); });
  }
})();
