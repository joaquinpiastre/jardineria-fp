(function () {
    'use strict';

    var header = document.getElementById('header');
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('menuToggle');

    function setMenu(open) {
        nav.classList.toggle('is-open', open);
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }

    toggle.addEventListener('click', function () {
        setMenu(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
    });

    function onScroll() {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Aparición suave de bloques al hacer scroll
    var targets = document.querySelectorAll('.service, .about__list li, .section__head, .cta__text, .cta__data');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        targets.forEach(function (el) {
            el.classList.add('reveal');
            io.observe(el);
        });
    }
})();
