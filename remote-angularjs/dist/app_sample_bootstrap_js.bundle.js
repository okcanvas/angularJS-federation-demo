"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe2"] = self["webpackChunkmfe2"] || []).push([["app_sample_bootstrap_js"],{

/***/ "./app/sample.bootstrap.js":
/*!*********************************!*\
  !*** ./app/sample.bootstrap.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"webpack/sharing/consume/default/angular/angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample.component */ \"./app/sample.component.js\");\n\r\n\r\n\r\n/*\r\nexport const mount = (el) => {\r\n  angular.bootstrap(el, [angularApp.name]);\r\n};\r\n*/\r\n\r\nlet isBootstrapped = false;\r\n\r\nconst mount = (el) => {\r\n  if (!isBootstrapped) {\r\n    console.log('mount in bootstrap...');\r\n    angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(el, [_sample_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name]);\r\n    //isBootstrapped = true;\r\n  } else {\r\n    console.warn('AngularJS app is already bootstrapped on this element.');\r\n  }\r\n};\r\n\r\n// 다른 애플리케이션에서 사용하도록 export default로 내보내기\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  mount,\r\n});\n\n//# sourceURL=webpack://mfe2/./app/sample.bootstrap.js?");

/***/ }),

/***/ "./app/sample.component.js":
/*!*********************************!*\
  !*** ./app/sample.component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"webpack/sharing/consume/default/angular/angular\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconsole.log('====', 1)\r\n\r\nconst app = angular__WEBPACK_IMPORTED_MODULE_0___default().module(\"angularApp\", [])\r\n\r\n\r\napp.controller(\"ctrl1\", ['$scope', function($scope) {\r\n  $scope.hello = \"Hello from AngularJS sampleComponent\";\r\n  $scope.click = function() {\r\n    alert(\"버튼 클릭\");\r\n  }\r\n}]);\r\n\r\napp.controller(\"ctrl2\", ['$scope', function($scope) {\r\n  $scope.txt = \"ctrl2 컨트롤러입니다.\";\r\n  $scope.click = function() {\r\n  \talert(\"ctrl2 컨트롤러입니다.\");\r\n  }\r\n}]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\r\n\r\n\r\n\r\n/*\r\nimport angular from 'angular';\r\n\r\nconst sample = angular\r\n  .module(\"simpleApp\",[])\r\n  .controller(\"simpleAppController\", ['$scope', function($scope) {\r\n    $scope.hello = \"Hello from AngularJS\";\r\n  }]);\r\nexport default sample;\r\n*/\r\n\r\n  \n\n//# sourceURL=webpack://mfe2/./app/sample.component.js?");

/***/ })

}]);