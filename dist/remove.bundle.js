"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["remove"],{

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearTask = (index, list) => {\n  if (list.length === 0) return;\n\n  list.splice(index - 1, 1);\n\n  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();\n  localStorage.setItem('tasks', JSON.stringify(list));\n\n  if (list.length === 0) return;\n\n  for (let i = index - 1; i < list.length; i += 1) {\n    const nextCheck = document.querySelector(`#task-${i + 2}`);\n    nextCheck.id = `task-${i + 1}`;\n    nextCheck.value -= 1;\n    list[i].index -= 1;\n    localStorage.setItem('tasks', JSON.stringify(list));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTask);\n\n//# sourceURL=webpack://to-do_list/./src/remove.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/remove.js"));
/******/ }
]);