/**
 * Komorebi Tostaduría de Café — Controlador de Experiencia Interactiva
 * Santiago, Chile
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Año dinámico en el pie de página ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --- Elevación y desenfoque del encabezado al hacer scroll ---
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Menú desplegable móvil (Drawer) ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileToggle.classList.toggle('mobile-toggle--active');
      mobileNav.classList.toggle('mobile-drawer--open', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });

    // Cerrar el drawer al presionar cualquier enlace
    const drawerLinks = mobileNav.querySelectorAll('.mobile-drawer__link, .action-btn');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('mobile-toggle--active');
        mobileNav.classList.remove('mobile-drawer--open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // --- Pestañas de filtrado de la carta ---
  const filterButtons = document.querySelectorAll('.category-tabs__button');
  const menuCards = document.querySelectorAll('.menu-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetCategory = button.getAttribute('data-filter');

      // Actualizar estado activo del botón
      filterButtons.forEach(btn => {
        btn.classList.remove('category-tabs__button--active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('category-tabs__button--active');
      button.setAttribute('aria-selected', 'true');

      // Filtrar tarjetas
      menuCards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || itemCategory === targetCategory) {
          card.classList.remove('menu-card--hidden');
        } else {
          card.classList.add('menu-card--hidden');
        }
      });
    });
  });

  // --- Sistema de notificaciones Toast (Micro-interacción) ---
  const toastAlert = document.getElementById('toast-alert');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  const showToast = (message) => {
    if (!toastAlert) return;
    if (toastMessage) toastMessage.textContent = message;

    toastAlert.classList.add('toast-alert--active');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastAlert.classList.remove('toast-alert--active');
    }, 3200);
  };

  // Botones de añadir a la bolsa
  const cartButtons = document.querySelectorAll('.js-cart-trigger');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-item') || 'Café en Grano';
      showToast(`Añadido 1× ${itemName} (250g) a tu pedido.`);
    });
  });

  // --- Validación del formulario de Newsletter con feedback en español ---
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailValue = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        newsletterFeedback.textContent = 'Por favor, ingresa una dirección de correo.';
        newsletterFeedback.className = 'newsletter-form__feedback newsletter-form__feedback--error';
        newsletterEmail.focus();
        return;
      }

      if (!emailRegex.test(emailValue)) {
        newsletterFeedback.textContent = 'Ingresa un correo válido (ej. tu.nombre@correo.cl).';
        newsletterFeedback.className = 'newsletter-form__feedback newsletter-form__feedback--error';
        newsletterEmail.focus();
        return;
      }

      // Éxito
      newsletterFeedback.textContent = '¡Bienvenido a El Extracto Dominical! Tu primera guía de preparación va en camino.';
      newsletterFeedback.className = 'newsletter-form__feedback newsletter-form__feedback--success';
      newsletterEmail.value = '';
      showToast('Gracias por sumarte a nuestra comunidad.');
    });
  }
});
