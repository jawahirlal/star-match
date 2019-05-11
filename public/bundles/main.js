/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ \"sg+I\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n  initialData: window.__R_DATA.initialData\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdjb21wb25lbnRzL0FwcCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5SZWFjdERPTS5oeWRyYXRlKFxuICA8QXBwIGluaXRpYWxEYXRhPXt3aW5kb3cuX19SX0RBVEEuaW5pdGlhbERhdGF9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "8cEQ":
/*!**********************************************!*\
  !*** ./src/components/DisplayPlayNumbers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar DisplayPayNumbers = function DisplayPayNumbers(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"number\",\n    onClick: function onClick() {\n      return props.onClick(props.num);\n    },\n    style: {\n      backgroundColor: colors[props.status]\n    }\n  }, props.num);\n};\n\nvar colors = {\n  available: \"lightgray\",\n  used: \"lightgreen\",\n  wrong: \"lightcoral\",\n  candidate: \"deepskyblue\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayPayNumbers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGNFUS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlQbGF5TnVtYmVycy5qcz9mMWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGlzcGxheVBheU51bWJlcnMgPSBwcm9wcyA9PiAoXG4gIDxidXR0b25cbiAgICBjbGFzc05hbWU9XCJudW1iZXJcIlxuICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMubnVtKX1cbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1twcm9wcy5zdGF0dXNdIH19XG4gID5cbiAgICB7cHJvcHMubnVtfVxuICA8L2J1dHRvbj5cbik7XG5jb25zdCBjb2xvcnMgPSB7XG4gIGF2YWlsYWJsZTogXCJsaWdodGdyYXlcIixcbiAgdXNlZDogXCJsaWdodGdyZWVuXCIsXG4gIHdyb25nOiBcImxpZ2h0Y29yYWxcIixcbiAgY2FuZGlkYXRlOiBcImRlZXBza3libHVlXCJcbn07XG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5UGF5TnVtYmVycztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8cEQ\n");

/***/ }),

/***/ "Al62":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Math science\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(max * Math.random());\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWw2Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz8wMjVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1hdGggc2NpZW5jZVxuY29uc3QgdXRpbHMgPSB7XG4gIC8vIFN1bSBhbiBhcnJheVxuICBzdW06IGFyciA9PiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApLFxuXG4gIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBudW1iZXJzIGJldHdlZW4gbWluIGFuZCBtYXggKGVkZ2VzIGluY2x1ZGVkKVxuICByYW5nZTogKG1pbiwgbWF4KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtYXggLSBtaW4gKyAxIH0sIChfLCBpKSA9PiBtaW4gKyBpKSxcblxuICAvLyBwaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcbiAgcmFuZG9tOiAobWluLCBtYXgpID0+IG1pbiArIE1hdGguZmxvb3IobWF4ICogTWF0aC5yYW5kb20oKSksXG5cbiAgLy8gR2l2ZW4gYW4gYXJyYXkgb2YgbnVtYmVycyBhbmQgYSBtYXguLi5cbiAgLy8gUGljayBhIHJhbmRvbSBzdW0gKDwgbWF4KSBmcm9tIHRoZSBzZXQgb2YgYWxsIGF2YWlsYWJsZSBzdW1zIGluIGFyclxuICByYW5kb21TdW1JbjogKGFyciwgbWF4KSA9PiB7XG4gICAgY29uc3Qgc2V0cyA9IFtbXV07XG4gICAgY29uc3Qgc3VtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gc2V0cy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVTZXQgPSBzZXRzW2pdLmNvbmNhdChhcnJbaV0pO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVTdW0gPSB1dGlscy5zdW0oY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZVN1bSA8PSBtYXgpIHtcbiAgICAgICAgICBzZXRzLnB1c2goY2FuZGlkYXRlU2V0KTtcbiAgICAgICAgICBzdW1zLnB1c2goY2FuZGlkYXRlU3VtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vtc1t1dGlscy5yYW5kb20oMCwgc3Vtcy5sZW5ndGgpXTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExQkE7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///Al62\n");

/***/ }),

