// =====================================================================
// HANNAH — THIS IS YOUR FILE. Edit anything between the quotation marks "".
// =====================================================================
// Rules:
//   1. Only change text that is INSIDE quote marks " "
//   2. Don't delete any quote marks, commas, or curly brackets { } [ ]
//   3. To add a photo: put the image file in the "images" folder,
//      then type its exact filename below (e.g. "images/blanket.jpg")
//
// If something looks broken after you save, undo your last change —
// it's almost always a missing quote mark or comma!
// =====================================================================


// Site configuration and interactive behaviour for Hannah Nicole Designs
const SITE = {
  etsyUrl: 'https://hannahnicoledesigns8.etsy.com',
  kofiUrl: 'https://ko-fi.com/hannahnicoledesigns/shop',
  // Direct links to each pattern's own listing, used on that pattern's detail page
  // Stella Tote launch offer: half price + free pattern. Hides itself automatically after this date.
  stellaOfferEnds: '2026-11-12',   // last day of the offer (year-month-day)
  patterns: {
    stella: {
      etsy: 'https://hannahnicoledesigns8.etsy.com/listing/4611314276',
    },
    inigo: {
      etsy: 'https://hannahnicoledesigns8.etsy.com/listing/4551719881',
      kofi: 'https://ko-fi.com/s/ef71679a74',
    },
    lycia: {
      etsy: 'https://hannahnicoledesigns8.etsy.com/listing/4585989841',
      kofi: 'https://ko-fi.com/s/f86e418128',
    },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.etsy-link').forEach((el) => { el.href = SITE.etsyUrl; });
  document.querySelectorAll('.kofi-link').forEach((el) => { el.href = SITE.kofiUrl; });
  document.querySelectorAll('.product-etsy-link').forEach((el) => { el.href = SITE.patterns[el.dataset.pattern].etsy; });
  document.querySelectorAll('.product-kofi-link').forEach((el) => { el.href = SITE.patterns[el.dataset.pattern].kofi; });

  const body = document.body;

  // Launch offer: after the last day (UK time), hide offer flags and show the full price
  const offerEnd = new Date(`${SITE.stellaOfferEnds}T23:59:59Z`);
  if (new Date() > offerEnd) body.classList.add('promo-over');
  const endLabel = new Date(`${SITE.stellaOfferEnds}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', timeZone: 'Europe/London' });
  document.querySelectorAll('.promo-end-text').forEach((el) => { el.textContent = endLabel; });
  const headerBar = document.getElementById('header-bar');

  function updateHeaderHeight() {
    if (!headerBar) return;
    document.documentElement.style.setProperty('--header-height', `${headerBar.offsetHeight}px`);
  }

  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);
  if (typeof ResizeObserver !== 'undefined' && headerBar) {
    const headerResizeObserver = new ResizeObserver(updateHeaderHeight);
    headerResizeObserver.observe(headerBar);
  }

  const detailViews = document.querySelectorAll('.detail-view');

  function goHome() {
    body.classList.remove('view-detail');
    detailViews.forEach((v) => v.classList.remove('active'));
    window.scrollTo(0, 0);
  }
  function goDetail(pattern) {
    detailViews.forEach((v) => v.classList.toggle('active', v.id === `detail-${pattern}`));
    body.classList.add('view-detail');
    window.scrollTo(0, 0);
    // Carousels can't measure their width while hidden, so set them up once visible
    const view = document.getElementById(`detail-${pattern}`);
    if (view && view._carousel) view._carousel.reset();
  }

  document.getElementById('nav-home').addEventListener('click', (e) => { e.preventDefault(); goHome(); });
  document.querySelectorAll('.back-link').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); goHome(); }));
  document.querySelectorAll('.view-pattern-link').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); goDetail(a.dataset.pattern); }));

  document.getElementById('shop-centered-link').addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.getElementById('shop');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  });

  // Mobile hamburger menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburgerBtn.addEventListener('click', () => { mobileMenu.classList.toggle('open'); });
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => { mobileMenu.classList.remove('open'); });
  });

  // Carousels (one per pattern detail view)
  document.querySelectorAll('.carousel-wrap').forEach((wrap) => {
    const carousel = wrap.querySelector('.carousel');
    const prevBtn = wrap.querySelector('.carousel-prev');
    const nextBtn = wrap.querySelector('.carousel-next');
    const dotsWrap = wrap.querySelector('.carousel-dots');
    const slideCount = carousel.children.length;
    let slide = 0;

    function renderDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Photo ${i + 1}`);
        dot.style.background = i === slide ? '#8E7355' : '#C9D3D8';
        dot.addEventListener('click', () => goToSlide(i));
        dotsWrap.appendChild(dot);
      }
    }
    function updateArrows() {
      prevBtn.style.display = slide > 0 ? 'flex' : 'none';
      nextBtn.style.display = slide < slideCount - 1 ? 'flex' : 'none';
    }
    function goToSlide(i) {
      slide = Math.max(0, Math.min(slideCount - 1, i));
      carousel.scrollTo({ left: slide * carousel.clientWidth, behavior: 'smooth' });
      renderDots();
      updateArrows();
    }
    carousel.addEventListener('scroll', () => {
      if (!carousel.clientWidth) return;
      const idx = Math.round(carousel.scrollLeft / carousel.clientWidth);
      if (idx !== slide) { slide = idx; renderDots(); updateArrows(); }
    });
    prevBtn.addEventListener('click', () => goToSlide(slide - 1));
    nextBtn.addEventListener('click', () => goToSlide(slide + 1));

    function reset() {
      slide = 0;
      carousel.scrollLeft = 0;
      renderDots();
      updateArrows();
    }
    const view = wrap.closest('.detail-view');
    if (view) view._carousel = { reset };
    reset();
  });
});
