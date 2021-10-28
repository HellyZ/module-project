/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"30 october 2021\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar menu = function menu() {\n  var menuBtn = document.querySelector(\".menu\");\n  var menu = document.querySelector(\"menu\");\n  var closeBtn = menu.querySelector(\".close-btn\");\n  var menuItems = menu.querySelectorAll(\"ul>li>a\");\n\n  var handleMenu = function handleMenu() {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  closeBtn.addEventListener(\"click\", handleMenu);\n  menuBtn.addEventListener(\"click\", handleMenu);\n  menuItems.forEach(function (item) {\n    return item.addEventListener(\"click\", function () {\n      return handleMenu();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction fadeIn(elem, speed) {\n  if (!elem.style.opacity) {\n    elem.style.opacity = 0;\n  }\n\n  var inInterval = setInterval(function () {\n    elem.style.opacity = Number(elem.style.opacity) + 0.02;\n    if (elem.style.opacity >= 1) clearInterval(inInterval);\n  }, speed / 50);\n}\n\nfunction fadeOut(elem, speed) {\n  if (!elem.style.opacity) {\n    elem.style.opacity = 1;\n  }\n\n  var inInterval = setInterval(function () {\n    elem.style.opacity = Number(elem.style.opacity) - 0.02;\n\n    if (elem.style.opacity <= 0) {\n      clearInterval(inInterval);\n      elem.style.display = \"none\";\n    }\n  }, speed / 50);\n}\n\nvar modal = function modal() {\n  var btns = document.querySelectorAll(\".popup-btn\");\n  var modal = document.querySelector(\".popup\");\n  var closeBtn = document.querySelector(\".popup-close\");\n\n  var handleModal = function handleModal() {\n    if (modal.style.display == \"block\") {\n      fadeOut(modal, 500);\n    } else {\n      modal.style.display = \"block\";\n      fadeIn(modal, 500);\n    }\n  };\n\n  var renderModal = function renderModal(btns) {\n    var width = document.documentElement.clientWidth;\n\n    if (width < 768) {\n      btns.forEach(function (btn) {\n        btn.removeEventListener(\"click\", handleModal, false);\n      });\n    } else {\n      btns.forEach(function (btn) {\n        btn.addEventListener(\"click\", handleModal);\n      });\n    }\n  };\n\n  window.addEventListener(\"load\", function () {\n    return renderModal(btns);\n  }, false);\n  window.addEventListener(\"resize\", function () {\n    return renderModal(btns);\n  }, false);\n  closeBtn.addEventListener(\"click\", handleModal, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timer = function timer(deadline) {\n  var timerDays = document.getElementById(\"timer-days\");\n  var timerHours = document.getElementById(\"timer-hours\");\n  var timerMinutes = document.getElementById(\"timer-minutes\");\n  var timerSeconds = document.getElementById(\"timer-seconds\");\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    var days = Math.floor(timeRemaining / 60 / 60 / 24);\n    var hours = Math.floor(timeRemaining / 60 / 60 % 24);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var seconds = Math.floor(timeRemaining % 60);\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var updateClock = function updateClock() {\n    var getTime = getTimeRemaining();\n    var interval;\n    timerDays.textContent = getTime.days.toString().length > 1 ? getTime.days : \"0\" + getTime.days;\n    timerHours.textContent = getTime.hours.toString().length > 1 ? getTime.hours : \"0\" + getTime.hours;\n    timerMinutes.textContent = getTime.minutes.toString().length > 1 ? getTime.minutes : \"0\" + getTime.minutes;\n    timerSeconds.textContent = getTime.seconds.toString().length > 1 ? getTime.seconds : \"0\" + getTime.seconds;\n\n    if (getTime.timeRemaining > 0) {\n      interval = setInterval(updateClock, 1000);\n    } else {\n      clearInterval(interval);\n      console.log(\"stop\");\n      timerDays.textContent = timerHours.textContent = timerMinutes.textContent = timerSeconds.textContent = \"00\";\n    }\n  };\n\n  updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;