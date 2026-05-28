# BRUKER Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete single-page corporate website for BRUKER (paving stone cleaning company) using HTML + CSS + JS with CDN libraries.

**Architecture:** Three files (index.html, style.css, script.js) + assets/logo.jpg. All sections on one scrolling page. Animations via GSAP + AOS. Gallery/slider via Swiper. No build step — open index.html directly in browser.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), Vanilla JS ES6+, GSAP 3.12, Swiper 11, AOS 2.3, Font Awesome 6.5, Google Fonts (Inter + Montserrat)

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Full page markup — all 9 sections |
| `style.css` | All styles — variables, reset, components, sections, responsive |
| `script.js` | All JS — navbar scroll, hamburger, comparison slider, FAQ accordion, GSAP, AOS |
| `assets/logo.jpg` | Company logo (copied from Desktop) |

---

## Task 1: Project Setup

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`
- Copy: `assets/logo.jpg`

- [ ] **Step 1: Copy logo and create assets folder**

```bash
cd "C:/Users/piotr/Desktop/bruker-website"
mkdir -p assets
cp "/c/Users/piotr/Desktop/e4a7a2e8-bc07-4446-baab-8975f71a1505.jpg" "assets/logo.jpg"
```

- [ ] **Step 2: Create `index.html` with full CDN skeleton and section wrappers**

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BRUKER — Profesjonalne Czyszczenie Kostki Brukowej</title>
  <meta name="description" content="BRUKER — profesjonalne czyszczenie kostki brukowej, impregnacja, mycie elewacji i dachów. Darmowa wycena. Zadzwoń: +48 000 000 000">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar" id="navbar"></nav>
  <section class="hero" id="hero"></section>
  <section class="services section" id="uslugi"></section>
  <section class="before-after section" id="realizacje"></section>
  <section class="how-we-work section" id="jak-dzialamy"></section>
  <section class="testimonials section" id="opinie"></section>
  <section class="faq section" id="faq"></section>
  <section class="contact section" id="kontakt"></section>
  <footer class="footer"></footer>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create empty `style.css` and `script.js`**

`style.css` — leave empty for now.  
`script.js` — leave empty for now.

- [ ] **Step 4: Open `index.html` in browser**

Expected: blank white page, no console errors (F12 → Console).

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js assets/logo.jpg
git commit -m "feat: project setup with HTML skeleton and assets"
```

---

## Task 2: CSS Foundation — Variables, Reset, Typography, Utilities

**Files:**
- Modify: `style.css` (append all)

- [ ] **Step 1: Write CSS foundation into `style.css`**

```css
/* ===== VARIABLES ===== */
:root {
  --navy:          #0f1e38;
  --green:         #84c441;
  --blue:          #3a9fd8;
  --bg-page:       #f4f7fb;
  --bg-card:       #ffffff;
  --text-primary:  #0f1e38;
  --text-secondary:#6b7280;
  --border:        #e5eaf2;
  --shadow-sm:     0 2px 8px rgba(0,0,0,0.06);
  --shadow-md:     0 4px 20px rgba(0,0,0,0.10);
  --shadow-lg:     0 8px 40px rgba(0,0,0,0.14);
  --radius-sm:     6px;
  --radius-md:     12px;
  --radius-lg:     20px;
  --section-pad:   96px 0;
  --container-w:   1160px;
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.65;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { font-family: inherit; cursor: pointer; border: none; }

/* ===== LAYOUT ===== */
.container {
  max-width: var(--container-w);
  margin: 0 auto;
  padding: 0 24px;
}
.section { padding: var(--section-pad); }
.section--alt { background: var(--bg-card); }

/* ===== SECTION HEADERS ===== */
.section-header { text-align: center; margin-bottom: 60px; }
.section-label {
  display: inline-block;
  background: rgba(132,196,65,0.1);
  border: 1px solid rgba(132,196,65,0.3);
  color: #4a7420;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 42px);
  color: var(--navy);
  line-height: 1.15;
  margin-bottom: 14px;
}
.section-subtitle {
  color: var(--text-secondary);
  font-size: 17px;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  background: var(--navy);
  color: #fff;
  box-shadow: 0 4px 14px rgba(15,30,56,0.25);
}
.btn-primary:hover { box-shadow: 0 8px 24px rgba(15,30,56,0.35); }
.btn-secondary {
  background: var(--blue);
  color: #fff;
  box-shadow: 0 4px 14px rgba(58,159,216,0.3);
}
.btn-secondary:hover { box-shadow: 0 8px 24px rgba(58,159,216,0.4); }
.btn-green {
  background: var(--green);
  color: #fff;
  box-shadow: 0 4px 14px rgba(132,196,65,0.3);
}
.btn-green:hover { box-shadow: 0 8px 24px rgba(132,196,65,0.4); }

/* ===== PLACEHOLDER ===== */
.placeholder-img {
  background: linear-gradient(135deg, #e8f5d6, #ddf0f8);
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}
.placeholder-img i { font-size: 32px; opacity: 0.4; }
```

- [ ] **Step 2: Reload browser**

