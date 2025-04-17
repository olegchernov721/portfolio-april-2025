`use strict`

function initFormModule() {
    // Проверка, что скрипт уже инициализирован (можно использовать для любого раздела)
    if (document.querySelector(".skills__form-container[data-form-initialized]")) {
    return;
    }

    const container = document.querySelector(".skills__form-container");
    if (!container) return;
    container.setAttribute("data-form-initialized", "true");



      
    const skillsForm = document.querySelector(".skills__form");
    let hasErrors = false;
    let hasError = false;

    // Проверка почты на своём Email

    // function checkFormEmail () {
    //     const form = document.querySelector(".skills__form");
    //     const checkForm = document.querySelector(".form-test-email__form");
    //     const emailInputCheckForm = document.querySelector(".form-test-email__input");
    
    //     const firstNameInput = document.querySelector('#firstName');
    //     const emailInput = document.querySelector('#email');
    //     const phoneInput = document.querySelector('#phone');
    //     const commentInput = document.querySelector('#comment');
    //     const avatarInput = document.querySelector("#form-avatar");
    //     const checkbox = document.querySelector('#privacyPolicy');



    //     checkForm.addEventListener("submit", function (e) {
    //         e.preventDefault();


    //         const emailCheck = emailInputCheckForm.value.trim();
    //          // Получаем значения главной формы
    //          const firstName = firstNameInput.value.trim();
    //          const email = emailInput.value.trim();
    //          const phone = phoneInput.value.trim();
    //          const comment = commentInput.value.trim();
    //          const avatarFile = avatarInput.files[0];
    //          const isPrivacyAccepted = checkbox.checked;



                
    //         // При фокусе поля удаляем текст ошибки

    //         emailInputCheckForm.addEventListener("focus", function (e) {
    //             const erorr = document.querySelector(".errorCheckForm");
    //                 if (erorr) erorr.remove();
    //         });
                
                
    //         if (!validator.isEmail(emailCheck)) {

    //         //Если нет блока errorCheckForm с ошибкой, то...
    //         if (!document.querySelector(".errorCheckForm")) {
    //             emailInputCheckForm.insertAdjacentHTML("beforebegin", `
                
    //             <div class="errorCheckForm">Проверте коорректность введенного Email</div>
    //             `);

    //             hasError = true;

    //         }

    //         }

    //         const submitFormBig = form.dispatchEvent(new Event("submit"));

    //         const erorrGeneral = document.querySelector(".errorFormGeneral");

            
    //         if (!hasError && !erorrGeneral && !hasErrors) {

                
    //             const formData = new FormData();
    //             formData.append("name", firstName);
    //             formData.append("email", email);
    //             formData.append("phone", phone);
    //             formData.append("comment", comment);
    //             formData.append("test_email", emailCheck);
    //             if (avatarFile) {
    //                 formData.append("avatar", avatarFile);
    //             }
                
    //             fetch("https://api.web3forms.com/submit", {
    //                 method: "POST",
    //                 body: formData,
    //             })
    //             .then(function (response) {
    //                 return response.json();
    //             })
    //             .then(function (data) {
    //                 alert("✅ Данные успешно отправлены на указанный Email!");
    //             })
    //             .catch(function (err) {
    //                 alert("❌ Ошибка при отправке: " + err);
    //             });
    //         }


    //     });


    // }

    // checkFormEmail();


    function formTabsDescr () {
        // Контейнер табов
        const containerBtnControlForm = document.querySelector(".form-control__tabs");
        const containerDescrControlTab = document.querySelector(".skills__form-output-descr");
        // Табы контроля
        const allTabsControlForm = document.querySelectorAll(".form-control__tabs-item");
        const btnControlFormZero = document.querySelector(".form-control__tabs_clear");
        const btnControlFormFew = document.querySelector(".form-control__tabs_few");
        const btnControlForMmedium = document.querySelector(".form-control__tabs_medium");
        const btnControlFormMany = document.querySelector(".form-control__tabs_many");
        // Все блоки описания работы табов
        const allDescrItems = document.querySelectorAll(".skills__form-output-descr-item");

        // Объект с вариантами descr в html
        const objDescrHtml = {
            blockRero:`
            <p>Данные корректны. Все поля проходят валидацию.</p>
              <p>Проверка выполнена через JavaScript, ошибок нет — отправка доступна.</p>`,

                           
              blockFew:`
             <p>Проверка: некорректный email <br>(например, без @).</p>
              <p>Использовано регулярное выражение:</p>
              <code>/^[^\s@]+@[^\s@]+\.[^\s@]+$/</code>
                `,

                blockMedium:`
              <p>Проверка: имя с недопустимыми символами, комментарий — только смайлы, чекбокс не отмечен.</p>
              <p>Использовано:</p>
              <ul>
                <li>Регулярное выражение для имени: <br><code>/^[а-яА-ЯёЁa-zA-Z\- ]+$/</code></li>
                <li>Проверка только смайлов: <br><code>/^[^\wа-яА-ЯёЁ]+$/u</code></li>
                <li>Проверка чекбокса: <br><code>if (!checkbox.checked) { ... }</code></li>
              </ul>`,

                  blockMany: `
                <p>Проверка сразу нескольких ошибок: имя с матом, email и телефон некорректны, комментарий содержит ссылку, загружен "плохой" файл, чекбокс не отмечен.</p>
              <p>Использовано:</p>
              <ul>
                <li>Поиск матерных слов в имени через <br><code>.some(bad = &gt name.includes(bad))</code></li>
                <li>Проверка email и телефона через RegExp</li>
                <li>Фильтр ссылок в комментарии: <br> <code>/http:\/\/|https:\/\/|www\.|\.(ru|com|net)/i</code></li>
                <li>Проверка файла по типу и размеру: <br>
                  <pre><code>if (file.size &gt 2 * 1024 * 1024 || <br>!allowedTypes.includes(file.type))</code></pre>
                </li>
              </ul>`, 
        }

    

        function showClickControlTab (e) {
    
            const target = e.target;
            if (target.classList.contains("form-control__tabs-item")) {



                allTabsControlForm.forEach(tab => {
                    tab.classList.remove("active-control-tab");
                });

                target.classList.add("active-control-tab");


                    if (target.classList.contains("form-control__tabs-item")) {

                        containerDescrControlTab.innerHTML = "";
                        containerDescrControlTab.classList.toggle("skills__form-output-descr-active");
                        containerDescrControlTab.innerHTML = objDescrHtml[target.dataset.controlFormTab];
                        containerDescrControlTab.classList.add("skills__form-output-descr-active");
                        
                        
                        // setTimeout(() => {
                        //     containerDescrControlTab.innerHTML = objDescrHtml[target.dataset.controlFormTab];
                        //     containerDescrControlTab.classList.add("skills__form-output-descr-active");
                        // }, 600);
    
                    }
                
                


                // allDescrItems.forEach(block => {
                //     block.classList.remove("descr-item-active");
                // });

                // document.querySelector(`.skills__form-output-descr-${target.dataset.controlFormTab}`).classList.add("descr-item-active");
            }
        }

        containerBtnControlForm.addEventListener("click", showClickControlTab);

    }

    formTabsDescr();


    // Контроль формы
    // Кнопки
    const containerBtnControlForm = document.querySelector(".form-control__tabs");
    const btnControlFormZero = document.querySelector(".form-control__tabs_clear");
    const btnControlFormFew = document.querySelector(".form-control__tabs_few");
    const btnControlForMmedium = document.querySelector(".form-control__tabs_medium");
    const btnControlFormMany = document.querySelector(".form-control__tabs_many");

    // 🔹 Создаём "плохой" файл прямо в памяти браузера.
    // Класс File — встроенный в JavaScript, позволяет создать виртуальный файл.
    const badFile = new File(
        [new ArrayBuffer(7 * 1024 * 1024)], // ← содержимое файла: 7 МБ пустых байтов (буфер)
        "testfile.exe",                    // ← имя файла (будто EXE-шник)
        { type: "application/x-msdownload" } // ← MIME-тип, говорит что это исполняемый файл
    );


    // Объекты с готовыми ошибками
    // Вариант 1: Мало ошибок
    const testDataLow = {
        name: "Алексей",
        email: "aleksey.mail.ru", // ❌ нет @
        phone: "+7 (999) 123-45-67",
        comment: "Просто комментарий.",
        checkbox: true,
      };
      
    //   Вариант 2: Средне ошибок

    const testDataMedium = {
        name: "Вася!!!", // ❌ символы
        email: "vasya@site.com",
        phone: "+7 (900) 321-00-11",
        comment: "😊🔥", // ❌ только смайлы
        checkbox: false, // ❌ не отмечен
      };
      
    //   Вариант 3: Много ошибок

    const testDataHard = {
        name: "@Бля", // ❌ мат
        email: "igor@com", // ❌ нет полноценного домена
        phone: "+7990-777-77", // ❌ короткий номер
        comment: "Заходите на мой сайт http://spam.ru", // ❌ ссылка
        checkbox: false, // ❌ не отмечен
        file: badFile,
      };

       //   Вариант 4: Ноль ошибок

      const testDataZero = {
        name: "Алексей",
        email: "test@email.com", // 
        phone: "+7 (999) 123-45-67",
        comment: "Просто комментарий.",
        checkbox: true,
      };



        // Поля формы
        const firstNameInput = document.querySelector('#firstName');
        // const lastNameInput = document.querySelector('#lastName');
        const emailInput = document.querySelector('#email');
        const phoneInput = document.querySelector('#phone');
        const commentInput = document.querySelector('#comment');
        const avatarInput = document.querySelector("#form-avatar");
        const checkbox = document.querySelector('#privacyPolicy');

        let avatarFile;
      

    function controlForm (objDataError) {
        const form = document.querySelector(".skills__form");

        // Подставляю нужное значение в поля формы
        firstNameInput.value = objDataError.name;
        emailInput.value = objDataError.email;
        phoneInput.value = objDataError.phone;
        commentInput.value = objDataError.comment;
        checkbox.checked = objDataError.checkbox;

        avatarFile = avatarInput.files[0];
        
        if (objDataError.file) {
            avatarFile = objDataError.file;
        }

          
        
        // Способ dispatchEvent(new Event("submit") - программно "нажать" на отправку формы, как будто пользователь сам нажал кнопку Submit или Enter.
        form.dispatchEvent(new Event("submit"));



    }

    containerBtnControlForm.addEventListener("click", function (e) {
        e.preventDefault();
        const form = document.querySelector(".skills__form");
        const inputs = form.querySelectorAll("input, textarea");
        // Делаем на мнгновение фокус по очереде на всех полях формы, чтобы сбросить ошибки
        inputs.forEach(input => {
            input.focus();
            input.blur();
        });

        // Удаляю данные из полей перед новой вставкой
        firstNameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        commentInput.value = "";
        checkbox.checked = true;

        // 🔹 Обработка клика по кнопке автозапуска с нулевым количеством ошибок
        if (e.target === btnControlFormZero) {
            // Запускаем функцию автозаполнения и валидации с идеальными данными
            controlForm(testDataZero);
        }

        // 🔹 Обработка клика по кнопке с минимальным количеством ошибок
        if (e.target === btnControlFormFew) {
            // Тестируем сценарий с одной простой ошибкой (например, email)
            controlForm(testDataLow);
        }

        // 🔹 Обработка клика по кнопке с несколькими ошибками
        if (e.target === btnControlForMmedium) {
            // Тестируем ситуацию с несколькими ошибками: имя, комментарий, чекбокс
            controlForm(testDataMedium);
        }

        // 🔹 Обработка клика по кнопке с множеством ошибок
        if (e.target === btnControlFormMany) {
            // Проверяем все возможные срабатывания валидации, включая файл
            controlForm(testDataHard);
        }

    });





    // Функция отвечает за счётчик символов под полем комментария
    function formCommentCharCounter () {
        const commentInput = document.querySelector('#comment');
        const maxSymbols = 200;
        let charactersNow = commentInput.value.length;
        document.querySelector(".textarea-form__char-counter").textContent = `${charactersNow} / ${maxSymbols}`;
        if (charactersNow < 200) {

            // Событие input в JavaScript срабатывает каждый раз при изменении значения элемента управления формой. Оно возникает, когда пользователь изменяет содержимое поля для ввода информации.
            commentInput.addEventListener("input", function (e) {
                charactersNow = commentInput.value.length;
                document.querySelector(".textarea-form__char-counter").textContent = `${charactersNow} / ${maxSymbols}`;
                if (charactersNow === 200) {
                    document.querySelector(".textarea-form__char-counter").classList.add("textarea-form__char-counter_red");
        
                } else {
                    document.querySelector(".textarea-form__char-counter").classList.remove("textarea-form__char-counter_red");
                }
            });
        } 

     

    }

    formCommentCharCounter();



    // Событие submit в JavaScript срабатывает, когда пользователь пытается отправить форму.
    skillsForm.addEventListener("submit", function (e) {
        e.preventDefault();
        


    
            // Поля формы
        const firstNameInput = document.querySelector('#firstName');
        // const lastNameInput = document.querySelector('#lastName');
        const emailInput = document.querySelector('#email');
        const phoneInput = document.querySelector('#phone');
        const commentInput = document.querySelector('#comment');
        const avatarInput = document.querySelector("#form-avatar");
        const checkbox = document.querySelector('#privacyPolicy');

        // Получаем их значения
        const firstName = firstNameInput.value.trim();
        // const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const comment = commentInput.value.trim();
        // Есть ли avatarInput.files[0], и только тогда перезаписывать avatarFile
        if (avatarInput.files.length > 0) {
            avatarFile = avatarInput.files[0];
        }
     
        const isPrivacyAccepted = checkbox.checked;
        console.log(isPrivacyAccepted);
        


        //Функция вывода ошибки

        function renderErorForm (input, descr, checkbox = "Проверьте поля ввода - у Вас ошибка") {
            console.log(`Input: ${input}`);
            

            //Если перед input нет соседа с классом errorForm, то ...
                if (!input.previousElementSibling.classList.contains("errorForm")) {
                    input.insertAdjacentHTML("beforebegin", `
                    
                    <div class="errorForm">${descr}</div>
                    `);

                }


    
                


                // При фокусе поля удаляем текст ошибки
                // input.classList.add("errorInput");
                input.addEventListener("focus", function (e) {
                    if (document.querySelector(".errorForm")) {
                        document.querySelector(".errorForm").remove();
                    }
                });

    
        }

        function checkInputs () {
            // Регулярные выражения для проверок

            const namePattern = /^[A-Za-zА-Яа-яЁё]+(-[A-Za-zА-Яа-яЁё]+)?$/; //Для имени и фамилии
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i; // Для email
            const phoneRegex = /^\+7\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/; // Для телефона
            let nameErrors = [];
            
            // Проверяем поле имени и фамилии
            // Длинна не менее 2 символа
            if (firstName.length < 2) {
                nameErrors.push("Имя должно содержать минимум два символа");
                hasErrors = true;
            } 

            // Должны быть только буквы, не менее 2х букв, допускается дефис
            if (!namePattern.test(firstName)) {
                nameErrors.push("Допустимы только буквы и дефис");
                hasErrors = true;
            }

            function checkBadNames () {
                const badWords = [
                    "хуй", "хуи", "хуя", "хуе", "хую", "хуйня", "хуйню", "хуесос", "хуесоска",
                    "пизд", "пизда", "пиздец", "пиздюк", "пизду", "пизжу", "пёзд", "пижон",
                    "еба", "ебу", "ебл", "ебан", "ебать", "ёб", "ебись", "уебище", "выеб",
                    "бляд", "бля", "блять", "блядина", "блят", "бляха", "блядство",
                    "гандон", "гондон", "придурок", "долбаёб", "долбоеб", "дебил", "идиот",
                    "мразь", "сука", "сучка", "сцука", "ублюдок", "манда", "мандон", "шалава",
                    "шлюха", "негр", "пидор", "пидр", "педик", "педрил", "чмо", "сволочь",
                    "мудак", "мудачье", "задрот", "зассал", "обосс", "соси", "тварь", "жопа",
                    "зопа", "говно", "дерьмо", "срал", "сру", "ссышь", "какашка", "залупа",
                    "порн", "анус", "анальный", "секс", "ебись", "насрал", "нассал"
                  ];
                const name = firstName.toLowerCase();
                 // Удалим спецсимволы и цифры, чтобы не обойти фильтр (напр. "ху#й", "е6а")
                const cleaned = name.replace(/[^а-яёa-z]/gi,"");
                 // Проверяем каждое слово, но с условиями:
                const hasBadWord = badWords.some(function (bad) {
                    // Точное совпадение
                    if (cleaned === bad) return true;
                    // Совпадение внутри, но не в фамилиях
                    const dangerous = ["ёб", "еб", "хуй", "пизд", "бляд", "сука", "шлюх"];
                    // Метод includes в JavaScript проверяет наличие элемента в массиве. Параметром принимает значение для поиска. Если такой элемент есть в массиве, то метод возвращает true, а если нет, то false.
                    if (dangerous.includes(bad)) {
                        // new RegExp - в JavaScript — конструктор объекта, который позволяет создавать регулярные выражения. 
                        return new RegExp(`(^|[^а-яёa-z])${bad}`, "i").test(cleaned);
                    }
                });
                if (hasBadWord) {
                    nameErrors.push("Имя содержит недопустимые слова");
                    hasErrors = true;
                }
            }

            checkBadNames();

            // console.log(nameErrors);
            

            if (nameErrors.length > 0) {
                renderErorForm(firstNameInput, nameErrors.join("<br>"));
            }


            if (!emailRegex.test(email)) {
                renderErorForm(emailInput, "Проверте коорректность введенного Email");
                hasErrors = true;
            }

            if (!phoneRegex.test(phone)) {
                renderErorForm(phoneInput, "Проверте коорректность введенного номер");
                hasErrors = true;
            }
        }

        checkInputs();

        

        // Проверка поля комментария
        function checkComment () {
        let commentError = [];
        const onlyEmojiOrSymbols = /^[^\wа-яА-ЯёЁ]+$/u; // строка без букв и цифр
        const spamOrLinksPattern = /(http:\/\/|https:\/\/|www\.|\.ru|\.com|\.net|\@)/i;
         // Проверка на то, что комментарий состоит не только из смайлов и спецсимволов
        
        if (onlyEmojiOrSymbols.test(comment)) {
            commentError.push("Комментарий не должен состоять только из смайлов или символов");
            hasErrors = true;
            }
    
            // Проверка на наличие ссылок или спама
           
            if (spamOrLinksPattern.test(comment)) {
            commentError.push("Комментарий не должен содержать ссылки или подозрительный текст");
            hasErrors = true;
        }

        console.log(commentError);
        

        renderErorForm(commentInput,commentError.join("<br>"));

        }

        checkComment();

        // Проверяем файл аватарки пользователя

        function checkAvatar () {
            const avatarError = [];
            const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
            const maxSize = 2 * 1024 * 1024;
            console.log(avatarFile);
            
            if (avatarFile) {
                if (avatarFile.size > maxSize) {
                    avatarError.push("Размер файла не должен превышать 2 МБ");
                }
                if (!allowedTypes.includes(avatarFile.type)) {
                    avatarError.push("Допустимы только изображения (JPG, PNG, WEBP, GIF)");
                }
            }




            console.log(avatarError);
            
            if (avatarError.length > 0) {
                renderErorForm(avatarInput, avatarError.join("<br>"));
            }
           
        }

        checkAvatar();

        // 🔍 Функция для проверки, поставил ли пользователь галочку на согласие с политикой конфиденциальности
        function checkCheckbox() {
        // Если чекбокс НЕ отмечен
        if (!checkbox.checked) {
            // Устанавливаем флаг ошибки — форма не будет отправлена
            hasErrors = true;

            // Создаём div для отображения ошибки
            const textErorr = document.createElement("div");
            textErorr.className = `errorForm`;

            // Добавляем в него текст ошибки
            textErorr.innerHTML = `Подтвердите согласие с политикой конфиденциальности`;

            // Проверяем, есть ли уже такой текст ошибки внутри .form__checkbox
            const checkboxWrapper = document.querySelector(".form__checkbox");

            // Если ошибки ещё нет — вставляем сообщение об ошибке
            if (!checkboxWrapper.querySelector(".errorForm")) {
                checkboxWrapper.prepend(textErorr);
            }
        }
        }


        checkCheckbox();



        // Отправляем данные на сервер

        // if (!hasErrors) {
        //     const formData = new FormData();
        //     formData.append("name", firstName);
        //     formData.append("email", email);
        //     formData.append("phone", phone);
        //     formData.append("comment", comment);
        //     formData.append("checkbox", isPrivacyAccepted);

        //     if (avatarFile) {
        //         formData.append("avatar", avatarFile);
        //     }


        //     fetch("https://form-backend-721k.onrender.com/api/form", {
        //         method: "POST",
        //         body: formData,
        //     })
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         alert(`Ответ от сервера: ${data}`)
        //     })
        //     .catch(function (err) {
        //         alert(`Ошибка при отправке дакнных: ${err}`)
        //     });
        // }


        document.activeElement.blur();



    });

}

initFormModule();
