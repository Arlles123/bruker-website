// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== BEFORE/AFTER SLIDER =====
function initBASlider() {
  const slider = document.getElementById('baSlider');
  if (!slider) return;
  const before = slider.querySelector('.ba-before');
  const handle = document.getElementById('baHandle');
  let dragging = false;

  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    before.style.clipPath = `inset(0 ${(1 - pct) * 100}% 0 0)`;
    handle.style.left = `${pct * 100}%`;
  }

  slider.addEventListener('mousedown', () => { dragging = true; });
  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });

  slider.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); });
  document.addEventListener('touchend', () => { dragging = false; });
  document.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); });

  setPosition(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
}

initBASlider();
