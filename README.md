# Komorebi Tostaduría de Café — Atelier en Santiago, Chile

Sitio web diseñado bajo los principios de diseño UI/UX contemporáneo, minimalismo cálido y arquitectura de código limpio con metodología CSS BEM (Block Element Modifier). Contextualizado para el circuito de café de especialidad de **Barrio Italia, Providencia, Santiago de Chile**.

---

## ☕ Concepto de Diseño & Estética

- **Estilo**: Minimalismo Cálido / *Japandi* adaptado a Santiago. Combina la sobriedad arquitectónica japonesa con maderas nativas chilenas (roble reciclado), greda y cerámica de gres local.
- **Paleta de Color**:
  - `Base / Fondo de Lienzo`: `#FAF8F5` (Tono pergamino / lino suave)
  - `Superficies & Tarjetas`: `#FFFFFF` y `#F2ECE4` (Contrastes limpios)
  - `Texto Principal`: `#1C1917` (Tono carbón tostado profundo)
  - `Acento Ámbar`: `#B4693D` (Tono caramelo y extracción espresso)
  - `Acento Botánico`: `#6B7A6A` / `#EEF2EE` (Verde salvia suave)
  - `Contraste Nocturno`: `#141210` (Barra superior y pie de página)
- **Tipografía**:
  - Títulos: `Playfair Display` (Serif editorial refinado)
  - Interfaz y cuerpo: `Plus Jakarta Sans` (Sans-serif geométrica y legible)
  - Escala fluida implementada con `clamp()` para ajuste natural en cualquier pantalla.

---

## 🇨🇱 Contextualización a Santiago, Chile

1. **Ubicación & Entorno**: Emplazado en el polo gastronómico y de diseño de **Av. Italia 1380, Barrio Italia, Providencia** (cercano a Metro Santa Isabel).
2. **Propuesta de Café & Tueste**: Tueste semanal en Santiago, alianzas de comercio directo con fincas latinoamericanas y africanas, y calibración de agua mineralizada a partir de agua cordillerana purificada por ósmosis inversa.
3. **Carta & Toques Locales**:
   - Precios realistas en Pesos Chilenos (CLP): `$3.200` a `$6.800` en barra; `$15.900` a `$18.500` en café en grano (250g).
   - Inclusión de ingredientes autóctonos: flor de sal de mar de Cáhuil (Pichilemu), avellana chilena tostada, bayas de murta del sur de Chile y cítricos del Valle del Elqui.
   - Opciones con leche vegetal de avena chilena sin recargo.

---

## 🧱 Estructura Semántica HTML5 & BEM

Construido utilizando etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<address>`, `<aside>`, `<footer>`) y clases puras en BEM:

- `site-header` (`__container`, `__actions`, `--scrolled`)
- `announcement-bar` (`__container`, `__badge`, `__text`, `__link`)
- `brand-logo` (`__symbol`, `__wrapper`, `__title`, `__subtitle`, `--light`)
- `navigation-bar` (`__list`, `__item`, `__link`)
- `status-indicator` (`__dot`, `__dot--active`, `__text`)
- `action-btn` (`--primary`, `--secondary`, `--outline`, `--compact`, `--full`)
- `hero-section` & `hero-card` (`__figure`, `__image`, `__caption`, `__tag`, `__detail`)
- `floating-badge` (`--top-right`, `--bottom-left`)
- `pillar-card` (`__icon`, `__number`, `__title`, `__description`)
- `category-tabs` (`__button`, `--active`) & `menu-card` (`__header`, `__title-group`, `__name`, `__price`, `__description`, `__tags`, `--hidden`)
- `bean-card` (`__media`, `__image`, `__process`, `__body`, `__origin`, `__title`, `__tasting-notes`, `__footer`, `__price`, `__weight`)
- `space-section` & `gallery-tile` (`--main`, `--secondary`, `--tertiary`)
- `visit-card` & `newsletter-box` (`__title`, `__text`, `__input`, `__button`, `__feedback`)
- `site-footer` (`__main`, `__brand`, `__nav`, `__bottom`, `__legal`)
- `toast-alert` (`__icon`, `__text`, `--active`)

---

## ⚡ Interacciones (`app.js`)

- Filtro interactivo de la carta por categorías (Toda la Carta, Espresso & Leche, Filtrados V60 & Batch, Cold Brew & Especiales, Pastelería).
- Alerta flotante tipo Toast para la selección de bolsas de café con auto-cierre.
- Menú móvil desplegable con soporte de accesibilidad ARIA (`aria-expanded`, `aria-hidden`).
- Encabezado inteligente que activa desenfoque y sombra sutil al hacer scroll.
- Validación reactiva del formulario de suscripción a *El Extracto Dominical*.
