"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["addTask"],{

/***/ "./src/addTaskUI.js":
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _move_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move.png */ \"./src/move.png\");\n/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash.png */ \"./src/trash.png\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n\n\n\n\nconst toDoListUI = document.querySelector('.to-do-list');\nconst endCont = document.querySelector('.clear');\n\nconst appendTask = (item, list) => {\n  const taskUI = document.createElement('li');\n  taskUI.innerHTML = `<div><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;\n  const moveImg = new Image();\n  moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;\n  taskUI.appendChild(moveImg);\n  moveImg.addEventListener('click', () => {\n    if (moveImg.src === _move_png__WEBPACK_IMPORTED_MODULE_0__) {\n      moveImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_1__;\n      moveImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';\n      taskUI.children[0].children[1].setAttribute('contenteditable', 'true');\n      endCont.style.fontSize = '25px';\n      endCont.style.color = 'rgba(243, 9, 9, 0.534)';\n      endCont.addEventListener('click', (e) => {\n        if (moveImg.src === _trash_png__WEBPACK_IMPORTED_MODULE_1__) {\n          e.target.textContent = 'Clear all completed';\n          e.target.style.background = 'rgba(168, 157, 157, 0.534)';\n          e.target.style.fontSize = '16px';\n          e.target.style.color = 'black';\n          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');\n          moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;\n\n          taskUI(() => {\n            localStorage.setItem('moveImg', JSON.stringify(_move_png__WEBPACK_IMPORTED_MODULE_0__));\n          }, [_move_png__WEBPACK_IMPORTED_MODULE_0__]);\n\n          list.forEach((element) => {\n            if (element.index === item.index) {\n              element.description = taskUI.children[0].children[1].textContent;\n              localStorage.setItem('tasks', JSON.stringify(list));\n            }\n          });\n        }\n      });\n    } else {\n      (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.index, list);\n    }\n  });\n  toDoListUI.appendChild(taskUI);\n  const check = taskUI.children[0].children[0];\n\n  if (item.completed === true) {\n    check.checked = true;\n    taskUI.children[0].style.textDecoration = 'line-through';\n  }\n\n  check.style.cursor = 'pointer';\n  moveImg.style.cursor = 'pointer';\n  check.addEventListener('click', () => {\n    if (check.checked === true) {\n      taskUI.children[0].style.textDecoration = 'line-through';\n      item.completed = true;\n      localStorage.setItem('tasks', JSON.stringify(list));\n    } else {\n      taskUI.children[0].style.textDecoration = 'none';\n      item.completed = false;\n      localStorage.setItem('tasks', JSON.stringify(list));\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTask);\n\n//# sourceURL=webpack://to-do_list/./src/addTaskUI.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearTask = (index, list) => {\n  if (list.length === 0) return;\n\n  list.splice(index - 1, 1);\n\n  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();\n  localStorage.setItem('tasks', JSON.stringify(list));\n\n  if (list.length === 0) return;\n\n  for (let i = index - 1; i < list.length; i += 1) {\n    const nextCheck = document.querySelector(`#task-${i + 2}`);\n    nextCheck.id = `task-${i + 1}`;\n    nextCheck.value -= 1;\n    list[i].index -= 1;\n    localStorage.setItem('tasks', JSON.stringify(list));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTask);\n\n//# sourceURL=webpack://to-do_list/./src/remove.js?");

/***/ }),

/***/ "./src/move.png":
/*!**********************!*\
  !*** ./src/move.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0cdea37dae77c92671b5.png\";\n\n//# sourceURL=webpack://to-do_list/./src/move.png?");

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"667a1805229ae33e7d3d.png\";\n\n//# sourceURL=webpack://to-do_list/./src/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTaskUI.js"));
/******/ }
]);