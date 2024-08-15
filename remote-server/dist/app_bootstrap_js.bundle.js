"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe2"] = self["webpackChunkmfe2"] || []).push([["app_bootstrap_js"],{

/***/ "./app/app.module.js":
/*!***************************!*\
  !*** ./app/app.module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"webpack/sharing/consume/default/angular/angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst sample = angular__WEBPACK_IMPORTED_MODULE_0___default().module(\"angularApp\",[])\r\n  .controller(\"sampleModule\", ['$scope', function($scope) {\r\n    $scope.hello = \"Hello from AngularJS\";\r\n  }]);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sample);\n\n//# sourceURL=webpack://mfe2/./app/app.module.js?");

/***/ }),

/***/ "./app/bootstrap.js":
/*!**************************!*\
  !*** ./app/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"webpack/sharing/consume/default/angular/angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ \"./app/app.module.js\");\n\r\n\r\n\r\n/*\r\nexport const mount = (el) => {\r\n  angular.bootstrap(el, [angularApp.name]);\r\n};\r\n*/\r\n\r\nlet isBootstrapped = false;\r\n\r\nconst mount = (el) => {\r\n  if (!isBootstrapped) {\r\n    console.log('mount in bootstrap...');\r\n    angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(el, [_app_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name]);\r\n    isBootstrapped = true;\r\n  } else {\r\n    console.warn('AngularJS app is already bootstrapped on this element.');\r\n  }\r\n};\n\n//# sourceURL=webpack://mfe2/./app/bootstrap.js?");

/***/ })

}]);