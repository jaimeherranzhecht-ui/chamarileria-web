/* ============================================================
   CHAMARILERÍA — main.js
   ============================================================ */

(function () {
  'use strict';

  /* --- HAMBURGER MENU --------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Cerrar menú al pulsar un enlace */
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Cerrar menú con Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  /* --- HEADER STICKY SHADOW --------------------------------- */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }


  /* --- SMOOTH SCROLL para anclas ---------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* --- FADE-IN AL SCROLL (IntersectionObserver) ------------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    /* Fallback: mostrar todo si no hay soporte */
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }


  /* --- NAV ACTIVE LINK al hacer scroll ---------------------- */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && header) {
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY + header.offsetHeight + 32;
      sections.forEach(function (section) {
        const top    = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id     = section.getAttribute('id');
        const link   = document.querySelector('.nav-menu a[href="#' + id + '"]');
        if (link) {
          link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
      });
    }, { passive: true });
  }


  /* --- FAQ ACCORDION ---------------------------------------- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      /* Cerrar todos */
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      /* Abrir el pulsado (si estaba cerrado) */
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* --- COOKIE BANNER ---------------------------------------- */
  var cookieBanner = document.getElementById('cookieBanner');
  var btnCookies   = document.getElementById('btnCookies');

  if (cookieBanner && btnCookies) {
    /* Mostrar solo si no hay preferencia guardada */
    if (!localStorage.getItem('cookies_info_dismissed')) {
      /* Pequeño delay para que aparezca con la animación CSS */
      setTimeout(function () {
        cookieBanner.classList.add('show');
      }, 800);
    }

    btnCookies.addEventListener('click', function () {
      localStorage.setItem('cookies_info_dismissed', '1');
      cookieBanner.classList.remove('show');
      setTimeout(function () {
        cookieBanner.style.display = 'none';
      }, 400);
    });
  }

}());
