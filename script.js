// ========================================
// PERSONAL SITE — JS
// Minimal: nav scroll, mobile menu, smooth scroll
// ========================================

(function() {
  'use strict';

  // Nav scroll effect
  const nav = document.getElementById('nav');
  let ticking = false;
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
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      toggle.classList.toggle('active');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // Intersection Observer for fade-in sections
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(function(entries) {
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

// Expandable project toggle
function toggleProject(el) {
  var detail = el.nextElementSibling;
  if (!detail || !detail.classList.contains('project-expanded')) return;
  var isActive = el.classList.contains('active');
  el.classList.toggle('active');
  detail.classList.toggle('active');
}