Expected: page background becomes `#f4f7fb` (light gray), still blank otherwise.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: CSS variables, reset, typography, utility classes"
```

---

## Task 3: Navbar

**Files:**
- Modify: `index.html` — fill `<nav class="navbar">`
- Modify: `style.css` — append navbar styles
- Modify: `script.js` — append navbar JS

- [ ] **Step 1: Replace `<nav class="navbar" id="navbar"></nav>` in `index.html` with:**

```html
<nav class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="#hero" class="navbar__logo">
      <img src="assets/logo.jpg" alt="BRUKER logo" height="52">
    </a>
    <ul class="navbar__links" id="navLinks">
      <li><a href="#uslugi">Usługi</a></li>
      <li><a href="#realizacje">Realizacje</a></li>
      <li><a href="#jak-dzialamy">Jak działamy</a></li>
      <li><a href="#opinie">Opinie</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
    <a href="#kontakt" class="btn btn-green navbar__cta">Darmowa wycena</a>
    <button class="navbar__burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- [ ] **Step 2: Append navbar styles to `style.css`**

```css
/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.navbar.scrolled {
  border-bottom-color: var(--border);
  box-shadow: var(--shadow-md);
}
.navbar__inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 32px;
}
.navbar__logo img {
  height: 52px;
  width: auto;
  object-fit: contain;
}
.navbar__links {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
}
.navbar__links a {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.2s;
  position: relative;
}
.navbar__links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 2px;
  background: var(--green);
  transition: width 0.25s;
}
.navbar__links a:hover { color: var(--navy); }
.navbar__links a:hover::after { width: 100%; }
.navbar__cta { margin-left: 16px; padding: 10px 20px; font-size: 14px; }
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;
  margin-left: auto;
}
.navbar__burger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--navy);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.navbar__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger.open span:nth-child(2) { opacity: 0; }
.navbar__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile overlay */
@media (max-width: 768px) {
  .navbar__burger { display: flex; }
  .navbar__cta { display: none; }
  .navbar__links {
    position: fixed;
    top: 72px; left: 0; right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-lg);
    transform: translateY(-110%);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .navbar__links.open { transform: translateY(0); }
  .navbar__links a { font-size: 18px; }
}
```

- [ ] **Step 3: Append navbar JS to `script.js`**

```js
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
```

- [ ] **Step 4: Add body padding for fixed navbar — prepend to `style.css` body rule**

Add `padding-top: 72px;` to the `body` rule in `style.css`.

- [ ] **Step 5: Verify in browser**

- Logo visible in navbar
- Links visible (desktop)
- Scrolling adds shadow to navbar
- Mobile: hamburger appears at <768px, menu slides in/out

- [ ] **Step 6: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: sticky navbar with mobile hamburger menu"
```

---

## Task 4: Hero Section

**Files:**
- Modify: `index.html` — fill `<section class="hero">`
- Modify: `style.css` — append hero styles

- [ ] **Step 1: Replace `<section class="hero" id="hero"></section>` with:**

```html
<section class="hero" id="hero">
  <div class="container hero__inner">
    <div class="hero__content">
      <span class="section-label hero__label">Profesjonalne czyszczenie kostki brukowej</span>
      <h1 class="hero__title">Przywróć blask<br><span class="hero__title--accent">swojej posesji</span></h1>
      <p class="hero__tagline">&bdquo;BRUKER myje, sąsiad z zazdrości gnije&rdquo;</p>
      <p class="hero__desc">Czyszczenie ciśnieniowe, impregnacja, mycie elewacji i dachów. Profesjonalny sprzęt, szybka realizacja, gwarancja efektu.</p>
      <div class="hero__cta">
        <a href="#kontakt" class="btn btn-primary"><i class="fa-solid fa-file-invoice"></i> Darmowa wycena</a>
        <a href="tel:+48000000000" class="btn btn-secondary"><i class="fa-solid fa-phone"></i> Zadzwoń teraz</a>
      </div>
    </div>

    <div class="hero__ba">
      <div class="hero__ba-card hero__ba-card--before">
        <div class="placeholder-img" style="height:220px;">
          <i class="fa-regular fa-image"></i>
          <span>PRZED</span>
        </div>
        <span class="hero__ba-label">Przed czyszczeniem</span>
      </div>
      <div class="hero__ba-card hero__ba-card--after">
        <div class="placeholder-img" style="height:220px; background: linear-gradient(135deg,#ddf0f8,#e8f5d6);">
          <i class="fa-solid fa-sparkles" style="color:var(--blue)"></i>
          <span>PO</span>
        </div>
        <span class="hero__ba-label">Po czyszczeniu</span>
      </div>
    </div>
  </div>

  <div class="hero__stats">
    <div class="container hero__stats-inner">
      <div class="hero__stat">
        <strong>500+</strong>
        <span>zrealizowanych zleceń</span>
      </div>
      <div class="hero__stat-divider"></div>
      <div class="hero__stat">
        <strong>⭐ 5.0</strong>
        <span>średnia ocena klientów</span>
      </div>
      <div class="hero__stat-divider"></div>
      <div class="hero__stat">
        <strong>24h</strong>
        <span>wycena bez wychodzenia z domu</span>
      </div>
      <div class="hero__stat-divider"></div>
      <div class="hero__stat">
        <strong>100%</strong>
        <span>gwarancja satysfakcji</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append hero styles to `style.css`**

