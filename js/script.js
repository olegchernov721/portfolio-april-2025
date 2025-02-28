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



// Элеиенты страницы

// Дата и время в дашборде

const currentDate = document.querySelector(".dashboard__time-today");



const dashboardWeather = document.querySelector(".dashboard__weather");

// Слайдер элементы

const btnSliderLeft = document.querySelector(".slider__btn--left");
const btnSliderRight = document.querySelector(".slider__btn--right");

// Инпут даты и времени

const taskDateTime = document.querySelector(".datetime-local-task");

// Таск контейнер
const tasksContainerActive = document.querySelector(".task-manager-container-1");
const tasksContainerDelete = document.querySelector(".task-manager-container-2");

// Элементы формы
const formInput = document.querySelector(".task-manager-form__input-text");
const formTextarea = document.querySelector(".task-manager-form__input-textarea");
const formBtn = document.querySelector(".task-manager-form__add-task");

// Текст задач нет

const taskIsNot = document.querySelector(".taskIsNot");
const tabsContainer = document.querySelector(".task-manager-tabs");
// Таб удалённых элементов
const tabDeleteTask = document.querySelector(".task-tabs__delete");
// Таб действующих элементов
const tabCurrentTasks = document.querySelector(".task-tabs__active");
// Удалённые блоки задач

const taskHasClassDelete = document.querySelectorAll(".task-item_delete");

// Элементы блока с задачей
const taskItem = document.getElementsByClassName(".task-manager__container-item");
const taskTitle = document.querySelector(".task-item__head-title");
const taskTimer = document.querySelector(".task-item__head-timer");
const btnDeleteTask = document.querySelector(".task-item__head-btn");

