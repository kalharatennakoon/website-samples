// Shared behaviour for all sample sites
(function () {
  // Inside the showcase iframe? Hide the demo badge there.
  if (window.self !== window.top) document.documentElement.classList.add('in-showcase');

  // Fade out any image that fails to load (the frame's tint shows instead)
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () { img.classList.add('broken'); });
    if (img.complete && img.naturalWidth === 0 && img.src) img.classList.add('broken');
  });

  // Mobile menu
  document.querySelectorAll('.burger').forEach(function (b) {
    b.addEventListener('click', function () {
      var nav = b.closest('header, nav, .nav');
      var open = nav.classList.toggle('nav-open');
      b.setAttribute('aria-expanded', open);
    });
  });
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      var nav = a.closest('.nav-open');
      if (nav) nav.classList.remove('nav-open');
    });
  });

  // Toast helper
  var toastEl;
  window.toast = function (msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  };

  // Demo forms never submit anywhere
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      toast(f.getAttribute('data-demo') || 'Demo only: nothing was sent');
      f.reset();
    });
  });

  // Badge linking back to the showcase
  var badge = document.createElement('a');
  badge.className = 'demo-badge';
  badge.href = '../index.html';
  badge.innerHTML = '<i></i>Demo site · Designed by Kalhara';
  document.body.appendChild(badge);
})();