```css
/* ===== HERO ===== */
.hero {
  background: var(--bg-page);
  padding: 80px 0 0;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
}
.hero__inner {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
}
.hero__label { margin-bottom: 20px; }
.hero__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(36px, 5vw, 60px);
  color: var(--navy);
  line-height: 1.1;
  margin-bottom: 16px;
}
.hero__title--accent { color: var(--green); }
.hero__tagline {
  font-size: 16px;
  font-style: italic;
  color: var(--text-secondary);
  border-left: 3px solid var(--green);
  padding-left: 14px;
  margin-bottom: 20px;
}
.hero__desc {
  color: var(--text-secondary);
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 480px;
}
.hero__cta { display: flex; gap: 14px; flex-wrap: wrap; }

.hero__ba {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.hero__ba-card {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
}
.hero__ba-label {
  display: block;
  text-align: center;
  padding: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-secondary);
}
.hero__ba-card--before .hero__ba-label { color: #5a8a2a; }
.hero__ba-card--after .hero__ba-label { color: var(--blue); }

.hero__stats {
  background: var(--navy);
  padding: 28px 0;
}
.hero__stats-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}
.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 48px;
  text-align: center;
}
.hero__stat strong {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 26px;
  color: var(--green);
  line-height: 1;
  margin-bottom: 4px;
}
.hero__stat span {
  font-size: 13px;
  color: rgba(255,255,255,0.65);
}
.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.15);
}

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; text-align: center; }
  .hero__desc { margin: 0 auto 32px; }
  .hero__cta { justify-content: center; }
  .hero__tagline { text-align: left; }
  .hero__ba { max-width: 480px; margin: 0 auto; }
  .hero__stat-divider { display: none; }
  .hero__stat { padding: 12px 24px; }
}
```

- [ ] **Step 3: Verify in browser**

Expected: hero fills viewport, title/tagline/CTAs visible, two placeholder cards side by side, dark stats bar at bottom.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: hero section with CTA, BA placeholders, stats bar"
```

---

## Task 5: Services Section

**Files:**
- Modify: `index.html` — fill `<section class="services">`
- Modify: `style.css` — append services styles

- [ ] **Step 1: Replace `<section class="services section" id="uslugi"></section>` with:**

```html
<section class="services section section--alt" id="uslugi">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Co robimy</span>
      <h2 class="section-title">Nasze usługi</h2>
      <p class="section-subtitle">Kompleksowe czyszczenie i zabezpieczenie powierzchni zewnętrznych — profesjonalnym sprzętem, z gwarancją efektu.</p>
    </div>
    <div class="services__grid">
      <div class="service-card" data-aos="fade-up" data-aos-delay="0">
        <div class="service-card__icon"><i class="fa-solid fa-broom"></i></div>
        <h3 class="service-card__title">Czyszczenie kostki brukowej</h3>
        <p class="service-card__desc">Mycie ciśnieniowe usuwa mech, glony, tłuszcz i zabrudzenia. Kostka odzyska pierwotny wygląd.</p>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="80">
        <div class="service-card__icon"><i class="fa-solid fa-shield-halved"></i></div>
        <h3 class="service-card__title">Impregnacja kostki</h3>
        <p class="service-card__desc">Zabezpieczamy powierzchnię środkami impregnującymi — ochrona przed zabrudzeniami, wodą i mrozem.</p>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="160">
        <div class="service-card__icon"><i class="fa-solid fa-building"></i></div>
        <h3 class="service-card__title">Mycie elewacji</h3>
        <p class="service-card__desc">Usuwamy zanieczyszczenia, glony i zacieki z elewacji budynków. Bezpiecznie dla każdego rodzaju tynku.</p>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="240">
        <div class="service-card__icon"><i class="fa-solid fa-house-chimney"></i></div>
        <h3 class="service-card__title">Mycie dachów</h3>
        <p class="service-card__desc">Czyszczenie dachówki, blachy i gontu — przedłużamy żywotność dachu i przywracamy estetyczny wygląd.</p>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="320">
        <div class="service-card__icon"><i class="fa-solid fa-border-all"></i></div>
        <h3 class="service-card__title">Czyszczenie paneli i ogrodzeń</h3>
        <p class="service-card__desc">Mycie ogrodzeń, paneli ogrodzeniowych, tarasów i podjazdów. Efekt widoczny od pierwszego zlecenia.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append services styles to `style.css`**

```css
/* ===== SERVICES ===== */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  background: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 36px 28px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: default;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green);
}
.service-card__icon {
  width: 60px; height: 60px;
  background: rgba(132,196,65,0.1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: background 0.25s;
}
.service-card:hover .service-card__icon { background: rgba(132,196,65,0.2); }
.service-card__icon i {
  font-size: 26px;
  color: var(--green);
}
.service-card__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--navy);
  margin-bottom: 10px;
}
.service-card__desc {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.65;
}

/* 5 cards: last row centers single card */
.services__grid .service-card:last-child:nth-child(3n - 2) {
  grid-column: 2;
}

@media (max-width: 900px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .services__grid .service-card:last-child:nth-child(3n - 2) { grid-column: auto; }
}
@media (max-width: 560px) {
  .services__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify in browser**

Expected: 3-column grid of 5 service cards, last card centered. Hover lifts card with green border.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: services section with 5 cards and hover effects"
```

---

## Task 6: Before/After Section — Comparison Slider + Gallery

**Files:**
- Modify: `index.html` — fill `<section class="before-after">`
- Modify: `style.css` — append BA styles
- Modify: `script.js` — append BA slider JS

- [ ] **Step 1: Replace `<section class="before-after section" id="realizacje"></section>` with:**

