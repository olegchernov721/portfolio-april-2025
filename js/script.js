`use strict`

const local = navigator.language;

const optionsDate = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

// После загрузки страницы

document.addEventListener("DOMContentLoaded", function (e) {

  const navList = document.querySelector(".nav__list");
  const navItems = document.querySelectorAll(".nav__list-item");
  const mainSection = document.querySelector("#main");

  // При кликле на элемент меню
    navList.addEventListener("click", function (e) {
      e.preventDefault();
      const clicked = e.target;
      const page = e.target.dataset.page;

      navItems.forEach(function (item) {
        item.classList.remove("nav__list-item-active");
      });

      if (clicked.classList.contains("nav__list-item")) {
        clicked.classList.add("nav__list-item-active");
      }
      // вызываем функцию loadPage, для загрузки в блок main нужного html файла
      loadPage(page);
      // Изменяем ссылку страницы
      history.pushState({ page }, "", `${page}.html`);
    });

// Функция загрузки нужного html файла в блок main
  function loadPage (page) {
    if (!page) return;
    fetch(`sectionsHtml/${page}.html?v=${Date.now()}`)
    .then(function (response) {
      // Прокидываю возможную ошибку
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.status}`)
      }
      return response.text();
    })
    .then(function (data) {
      mainSection.innerHTML = data;

      // Подключаем CSS для раздела
      loadCSS(`css/sections/${page}.css`);

      // Подключаем JS для раздела
      loadScript(`js/sections/${page}.js`);

    })
    .catch(function (err) {
      console.warn("Ошибка загрузки страницы:", err);
    });
  }

  // Функция подключения scss для определлённого раздела
  function loadCSS (href) {
    const oldCss = document.getElementById("dynamic-css");
    if (oldCss) oldCss.remove();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${href}?v=${Date.now()}`; // Добавляем версию для кэша 
    // Если не добавлять параметр версии (?v=${Date.now()}), браузер может загружать старый CSS из кэша и не обновлять его.
    // Использование ?v=${Date.now()} гарантирует, что новые стили загружаются только при изменении файла, без лишней нагрузки.
    link.id = "dynamic-css";

    document.head.appendChild(link);
  }
  // Функция подключения js для определлённого раздела
  function loadScript (src) {
    const oldScript = document.getElementById("dynamic-script");
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.src = `${src}?v=${Date.now()}`; // Добавляем параметр версии
    script.id = "dynamic-script";
    script.defer = true;

    document.head.appendChild(script);
  }

//При первой загрузке сайта подгружаем в блок main файл main.html
  if (!history.state) {
    const defaultPage = "main"; // название файла без расширения
    loadPage(defaultPage);
    history.replaceState({ page: defaultPage }, "", `${defaultPage}.html`);
  }

// Возможность использования в браузере стрелки "назад"
  window.addEventListener("popstate", function (event) {
    if (event.state.page) {
      loadPage(event.state.page);
    }
  });

});