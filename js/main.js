/* PEAK Academia — interações da interface */
(function () {
  'use strict';

  // Renderiza os ícones Lucide (substitui <i data-lucide> por SVG)
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Feed do Instagram (LightWidget): se houver um ID configurado, injeta o feed
  var igFeed = document.getElementById('igFeed');
  if (igFeed) {
    var lwId = (igFeed.getAttribute('data-lw-id') || '').trim();
    if (lwId) {
      igFeed.innerHTML =
        '<iframe src="//lightwidget.com/widgets/' + lwId + '.html" ' +
        'scrolling="no" allowtransparency="true" class="lightwidget-widget" ' +
        'style="width:100%;border:0;overflow:hidden;"></iframe>';
      var s = document.createElement('script');
      s.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }

  // Ano atual no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Revela seções ao rolar
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section, .strip').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }
})();
