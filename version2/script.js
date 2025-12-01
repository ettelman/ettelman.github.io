// JavaScript by: Björn Ettelman

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navCloseBtn = document.getElementById("navClose");
const mobileBgSections = document.querySelectorAll("[data-mobile-bg]");
const menuMediaQuery = window.matchMedia("(max-width: 1000px)");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    setTimeout(function () {
      scrollTopBtn.style.opacity = "1";
    }, 10);
  } else {
    scrollTopBtn.style.opacity = "0";
    setTimeout(function () {}, 500);
  }

}

// Get the modal
var modal = document.getElementById("privacyModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function booking_menu() {
  if (window.matchMedia("(max-width: 1000px)").matches) toggleMenu();
  document.getElementById("booking").scrollIntoView();
}

document.getElementById("scrollTopBtn").onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function toggleMenu(forceState) {
  if (!navMenu) return;
  const isMobile = window.matchMedia("(max-width: 1000px)").matches;
  if (!isMobile) {
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    navMenu.setAttribute("aria-hidden", "true");
    if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    return;
  }

  const shouldOpen =
    typeof forceState === "boolean" ? forceState : !navMenu.classList.contains("open");

  navMenu.classList.toggle("open", shouldOpen);
  navMenu.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  document.body.classList.toggle("menu-open", shouldOpen);
  if (hamburger) hamburger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

if (hamburger) {
  hamburger.addEventListener("click", () => toggleMenu(true));
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => toggleMenu(false));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") toggleMenu(false);
});

const navLinks = document.querySelectorAll(".nav-panel a");
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 1000px)").matches) toggleMenu(false);
  }),
);

function removeAll(id) {
  const but1 = document.querySelector("#but1");
  const but2 = document.querySelector("#but2");
  const but3 = document.querySelector("#but3");
  but1.classList.remove("highlight-button");
  but2.classList.remove("highlight-button");
  but3.classList.remove("highlight-button");
}

function dynamicContent(type) {
  const dynamic = document.querySelector("#dynamic");
  const but1 = document.querySelector("#but1");
  const but2 = document.querySelector("#but2");
  const but3 = document.querySelector("#but3");
  removeAll();

  const translations = {
    sv: {
      1: `
        <h3>Familjeterapi</h3>
        <p>Det mesta funkar i er familj – ändå låser det sig ibland. Hos mig får ni en trygg plats att prata lugnt och förstå varandra.</p>
        <p>Jag ser familjen som en del av lösningen och samspelet som den viktigaste faktorn till förändring. Exempel: nå fram till en tonåring som drar sig undan, hitta ett nytt sätt att mötas mellan vuxet barn och förälder eller minska spänningar mellan syskon.</p> 
      `,
      2: `
        <h3>Parterapi</h3>
        <p>Parterapi är för er som har mycket som fungerar – och som fastnar i återkommande konflikter, brist på närhet eller olika behov i vardagen och sexlivet.</p>
        <p>Ni vill utvecklas som par, förstå varandra bättre och bygga en relation som håller, även när livet är fullt av krav, karriär och kompromisser.</p>
      `,
      3: `
        <h3>Individuell terapi</h3>
        <p>Individuell terapi är för dig som vill utvecklas, förstå dig själv bättre och skapa förändring i det som inte riktigt fungerar – även om det ser bra ut på ytan.</p>
        <p>Du kanske lever ett liv med mycket ansvar, höga krav och yttre framgång men kämpar med självtvivel, återkommande mönster i relationer eller en känsla av att inte riktigt räcka till.</p>
      `,
    },
    en: {
      1: `
        <h3>Family therapy</h3>
        <p>Most things work in your family — and still it sometimes gets stuck. With me you get a safe place to talk calmly and understand one another.</p>
        <p>I see the family as part of the solution and the interaction as the key factor for change. Examples: reaching a teenager who withdraws, finding a new way for an adult child and parent to meet, or easing tensions between siblings.</p>
      `,
      2: `
        <h3>Couples therapy</h3>
        <p>Couples therapy is for you who have a lot that works — yet get stuck in recurring conflicts, lack of closeness, or different needs in daily life and sex.</p>
        <p>You want to grow as a couple, understand each other better, and build a relationship that lasts even when life is full of demands, careers, and compromises.</p>
      `,
      3: `
        <h3>Individual therapy</h3>
        <p>Individual therapy is for you who want to grow, understand yourself better, and change what is not working — even if it looks fine on the surface.</p>
        <p>You may live a life with lots of responsibility, high demands, and outward success yet struggle with self-doubt, recurring patterns in relationships, or a feeling of not quite measuring up.</p>
      `,
    },
  };

  const lang = document.documentElement.lang === "en" ? "en" : "sv";
  const template = translations[lang][type];
  if (!template || !dynamic) return;

  dynamic.classList.add("hidden");
  setTimeout(function () {
    dynamic.innerHTML = template;
    dynamic.classList.remove("hidden");
    const buttonMap = { 1: but1, 2: but2, 3: but3 };
    const activeButton = buttonMap[type];
    if (activeButton) activeButton.classList.add("highlight-button");
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  var consent = getCookie("gaConsent");
  if (consent == "") {
    document.getElementById("cookieConsentContainer").style.display = "block";
  } else if (consent == "true") {
    loadGoogleAnalytics();
  }
});

function acceptCookies() {
  setCookie("gaConsent", "true", 365);
  loadGoogleAnalytics();
  document.getElementById("cookieConsentContainer").style.display = "none";
}

function rejectCookies() {
  setCookie("gaConsent", "false", 365);
  document.getElementById("cookieConsentContainer").style.display = "none";
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

function loadGoogleAnalytics() {
  // Initialize Google Analytics tracking
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("set", "linker", {
    domains: ["mindful-homes.se", "calendly.com"],
    accept_incoming: true,
    decorate_forms: true,
  });
  gtag("js", new Date());
  gtag("config", "AW-11327842467");

  // Initialize Facebook Pixel tracking
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );

  fbq("init", "1495758677984417");
  fbq("track", "PageView");
  fbq("track", "Schedule");
}

// Custom Modal script
var customModal = document.getElementById("customFaqModal");
var customSpan = document.getElementsByClassName("custom-close")[0];

function toggleQuestions() {
  if (window.matchMedia("(max-width: 1000px)").matches) toggleMenu();
  customModal.style.display = "block";
}

customSpan.onclick = function () {
  customModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == customModal) {
    customModal.style.display = "none";
  }
};