/***/ "COgJ":
/*!*****************************************!*\
  !*** ./src/components/common/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"YwZP\");\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\"), \" \", \" | \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"game-history\"\n  }, \"Gane History\"), \" | \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"about\"\n  }, \"About\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ09nSi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIuanM/MDhlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlciwgTGluayB9IGZyb20gXCJAcmVhY2gvcm91dGVyXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPiB7XCIgfCBcIn1cbiAgICA8TGluayB0bz1cImdhbWUtaGlzdG9yeVwiPkdhbmUgSGlzdG9yeTwvTGluaz5cbiAgICB7XCIgfCBcIn1cbiAgICA8TGluayB0bz1cImFib3V0XCI+QWJvdXQ8L0xpbms+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFMQTtBQUNBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///COgJ\n");

/***/ }),

/***/ "T9rD":
/*!**************************************************!*\
  !*** ./src/redux/reducers/gameHistoryReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"RIqP\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActionTypes */ \"tGh0\");\n\n\n\n\nvar GameHistoryReduer = function GameHistoryReduer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var game = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (game.type) {\n    case _ActionTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GAME_HISTORY:\n      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [game]);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameHistoryReduer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVDlyRC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9nYW1lSGlzdG9yeVJlZHVjZXIuanM/NGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSBcIi4uL0FjdGlvblR5cGVzXCI7XG5cbmNvbnN0IEdhbWVIaXN0b3J5UmVkdWVyID0gKHN0YXRlID0gW10sIGdhbWUpID0+IHtcbiAgc3dpdGNoIChnYW1lLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLkdBTUVfSElTVE9SWTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIGdhbWVdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVIaXN0b3J5UmVkdWVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///T9rD\n");

/***/ }),

/***/ "ZNXf":
/*!***************************************!*\
  !*** ./src/components/GameHistory.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"/MKj\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar GameHistory = function GameHistory(props) {\n  var id = 1;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, props.games.map(function (element) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"help\",\n      key: id\n    }, id++, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        color: element.status === \"lost\" ? \"red\" : \"green\"\n      }\n    }, element.status), \"\\xA0 | \\xA0\", element.dateCreated);\n  }));\n};\n\nGameHistory.propTypes = {\n  games: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    games: state.gameHistory\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(GameHistory));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWk5YZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWVIaXN0b3J5LmpzPzY0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBHYW1lSGlzdG9yeSA9IHByb3BzID0+IHtcbiAgbGV0IGlkID0gMTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgIHtwcm9wcy5nYW1lcy5tYXAoZWxlbWVudCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiIGtleT17aWR9PlxuICAgICAgICAgIHtpZCsrfVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBlbGVtZW50LnN0YXR1cyA9PT0gXCJsb3N0XCIgPyBcInJlZFwiIDogXCJncmVlblwiIH19PlxuICAgICAgICAgICAge2VsZW1lbnQuc3RhdHVzfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAmbmJzcDsgfCAmbmJzcDtcbiAgICAgICAgICB7ZWxlbWVudC5kYXRlQ3JlYXRlZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkdhbWVIaXN0b3J5LnByb3BUeXBlcyA9IHsgZ2FtZXM6IHByb3BUeXBlcy5hcnJheSB9O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7IGdhbWVzOiBzdGF0ZS5nYW1lSGlzdG9yeSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdhbWVIaXN0b3J5KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///ZNXf\n");

/***/ }),

/***/ "dzUe":
/*!******************************************!*\
  !*** ./src/components/AddGameHistory.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"/MKj\");\n/* harmony import */ var _redux_actions_gameActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/gameActions */ \"r0Yp\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar AddGameHistory = function AddGameHistory(props) {\n  props.saveGame(Object(_redux_actions_gameActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.game));\n  return null;\n};\n\nAddGameHistory.propTypes = {\n  saveGame: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    saveGame: function saveGame(game) {\n      dispatch(game);\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispatchToProps)(AddGameHistory));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHpVZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FkZEdhbWVIaXN0b3J5LmpzPzc3MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGFkZEdhbWVIaXN0b3J5IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2dhbWVBY3Rpb25zXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IEFkZEdhbWVIaXN0b3J5ID0gcHJvcHMgPT4ge1xuICBwcm9wcy5zYXZlR2FtZShhZGRHYW1lSGlzdG9yeShwcm9wcy5nYW1lKSk7XG4gIHJldHVybiBudWxsO1xufTtcblxuQWRkR2FtZUhpc3RvcnkucHJvcFR5cGVzID0geyBzYXZlR2FtZTogcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCB9O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgc2F2ZUdhbWU6IGdhbWUgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2FtZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEFkZEdhbWVIaXN0b3J5KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dzUe\n");