```html
<section class="before-after section" id="realizacje">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Efekty pracy</span>
      <h2 class="section-title">Przed i po</h2>
      <p class="section-subtitle">Przeciągnij suwak aby zobaczyć różnicę. Wkrótce — prawdziwe zdjęcia realizacji.</p>
    </div>

    <!-- Comparison slider -->
    <div class="ba-slider" id="baSlider">
      <div class="ba-before">
        <div class="placeholder-img ba-placeholder" style="background: linear-gradient(135deg,#e8e8e0,#d4d4c8);">
          <i class="fa-regular fa-image"></i>
          <span>PRZED CZYSZCZENIEM</span>
          <small>Tutaj pojawi się zdjęcie</small>
        </div>
      </div>
      <div class="ba-after">
        <div class="placeholder-img ba-placeholder" style="background: linear-gradient(135deg,#ddf0f8,#e8f5d6);">
          <i class="fa-solid fa-sparkles" style="color:var(--blue)"></i>
          <span>PO CZYSZCZENIU</span>
          <small>Tutaj pojawi się zdjęcie</small>
        </div>
      </div>
      <div class="ba-handle" id="baHandle">
        <div class="ba-handle-bar"></div>
        <div class="ba-handle-circle"><i class="fa-solid fa-arrows-left-right"></i></div>
        <div class="ba-handle-bar"></div>
      </div>
    </div>

    <!-- Gallery grid -->
    <h3 class="ba-gallery-title">Galeria realizacji</h3>
    <div class="ba-gallery">
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="0">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Czyszczenie kostki</p>
      </div>
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="80">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Impregnacja podjazdu</p>
      </div>
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="160">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Mycie elewacji</p>
      </div>
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="240">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Czyszczenie dachu</p>
      </div>
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="320">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Panel ogrodzeniowy</p>
      </div>
      <div class="ba-gallery-card" data-aos="fade-up" data-aos-delay="400">
        <div class="ba-gallery-pair">
          <div class="placeholder-img ba-gallery-img"><i class="fa-regular fa-image"></i><span>PRZED</span></div>
          <div class="placeholder-img ba-gallery-img" style="background:linear-gradient(135deg,#ddf0f8,#e8f5d6)"><i class="fa-solid fa-sparkles"></i><span>PO</span></div>
        </div>
        <p class="ba-gallery-label">Taras drewniany</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append BA styles to `style.css`**

```css
/* ===== BEFORE / AFTER ===== */
.ba-slider {
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 60px;
  box-shadow: var(--shadow-lg);
  cursor: ew-resize;
  user-select: none;
}
.ba-before,
.ba-after {
  position: absolute;
  inset: 0;
}
.ba-before {
  clip-path: inset(0 50% 0 0);
  z-index: 2;
}
.ba-placeholder {
  width: 100%; height: 100%;
  border-radius: 0;
  border: none;
  flex-direction: column;
  gap: 12px;
}
.ba-placeholder i { font-size: 40px; }
.ba-placeholder span { font-size: 14px; font-weight: 700; letter-spacing: 3px; }
.ba-placeholder small { font-size: 12px; opacity: 0.6; }

.ba-handle {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}
.ba-handle-bar {
  flex: 1;
  width: 2px;
  background: #fff;
  opacity: 0.8;
}
.ba-handle-circle {
  width: 44px; height: 44px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
  color: var(--navy);
  font-size: 16px;
  flex-shrink: 0;
  pointer-events: all;
  cursor: ew-resize;
}

.ba-gallery-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--navy);
  margin-bottom: 28px;
  text-align: center;
}
.ba-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ba-gallery-card {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}
.ba-gallery-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.ba-gallery-img {
  height: 120px;
  border-radius: 0;
  border: none;
  flex-direction: column;
  gap: 6px;
  font-size: 11px;
}
.ba-gallery-img i { font-size: 20px; }
.ba-gallery-label {
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--navy);
  text-align: center;
}