const quotes = document.querySelectorAll(".quote-box");
const dots = document.querySelectorAll(".quote-dots .dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentQuote = 0;
let quoteTimer;

function setQuoteActive(index, direction = "next") {
  if (!quotes.length) return;
  const current = quotes[currentQuote];
  const next = quotes[index];
  current.classList.remove("active");
  next.classList.add("active");
  currentQuote = index;
  if (dots.length) {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentQuote));
  }
}

function nextQuote(direction = "next") {
  const newIndex =
    direction === "next"
      ? (currentQuote + 1) % quotes.length
      : (currentQuote - 1 + quotes.length) % quotes.length;
  setQuoteActive(newIndex, direction);
}

function startQuoteTimer() {
  quoteTimer = setInterval(() => nextQuote("next"), 5000);
}

function resetQuoteTimer() {
  clearInterval(quoteTimer);
  startQuoteTimer();
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    nextQuote("prev");
    resetQuoteTimer();
  });
  nextBtn.addEventListener("click", () => {
    nextQuote("next");
    resetQuoteTimer();
  });
}

if (dots.length) {
  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => {
      if (index !== currentQuote) {
        setQuoteActive(index, index > currentQuote ? "next" : "prev");
        resetQuoteTimer();
      }
    }),
  );
}

if (quotes.length) {
  setQuoteActive(0);
  startQuoteTimer();
}

function updateMobileBackgrounds() {
  const isMobile = window.matchMedia("(max-width: 850px)").matches;
  mobileBgSections.forEach((section) => {
    if (isMobile) {
      const src = section.dataset.mobileBg;
      if (src) {
        section.style.setProperty("--mobile-image", `url(${src})`);
        section.classList.add("mobile-background");
      }
    } else {
      section.classList.remove("mobile-background");
      section.style.removeProperty("--mobile-image");
    }
  });
}

updateMobileBackgrounds();
window.addEventListener("resize", updateMobileBackgrounds);

const mqListener = (event) => {
  if (!event.matches) {
    toggleMenu(false);
  }
};

if (menuMediaQuery.addEventListener) {
  menuMediaQuery.addEventListener("change", mqListener);
} else if (menuMediaQuery.addListener) {
  menuMediaQuery.addListener(mqListener);
}
