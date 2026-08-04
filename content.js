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
    color1: "#38495A",  // dusty blue (headings & nav)
    color2: "#1F2A34",  // deep navy (footer/shop bg)
    color3: "#8E7355",  // warm tan/gold (buttons & accents)
    color4: "#C9D3D8",  // soft powder blue (secondary accent)
    color5: "#F8F7F1",  // warm ivory (page background)
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
    heading: "Cormorant Garamond",     // used for big titles like "Cozy crochet made for real life"
    body: "Nunito Sans",     // used for regular paragraph text
  },

  // ---------------------------------------------------------------
  // TOP OF THE PAGE (the big banner)
  // ---------------------------------------------------------------
  hero: {
    eyebrow: "Inspired by the joy of creating",
    headingStart: "Timeless crochet patterns for",
    headingEmphasis: "home and wardrobe",
    intro: "Hi, I'm Hannah! I design clear crochet patterns for the pieces I dream up, and hope you enjoy bringing them to life in a way that feels truly yours, creating something to treasure long after the final stitch.",
  },

  // ---------------------------------------------------------------
  // ABOUT SECTION
  // Each line in "paragraphs" becomes its own paragraph on the page.
  // "signature" shows underneath, on its own.
  // ---------------------------------------------------------------
  about: {
    tag: "About me :)",
    heading: "How it all began",
    photo: "images/about-photo.jpg",
    paragraphs: [
      "Hi! My name is Hannah :)",
      "As a creative at heart, I started crocheting as a mindful alternative to scrolling, and as a way of keeping my hands busy, and as a creative outlet alongside my academic studies at uni. What began as a little bit of productive fidgeting soon became something I couldn't put down.",
      "I love how each piece is built from hundreds or thousands of deliberate little stitches, and how every new design is a chance to deepen my understanding of the craft and what I can create.",
      "That love for the process is what led me here: designing my own crochet patterns. The encouragement I received from sharing my crochet online gave me the confidence to start turning my ideas into patterns, and I'm so excited to share the pieces I've been dreaming up with you! Thank you for being here <3",
    ],
    signature: "Love,\nHannah x",
  },

  // ---------------------------------------------------------------
  // SOCIALS — shown in the footer, and wherever else makes sense.
  // Leave "url" as "#" if you don't want a link to go anywhere yet.
  // ---------------------------------------------------------------
  socials: {
    tiktok:    { label: "TikTok",    handle: "@loops.by.hannah",       url: "https://www.tiktok.com/@loops.by.hannah" },
    instagram: { label: "Instagram", handle: "@hannahnicole.designs",  url: "https://www.instagram.com/hannahnicole.designs" },
    etsy:      { label: "Etsy",      handle: "@hannahnicoledesigns8",  url: "https://www.etsy.com/shop/hannahnicoledesigns8" },
    kofi:      { label: "Ko-fi",     handle: "@hannahnicoledesigns",   url: "https://ko-fi.com/hannahnicoledesigns" },
  },

  // ---------------------------------------------------------------
  // GALLERY — "Recent designs"
  // To add a new item, copy one whole block (from { to },) and paste it below.
  // "slug" must match a "slug" in the "patterns" list further down, so
  // clicking the photo opens the right pattern page.
  // ---------------------------------------------------------------
  gallery: [
    { image: "images/crochet_lamp.jpeg", caption: "Crochet lampshade", slug: "inigo-lampshade" },
  ],
  //  { image: "images/gallery-2.jpg", caption: "Amigurumi fox", slug: "amigurumi-fox" },
  //  { image: "images/gallery-3.jpg", caption: "Granny square cardigan", slug: "granny-square-cardigan" },
  //  { image: "images/gallery-4.jpg", caption: "Market tote bag", slug: "market-tote-bag" },

  // ---------------------------------------------------------------
  // PATTERN PAGES — the page someone lands on after clicking a gallery photo.
  // "slug" must match the "slug" on the matching gallery item above.
  // "images" is a list — the first should be the real photo, the rest can
  // stay as placeholders until you have more photos of the finished piece.
  // "description" — each line becomes its own paragraph.
  // ---------------------------------------------------------------
  patterns: [
    {
      slug: "inigo-lampshade",
      title: "The Inigo Lampshade",
      images: [
        "images/crochet_lamp.jpeg",
        "images/inigo-lampshade-2.jpg",
        "images/inigo-lampshade-3.jpg",
      ],
      description: [
        "The Inigo Lampshade is a warm, textured crochet cover designed to bring a handmade glow to any room. Worked in a simple repeating stitch, it's a satisfying make for anyone comfortable with the basics of crochet.",
        "This pattern includes a full written guide with stitch counts for each round, photos to check your progress against, and tips for fitting the cover to your own lampshade frame.",
        "Skill level: confident beginner. You'll need a lamp frame to crochet over, worsted-weight yarn, and a G/4mm hook.",
      ],
      etsyUrl: "https://www.etsy.com/shop/hannahnicoledesigns8",
      kofiUrl: "https://ko-fi.com/hannahnicoledesigns",
    },
  ],

  // ---------------------------------------------------------------
  // SHOP LINK — your Etsy shop URL (used on the main "Visit the shop" button)
  // ---------------------------------------------------------------
  etsyUrl: "https://www.etsy.com/shop/hannahnicoledesigns8",
};