// Api текущей погоды

  const weatherApi = async function () {

    const weatherToday = document.querySelector(".weather--1");
    const weatherTomorrow = document.querySelector(".weather--2");
    const weatheAfterTomorrow = document.querySelector(".weather--3");


    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5bc3ac787d2845d58b380218251202&q=horlivka&days=3&aqi=no&alerts=no&lang=ru`);
    const data = await response.json();
    console.log(data);
    // console.log(data.forecast.forecastday[0].day.condition.text);
    const html1 = `
  
          <div class="weather__box"> 
            <i class="fa-solid fa-cloud">Погода <br>на сегодня</i>
            <h2 class="weather__title">${data.forecast.forecastday[0].day.condition.text}</h2>
            <div class="weather__temp">Температура воздуха: °C: ${data.forecast.forecastday[0].day.avgtemp_c}</div>
            <div class="weather__cloud">Влажность: ${data.forecast.forecastday[0].day.avghumidity}%</div>
            <div class="weather__wind">Макс. скорость ветра: ${data.forecast.forecastday[0].day.maxwind_kph} км/час</div>
          </div>
  
  `;

  const html2 = `
  
  <div class="weather__box"> 
    <i class="fa-solid fa-cloud">Погода <br>на ${data.forecast.forecastday[1].date}</i>
    <h2 class="weather__title">${data.forecast.forecastday[1].day.condition.text}</h2>
    <div class="weather__temp">Температура воздуха: °C: ${data.forecast.forecastday[1].day.avgtemp_c}</div>
    <div class="weather__cloud">Влажность: ${data.forecast.forecastday[1].day.avghumidity}%</div>
    <div class="weather__wind">Макс. скорость ветра: ${data.forecast.forecastday[1].day.maxwind_kph} км/час</div>
  </div>

`;

const html3 = `
  
<div class="weather__box"> 
  <i class="fa-solid fa-cloud">Погода <br>на ${data.forecast.forecastday[2].date}</i>
  <h2 class="weather__title">${data.forecast.forecastday[2].day.condition.text}</h2>
  <div class="weather__temp">Температура воздуха: °C: ${data.forecast.forecastday[2].day.avgtemp_c}</div>
  <div class="weather__cloud">Влажность: ${data.forecast.forecastday[2].day.avghumidity}%</div>
  <div class="weather__wind">Макс. скорость ветра: ${data.forecast.forecastday[2].day.maxwind_kph} км/час</div>
</div>

`;
  
  weatherToday.innerHTML = "";
  weatherToday.insertAdjacentHTML("beforeend", html1);

  weatherTomorrow.innerHTML = "";
  weatherTomorrow.insertAdjacentHTML("beforeend", html2);

  weatheAfterTomorrow.innerHTML = "";
  weatheAfterTomorrow.insertAdjacentHTML("beforeend", html3);
  

  }
  
//   weatherApi();
// // Обновление данных погоды
//   setInterval(function () {
//     weatherApi();
//   }, 1000);


//   const forecastWeatherApi = fetch(`https://api.weatherapi.com/v1/forecast.json?key=5bc3ac787d2845d58b380218251202&q=horlivka&days=3&aqi=no&alerts=no&lang=ru`)
// .then(function (response) {
//   return response.json();
// }).then(function (data) {
//   console.log(data);
// });

// console.log(forecastWeatherApi);



// Дата время на дашборде

function currentDateNow () {
  const date = new Date();
  const nowDay = date.getDate();
  const month = `${date.getMonth()+1}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const min = `${date.getMinutes()}`.padStart(2, "0");
  const sec = `${date.getSeconds()}`.padStart(2, "0");
    return`${nowDay}.${month}.${date.getFullYear()} - ${hour}:${min}:${sec}`;
}


currentDate.textContent = currentDateNow();
 setInterval(function () {
    const date = new Date();
    currentDate.textContent = currentDateNow();
    
}, 1000);

// Слайдер

function dashboardSlider() {
  const containerSlider = document.querySelector(".dashboard__slider");
  const allSlides = document.getElementsByClassName("slide");

  let currSlide = 1;

  const firstSlide = allSlides[0];
  const lastSlide = allSlides[allSlides.length - 1];

  // Создаем клоны первого и последнего слайдов

  const firstClone = firstSlide.cloneNode(true);
  const lastClone = lastSlide.cloneNode(true);

  // firstClone.classList.add("clone", "clone--1");
  // lastClone.classList.add("clone", "clone--2");

  // Добавляем клоны в контейнер слайдера
  containerSlider.appendChild(firstClone);
  containerSlider.insertBefore(lastClone, firstSlide);

  const slideMax = allSlides.length;

  // Устанавливаем начальные позиции для всех слайдов
  function setInitialPositions() {
    Array.from(allSlides).forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - 1) * 105}%)`;
    });
  }

  // Функция для перехода к определенному слайду
  function goToSlide(slide) {
    Array.from(allSlides).forEach((s, i) => {
      s.style.transition = "transform 0.6s ease";
      s.style.transform = `translateX(${(i - slide) * 105}%)`;
    });

    // Если текущий слайд - первый клон, перемещаем к последнему оригинальному слайду
    if (slide === 0) {
      setTimeout(() => {
        currSlide = slideMax - 2;
        Array.from(allSlides).forEach((s, i) => {
          s.style.transition = "none";
          s.style.transform = `translateX(${(i - currSlide) * 105}%)`;
        });
      }, 600);
    // Если текущий слайд - последний клон, перемещаем к первому оригинальному слайду
    } else if (slide === slideMax - 1) {
      setTimeout(() => {
        currSlide = 1;
        Array.from(allSlides).forEach((s, i) => {
          s.style.transition = "none";
          s.style.transform = `translateX(${(i - currSlide) * 105}%)`;
        });
      }, 600);
    }
  }

  // Функция для перехода к предыдущему слайду
  function btnLeft() {
    currSlide--;
    goToSlide(currSlide);
  }

  // Функция для перехода к следующему слайду
  function btnRight() {
    currSlide++;
    goToSlide(currSlide);
  }

  // Добавляем обработчики событий для кнопок слайдера
  btnSliderLeft.addEventListener("click", btnLeft);
  btnSliderRight.addEventListener("click", btnRight);

  // Устанавливаем начальные позиции для всех слайдов
  setInitialPositions();
}


// setTimeout(dashboardSlider, 100);

// Загружаем данные погоды и создаем слайдер после загрузки данных
Promise.all([weatherApi()]).then(() => {
  dashboardSlider();
});

// Обновление данных погоды
setInterval(function () {
  weatherApi();
}, 1000);


