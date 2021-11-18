/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var frontend;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/insyde-user-frontend.js":
/*!*************************************!*\
  !*** ./src/insyde-user-frontend.js ***!
  \*************************************/
/***/ (() => {

eval("window.addEventListener(\"load\", function () {\n  var close_button = document.querySelector(\".close-modal\");\n  var modal_wrap = document.querySelector(\".wp-block-eliasu-inpsyde-user .modal-wrap\");\n  var card = document.querySelector(\".wp-block-eliasu-inpsyde-user .user-card\");\n  close_button.addEventListener(\"click\", function () {\n    modal_wrap.classList.remove(\"inpsyde-user-active\");\n  });\n  card.addEventListener(\"click\", function () {\n    modal_wrap.classList.add(\"inpsyde-user-active\");\n  });\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/insyde-user-frontend.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/insyde-user-frontend.js"]();
/******/ 	frontend = __webpack_exports__;
/******/ 	
/******/ })()
;