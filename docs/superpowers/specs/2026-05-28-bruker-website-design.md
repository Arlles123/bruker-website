# BRUKER — Strona Internetowa · Design Spec

**Data:** 2026-05-28  
**Projekt:** Strona firmowa dla BRUKER — profesjonalne czyszczenie kostki brukowej  
**Status:** Zatwierdzony przez klienta

---

## 1. Cel i kontekst

Jednostronicowa strona wizytówkowa dla firmy BRUKER (Polska), świadczącej usługi:
- czyszczenia kostki brukowej
- impregnacji kostki
- mycia elewacji
- mycia dachów
- czyszczenia paneli / ogrodzeń

**Cel biznesowy:** Pozyskiwanie klientów — formularze wyceny i telefon jako główne CTA.  
**Tagline firmy:** „BRUKER myje, sąsiad z zazdrości gnije"

---

## 2. Stos technologiczny

**Architektura:** Trzy pliki (HTML + CSS + JS) + folder `assets/`. Zero build toolingu. Gotowe do hostowania na dowolnym serwerze statycznym.

```
bruker-website/
├── index.html
├── style.css
├── script.js
└── assets/
    └── logo.jpg   ← e4a7a2e8-bc07-4446-baab-8975f71a1505.jpg
```

**Biblioteki (CDN):**

| Biblioteka | Wersja | Zastosowanie |
|---|---|---|
| GSAP + ScrollTrigger | 3.x | Animacje wejścia, parallax |
| Swiper.js | 11.x | Slider BEFORE/AFTER |
| AOS | 2.x | Fade-in sekcji przy scrollowaniu |
| Font Awesome | 6.x | Ikony usług i footer |
| Google Fonts | — | Inter (body) + Montserrat Black (headings) |

---

## 3. Paleta kolorów

Kolory wyciągnięte bezpośrednio z logo firmy.

```
--bg-page:       #f4f7fb   /* jasnoszare tło strony */
--bg-card:       #ffffff   /* białe karty i sekcje */
--navy:          #0f1e38   /* granat — główny kolor marki */
--green:         #84c441   /* limonkowa zieleń — akcent (kamizelka z logo) */
--blue:          #3a9fd8   /* błękit — akcent (obramowanie z logo) */
--text-primary:  #0f1e38
--text-secondary:#6b7280
--border:        #e5eaf2
```

**Gradient CTA:** `linear-gradient(90deg, #84c441, #3a9fd8)` — używany na hover przycisków

---

## 4. Typografia

- **Headings:** Montserrat Black (900), all-caps dla tytułów sekcji
- **Body:** Inter (400/600), rozmiar 16px base
- **Navbar/etykiety:** Inter 700, letter-spacing 1-2px

---

## 5. Struktura sekcji (kolejność)

### 5.1 Navbar
- Logo (`assets/logo.jpg`) po lewej, wysokość 48px
- Linki: Usługi · Realizacje · Jak działamy · Opinie · Kontakt
- Przycisk CTA: „Darmowa wycena" (zielony, zaokrąglony)
- **Sticky** — po scrollu: białe tło + cień `box-shadow: 0 2px 20px rgba(0,0,0,0.08)`
- Na mobile: hamburger menu z animowanym overlay

### 5.2 Hero
- Tło: `#f4f7fb`, wyśrodkowany układ
- Górna etykieta badge: „PROFESJONALNE CZYSZCZENIE KOSTKI BRUKOWEJ" (zielona obwódka)
- Nagłówek H1: „Przywróć blask swojej posesji"
- Tagline (cudzysłów, italic): „BRUKER myje, sąsiad z zazdrości gnije"
- **CTA 1:** „Darmowa wycena" — granat (#0f1e38), link do #kontakt
- **CTA 2:** „📞 Zadzwoń teraz" — błękit (#3a9fd8), href: `tel:+48000000000`
- **Pasek statystyk:** 500+ realizacji · ⭐ 5.0 · 24h wycena
- **Placeholder BEFORE/AFTER:** dwa kolorowe bloki (zielony/niebieski) z ikonami i napisem — gotowe na zdjęcia

### 5.3 Usługi
- Nagłówek sekcji + podtytuł
- Siatka kart: 3 kolumny desktop / 2 tablet / 1 mobile
- 5 kart: każda z ikoną FA, tytułem, krótkim opisem (2 zdania)
- Hover: zielone obramowanie, uniesienie `translateY(-4px)`, cień

