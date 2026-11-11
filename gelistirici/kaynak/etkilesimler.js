  const tabsEl = document.getElementById("menuTabs");
  const gridEl = document.getElementById("menuGrid");
  const categoryButtons = new Map();

  function appendMenuElement(parent, tag, className, text){
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function renderCategory(category){
    categoryButtons.forEach((button, name) => {
      button.setAttribute("aria-pressed", String(name === category));
    });
    gridEl.replaceChildren();
    MENU[category].forEach(group => {
      const section = appendMenuElement(gridEl, "section", "menu-group", "");
      appendMenuElement(section, "h3", "", group.title);
      if(group.note){
        appendMenuElement(section, "p", "menu-group-note", group.note);
      }
      const list = appendMenuElement(section, "ul", "menu-grid", "");
      group.items.forEach(([name, description]) => {
        const item = appendMenuElement(list, "li", "menu-item", "");
        const content = appendMenuElement(item, "div", "", "");
        appendMenuElement(content, "div", "mi-name", name);
        if(description){
          appendMenuElement(content, "p", "mi-desc", description);
        }
      });
    });
  }

  Object.keys(MENU).forEach(category => {
    const button = appendMenuElement(tabsEl, "button", "menu-tab", category);
    button.type = "button";
    button.setAttribute("aria-controls", "menuGrid");
    button.addEventListener("click", () => renderCategory(category));
    categoryButtons.set(category, button);
  });
  document.querySelectorAll(".menu-feature").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      renderCategory(category);
      categoryButtons.get(category).focus({preventScroll:true});
      tabsEl.scrollIntoView({block:"start"});
    });
  });
  renderCategory("Kahvaltılar");

  /* ---------- gallery ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxPhoto = document.getElementById("lightboxPhoto");
  const galleryTiles = Array.from(document.querySelectorAll("#galleryGrid .gallery-tile"));
  let activePhoto = 0;

  function showGalleryPhoto(index){
    activePhoto = (index + galleryTiles.length) % galleryTiles.length;
    const tile = galleryTiles[activePhoto];
    lightboxPhoto.src = tile.href;
    lightboxPhoto.alt = tile.querySelector("img").alt;
    for(const property of ["--photo-light", "--photo-contrast"]){
      lightboxPhoto.style.setProperty(property, tile.style.getPropertyValue(property));
    }
  }

  galleryTiles.forEach((tile, index) => {
    tile.addEventListener("click", event => {
      if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      showGalleryPhoto(index);
      lightbox.showModal();
    });
  });
  document.getElementById("lightbox-prev").addEventListener("click", () => showGalleryPhoto(activePhoto - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showGalleryPhoto(activePhoto + 1));
  lightbox.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft" || event.key === "ArrowRight"){
      event.preventDefault();
      showGalleryPhoto(activePhoto + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => {
    if(event.target === lightbox) lightbox.close();
  });

  const googleReviews = document.getElementById("googleReviews");
  function moveGoogleReviews(direction){
    const card = googleReviews.firstElementChild;
    const gap = parseFloat(getComputedStyle(googleReviews).columnGap);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    googleReviews.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "instant" : "smooth"
    });
  }
  document.getElementById("reviewPrev").addEventListener("click", () => moveGoogleReviews(-1));
  document.getElementById("reviewNext").addEventListener("click", () => moveGoogleReviews(1));