// Таск менеджер


  class Task {
    constructor(title, descr, createdAt, id, timer) {
      this.title = title;
      this.descr = descr;
      this.createdAt = createdAt;
      this.id = id;
      this.timer = timer;
    }
  }
  
  class TaskManager {

    _tasks = [];
    _deleteTasks = [];
    newTask;
    constructor() {
      // this._removeTask.bind(this);
      formBtn.addEventListener("click", this._addTask.bind(this));
      tasksContainerActive.addEventListener("click", this._removeTask.bind(this));
      tabsContainer.addEventListener("click", this._switchTask.bind(this));
      
    }

    
    
    _addTask(e) {
      e.preventDefault();
      const title = formInput.value;
      const descr = formTextarea.value;
      const dateNow = Intl.DateTimeFormat(local, optionsDate).format(new Date());
      // const id = `${this._tasks.length + 1}`.padStart(2, "0");
      const id = `${Date.now()}`.slice(-5);
      const timer = taskDateTime.value;
      // const timeSec = (Date.parse(taskDateTime.value) - Date.now()) / 1000;
      // console.log(timer);
      
      
      this.newTask = new Task(title, descr, dateNow, id, timer);
      this._tasks.push(this.newTask);
      console.log(this._tasks);

      
      
      // console.log(this._tasks);
      this._renderTask(this.newTask);
      
      // if (this._tasks.length < 1) return;

      // Показываем нужный таб, если задачи уже есть на страницы и мы переключили таб
      document.querySelector(`[data-tasktab="2"]`).classList.remove("tab__active");
      document.querySelector(`[data-tasktab="1"]`).classList.add("tab__active");

      // Показываем нужный контейнер с задачами
      document.querySelector(".task-manager-container-2").classList.remove("task-container-active");
      document.querySelector(".task-manager-container-1").classList.add("task-container-active");


      
    }


    // Находим и удаляем нужный элемент
    _removeTask(e) {
      if (!e.target.classList.contains("task-item__head-btn")) return;
       const id = e.target.closest(".task-item").dataset.id;
       console.log(id);
       
       console.log(this._tasks);
       
      //  const task = this._tasks.find((t) => t.id === id);
      //  console.log(task);

      // Узнаю индекс элемента на котором была нажата кнопка
      const index = this._tasks.findIndex((task) => {
        return task.id === id;
      });
      // Помещаю элемент с таким же id как на том где нажата кнопка
      const task = this._tasks.find((task) => {
        return task.id === id;
      });
       
       this._deleteTasks.push(task);
       this._tasks.splice(index, 1);

       console.log(this._deleteTasks);

      //  this._tasks.forEach((task) => {
      //   this._renderTask(task);
      //  });

      //  Удаляю блок задачи, в котором нажали кнопку удалить

       const deleteTask = e.target.closest(".task-item");
       deleteTask.classList.add("hidden__scale");
   
       setTimeout(function () {
        deleteTask.classList.add("hidden");
       }, 300);
       console.log(deleteTask);
       
      
      //  счёт удалённых задач
      tabDeleteTask.textContent = `Удалённые задачи(-${this._deleteTasks.length})`;
      tabCurrentTasks.textContent = `Активные задачи(+${this._tasks.length})`;
  
      //  console.log(this._deleteTasks); // Некоторые задачи-объекты в этом массиве почему то undefined , почему? - Если я наживаю на кнопку удалить слишком быстро, то записывается undefined, видимо не успевает прийти. 
      //  Но счёт удалённых идёт правильно, может просто не успевает обновится?
       
      }
      // Переключатель табов и показ нужных контейнеров
      _switchTask(e) {
        e.preventDefault();
        const clickend = e.target.closest(".tab-item");
        console.log(clickend);
        if (!clickend) return;

        document.querySelectorAll(".tab-item").forEach(function (tab) {
          tab.classList.remove("tab__active");
          clickend.classList.add("tab__active");
        });

        document.querySelectorAll(".task-manager-cont").forEach(function (container) {
          container.classList.remove("task-container-active");
          container.classList.add("hidden");
        document.querySelector(`.task-manager-container-${clickend.dataset.tasktab}`)
        .classList.add("task-container-active");
        });

        tasksContainerDelete.innerHTML = "";
        this._removeDeleteTask(this._deleteTasks);


        
      }

    // _deadLineTask() {
      
    // }



    _renderTask(task) {
      
    
      let html = `
      
      <div class="task-manager__container-item task-item" data-id="${task.id}">
      <div class="task-item__head">
        <div class="task-item__head-title"><span> id:${task.id}:</span> ${task.title}</div>
        <div class="task-item__head-timer-${task.id}"></div>
        <button class="task-item__head-btn">удалить задачу</button>
      </div>
      <div class="task-item__descr">${task.descr}</div>
      <div class="task-item__date">${task.createdAt}</div>
    </div>

    `;


    if (taskIsNot) {
      taskIsNot.remove();
    } 

    if (tabDeleteTask.classList.contains("tab__active")) {
      taskHasClassDelete.forEach((val) => val.classList.add("hidden__scale"));
   
       setTimeout(function () {
        taskHasClassDelete.forEach((val) => val.classList.add("hidden"));
       }, 300);
    }

    tasksContainerActive.insertAdjacentHTML("afterbegin", html);
    tabCurrentTasks.textContent = `Активные задачи(+${this._tasks.length})`;

    // if (!taskItem) return;
    // setTimeout(this._renderTaskTimer(task), 300);
    this._renderTaskTimer(task);
    }


 

  _removeDeleteTask(tasks) {
  console.log(tasks);
  
    
    tasks.forEach(function (task) {
      let html = `
      
      <div class="task-manager__container-item task-item task-item_delete" data-id="${task.id}">
      <div class="task-item__head">
        <div class="task-item__head-title"><span> id:${task.id}:</span> ${task.title}</div>
        <div class="task-item__head-timer">Осталось  <span>1</span> дней, <span>23</span> часов, <span>15</span> мин, <span>35</span> сек</div>
        
      </div>
      <div class="task-item__descr">${task.descr}</div>
      <div class="task-item__date">${task.createdAt}</div>
    </div>

    `;

    // if (taskIsNot) {
    //   taskIsNot.remove();
    // } 

    tasksContainerDelete.insertAdjacentHTML("afterbegin", html);
    });

  }

    
  _renderTaskTimer(task) {
    function tick () {
      const milliseconds = Date.parse(this.timer);
      let timeSec = (milliseconds - Date.now()) / 1000; 
      console.log(timeSec);

      const day = Math.floor(timeSec / 60 / 60 / 24);
      const secAllDay = (60 * 60 * 24) * Math.floor(day);
      // console.log(secAllDay);
      console.log(Math.floor(day));

      const hour = `${Math.floor((timeSec - secAllDay) / 60 / 60)}`.padStart(2, "0");
      const secAllHour = (60 * 60) * Math.floor(hour);
      // console.log(Math.floor(hour));
      console.log(hour);
      // console.log(secAllHour);
      
      const min = `${Math.floor((timeSec - secAllDay - secAllHour) / 60)}`.padStart(2, "0");
      const secAllmin = 60 * Math.floor(min);
      // console.log(Math.floor(min));
      console.log(min);
      
      
      const sec = `${Math.floor(timeSec - secAllDay - secAllHour - secAllmin)}`.padStart(2, "0");
      // console.log(Math.floor(sec));
      console.log(sec);
      // timeSec -= 1;
      document.querySelector(`.task-item__head-timer-${task.id}`).textContent = `Осталось дней: ${day}, часов: ${hour}, минут: ${min}, секунд: ${sec}`;
      timeSec -= 1;
  }

  setInterval(tick.bind(task), 1000);
 
  }
    

  }

  const newTask = new TaskManager();

  // const newTask = new TaskManager();

 

















