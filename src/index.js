import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import handleValidation from "./modules/validateFields";
import sliderSwiper from "./modules/sliderSwiper";

timer("31 october 2021");
menu();
modal();
handleValidation();
sliderSwiper();

// const { timer } = require("./modules/timer");
// const { menu } = require("./modules/menu");
// const { modal } = require("./modules/modal");

// const timer = (deadline) => {
//   const timerDays = document.getElementById("timer-days");
//   const timerHours = document.getElementById("timer-hours");
//   const timerMinutes = document.getElementById("timer-minutes");
//   const timerSeconds = document.getElementById("timer-seconds");

//   const getTimeRemaining = () => {
//     let dateStop = new Date(deadline).getTime();
//     let dateNow = new Date().getTime();
//     let timeRemaining = (dateStop - dateNow) / 1000;

//     let days = Math.floor(timeRemaining / 60 / 60 / 24);
//     let hours = Math.floor((timeRemaining / 60 / 60) % 24);
//     let minutes = Math.floor((timeRemaining / 60) % 60);
//     let seconds = Math.floor(timeRemaining % 60);

//     return { timeRemaining, days, hours, minutes, seconds };
//   };

//   const updateClock = () => {
//     let getTime = getTimeRemaining();
//     let interval;
//     timerDays.textContent =
//       getTime.days.toString().length > 1 ? getTime.days : "0" + getTime.days;
//     timerHours.textContent =
//       getTime.hours.toString().length > 1 ? getTime.hours : "0" + getTime.hours;
//     timerMinutes.textContent =
//       getTime.minutes.toString().length > 1
//         ? getTime.minutes
//         : "0" + getTime.minutes;
//     timerSeconds.textContent =
//       getTime.seconds.toString().length > 1
//         ? getTime.seconds
//         : "0" + getTime.seconds;

//     if (getTime.timeRemaining > 0) {
//       interval = setInterval(updateClock, 1000);
//     } else {
//       clearInterval(interval);
//       console.log("stop");
//       timerDays.textContent =
//         timerHours.textContent =
//         timerMinutes.textContent =
//         timerSeconds.textContent =
//           "00";
//     }
//   };
//   updateClock();
// };

// const menu = () => {
//   const menuBtn = document.querySelector(".menu");
//   const menu = document.querySelector("menu");
//   const closeBtn = menu.querySelector(".close-btn");
//   const menuItems = menu.querySelectorAll("ul>li>a");

//   const handleMenu = () => {
//     menu.classList.toggle("active-menu");
//   };

//   closeBtn.addEventListener("click", handleMenu);
//   menuBtn.addEventListener("click", handleMenu);
//   menuItems.forEach((item) =>
//     item.addEventListener("click", () => handleMenu())
//   );
// };

// function fadeIn(elem, speed) {
//   if (!elem.style.opacity) {
//     elem.style.opacity = 0;
//   }

//   let inInterval = setTimeout(function () {
//     elem.style.opacity = Number(elem.style.opacity) + 0.2;
//     if (elem.style.opacity >= 1) clearTimeout(inInterval);
//   }, speed / 50);
// }

// function fadeOut(elem, speed) {
//   if (!elem.style.opacity) {
//     elem.style.opacity = 1;
//   }

//   let inInterval = setTimeout(function () {
//     elem.style.opacity = Number(elem.style.opacity) - 0.2;
//     if (elem.style.opacity <= 0) {
//       clearTimeout(inInterval);
//       elem.style.display = "none";
//     }
//   }, speed / 50);
// }

// const modal = () => {
//   const btns = document.querySelectorAll(".popup-btn");
//   const modal = document.querySelector(".popup");
//   const closeBtn = document.querySelector(".popup-close");
//   const handleModal = () => {
//     if (modal.style.display == "block") {
//       fadeOut(modal, 500);
//     } else {
//       modal.style.display = "block";
//       fadeIn(modal, 500);
//     }
//   };
//   const renderModal = (btns) => {
//     let width = document.documentElement.clientWidth;
//     if (width < 768) {
//       btns.forEach((btn) => {
//         btn.removeEventListener("click", handleModal, false);
//       });
//     } else {
//       btns.forEach((btn) => {
//         btn.addEventListener("click", handleModal);
//       });
//     }
//   };

//   window.addEventListener("load", () => renderModal(btns), false);
//   window.addEventListener("resize", () => renderModal(btns), false);
//   closeBtn.addEventListener("click", handleModal, false);
// };

// const validate = (
//   fieldValue,
//   replacePattern,
//   clearDoubleSigns,
//   clearNotAllowed
// ) => {
//   fieldValue.value = fieldValue.value
//     .replace(clearDoubleSigns, (str, match) => {
//       return match[0];
//     })
//     .replace(clearNotAllowed, "");
//   if (replacePattern.test(fieldValue.value)) {
//     return {
//       isInputValid: true,
//       errorMessage: "",
//     };
//   } else {
//     return {
//       isInputValid: false,
//       errorMessage: fieldValue.title,
//     };
//   }
// };

// function handleValidation(event) {
//   let field = event.target;
//   if (field.name == "user_email") {
//     console.log(field.value);
//     // только  латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
//     const pattern = /[a-zA-Z@_.\!~*'-]+/;
//     field.value = field.value
//       .replace(/([ \-])\1+/g, function (str, match) {
//         return match[0];
//       })
//       .replace(/[ \^!#$%&]/g, "");

//     if (pattern.test(field.value)) {
//       return {
//         isInputValid: true,
//         errorMessage: "",
//       };
//     } else {
//       return {
//         isInputValid: false,
//         errorMessage: field.title,
//       };
//     }
//   }

//   if (field.name == "user_message") {
//     // только  латиницы в любом регистре и спецсимволы:  @  -  _  . ! ~ * '
//     const pattern = /[а-яА-Я- ]+/;
//     field.value = field.value
//       .replace(/([ \-])\1+/g, function (str, match) {
//         return match[0];
//       })
//       .replace(/[^0-9а-яА-Я- ]/g, "");

//     if (pattern.test(field.value)) {
//       return {
//         isInputValid: true,
//         errorMessage: "",
//       };
//     } else {
//       return {
//         isInputValid: false,
//         errorMessage: field.title,
//       };
//     }
//   }

//   if (field.name == "user_phone") {
//     const pattern = /[0-9\-\(\)]+/;
//     field.value = field.value
//       .replace(/([ \-])\1+/g, function (str, match) {
//         return match[0];
//       })
//       .replace(/[^0-9\-\(\)]/g, "");

//     if (pattern.test(field.value)) {
//       return {
//         isInputValid: true,
//         errorMessage: "",
//       };
//     } else {
//       return {
//         isInputValid: false,
//         errorMessage: field.title,
//       };
//     }
//   }
// }

// document
//   .querySelectorAll("#form2 input")
//   .forEach((item) => item.addEventListener("blur", handleValidation));
