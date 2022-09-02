const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};
let lang;

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".navigation-item-link");

  function toggleMenu() {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }
  function closeMenu(event) {
    if (event.target.classList.contains("navigation-item-link")) {
      menu.classList.remove("open");
      hamburger.classList.remove("is-active");
      document.body.style.overflowY = "auto";
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  navLinks.forEach((el) => el.addEventListener("click", closeMenu));
  portfilioImagesHandler();

  initI18n();
  initSwithTheme();
}

function changeImage(event) {
  const portfolioImages = document.querySelectorAll(".portfolio-pic");

  if (event.target.classList.contains("portfolio-button")) {
    [...event.currentTarget.children].forEach((child) =>
      child.classList.remove("active")
    );
    portfolioImages.forEach((img, index) => {
      img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`;
    });

    event.target.classList.add("active");
    // здесь код функции, меняющей src изображений
  }
}

// инициализация клика
function portfilioImagesHandler() {
  const portfolioBtns = document.querySelector(".portfolio-buttons");
  portfolioBtns.addEventListener("click", changeImage);
}

function getTranslate(language) {
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const languagesContainer = document.getElementById("lang-container");
  const langButton = document.querySelector(`[data-language="${language}"]`);
  const translation = i18Obj[language];

  [...languagesContainer.children].forEach((el) => {
    el.classList.remove("active");
  });

  langButton.classList.add("active");

  i18nElements.forEach((el) => {
    const i18nKey = el.dataset.i18n;
    const translated = translation[i18nKey];
    el.innerHTML = translated;
  });
}

function switchLanguge(event) {
  const language = event.target.dataset.language;

  if (language) {
    localStorage.setItem("lang", language);
    getTranslate(language);
  }
}

function initI18n() {
  const lang = localStorage.getItem("lang") || "en";
  const languagesContainer = document.getElementById("lang-container");
  languagesContainer.addEventListener("click", switchLanguge);
  getTranslate(lang);
}

function lightTheme() {
  const switcherImg = document.getElementById("theme-switcher-img");

  switcherImg.src = "./assets/svg/carbon_sun.svg";

  document.documentElement.style.setProperty("--body-color", "#fff");
  document.documentElement.style.setProperty("--text-color", "#000");
  document.documentElement.style.setProperty(
    "--button-background-color",
    "#fff"
  );
  document.documentElement.style.setProperty("--section-title-color", "#000");
  document.documentElement.style.setProperty(
    "--section-title-background-color",
    "#fff"
  );
  document.documentElement.style.setProperty("--text-button-color", "#000");
  document.documentElement.style.setProperty(
    "--button-background-color-hover",
    "#bdae82"
  );
  document.documentElement.style.setProperty("--hamburger-line-color", "#000");
}

function darkTheme() {
  const switcherImg = document.getElementById("theme-switcher-img");

  switcherImg.src = "./assets/svg/moon.svg";
  document.documentElement.style.setProperty("--body-color", "#000");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty(
    "--button-background-color",
    "#000"
  );
  document.documentElement.style.setProperty(
    "--section-title-color",
    "#bdae82"
  );
  document.documentElement.style.setProperty(
    "--section-title-background-color",
    "#000"
  );
  document.documentElement.style.setProperty("--text-button-color", "#bdae82");
  document.documentElement.style.setProperty("--body-color", "#000");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty(
    "--button-background-color",
    "#000"
  );
  document.documentElement.style.setProperty(
    "--section-title-color",
    "#bdae82"
  );
  document.documentElement.style.setProperty(
    "--section-title-background-color",
    "#000"
  );
  document.documentElement.style.setProperty("--text-button-color", "#bdae82");
  document.documentElement.style.setProperty(
    "--hamburger-line-color",
    "#ecf0f1"
  );
}

function handleSwitchTheme() {
  const theme = localStorage.getItem("theme");
  if (!theme || theme === "dark") {
    lightTheme();
    localStorage.setItem("theme", "light");
  }

  if (theme === "light") {
    darkTheme();
    localStorage.setItem("theme", "dark");
  }
}

function initSwithTheme() {
  const themeSwitcher = document.getElementById("theme-change");

  themeSwitcher.addEventListener("click", handleSwitchTheme);
  const theme = localStorage.getItem("theme");

  if (!theme || theme === "dark") {
    darkTheme();
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    lightTheme();
  }
}
