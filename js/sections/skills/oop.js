`use strict`

function initOopModule() {
    // Проверка, что скрипт уже инициализирован (можно использовать для любого раздела)
    if (document.querySelector(".skills__oop[data-oop-initialized]")) {
    return;
    }

    const oopContainer = document.querySelector(".skills__oop");
    if (!oopContainer) return;
    oopContainer.setAttribute("data-oop-initialized", "true");

       // Массив фэйковых пользователей
       const fakeUsers = [
        {
            name: "Мария Смирнова",
            email: "mary19@gmail.com",
            age: 21,
            photo: "img/avatars/user0.webp"
        },
        {
            name: "Екатерина Орлова",
            email: "katya.orlova22@gmail.com",
            age: 22,
            photo: "img/avatars/user1.webp"
        },
        {
            name: "Алина Козлова",
            email: "alina_kz@gmail.com",
            age: 19,
            photo: "img/avatars/user2.webp"
        },
        {
            name: "Наталья Сидорова",
            email: "nata.sid@mail.ru",
            age: 23,
            photo: "img/avatars/user3.webp"
        },
        {
            name: "София Попова",
            email: "sofia.popova1999@yandex.ru",
            age: 25,
            photo: "img/avatars/user4.webp"
        },
        {
            name: "Александра Ефимова",
            email: "sasha_efimova@gmail.com",
            age: 20,
            photo: "img/avatars/user5.webp"
        },
        {
            name: "Виктория Павлова",
            email: "v.pavlova1999@mail.ru",
            age: 24,
            photo: "img/avatars/user6.webp"
        },
        {
            name: "Дарья Мельникова",
            email: "darya.melnikova@gmail.com",
            age: 22,
            photo: "img/avatars/user7.webp"
        },
        {
            name: "Анастасия Волкова",
            email: "nastya.vlk@yandex.ru",
            age: 21,
            photo: "img/avatars/user8.webp"
        },
        {
            name: "Ольга Киселева",
            email: "olga.kis@mail.ru",
            age: 23,
            photo: "img/avatars/user9.webp"
        },
        {
            name: "Полина Андреева",
            email: "polina.andreeva98@gmail.com",
            age: 20,
            photo: "img/avatars/user10.webp"
        },
        {
            name: "Вероника Соловьева",
            email: "veronika.solovyova@mail.ru",
            age: 24,
            photo: "img/avatars/user11.webp"
        },
        {
            name: "Ксения Григорьева",
            email: "ksusha.grig@mail.ru",
            age: 19,
            photo: "img/avatars/user12.webp"
        },
        {
            name: "Людмила Васильева",
            email: "lyudmila.vas@gmail.com",
            age: 21,
            photo: "img/avatars/user13.webp"
        },
        {
            name: "Елизавета Морозова",
            email: "liza.morozova@inbox.ru",
            age: 25,
            photo: "img/avatars/user14.webp"
        },
        {
            name: "Инна Лазарева",
            email: "inna.lazareva@yandex.ru",
            age: 22,
            photo: "img/avatars/user15.webp"
        },
        {
            name: "Жанна Королёва",
            email: "zhanna.koroleva@gmail.com",
            age: 20,
            photo: "img/avatars/user16.webp"
        },
        {
            name: "Татьяна Зайцева",
            email: "t.zaitseva2020@mail.ru",
            age: 23,
            photo: "img/avatars/user17.webp"
        },
        {
            name: "Нина Беляева",
            email: "nina.belyaeva89@gmail.com",
            age: 24,
            photo: "img/avatars/user18.webp"
        }
        ];

            
    class User {
        constructor(name, email, age, avatar) {
            this.name = name;
            this.email = email;
            this.age = age;
            this.avatar = avatar;
        }
    }

    class UserGenerator extends User {
        constructor(name, email, age, avatar) {
            super(name, email, age, avatar);
            this.previewContainer = document.querySelector(".skills__oop-data-preview-container");
            this.cardsContainer = document.querySelector(".skills__oop-cards");
            this.inputName = document.querySelector("#oop-name");
            this.inputEmail = document.querySelector("#oop-email");
            this.inputAge = document.querySelector("#oop-age");
            this.intervalId;
            this.currentIndex = 0;
            this.isGenerating = false;
            this.intervalId = null;
            this.buttonForm = document.querySelector(".skills__oop-data-form-btn");
            this.buttonClearClicked = false;
            this.buttonStopClicked = false;
        }

        start() {
            // Если генерация уже идёт — ничего не делаем (предотвращаем повторный запуск).
            if (this.isGenerating) return;
            // Ставим флаги, которые отвечают за работу кнопак Очистить и Стоп
            this.buttonClearClicked = false;
            this.buttonStopClicked = false;
            // Ставим флаг, что генерация активна. Это влияет на поведение кнопок и всей логики.
            this.isGenerating = true; // ставим флаг СРАЗУ!

            this.generateUser(fakeUsers); // Первая генерация сразу

            // Код в setInterval будет выполняться каждые 5 секунд до тех пор, пока ты не вызовешь clearInterval.
            this.intervalId = setInterval(() => {
                // const user = this.generateUser();
                // if (!user) return;
                this.generateUser(fakeUsers);
            }, 3000);
        }

        stop() {
            if (this.intervalId) {
                    // Ставим флаг, что кнопка стоп была нажата
                    this.buttonStopClicked = true;
                    clearInterval(this.intervalId);
                    this.intervalId = false;
                    // Вешаем флаг в false, чтобы можно было снова запустить генерацию при клике на Старт
                    this.isGenerating = false;
    
                    // Дополнительно удаляем превью карту, если она ещё есть
                    const previewCard = document.querySelector(".preview-card");
                    if (previewCard) {
                        previewCard.remove();
                    }
                    // Дополнительно удаляем главную карту, если она ещё есть
                    // const ganeralCard = document.querySelector(".ganeral-card");
                    // if (ganeralCard) {
                    //     ganeralCard.remove();
                    // }

            }
        }

        disableForm() {
            document.querySelectorAll(".skills__oop-data-form-input, .skills__oop-data-form-btn").forEach(function (elem) {
                elem.disabled = true;
            });

        }

        generateUser(users) {
            // Если currentIndex больше или равен длинне массива с карточками, то Стоп!
            if (this.currentIndex >= users.length) {
                this.stop();
                return null;
            }
            const user = users[this.currentIndex];
            // Передаём объект для вставки данных в форму
            this.updateForm(user);
            // Передаём объект с задержкой для вставки данных в превью карточки
            setTimeout(() => {
                this.previewCards(user, this.currentIndex);
            }, 500);

        // Передаём объект с задержкой для вставки данных в контейнер с карточками
            setTimeout(() => {
                this.generateCard(user, this.currentIndex);
            }, 1500);
           
            this.currentIndex++;
            // this.previewCards(user);
            // this.generateCard(user);

        }

        updateForm(user) {
            console.log(user);

            this.inputName.value = user.name;
            this.inputEmail.value = user.email;
            this.inputAge.value = user.age;

            setTimeout(() => {
                this.buttonForm.classList.add("flash");
            }, 200);


            setTimeout(() => {
                this.buttonForm.classList.remove("flash");
            }, 500);

        }

        creatCards(user, index, typeCard) {
             // Создаю Дом-элемент
             const card = document.createElement("div");
             card.className = `skills__oop-data-${typeCard}-card-${index} ${typeCard}-card`;

             card.innerHTML = `
 
                     <div class="${typeCard}-card__info">
                         <h2 class="card__info-name">${user.name}</h2>
                         <div class="card__info-age">Возраст: ${user.age}</div>
                         <div class="card__info-email">Email: ${user.email}</div>
                     </div>
 
             `;
            
             
            // // Создаём новый объект изображения, не добавляя его в DOM
            // const img = new Image();

            // // Указываем путь к фото, чтобы браузер начал его загружать
            // img.src = user.photo;

            // // Когда изображение будет полностью загружено...
            // img.onload = () => {
            // // ...мы вставляем его как фон карточки
            // // Благодаря этому фон не "дергается", а появляется сразу после загрузки
            // card.style.backgroundImage = `url('${user.photo}')`;
            // };
            card.style.backgroundImage = `url('${user.photo}')`;

             card.style.backgroundSize = "cover";
             card.style.backgroundPosition = "center";

             return card;
        }

        previewCards(user, index) {
           
            const previewCard = this.creatCards(user, index, "preview");
            // Вставляю карточку в контейнер превью
            // replaceChildren() считаются "лучше", чем insertAdjacentHTML(), особенно в твоём случае с генерацией карточек.
            this.previewContainer.replaceChildren(previewCard);

            // // Передаём объект дальше, для вывода карты в главный блок
            // this.generateCard(card);
        }

        generateCard(user, index) {
            const card = this.creatCards(user, index, "ganeral");
            if (!this.buttonClearClicked) {
                this.cardsContainer.prepend(card);
            }
            
            // Удаляем из превью загрузившуюся карточку
            this.previewContainer.innerHTML = "";

            this.inputName.value = "";
            this.inputEmail.value = "";
            this.inputAge.value = "";
        }

        clearCards() {

            if (!this.buttonClearClicked || this.buttonStopClicked != false
            ) {
            // Флаг, который фиксирует, что мы нажали на кнопку очистки
            this.buttonClearClicked = true;
            // Ставим флаг, который говорит что генерация не активна
            this.isGenerating = false;
            // Собираем все опубликованные карты в контейнере
            const previewCard = document.querySelector(".preview-card");
            if (previewCard) {
                previewCard.remove();
            }
            const allCardsContainer = document.querySelectorAll(".ganeral-card");
            // Перебераем и удаляем каждую карту
            allCardsContainer.forEach(function (card) {
                card.remove();
            });

            // const ganeralCard = document.querySelector(".ganeral-card");
            // if (ganeralCard) {
            //     ganeralCard.remove();
            // }
            // Останавливаем генирацию
            this.stop();

            // Вызываем метод, которые возвращает настройки по умолчанию
            this.reset();
            } 


        }

        reset() {
            this.currentIndex = 0;
            this.isGenerating = false;
            this.intervalId = null;
        }
    }
        

    function initUserGeneratorModule() {
        const btnStart = document.querySelector(".skills__oop-controls-btn_start");
        const btnStop = document.querySelector(".skills__oop-controls-btn_stop");
        const btnClear = document.querySelector(".skills__oop-controls-btn_clear");
        const user = new UserGenerator();
        user.disableForm();
        // Вешаю событие и использую метод bind, чтобы указать конекст this 
        btnStart.addEventListener("click", user.start.bind(user));
        btnStop.addEventListener("click", user.stop.bind(user));
        btnClear.addEventListener("click", user.clearCards.bind(user));
    }



    initUserGeneratorModule();

}

initOopModule();




  