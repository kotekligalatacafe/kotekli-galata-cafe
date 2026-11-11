
(function(){
  "use strict";

  /* =========================================================
     BUSINESS — İşletme bilgilerini burada güncelleyin.
     Gerçek bilgiler girildiğinde placeholder metinler otomatik
     güncellenir ve ilgili butonlar aktif hale gelir.
     ========================================================= */
  const BUSINESS = {
    name: "Kötekli Galata Cafe",
    phoneDisplay: "0252 223 85 05",
    phoneTel: "+902522238505",
    whatsappNumber: "905374894968",             // örn. "905XXXXXXXXX"
    address: "Kötekli Mahallesi, 263. Sokak No: 22/A, Menteşe / Muğla",
    instagramUrl: "https://www.instagram.com/galatacafekotekli/",               // örn. "https://instagram.com/kullaniciadi"
    mapsUrl: "https://www.google.com/maps?cid=3869732096813424053",                    // örn. "https://maps.google.com/?q=..."
    openingHours: "Her gün 08.00–04.00"
  };

  function setHref(id, url, fallbackTitle){
    const el = document.getElementById(id);
    if(!el) return;
    if(url){ el.href = url; }
    else { el.removeAttribute("target"); el.href = "#iletisim"; el.title = fallbackTitle || "Bilgi yakında eklenecek"; }
  }
  const waUrl = BUSINESS.whatsappNumber ? ("https://wa.me/" + BUSINESS.whatsappNumber) : "";
  ["waNavBtn","waMobileBtn","waContactBtn","footerWaLink"].forEach(id => setHref(id, waUrl, "WhatsApp numarası eklenecek"));
  setHref("instaBtn", BUSINESS.instagramUrl, "Instagram bağlantısı eklenecek");
  setHref("footerInstaLink", BUSINESS.instagramUrl, "Instagram bağlantısı eklenecek");
  setHref("mapsContactBtn", BUSINESS.mapsUrl, "Harita konumu eklenecek");
  setHref("mapsLink", BUSINESS.mapsUrl, "Harita konumu eklenecek");

  document.getElementById("addressValue").textContent = BUSINESS.address;
  document.getElementById("phoneValue").textContent = BUSINESS.phoneDisplay;
  document.getElementById("hoursValue").textContent = BUSINESS.openingHours;
  document.getElementById("instaValue").textContent = "@galatacafekotekli";
  document.getElementById("footerAddress").textContent = BUSINESS.address;
  document.getElementById("copyrightLine").textContent = "© " + new Date().getFullYear() + " " + BUSINESS.name + ". Tüm hakları saklıdır.";

  /* ---------- nav scroll state ---------- */
  const nav = document.getElementById("siteNav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* ---------- mobile nav ---------- */
  const mobileNav = document.getElementById("mobileNav");
  const openBtn = document.getElementById("menuOpenBtn");
  const closeBtn = document.getElementById("menuCloseBtn");
  function openNav(){
    mobileNav.inert = false;
    mobileNav.classList.add("open");
    openBtn.setAttribute("aria-expanded","true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeNav(){
    if(mobileNav.inert) return;
    openBtn.focus({preventScroll:true});
    mobileNav.inert = true;
    mobileNav.classList.remove("open");
    openBtn.setAttribute("aria-expanded","false");
    document.body.style.overflow = "";
  }
  mobileNav.addEventListener("keydown", event => {
    if(event.key === "Escape") closeNav();
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", event => {
    if(event.matches) closeNav();
  });
  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  mobileNav.querySelectorAll(".mnav-link").forEach(a => a.addEventListener("click", closeNav));