/***/ }),

/***/ "fhFi":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"ANjH\");\n/* harmony import */ var _reducers_gameHistoryReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/gameHistoryReducer */ \"T9rD\");\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  gameHistory: _reducers_gameHistoryReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhGaS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz83ZTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGdhbWVIaXN0b3J5IGZyb20gXCIuLi9yZWR1Y2Vycy9nYW1lSGlzdG9yeVJlZHVjZXJcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBnYW1lSGlzdG9yeVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///fhFi\n");

/***/ }),

/***/ "i8QW":
/*!*************************************!*\
  !*** ./src/components/GameState.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"Al62\");\n\n\n\n\nfunction GameState(props) {\n  var playNumbers = 9;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].random(1, playNumbers)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, playNumbers)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      selectedNums = _useState6[0],\n      setSelectedNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(2),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"active\"),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      gameStatus = _useState10[0],\n      setGameStatus = _useState10[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (updateGameStatus(availableNums) === \"active\") {\n      var timerId = setTimeout(function () {\n        return setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      return function () {\n        clearTimeout(timerId);\n      };\n    }\n  });\n\n  var updateGameStatus = function updateGameStatus(newAvailableNums) {\n    var newStatus = secondsLeft <= 0 && newAvailableNums.length !== 0 ? \"lost\" : newAvailableNums.length === 0 ? \"won\" : \"active\";\n    setGameStatus(newStatus);\n    return newStatus;\n  };\n\n  var getNumberStatus = function getNumberStatus(selectedNum) {\n    var state = \"available\";\n    if (selectedNums.includes(selectedNum)) state = _utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(selectedNums) > stars ? \"wrong\" : \"candidate\";else if (!availableNums.includes(selectedNum)) state = \"used\";\n    return state;\n  };\n\n  var selectNumber = function selectNumber(selectedNum, currentStatus) {\n    if (updateGameStatus(availableNums) !== \"active\") return;\n    var newAvailableNums = [];\n    var newSelectedNums = [];\n    if (currentStatus === \"used\") return;\n\n    if (selectedNums.includes(selectedNum)) {\n      newSelectedNums = selectedNums.filter(function (x) {\n        return x != selectedNum;\n      });\n      newAvailableNums = availableNums.concat(selectedNum);\n    } else {\n      newSelectedNums = selectedNums.concat(selectedNum);\n      newAvailableNums = availableNums.filter(function (x) {\n        return x != selectedNum;\n      });\n    }\n\n    if (_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sum(newSelectedNums) === stars) {\n      var newStars = _utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomSumIn(newAvailableNums, playNumbers);\n      setStars(newStars);\n      setSelectedNums([]);\n      setAvailableNums(newAvailableNums);\n    } else {\n      setSelectedNums(newSelectedNums);\n      setAvailableNums(newAvailableNums);\n    }\n  };\n\n  return {\n    playNumbers: playNumbers,\n    stars: stars,\n    getNumberStatus: getNumberStatus,\n    selectNumber: selectNumber,\n    gameStatus: gameStatus,\n    secondsLeft: secondsLeft,\n    availableNums: availableNums\n  };\n} // useGameState.propTypes = {\n//   dispatch: propTypes.func.isRequired,\n//   GameHistory: propTypes.array.isRequired\n// };\n// const mapStateToProps = state => {\n//   return { GameHistory: state };\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaThRVy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWVTdGF0ZS5qcz84YmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZnVuY3Rpb24gR2FtZVN0YXRlKHByb3BzKSB7XG4gIGNvbnN0IHBsYXlOdW1iZXJzID0gOTtcbiAgY29uc3QgW3N0YXJzLCBzZXRTdGFyc10gPSB1c2VTdGF0ZSh1dGlscy5yYW5kb20oMSwgcGxheU51bWJlcnMpKTtcbiAgY29uc3QgW2F2YWlsYWJsZU51bXMsIHNldEF2YWlsYWJsZU51bXNdID0gdXNlU3RhdGUoXG4gICAgdXRpbHMucmFuZ2UoMSwgcGxheU51bWJlcnMpXG4gICk7XG4gIGNvbnN0IFtzZWxlY3RlZE51bXMsIHNldFNlbGVjdGVkTnVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW3NlY29uZHNMZWZ0LCBzZXRTZWNvbmRzTGVmdF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoXCJhY3RpdmVcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZUdhbWVTdGF0dXMoYXZhaWxhYmxlTnVtcykgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSksIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVTdGF0dXMgPSBuZXdBdmFpbGFibGVOdW1zID0+IHtcbiAgICBjb25zdCBuZXdTdGF0dXMgPVxuICAgICAgc2Vjb25kc0xlZnQgPD0gMCAmJiBuZXdBdmFpbGFibGVOdW1zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IFwibG9zdFwiXG4gICAgICAgIDogbmV3QXZhaWxhYmxlTnVtcy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBcIndvblwiXG4gICAgICAgIDogXCJhY3RpdmVcIjtcbiAgICBzZXRHYW1lU3RhdHVzKG5ld1N0YXR1cyk7XG5cbiAgICByZXR1cm4gbmV3U3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGdldE51bWJlclN0YXR1cyA9IHNlbGVjdGVkTnVtID0+IHtcbiAgICBsZXQgc3RhdGUgPSBcImF2YWlsYWJsZVwiO1xuXG4gICAgaWYgKHNlbGVjdGVkTnVtcy5pbmNsdWRlcyhzZWxlY3RlZE51bSkpXG4gICAgICBzdGF0ZSA9IHV0aWxzLnN1bShzZWxlY3RlZE51bXMpID4gc3RhcnMgPyBcIndyb25nXCIgOiBcImNhbmRpZGF0ZVwiO1xuICAgIGVsc2UgaWYgKCFhdmFpbGFibGVOdW1zLmluY2x1ZGVzKHNlbGVjdGVkTnVtKSkgc3RhdGUgPSBcInVzZWRcIjtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3ROdW1iZXIgPSAoc2VsZWN0ZWROdW0sIGN1cnJlbnRTdGF0dXMpID0+IHtcbiAgICBpZiAodXBkYXRlR2FtZVN0YXR1cyhhdmFpbGFibGVOdW1zKSAhPT0gXCJhY3RpdmVcIikgcmV0dXJuO1xuICAgIGxldCBuZXdBdmFpbGFibGVOdW1zID0gW107XG4gICAgbGV0IG5ld1NlbGVjdGVkTnVtcyA9IFtdO1xuICAgIGlmIChjdXJyZW50U3RhdHVzID09PSBcInVzZWRcIikgcmV0dXJuO1xuXG4gICAgaWYgKHNlbGVjdGVkTnVtcy5pbmNsdWRlcyhzZWxlY3RlZE51bSkpIHtcbiAgICAgIG5ld1NlbGVjdGVkTnVtcyA9IHNlbGVjdGVkTnVtcy5maWx0ZXIoeCA9PiB4ICE9IHNlbGVjdGVkTnVtKTtcbiAgICAgIG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmNvbmNhdChzZWxlY3RlZE51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkTnVtcyA9IHNlbGVjdGVkTnVtcy5jb25jYXQoc2VsZWN0ZWROdW0pO1xuICAgICAgbmV3QXZhaWxhYmxlTnVtcyA9IGF2YWlsYWJsZU51bXMuZmlsdGVyKHggPT4geCAhPSBzZWxlY3RlZE51bSk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLnN1bShuZXdTZWxlY3RlZE51bXMpID09PSBzdGFycykge1xuICAgICAgY29uc3QgbmV3U3RhcnMgPSB1dGlscy5yYW5kb21TdW1JbihuZXdBdmFpbGFibGVOdW1zLCBwbGF5TnVtYmVycyk7XG5cbiAgICAgIHNldFN0YXJzKG5ld1N0YXJzKTtcbiAgICAgIHNldFNlbGVjdGVkTnVtcyhbXSk7XG4gICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZE51bXMobmV3U2VsZWN0ZWROdW1zKTtcbiAgICAgIHNldEF2YWlsYWJsZU51bXMobmV3QXZhaWxhYmxlTnVtcyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYXlOdW1iZXJzLFxuICAgIHN0YXJzLFxuICAgIGdldE51bWJlclN0YXR1cyxcbiAgICBzZWxlY3ROdW1iZXIsXG4gICAgZ2FtZVN0YXR1cyxcbiAgICBzZWNvbmRzTGVmdCxcbiAgICBhdmFpbGFibGVOdW1zXG4gIH07XG59XG4vLyB1c2VHYW1lU3RhdGUucHJvcFR5cGVzID0ge1xuLy8gICBkaXNwYXRjaDogcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbi8vICAgR2FtZUhpc3Rvcnk6IHByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4vLyB9O1xuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4vLyAgIHJldHVybiB7IEdhbWVIaXN0b3J5OiBzdGF0ZSB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///i8QW\n");

/***/ }),

