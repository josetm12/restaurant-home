/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state) {
  let header;

  let divEl = document.createElement('div');
  let logoImg = new Image();
  let logoTextEl = document.createElement('span');
  let nav = createNav(state);

  divEl.classList.add('logo');
  logoImg.src = './assets/icons/menu.svg';
  logoTextEl.innerText = 'LOGO';

  divEl.appendChild(logoImg);
  divEl.appendChild(logoTextEl);

  header = document.createElement('header');

  header.append(divEl, nav);

  return header;
}

function createNav(state) {
  let nav = document.createElement('nav');

  debugger;
  ['Home', 'Menu', 'About Us'].forEach(function (item) {
    let aTag = document.createElement('a');
    aTag.classList.add('nav-item');
    aTag.setAttribute('href', '#');
    aTag.innerText = item;

    if (state.active === item) aTag.classList.add('active');

    nav.appendChild(aTag);
  });

  return nav;
}


/***/ }),

/***/ "./src/mainbody.js":
/*!*************************!*\
  !*** ./src/mainbody.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state) {
  let mainEl = document.createElement('main');

  mainEl.innerText = state.active;

  return mainEl;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _mainbody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainbody.js */ "./src/mainbody.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");




let rootEl = document.querySelector('#root');

var toggle = document.getElementById('theme-toggle');

var storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme);

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute('data-theme');
  var targetTheme = 'light';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

function updateTab(event) {
  console.log(event);
}

function renderPage(state) {
  let headerEl = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
  let mainEl = (0,_mainbody_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state);

  rootEl.replaceChildren();

  headerEl.addEventListener('click', (event) => {
    event.preventDefault();

    if ([...event.target.classList].indexOf('nav-item') > -1)
      renderPage({ active: event.target.innerText });
  });

  rootEl.append(headerEl, mainEl);
}

renderPage({ active: 'Home' });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSw2QkFBZSxvQ0FBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsNkJBQWUsb0NBQVU7QUFDekI7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNBO0FBQ1k7O0FBRTdDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzREFBTTtBQUN2QixlQUFlLHdEQUFJOztBQUVuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRCxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzPzM1NjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWUvLi9zcmMvbWFpbmJvZHkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgaGVhZGVyO1xuXG4gIGxldCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICBsZXQgbG9nb1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGV0IG5hdiA9IGNyZWF0ZU5hdihzdGF0ZSk7XG5cbiAgZGl2RWwuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBsb2dvSW1nLnNyYyA9ICcuL2Fzc2V0cy9pY29ucy9tZW51LnN2Zyc7XG4gIGxvZ29UZXh0RWwuaW5uZXJUZXh0ID0gJ0xPR08nO1xuXG4gIGRpdkVsLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBkaXZFbC5hcHBlbmRDaGlsZChsb2dvVGV4dEVsKTtcblxuICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBoZWFkZXIuYXBwZW5kKGRpdkVsLCBuYXYpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdihzdGF0ZSkge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgZGVidWdnZXI7XG4gIFsnSG9tZScsICdNZW51JywgJ0Fib3V0IFVzJ10uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGxldCBhVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFUYWcuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgICBhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgYVRhZy5pbm5lclRleHQgPSBpdGVtO1xuXG4gICAgaWYgKHN0YXRlLmFjdGl2ZSA9PT0gaXRlbSkgYVRhZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChhVGFnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBsZXQgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIG1haW5FbC5pbm5lclRleHQgPSBzdGF0ZS5hY3RpdmU7XG5cbiAgcmV0dXJuIG1haW5FbDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW5ib2R5LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hc3NldHMvY3NzL3N0eWxlcy5jc3MnO1xuXG5sZXQgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcblxudmFyIHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS10b2dnbGUnKTtcblxudmFyIHN0b3JlZFRoZW1lID1cbiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHxcbiAgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuICAgID8gJ2RhcmsnXG4gICAgOiAnbGlnaHQnKTtcbmlmIChzdG9yZWRUaGVtZSlcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHN0b3JlZFRoZW1lKTtcblxudG9nZ2xlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gIHZhciB0YXJnZXRUaGVtZSA9ICdsaWdodCc7XG5cbiAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgIHRhcmdldFRoZW1lID0gJ2RhcmsnO1xuICB9XG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRhcmdldFRoZW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGFyZ2V0VGhlbWUpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlVGFiKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZShzdGF0ZSkge1xuICBsZXQgaGVhZGVyRWwgPSBoZWFkZXIoc3RhdGUpO1xuICBsZXQgbWFpbkVsID0gbWFpbihzdGF0ZSk7XG5cbiAgcm9vdEVsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGhlYWRlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChbLi4uZXZlbnQudGFyZ2V0LmNsYXNzTGlzdF0uaW5kZXhPZignbmF2LWl0ZW0nKSA+IC0xKVxuICAgICAgcmVuZGVyUGFnZSh7IGFjdGl2ZTogZXZlbnQudGFyZ2V0LmlubmVyVGV4dCB9KTtcbiAgfSk7XG5cbiAgcm9vdEVsLmFwcGVuZChoZWFkZXJFbCwgbWFpbkVsKTtcbn1cblxucmVuZGVyUGFnZSh7IGFjdGl2ZTogJ0hvbWUnIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9