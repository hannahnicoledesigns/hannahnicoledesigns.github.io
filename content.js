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
// it's almost always a missing quote mark or comma
// =====================================================================

// Site configuration and interactive behaviour for Hannah Nicole Designs
const SITE = {
  etsyUrl: 'https://hannahnicoledesigns8.etsy.com',
  kofiUrl: 'https://ko-fi.com/hannahnicoledesigns',
};

document.addEventListener('DOMContentLoaded', () => {
  // Wire up shop links
  document.querySelectorAll('.etsy-link').forEach((el) => { el.href = SITE.etsyUrl; });
  document.querySelectorAll('.kofi-link').forEach((el) => { el.href = SITE.kofiUrl; });

  const body = document.body;

  function goHome() {
    body.classList.remove('view-detail');
    window.scrollTo(0, 0);
  }
  function goDetail() {
    body.classList.add('view-detail');
    window.scrollTo(0, 0);
  }

  document.getElementById('nav-home').addEventListener('click', (e) => { e.preventDefault(); goHome(); });
  document.getElementById('back-link').addEventListener('click', (e) => { e.preventDefault(); goHome(); });
  document.getElementById('view-pattern-link').addEventListener('click', (e) => { e.preventDefault(); goDetail(); });

  // Center the Shop section in the viewport when clicked from the hero link
  document.getElementById('shop-centered-link').addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.getElementById('shop');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  });

  // Carousel (pattern detail view)
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsWrap = document.getElementById('carousel-dots');
  const slideCount = carousel.children.length;
  let slide = 0;

  function renderDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('button');
      dot.style.cssText = 'width:8px;height:8px;padding:0;border-radius:50%;border:none;cursor:pointer;background:' + (i === slide ? '#8E7355' : '#C9D3D8') + ';';
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
    const idx = Math.round(carousel.scrollLeft / carousel.clientWidth);
    if (idx !== slide) { slide = idx; renderDots(); updateArrows(); }
  });
  prevBtn.addEventListener('click', () => goToSlide(slide - 1));
  nextBtn.addEventListener('click', () => goToSlide(slide + 1));

  renderDots();
  updateArrows();
});
