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
  document.addEventListener('touchmove', e => { if (dragging) { e.preventDefault(); setPosition(e.touches[0].clientX); } }, { passive: false });

  setPosition(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
}

initBASlider();

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== GSAP ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

// Navbar slide-down (all pages)
gsap.from('.navbar', { y: -80, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });

// Hero timeline (index.html only — elements absent on other pages are skipped)
if (document.querySelector('.hero__label')) {
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero__label',   { y: 20, opacity: 0, duration: 0.6 })
    .from('.hero__title',   { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
    .from('.hero__tagline', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero__desc',    { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero__cta',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
    .from('.hero__ba',      { x: 40, opacity: 0, duration: 0.8 }, '-=0.6')
    .from('.hero__stat',    { y: 10, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4');
}

// Page hero animation (subpages)
if (document.querySelector('.page-hero')) {
  gsap.from('.page-hero', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 });
}

// Button hover scale
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.03, duration: 0.2 }));
  btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2 }));
});

// ===== AOS INIT =====
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    success.classList.add('visible');
    contactForm.reset();
    setTimeout(() => success.classList.remove('visible'), 5000);
  });
}