/***/ "lTEz":
/*!****************************************!*\
  !*** ./src/components/DisplayStars.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"Al62\");\n\n\n\nvar DisplayStars = function DisplayStars(props) {\n  return _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].range(1, props.numberOfStars).map(function (starId) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayStars);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibFRFei5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rpc3BsYXlTdGFycy5qcz85NTMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHNcIjtcbmNvbnN0IERpc3BsYXlTdGFycyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIHV0aWxzXG4gICAgLnJhbmdlKDEsIHByb3BzLm51bWJlck9mU3RhcnMpXG4gICAgLm1hcChzdGFySWQgPT4gPGRpdiBrZXk9e3N0YXJJZH0gY2xhc3NOYW1lPVwic3RhclwiIC8+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlTdGFycztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///lTEz\n");

/***/ }),

/***/ "oy3Y":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/types */ \"JSq2\");\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"Al62\");\n/* harmony import */ var _components_PlayAgain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PlayAgain */ \"xdZa\");\n/* harmony import */ var _components_DisplayPlayNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DisplayPlayNumbers */ \"8cEQ\");\n/* harmony import */ var _components_GameState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameState */ \"i8QW\");\n/* harmony import */ var _components_DisplayStars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DisplayStars */ \"lTEz\");\n\n\n\n\n\n\n //const selectNumber = (num, candidateSet);\n\nvar Game = function Game(props) {\n  var _GameState = Object(_components_GameState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props),\n      playNumbers = _GameState.playNumbers,\n      stars = _GameState.stars,\n      getNumberStatus = _GameState.getNumberStatus,\n      selectNumber = _GameState.selectNumber,\n      gameStatus = _GameState.gameStatus,\n      secondsLeft = _GameState.secondsLeft,\n      availableNums = _GameState.availableNums;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus === \"active\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DisplayStars__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    numberOfStars: stars\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlayAgain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    gameStatus: gameStatus,\n    availableNums: availableNums.length,\n    secondsLeft: secondsLeft,\n    startNewGame: props.startNewGame\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, _utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].range(1, playNumbers).map(function (num) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DisplayPlayNumbers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: num,\n      onClick: selectNumber,\n      status: getNumberStatus(num),\n      num: num\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3kzWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUuanM/YTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBpc1VuYXJ5TGlrZSB9IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBQbGF5QWdhaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheUFnYWluXCI7XG5pbXBvcnQgRGlzcGxheVBheU51bWJlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlzcGxheVBsYXlOdW1iZXJzXCI7XG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVTdGF0ZVwiO1xuaW1wb3J0IERpc3BsYXlTdGFycyBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXNwbGF5U3RhcnNcIjtcblxuLy9jb25zdCBzZWxlY3ROdW1iZXIgPSAobnVtLCBjYW5kaWRhdGVTZXQpO1xuXG5jb25zdCBHYW1lID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcGxheU51bWJlcnMsXG4gICAgc3RhcnMsXG4gICAgZ2V0TnVtYmVyU3RhdHVzLFxuICAgIHNlbGVjdE51bWJlcixcbiAgICBnYW1lU3RhdHVzLFxuICAgIHNlY29uZHNMZWZ0LFxuICAgIGF2YWlsYWJsZU51bXNcbiAgfSA9IEdhbWVTdGF0ZShwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIHtnYW1lU3RhdHVzID09PSBcImFjdGl2ZVwiID8gKFxuICAgICAgICAgICAgPERpc3BsYXlTdGFycyBudW1iZXJPZlN0YXJzPXtzdGFyc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFBsYXlBZ2FpblxuICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICAgICAgICBhdmFpbGFibGVOdW1zPXthdmFpbGFibGVOdW1zLmxlbmd0aH1cbiAgICAgICAgICAgICAgc2Vjb25kc0xlZnQ9e3NlY29uZHNMZWZ0fVxuICAgICAgICAgICAgICBzdGFydE5ld0dhbWU9e3Byb3BzLnN0YXJ0TmV3R2FtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgcGxheU51bWJlcnMpLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPERpc3BsYXlQYXlOdW1iZXJzXG4gICAgICAgICAgICAgIGtleT17bnVtfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3ROdW1iZXJ9XG4gICAgICAgICAgICAgIHN0YXR1cz17Z2V0TnVtYmVyU3RhdHVzKG51bSl9XG4gICAgICAgICAgICAgIG51bT17bnVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3NlY29uZHNMZWZ0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///oy3Y\n");