// // Сайт тренировок

// class Workout {
//   date = new Date();
//   id = (Date.now() + "").slice(-10);
//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance;
//     this.duration = duration;
//   }
//   _setDescription() {
//     const months = [
//       "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
//     ];
//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} ${ months[this.date.getMonth()]} ${this.date.getDate()}`;
//   }
// }

// class Running extends Workout {
//   type = "running";
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }
//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// class Cycling extends Workout {
//   type = "cycling";
//   constructor(coords, distance, duration, elevation) {
//     super(coords, distance, duration);
//     this.elevation = elevation;
//     this.calcSpeed();
//     this._setDescription();
//   }
//   calcSpeed() {
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }


// class App {
//   _workouts = [];
//   _map;
//   _mapEvent;
//   constructor() {
//     this._getPosition();
//     this._getLocalStorage();
//     form.addEventListener("submit", this._newWorkout.bind(this));
//     inputType.addEventListener("change" , this._toogleField.bind(this));
//     containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
//   }

//   // Запрос данных метоположения от пользователя, в моём случаи - в случаи отказа запуск функции-метода _loadMap
//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         function () {
      
//           alert("False");
          
          
//         }, this._loadMap.bind(this)

//       );
//   }

//   // Загрузка карты
//   _loadMap(position) {
//       // const latitude = position.coords.latitude;
//       // const longitube = position.coords.longitude;
//       const latitude = 48.285427;
//       const longitube = 38.125383;
//       const coords = [latitude, longitube];
      
//       this._map = L.map('map').setView(coords, 16);
  
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(this._map);
  

//   // Оброботчик события нажатия на карту, который запустит функцию-метод _showForm
//   this._map.on("click", this._showForm.bind(this));
  
//   this._workouts.forEach((work) => {
//     this._renderWorkMarker(work);
//   });

//   }

//   // Метод отображения формы при клике на карте.
//   _showForm(mapE) {
//       this._mapEvent = mapE;
//       form.classList.remove("hidden");
//       inputDistance.focus();
//   }

// // Метод переключает типы тренировок
//   _toogleField() {
//       inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
//       inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  
//     }
  