@media (max-width: 768px) {
  .ba-slider { height: 280px; }
  .ba-gallery { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .ba-gallery { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Append BA slider JS to `script.js`**

```js
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
```

- [ ] **Step 4: Verify in browser**

- Drag the handle left/right — before/after areas reveal correctly
- Gallery shows 6 cards in 3 columns

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: before/after comparison slider and gallery grid"
```

---

## Task 7: How We Work Stepper

**Files:**
- Modify: `index.html` — fill `<section class="how-we-work">`
- Modify: `style.css` — append stepper styles

- [ ] **Step 1: Replace `<section class="how-we-work section" id="jak-dzialamy"></section>` with:**

```html
<section class="how-we-work section section--alt" id="jak-dzialamy">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Proces</span>
      <h2 class="section-title">Jak działamy</h2>
      <p class="section-subtitle">Prosta, 4-krokowa droga od zapytania do efektu — bez zbędnych formalności.</p>
    </div>
    <div class="steps">
      <div class="step" data-aos="fade-up" data-aos-delay="0">
        <div class="step__num">01</div>
        <div class="step__connector"></div>
        <div class="step__icon"><i class="fa-solid fa-phone"></i></div>
        <h3 class="step__title">Kontakt i wycena</h3>
        <p class="step__desc">Zadzwoń lub wypełnij formularz. Bezpłatna wycena w ciągu 24 godzin — bez wychodzenia z domu.</p>
      </div>
      <div class="step" data-aos="fade-up" data-aos-delay="100">
        <div class="step__num">02</div>
        <div class="step__connector"></div>
        <div class="step__icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <h3 class="step__title">Oględziny</h3>
        <p class="step__desc">Przyjeżdżamy na miejsce, oceniamy powierzchnię i dobieramy optymalną metodę czyszczenia.</p>
      </div>
      <div class="step" data-aos="fade-up" data-aos-delay="200">
        <div class="step__num">03</div>
        <div class="step__connector"></div>
        <div class="step__icon"><i class="fa-solid fa-spray-can-sparkles"></i></div>
        <h3 class="step__title">Realizacja</h3>
        <p class="step__desc">Pracujemy profesjonalnym sprzętem ciśnieniowym. Dokładnie, szybko i bez bałaganu na posesji.</p>
      </div>
      <div class="step" data-aos="fade-up" data-aos-delay="300">
        <div class="step__num">04</div>
        <div class="step__connector step__connector--last"></div>
        <div class="step__icon"><i class="fa-solid fa-circle-check"></i></div>
        <h3 class="step__title">Efekt i gwarancja</h3>
        <p class="step__desc">Odbierasz gotową pracę. Gwarantujemy satysfakcję — jeśli nie jesteś zadowolony, wracamy.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append stepper styles to `style.css`**

```css
/* ===== HOW WE WORK ===== */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  position: relative;
}
.step__num {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 8px;
}
.step__connector {
  position: absolute;
  top: 54px;
  left: 50%;
  right: -50%;
  height: 2px;
  background: linear-gradient(90deg, var(--green), var(--blue));
  z-index: 0;
}
.step__connector--last { display: none; }
.step__icon {
  width: 68px; height: 68px;
  background: var(--navy);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(15,30,56,0.3);
}
.step__icon i { font-size: 26px; color: var(--green); }
.step__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: var(--navy);
  margin-bottom: 10px;
}
.step__desc {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .steps { grid-template-columns: repeat(2, 1fr); gap: 40px 0; }
  .step__connector { display: none; }
}
@media (max-width: 560px) {
  .steps { grid-template-columns: 1fr; gap: 36px; }
}
```

- [ ] **Step 3: Verify in browser**

Expected: 4 steps in a row with connecting gradient line, icons in navy circles, responsive 2-column on tablet.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: how we work 4-step process section"
```

---

## Task 8: Testimonials

**Files:**
- Modify: `index.html` — fill `<section class="testimonials">`
- Modify: `style.css` — append testimonials styles

- [ ] **Step 1: Replace `<section class="testimonials section" id="opinie"></section>` with:**

```html
<section class="testimonials section" id="opinie">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Opinie</span>
      <h2 class="section-title">Co mówią klienci</h2>
      <p class="section-subtitle">Ponad 500 zrealizowanych zleceń — sprawdź co o nas mówią.</p>
    </div>
    <div class="testimonials__grid">
      <div class="testimonial-card" data-aos="fade-up" data-aos-delay="0">
        <div class="testimonial-card__stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-card__text">&bdquo;Kostka po czyszczeniu wygląda jak nowa! Przyjechali punktualnie, pracowali sprawnie i posprzątali po sobie. Gorąco polecam.&rdquo;</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">A.K.</div>
          <div>
            <strong>Anna K.</strong>
            <span>Warszawa</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
        <div class="testimonial-card__stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-card__text">&bdquo;Zlecałem mycie elewacji i podjazdu — efekt przeszedł moje oczekiwania. Cena uczciwa, realizacja szybka. Zdecydowanie wrócę.&rdquo;</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">M.W.</div>
          <div>
            <strong>Marek W.</strong>
            <span>Kraków</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
        <div class="testimonial-card__stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-card__text">&bdquo;Dach był czarny od mchu, teraz wygląda jak świeżo położony. Profesjonalne podejście od wyceny do odbioru. Polecam z czystym sumieniem.&rdquo;</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">K.N.</div>
          <div>
            <strong>Katarzyna N.</strong>
            <span>Wrocław</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append testimonials styles to `style.css`**

```css
/* ===== TESTIMONIALS ===== */
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 32px 28px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.testimonial-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
.testimonial-card__stars { font-size: 18px; letter-spacing: 2px; }
.testimonial-card__text {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}
.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}
.testimonial-card__avatar {
  width: 44px; height: 44px;
  background: linear-gradient(135deg, var(--green), var(--blue));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.testimonial-card__author strong {
  display: block;
  font-size: 15px;
  color: var(--navy);
}
.testimonial-card__author span {
  font-size: 13px;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .testimonials__grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
}
```

- [ ] **Step 3: Verify in browser**

Expected: 3 equal-width cards with stars, italic quote, avatar with green-blue gradient.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: testimonials section with 3 review cards"
```

---

## Task 9: FAQ Accordion

**Files:**
- Modify: `index.html` — fill `<section class="faq">`
- Modify: `style.css` — append FAQ styles
- Modify: `script.js` — append FAQ accordion JS

- [ ] **Step 1: Replace `<section class="faq section" id="faq"></section>` with:**

```html
<section class="faq section section--alt" id="faq">
  <div class="container">
    <div class="section-header">
      <span class="section-label">FAQ</span>
      <h2 class="section-title">Często zadawane pytania</h2>
      <p class="section-subtitle">Nie znajdziesz odpowiedzi? Zadzwoń — chętnie pomożemy.</p>
    </div>
    <div class="faq__list" id="faqList">
      <div class="faq-item">
        <button class="faq-item__q">Ile kosztuje czyszczenie kostki brukowej? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Cena zależy od powierzchni, stopnia zabrudzenia i rodzaju kostki. Standardowe czyszczenie podjazdu (ok. 50 m²) to koszt od 300 do 600 zł. Bezpłatna wycena w 24h — bez wychodzenia z domu.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-item__q">Jak długo trwa realizacja? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Standardowy podjazd lub taras (do 80 m²) myyjemy w ciągu jednego dnia. Większe powierzchnie lub kompleksowe zlecenia (elewacja + kostka + dach) realizujemy w 2-3 dni.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-item__q">Czy impregnacja jest konieczna po czyszczeniu? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Impregnacja nie jest obowiązkowa, ale zdecydowanie przedłuża efekt czyszczenia. Zabezpiecza kostkę przed ponownym zabrudzeniem, mchem i wodą. Zalecamy ją szczególnie na świeżo czyszczonej nawierzchni.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-item__q">Jakim sprzętem pracujecie? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Używamy profesjonalnych myjek ciśnieniowych klasy przemysłowej (Kärcher, Nilfisk) o ciśnieniu do 250 barów. Dobieramy dysznię i ciśnienie do rodzaju powierzchni — żeby wyczyścić bez uszkodzeń.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-item__q">Czy pracujecie podczas deszczu lub mrozu? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Lekki deszcz nie przeszkadza w czyszczeniu. Nie pracujemy przy temperaturach poniżej 5°C, ponieważ środki impregnujące wymagają minimalnej temperatury do prawidłowego wniknięcia. Sezon: kwiecień–październik.</p></div>
      </div>
      <div class="faq-item">
        <button class="faq-item__q">Na jaki obszar Polski dojeżdżacie? <i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-item__a"><p>Działamy na terenie całej Polski. Koszt dojazdu poza obszar 50 km od siedziby ustalamy indywidualnie. Skontaktuj się z nami — na pewno coś wspólnie ustalimy.</p></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append FAQ styles to `style.css`**

```css
/* ===== FAQ ===== */
.faq__list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.faq-item {
  background: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: border-color 0.2s;
}
.faq-item.open { border-color: var(--green); }
.faq-item__q {
  width: 100%;
  background: none;
  border: none;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: var(--navy);
  cursor: pointer;
  transition: color 0.2s;
}
.faq-item.open .faq-item__q { color: var(--green); }
.faq-item__q i {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: var(--text-secondary);
  font-size: 14px;
}
.faq-item.open .faq-item__q i { transform: rotate(180deg); color: var(--green); }
.faq-item__a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.faq-item.open .faq-item__a { max-height: 200px; }
.faq-item__a p {
  padding: 0 24px 20px;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  border-left: 3px solid var(--green);
  margin-left: 24px;
  padding-left: 16px;
}
```

- [ ] **Step 3: Append FAQ accordion JS to `script.js`**

```js
// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
```

- [ ] **Step 4: Verify in browser**

- Click any FAQ question — it opens smoothly, others close
- Open item has green left border on answer, green question text, rotated chevron

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: FAQ accordion with animated open/close"
```

---

## Task 10: Contact Section

**Files:**
- Modify: `index.html` — fill `<section class="contact">`
- Modify: `style.css` — append contact styles
- Modify: `script.js` — append form submission JS

- [ ] **Step 1: Replace `<section class="contact section" id="kontakt"></section>` with:**

```html
<section class="contact section" id="kontakt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Kontakt</span>
      <h2 class="section-title">Skontaktuj się z nami</h2>
      <p class="section-subtitle">Zadzwoń lub napisz — bezpłatna wycena w 24 godziny.</p>
    </div>
    <div class="contact__grid">
      <div class="contact__form-wrap" data-aos="fade-right">
        <form class="contact__form" id="contactForm" novalidate>
          <div class="form-group">
            <label for="name">Imię i nazwisko</label>
            <input type="text" id="name" name="name" placeholder="Jan Kowalski" required>
          </div>
          <div class="form-group">
            <label for="phone">Numer telefonu</label>
            <input type="tel" id="phone" name="phone" placeholder="+48 000 000 000" required>
          </div>
          <div class="form-group">
            <label for="message">Wiadomość</label>
            <textarea id="message" name="message" rows="5" placeholder="Opisz co chcesz wyczyścić, podaj orientacyjną powierzchnię…" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary contact__submit">
            <i class="fa-solid fa-paper-plane"></i> Wyślij zapytanie
          </button>
          <p class="contact__success" id="formSuccess">✅ Dziękujemy! Odezwiemy się w ciągu 24h.</p>
        </form>
      </div>
      <div class="contact__info" data-aos="fade-left">
        <div class="contact__info-card">
          <div class="contact__info-item">
            <div class="contact__info-icon"><i class="fa-solid fa-phone"></i></div>
            <div>
              <span class="contact__info-label">Telefon</span>
              <a href="tel:+48000000000" class="contact__info-value">+48 000 000 000</a>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon"><i class="fa-solid fa-envelope"></i></div>
            <div>
              <span class="contact__info-label">E-mail</span>
              <a href="mailto:kontakt@bruker.pl" class="contact__info-value">kontakt@bruker.pl</a>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon"><i class="fa-solid fa-location-dot"></i></div>
            <div>
              <span class="contact__info-label">Obszar działania</span>
              <span class="contact__info-value">Cała Polska</span>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon"><i class="fa-solid fa-clock"></i></div>
            <div>
              <span class="contact__info-label">Godziny kontaktu</span>
              <span class="contact__info-value">Pon–Sob, 7:00–19:00</span>
            </div>
          </div>
        </div>
        <div class="contact__map-placeholder placeholder-img" style="height:200px; margin-top:20px;">
          <i class="fa-solid fa-map-location-dot" style="font-size:36px; color:var(--blue)"></i>
          <span>Mapa — wkrótce</span>
          <small>Google Maps embed</small>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append contact styles to `style.css`**

```css
/* ===== CONTACT ===== */
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.contact__form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 40px 36px;
  box-shadow: var(--shadow-sm);
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}
.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy);
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: var(--text-primary);
  background: var(--bg-page);
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(132,196,65,0.15);
}
.contact__submit { width: 100%; justify-content: center; margin-top: 8px; padding: 15px; }
.contact__success {
  display: none;
  margin-top: 14px;
  text-align: center;
  color: #4a7420;
  font-weight: 600;
  font-size: 15px;
}
.contact__success.visible { display: block; }

.contact__info-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.contact__info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.contact__info-icon {
  width: 44px; height: 44px;
  background: rgba(132,196,65,0.1);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.contact__info-icon i { color: var(--green); font-size: 18px; }
.contact__info-label {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-secondary);
  margin-bottom: 3px;
}
.contact__info-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--navy);
  transition: color 0.2s;
}
a.contact__info-value:hover { color: var(--blue); }

@media (max-width: 900px) {
  .contact__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Append form JS to `script.js`**

```js
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
```

- [ ] **Step 4: Verify in browser**

- Form inputs focus with green outline
- Submit shows success message, resets form
- Info card shows phone, email, area, hours

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: contact section with form and info card"
```

---

## Task 11: Footer

**Files:**
- Modify: `index.html` — fill `<footer class="footer">`
- Modify: `style.css` — append footer styles

- [ ] **Step 1: Replace `<footer class="footer"></footer>` with:**

```html
<footer class="footer">
  <div class="container footer__top">
    <div class="footer__brand">
      <img src="assets/logo.jpg" alt="BRUKER" class="footer__logo">
      <p class="footer__tagline">„BRUKER myje, sąsiad z zazdrości gnije"</p>
      <div class="footer__socials">
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </div>
    <div class="footer__col">
      <h4>Usługi</h4>
      <ul>
        <li><a href="#uslugi">Czyszczenie kostki</a></li>
        <li><a href="#uslugi">Impregnacja</a></li>
        <li><a href="#uslugi">Mycie elewacji</a></li>
        <li><a href="#uslugi">Mycie dachów</a></li>
        <li><a href="#uslugi">Panele i ogrodzenia</a></li>
      </ul>
    </div>
    <div class="footer__col">
      <h4>Nawigacja</h4>
      <ul>
        <li><a href="#hero">Strona główna</a></li>
        <li><a href="#realizacje">Realizacje</a></li>
        <li><a href="#jak-dzialamy">Jak działamy</a></li>
        <li><a href="#opinie">Opinie</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
    <div class="footer__col">
      <h4>Kontakt</h4>
      <ul>
        <li><i class="fa-solid fa-phone"></i> <a href="tel:+48000000000">+48 000 000 000</a></li>
        <li><i class="fa-solid fa-envelope"></i> <a href="mailto:kontakt@bruker.pl">kontakt@bruker.pl</a></li>
        <li><i class="fa-solid fa-location-dot"></i> Cała Polska</li>
        <li><i class="fa-solid fa-clock"></i> Pon–Sob 7:00–19:00</li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <span>© 2026 BRUKER. Wszelkie prawa zastrzeżone.</span>
      <span>Profesjonalne czyszczenie kostki brukowej — Polska</span>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Append footer styles to `style.css`**

```css
/* ===== FOOTER ===== */
.footer {
  background: var(--navy);
  color: rgba(255,255,255,0.75);
}
.footer__top {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 48px;
  padding-top: 64px;
  padding-bottom: 48px;
}
.footer__logo {
  height: 64px;
  width: auto;
  object-fit: contain;
  margin-bottom: 16px;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}
.footer__tagline {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
  color: rgba(255,255,255,0.55);
}
.footer__socials { display: flex; gap: 10px; }
.footer__socials a {
  width: 38px; height: 38px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: rgba(255,255,255,0.7);
  transition: background 0.2s, color 0.2s;
}
.footer__socials a:hover { background: var(--green); color: #fff; border-color: var(--green); }
.footer__col h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #fff;
  margin-bottom: 20px;
}
.footer__col ul { display: flex; flex-direction: column; gap: 10px; }
.footer__col li {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer__col li i { color: var(--green); font-size: 13px; width: 14px; }
.footer__col a { color: rgba(255,255,255,0.7); transition: color 0.2s; }
.footer__col a:hover { color: var(--green); }
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 0;
}
.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: rgba(255,255,255,0.4);
}

@media (max-width: 900px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .footer__top { grid-template-columns: 1fr; }
  .footer__bottom-inner { flex-direction: column; text-align: center; }
}
```

- [ ] **Step 3: Verify in browser**

Expected: dark navy footer with logo (inverted to white), 4 columns, social icons, green hover on links.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: footer with links, socials, contact info"
```

---

## Task 12: GSAP Hero Animations

**Files:**
- Modify: `script.js` — append GSAP animation code

- [ ] **Step 1: Append GSAP animations to `script.js`**

```js
// ===== GSAP ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

// Hero entrance timeline
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.hero__label',   { y: 20, opacity: 0, duration: 0.6 })
  .from('.hero__title',   { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
  .from('.hero__tagline', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero__desc',    { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero__cta',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
  .from('.hero__ba',      { x: 40, opacity: 0, duration: 0.8 }, '-=0.6')
  .from('.hero__stat',    { y: 10, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4');

// Navbar slide down
gsap.from('.navbar', { y: -80, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });

// CTA buttons pulse on hover (via GSAP)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.03, duration: 0.2 }));
  btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2 }));
});
```

- [ ] **Step 2: Verify in browser**

Expected: on page load, hero elements animate in sequentially (label → title → tagline → desc → CTAs → BA cards → stats). Navbar slides down.

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: GSAP hero entrance animations and button hover effects"
```

---

## Task 13: AOS Scroll Animations

**Files:**
- Modify: `script.js` — add AOS.init()

- [ ] **Step 1: Append AOS init to `script.js`**

```js
// ===== AOS INIT =====
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});
```

The `data-aos` attributes are already added to elements in Tasks 5–9 (`data-aos="fade-up"`, `data-aos-delay="..."`). AOS.init() activates them all.

- [ ] **Step 2: Verify in browser**

Scroll down through the page — service cards, gallery items, stepper steps, testimonial cards, and FAQ should fade up as they enter the viewport.

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: AOS scroll reveal animations"
```

