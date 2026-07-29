// =====================================================================
// HANNAH — THIS IS YOUR FILE. Edit anything between the quotation marks "".
// =====================================================================
// Rules:
//   1. Only change text that is INSIDE quote marks " "
//   2. Don't delete any quote marks, commas, or curly brackets { }
//   3. To add a photo: put the image file in the "images" folder,
//      then type its exact filename below (e.g. "images/blanket.jpg")
//
// If something looks broken after you save, undo your last change —
// it's almost always a missing quote mark or comma
// =====================================================================

window.SITE_CONTENT = {

  // ---------------------------------------------------------------
  // SITE NAME — shows in the top-left corner and the footer
  // ---------------------------------------------------------------
  brandName: "Hannah Nicole Designs",

  // ---------------------------------------------------------------
  // COLOURS — change these to change your site's whole colour scheme.
  // Use a hex code (get one from googling "colour picker").
  // ---------------------------------------------------------------
  colors: {
    color1:      "#3B4A5A",  // main blue-gray (used in navigation & headings)
    color2:  "#2A3644",  // darkest blue (footer & "shop" section background)
    color3:    "#D9A441",  // gold accent (buttons)
    color4:      "#E8B8AC",  // soft pink accent
    color5:      "#FBF6EE",  // background color of the page
  },

  // ---------------------------------------------------------------
  // FONTS — pick a heading font and a body font from this list:
  //   "Fraunces"            elegant, curvy serif (the current default heading)
  //   "Playfair Display"    classic, high-contrast serif
  //   "Cormorant Garamond"  delicate, old-style serif
  //   "Nunito Sans"         clean, friendly sans-serif (the current default body)
  //   "Quicksand"           soft, rounded sans-serif
  //   "Poppins"             modern, geometric sans-serif
  //   "Caveat"              handwritten script (fun for headings, not for body text)
  // Type the name exactly as shown above, including capital letters.
  // ---------------------------------------------------------------
  fonts: {
    heading: "Fraunces",     // used for big titles like "Cozy crochet made for real life"
    body: "Nunito Sans",     // used for regular paragraph text
  },

  // ---------------------------------------------------------------
  // TOP OF THE PAGE (the big banner)
  // ---------------------------------------------------------------
  hero: {
    eyebrow: "Handmade, one stitch at a time",   // small text above the headline
    headingStart: "Cozy crochet made for",        // main headline
    headingEmphasis: "real life",                 // last bit of headline, shown in italic pink
    intro: "Hi, I'm Hannah! I make handmade crochet pieces from my home studio. Jumpers, dresses, summer tops and more.",
  },

  // ---------------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------------
  about: {
    photo: "images/about-photo.jpg",  // put a photo of you or your workspace in the images folder with this name
    paragraph1: "Write 2–3 sentences here about how you started crocheting and what you love making.",
    paragraph2: "Optional: write something else here.",
  },

  // ---------------------------------------------------------------
  // GALLERY — "Recent designs"
  // To add a new item, copy one whole line (from { to },) and paste it below.
  // To remove one, delete its whole line.
  // ---------------------------------------------------------------
  gallery: [
    { image: "images/crochet_lamp.jpeg", caption: "Crochet lampshade" },
    { image: "images/gallery-2.jpg", caption: "Amigurumi fox" },
    { image: "images/gallery-3.jpg", caption: "Granny square cardigan" },
    { image: "images/gallery-4.jpg", caption: "Market tote bag" },
  ],

  // ---------------------------------------------------------------
  // SHOP LINK — your Etsy shop URL
  // ---------------------------------------------------------------
  etsyUrl: "https://www.etsy.com/shop/YOUR-SHOP-NAME",

};