/***/ }),

/***/ "r0Yp":
/*!******************************************!*\
  !*** ./src/redux/actions/gameActions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"MVZn\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActionTypes */ \"tGh0\");\n\n\n\n\nvar addGameHistory = function addGameHistory(game) {\n  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GAME_HISTORY\n  }, game);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addGameHistory);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjBZcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2dhbWVBY3Rpb25zLmpzP2FmNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSBcIi4uL0FjdGlvblR5cGVzXCI7XG5jb25zdCBhZGRHYW1lSGlzdG9yeSA9IGdhbWUgPT4ge1xuICByZXR1cm4geyB0eXBlOiBBY3Rpb25UeXBlcy5HQU1FX0hJU1RPUlksIC4uLmdhbWUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEdhbWVIaXN0b3J5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///r0Yp\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game */ \"oy3Y\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ \"YwZP\");\n/* harmony import */ var _components_common_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/header */ \"COgJ\");\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/configureStore */ \"te6C\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"/MKj\");\n/* harmony import */ var _components_GameHistory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GameHistory */ \"ZNXf\");\n\n\n\n\n\n\n\n\n\nvar About = function About() {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"Star match game react implementation.\");\n};\n\nvar StarMatch = function StarMatch() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      gameId = _useState2[0],\n      setGameId = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n};\n\nvar store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nfunction App(_ref) {\n  var initialData = _ref.initialData;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__[\"Router\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, {\n    path: \"/\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GameHistory__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    path: \"game-history\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(About, {\n    path: \"about\"\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBMaW5rIH0gZnJvbSBcIkByZWFjaC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlclwiO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuLi9yZWR1eC9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEdhbWVIaXN0b3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVIaXN0b3J5XCI7XG5cbmxldCBBYm91dCA9ICgpID0+IDxkaXY+U3RhciBtYXRjaCBnYW1lIHJlYWN0IGltcGxlbWVudGF0aW9uLjwvZGl2PjtcblxuY29uc3QgU3Rhck1hdGNoID0gKCkgPT4ge1xuICBjb25zdCBbZ2FtZUlkLCBzZXRHYW1lSWRdID0gdXNlU3RhdGUoMSk7XG4gIHJldHVybiA8R2FtZSBrZXk9e2dhbWVJZH0gc3RhcnROZXdHYW1lPXsoKSA9PiBzZXRHYW1lSWQoZ2FtZUlkICsgMSl9IC8+O1xufTtcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKHsgaW5pdGlhbERhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UmVkdXhQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxTdGFyTWF0Y2ggcGF0aD1cIi9cIiAvPlxuICAgICAgICAgIDxHYW1lSGlzdG9yeSBwYXRoPVwiZ2FtZS1oaXN0b3J5XCIgLz5cbiAgICAgICAgICA8QWJvdXQgcGF0aD1cImFib3V0XCIgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L1JlZHV4UHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zNWMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ }),

