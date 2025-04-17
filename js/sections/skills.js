`use strict`



function initSkills() {
    console.log("skills.js успешно запущен!");
    
    const tabsContainer = document.querySelector(".skills__tabs");
    const tabs = document.querySelectorAll(".skills__tabs-item");

    loadBlock("form");


    tabsContainer.addEventListener("click", function (e) {
        e.preventDefault();
        const clicked = e.target;
        const block = e.target.dataset.skillsTab;

        if (clicked.classList.contains("skills__tabs-item")) {
            if (clicked.classList.contains("skills__tabs-item-active")) return;

            tabs.forEach(function (tab) {
                tab.classList.add("skills__tabs-item-transition");
                tab.classList.remove("skills__tabs-item-active");
            });
            clicked.classList.add("skills__tabs-item-active");

            loadBlock(block);

            history.pushState({ block }, "", `${block}.html`);
        }
    });

    tabsContainer.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("skills__tabs-item")) {
            if (e.target.classList.contains("skills__tabs-item-active")) return;
            tabs.forEach(function (tab) {
                tab.classList.add("skills__tabs-item-transition");
                tab.classList.remove("skills__tabs-item-hover");
            });
            e.target.classList.add("skills__tabs-item-hover");
        }
    });

    tabsContainer.addEventListener("mouseout", function (e) {
        if (e.target.classList.contains("skills__tabs-item")) {
            if (e.target.classList.contains("skills__tabs-item-active")) return;
            // tabs.forEach(function (tab) {
            //     tab.classList.remove("skills__tabs-item-hover");
            // });
            e.target.classList.add("skills__tabs-item-transition");
            e.target.classList.remove("skills__tabs-item-hover");
        }
    });

    // Обновляем URL на form.html при первой загрузке
    history.replaceState({ block: "form" }, "", "form.html");

    
}

function loadBlock (block) {
    if (!block) return;

    let skillsMain = document.querySelector(".skills__main");

    fetch(`sectionsHtml/skills/${block}.html?v=${Date.now()}`)
    .then(function (response) {
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        return response.text();
    })
    .then(function (data) {
        skillsMain.innerHTML = data;

        loadskillsCss(`css/sections/skills/${block}.css`);

        loadSkillsScript(`js/sections/skills/${block}.js`);
    })
    .catch(function (err) {
        console.warn("Ошибка загрузки страницы:", err);
    });
}

function loadskillsCss (href) {
    const dynamicSkillsCss = document.querySelector("#dynamic-skills-css");
    if (dynamicSkillsCss) {
        dynamicSkillsCss.remove();
    }

    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = `${href}?v=${Date.now()}`;
    link.id = "dynamic-skills-css";

    document.head.appendChild(link);
    
}

function loadSkillsScript (src) {

    const dynamicSkillsScript = document.querySelector("#dynamic-skills-script")
    if (dynamicSkillsScript) {
        dynamicSkillsScript.remove();
    }

    const script = document.createElement("script");

    script.src = `${src}?v=${Date.now()}`;
    script.defer = true;
    script.id = "dynamic-skills-script";

    document.head.appendChild(script);

}

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.block) {
        console.log(`Переход назад: загружаем ${event.state.block}`);
        loadBlock(event.state.block);
    }
});


// Проверка, если элементы уже есть на странице
if (document.querySelector(".skills__tabs-item")) {
initSkills();
} else {
// Если ещё не загружен, используем observer
const observer = new MutationObserver(() => {
    if (document.querySelector(".skills__tabs-item")) {
    initSkills();
    observer.disconnect();
    }
});
observer.observe(document.querySelector("main"), { childList: true });
}