//   // Метод создаёт маркер на карте, после отправки формы.
//   _newWorkout(e) {
//     e.preventDefault();
//     const validInputs = (...inputs) => inputs.every((inp) => Number.isFinite(inp));
//     const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
//     // - получить данные из форм.
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     const {lat, lng} = this._mapEvent.latlng;
//     let workout;

//     if (type === "running") {
//       const cadence = +inputCadence.value;
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(cadence)
//         !validInputs(distance, duration, cadence) &&
//         !allPositive(distance, duration, cadence)
//       ) {
//         return alert("необходимо ввести целое положительное цисло");
        
        
//       }
//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     if (type === "cycling") {
//       const elevation = +inputElevation.value;
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(elevation)
//         !validInputs(distance, duration, elevation) &&
//         !allPositive(distance, duration)
//       ) {
//         return alert("необходимо ввести целое положительное цисло");
//       }
//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }
//     this._workouts.push(workout);
//     console.log(this._workouts);
    
//     // - проверить, что данные корректны
//     // - если мы создаем "пробежку" - то тогда мы должны создать объект пробежки.
//     // - если мы создаем "велосипед" - то тогда мы должны создать объект велосипед.
//     // - добавить созданный объект в массив workout
//     // - отобразить маркер тренировки на карте
//     this._renderWorkMarker(workout);
//     this._readerWorkout(workout);
//     this._hiddenForm();
//     this._setLocalStorage();
//   }



//   _renderWorkMarker(workout) {
//     // const {lat, lng} = this._mapEvent.latlng; переместил в метод _newWorkout
//     L.marker(workout.coords).addTo(this._map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: "mark-popup",
//     })
//   ).setPopupContent(`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`)
//     .openPopup();
//   }
//   _hiddenForm() {
//         // - очистить поля ввода и спрятать форму.

//         inputDistance.value = 
//         inputDuration.value = 
//         inputCadence.value = 
//         inputElevation.value = "";
//         form.classList.add("hidden");
//   }
//   // - рендер - список тренировок.

//   _readerWorkout(workout) {
//     let html = `
    
//           <li class="workout workout--${workout.type}" data-id="${workout.id}">
//           <h2 class="workout__title">${workout.description}</h2>
//           <div class="workout__details">
//             <span class="workout__icon">${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"}</span>
//             <span class="workout__value">${workout.distance}</span>
//             <span class="workout__unit">км</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">⏱️</span>
//             <span class="workout__value">${workout.duration}</span>
//             <span class="workout__unit">мин</span>
//           </div>
    
//     `;

//     if (workout.type === "running") {
//       html += `
      
//                 <div class="workout__details">
//             <span class="workout__icon">⚡️</span>
//             <span class="workout__value">${workout.pace.toFixed(1)}</span>
//             <span class="workout__unit">мин/км</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">🦶🏼</span>
//             <span class="workout__value">${workout.cadence}</span>
//             <span class="workout__unit">шаг</span>
//           </div>
//         </li>
      
//       `;
//     }

//     if (workout.type === "cycling") {
//       html += `
      
//        <div class="workout__details">
//             <span class="workout__icon">⚡️</span>
//             <span class="workout__value">${workout.speed.toFixed(1)}</span>
//             <span class="workout__unit">км/час</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">⛰</span>
//             <span class="workout__value">${workout.elevation}</span>
//             <span class="workout__unit">м</span>
//           </div>
//         </li>
      
//       `;
//     }
//     form.insertAdjacentHTML("afterend", html);
//   }


//   _moveToPopup(e) {
//     const workoutEl = e.target.closest(".workout");
//     if (!workoutEl) return;

//     const workout = this._workouts.find((work) => work.id === workoutEl.dataset.id);
    
//     this._map.setView(workout.coords, 16, {
//       animate: true,
//       pan: {duration: 1},
//     });
//   }

//   _setLocalStorage() {
//     localStorage.setItem("workouts", JSON.stringify(this._workouts));
//   }

//   _getLocalStorage() {
//     const data = JSON.parse(localStorage.getItem("workouts"));
//     if (!data) return;
//     this._workouts = data;
//     this._workouts.forEach((work) => {
//       this._readerWorkout(work);
//     });
//   }

//   reset() {
//     localStorage.removeItem("workouts");
//     location.reload();
//   }

// }

// const app = new App();

















































// const forecastWeatherApi = fetch(`https://api.weatherapi.com/v1/forecast.json?key=5bc3ac787d2845d58b380218251202&q=horlivka&lang=ru`)
// .then(function (response) {
//   return response.json();
// }).then(function (data) {
//   console.log(data);
// });

// console.log(forecastWeatherApi);