/***/ "tGh0":
/*!**********************************!*\
  !*** ./src/redux/ActionTypes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar GAME_HISTORY = \"GAME_HISTORY\";\nvar CLEAR_STATE = \"CLEAR_STATE\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  GAME_HISTORY: GAME_HISTORY,\n  CLEAR_STATE: CLEAR_STATE\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidEdoMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9BY3Rpb25UeXBlcy5qcz9iNDY4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBTUVfSElTVE9SWSA9IFwiR0FNRV9ISVNUT1JZXCI7XG5jb25zdCBDTEVBUl9TVEFURSA9IFwiQ0xFQVJfU1RBVEVcIjtcbmV4cG9ydCBkZWZhdWx0IHsgR0FNRV9ISVNUT1JZLCBDTEVBUl9TVEFURSB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///tGh0\n");

/***/ }),

/***/ "te6C":
/*!*************************************!*\
  !*** ./src/redux/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"ANjH\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"fhFi\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-immutable-state-invariant */ \"BQ0V\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar configureStore = function configureStore(initialState) {\n  var composeEnhancers = //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||\n  redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState //,\n  // composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGU2Qy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25maWd1cmVTdG9yZS5qcz9iNWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHJlZHV4SW1tdXRhYmxlU3RhdGVJbnZhcmlhbnQgZnJvbSBcInJlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnRcIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSBpbml0aWFsU3RhdGUgPT4ge1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgICAvL3dpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHxcbiAgICBjb21wb3NlO1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlXG4gICAgLy8sXG4gICAgLy8gY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUocmVkdXhJbW11dGFibGVTdGF0ZUludmFyaWFudCgpKSlcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUpBO0FBTUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///te6C\n");

