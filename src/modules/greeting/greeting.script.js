const weekDay = document.getElementById("weekDay");
const newYearTimer = document.getElementById("newYearTimer");
let date = new Date();

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

function timeLeft(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

const clock = () => {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let midday;

  hours = updateTime(hours);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);

  midday = hours >= 12 ? "PM" : "AM";

  document.getElementById(
    "clock"
  ).innerHTML = `<span>Текущее время:</span>:<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span><span>${midday}</span>`;

  setTimeout(function () {
    clock();
  }, 1000);

  if (hours < 12) {
    greeting = "Доброе утро! ";
  }

  if (hours >= 12 && hours <= 16) {
    greeting = "Добрый день ";
  }

  if (hours >= 17 && hours <= 20) {
    greeting = "Добрый вечер! ";
  }

  if (hours >= 21 && hours <= 24) {
    greeting = "Доброй ночи! ";
  }

  document.getElementById("greetings").innerHTML = greeting;
  weekDay.innerText = `Сегодня: ${days[day]}`;
};

const updateTime = (k) => {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
};

const newYearComes = () => {
  let date = new Date();

  let deadline = "January 1 " + (date.getFullYear() + 1) + " 00:00:00";

  let setClock = function (newyear) {
    let timeinterval = setInterval(function () {
      let t = timeLeft(newyear);

      newYearTimer.innerText = `До Нового Года осталось: ${t.days} дней`;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  };

  setClock(deadline);

};

newYearComes();
clock();