---

## Task 14: Mobile Responsiveness — Final Pass

**Files:**
- Modify: `style.css` — append final responsive rules

- [ ] **Step 1: Append final responsive rules to `style.css`**

```css
/* ===== RESPONSIVE — FINAL PASS ===== */
@media (max-width: 768px) {
  :root { --section-pad: 64px 0; }

  .section-title { font-size: clamp(24px, 6vw, 32px); }
  .section-subtitle { font-size: 15px; }

  .hero { padding: 40px 0 0; min-height: auto; }
  .hero__title { font-size: clamp(30px, 8vw, 44px); }
  .hero__desc { font-size: 15px; }
  .btn { padding: 12px 22px; font-size: 14px; }

  .step__connector { display: none; }
  .ba-slider { height: 240px; }

  .contact__form-wrap { padding: 28px 20px; }

  .footer__top { gap: 32px; }
}

@media (max-width: 480px) {
  .container { padding: 0 16px; }
  .hero__cta { flex-direction: column; }
  .hero__cta .btn { width: 100%; justify-content: center; }
  .hero__ba { grid-template-columns: 1fr; }
  .hero__stat { padding: 10px 16px; }
  .navbar__logo img { height: 40px; }
}
```

- [ ] **Step 2: Test on mobile sizes**

Open DevTools (F12) → Toggle device toolbar → Test at:
- 375px (iPhone SE)
- 768px (iPad)
- 1280px (desktop)