/***/ }),

/***/ "xdZa":
/*!*************************************!*\
  !*** ./src/components/PlayAgain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddGameHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AddGameHistory */ \"dzUe\");\n\n\n\nvar PlayAgain = function PlayAgain(props) {\n  if (props.gameStatus !== \"active\") return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddGameHistory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    game: {\n      status: props.gameStatus,\n      availableNums: props.availableNums,\n      secondsLeft: props.secondsLeft,\n      dateCreated: new Date().toLocaleString()\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === \"lost\" ? \"red\" : \"green\"\n    }\n  }, props.gameStatus === \"lost\" ? \"Game Over\" : \"Nice\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.startNewGame();\n    }\n  }, \"Play Again\"));else return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayAgain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGRaYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXlBZ2Fpbi5qcz9jNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBZGRHYW1lSGlzdG9yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRHYW1lSGlzdG9yeVwiO1xuXG5jb25zdCBQbGF5QWdhaW4gPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5nYW1lU3RhdHVzICE9PSBcImFjdGl2ZVwiKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZG9uZVwiPlxuICAgICAgICA8QWRkR2FtZUhpc3RvcnlcbiAgICAgICAgICBnYW1lPXt7XG4gICAgICAgICAgICBzdGF0dXM6IHByb3BzLmdhbWVTdGF0dXMsXG4gICAgICAgICAgICBhdmFpbGFibGVOdW1zOiBwcm9wcy5hdmFpbGFibGVOdW1zLFxuICAgICAgICAgICAgc2Vjb25kc0xlZnQ6IHByb3BzLnNlY29uZHNMZWZ0LFxuICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcHJvcHMuZ2FtZVN0YXR1cyA9PT0gXCJsb3N0XCIgPyBcInJlZFwiIDogXCJncmVlblwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gXCJsb3N0XCIgPyBcIkdhbWUgT3ZlclwiIDogXCJOaWNlXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnN0YXJ0TmV3R2FtZSgpfT5QbGF5IEFnYWluPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICBlbHNlIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheUFnYWluO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///xdZa\n");

/***/ })

/******/ });