| Usługa | Ikona FA |
|---|---|
| Czyszczenie kostki brukowej | `fa-broom` |
| Impregnacja kostki | `fa-shield-alt` |
| Mycie elewacji | `fa-building` |
| Mycie dachów | `fa-house-chimney` |
| Czyszczenie paneli / ogrodzeń | `fa-border-all` |

### 5.4 BEFORE / AFTER
- **Główny slider:** Swiper z pionowym suwakiem przeciągania — lewa połowa „PRZED", prawa „PO". Placeholder: zielony blok vs niebieski blok.
- **Galeria 2×3:** 6 kart z podwójnym placeholderem i etykietą usługi
- AOS fade-in przy scrollowaniu

### 5.5 Jak działamy
- Poziomy stepper (4 kroki), na mobile — pionowy
- Kroki: numerowane kółka w kolorze granatu

1. **Kontakt i wycena** — formularz lub telefon, odpowiedź w 24h
2. **Oględziny** — przyjeżdżamy, oceniamy powierzchnię, finalna wycena
3. **Realizacja** — profesjonalny sprzęt, dokładne mycie ciśnieniowe
4. **Efekt i gwarancja** — odbiór prac, gwarancja satysfakcji

### 5.6 Opinie klientów
- 3 białe karty z cieniem
- Każda: 5 gwiazdek (⭐⭐⭐⭐⭐), cytat, imię i nazwisko (inicjały), miasto
- Przykładowy content (placeholder do zamiany przez klienta)

### 5.7 FAQ
- Accordion — 6 pytań, animowane otwieranie/zamykanie
- Aktywny item: zielona lewa krawędź + granatowy tekst

Pytania:
1. Ile kosztuje czyszczenie kostki?
2. Jak długo trwa realizacja?
3. Czy impregnacja jest konieczna po czyszczeniu?
4. Jakim sprzętem pracujecie?
5. Czy pracujecie podczas deszczu lub mrozu?
6. Na jaki obszar Polski dojeżdżacie?

### 5.8 Kontakt
- Dwie kolumny: formularz (lewo) + dane (prawo)
- **Formularz:** Imię, Telefon, Wiadomość, przycisk „Wyślij zapytanie" (granat)
- **Dane:** Telefon `+48 000 000 000`, E-mail placeholder, Polska
- Placeholder mapy (szary blok z ikoną pin, gotowy na Google Maps embed)

### 5.9 Footer
- Granatowe tło (`#0f1e38`), biały tekst
- Logo + tagline
- 3 kolumny: Usługi · Szybkie linki · Kontakt
- Dolny pasek: prawa autorskie + „Designed with ♥"
- Ikony social media (placeholder — linki do uzupełnienia)

---

## 6. Animacje i interakcje

- **Scroll reveal:** AOS `fade-up` + `fade-left/right` dla naprzemiennych sekcji, delay 100ms
- **Navbar:** GSAP animacja wejścia przy ładowaniu (slide-down)
- **Hero:** GSAP timeline — badge → H1 → tagline → CTA → statystyki, każdy element z delay
- **Karty usług:** CSS transition hover (transform + box-shadow)
- **FAQ accordion:** CSS max-height transition + rotate ikony strzałki
- **CTA buttons:** scale(1.03) + box-shadow glow na hover
- **Smooth scroll:** natywny `scroll-behavior: smooth`

---

## 7. Responsywność

- **Breakpointy:** 1200px (desktop) / 768px (tablet) / 480px (mobile)
- Navbar: hamburger poniżej 768px
- Siatka usług: 3→2→1 kolumna
- Stepper: poziomy→pionowy
- Hero CTA: obok siebie→stack na mobile

---

## 8. Dane kontaktowe (placeholder)

- Telefon: `+48 000 000 000`
- Email: `kontakt@bruker.pl` (placeholder)
- Obszar działania: Polska

---

## 9. Assets

- `assets/logo.jpg` — logo firmy (plik: `e4a7a2e8-bc07-4446-baab-8975f71a1505.jpg`)
- Wszystkie zdjęcia: placeholdery — kolorowe bloki z opisem i ikoną
- Brak video na tym etapie