Verify: no horizontal scroll, readable text, buttons stack on mobile, navbar hamburger works.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: final responsive pass for mobile and tablet"
```

---

## Task 15: Final Polish + Full Commit

**Files:**
- Modify: `index.html` — add smooth scroll offset fix
- Modify: `style.css` — add scroll offset for fixed navbar

- [ ] **Step 1: Add scroll offset for fixed navbar to `style.css`**

```css
/* Offset anchor scroll for fixed navbar */
[id] { scroll-margin-top: 80px; }
```

- [ ] **Step 2: Verify complete page in browser**

Run through checklist:
- [ ] Logo loads in navbar and footer
- [ ] All nav links scroll to correct sections
- [ ] Hero CTA buttons scroll/call correctly
- [ ] Comparison slider draggable
- [ ] FAQ accordion opens/closes
- [ ] Contact form submits with success message
- [ ] All animations fire on scroll
- [ ] No console errors (F12)
- [ ] Mobile: hamburger menu works, no horizontal scroll

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete BRUKER website — all sections, animations, responsive"
```

---

## Self-Review

**Spec coverage:**
- ✅ Navbar with sticky + mobile hamburger
- ✅ Hero with tagline, 2 CTAs, BA placeholders, stats bar
- ✅ 5 service cards with hover
- ✅ BA comparison slider (custom drag) + 6-card gallery
- ✅ 4-step how-we-work stepper
- ✅ 3 testimonial cards
- ✅ FAQ accordion (6 questions)
- ✅ Contact form + info card + map placeholder
- ✅ Footer with links, socials, contact
- ✅ GSAP hero animations
- ✅ AOS scroll reveals
- ✅ Responsive (480/768/900/1200px)
- ✅ Logo from assets/logo.jpg
- ✅ Colors from logo (#0f1e38 / #84c441 / #3a9fd8)
- ✅ Tagline on page
- ✅ Phone +48 000 000 000 on page

**No placeholders, TODOs, or TBDs present in plan.**

**Type consistency:** All class names, IDs, and JS selectors are consistent across tasks (e.g., `#baSlider`/`#baHandle` used in both HTML Task 6 and JS Task 6; `#faqList` items use `.faq-item` consistently; `#contactForm`/`#formSuccess` consistent across HTML/JS).
