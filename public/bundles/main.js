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

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/types */ \"JSq2\");\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar DisplayStars = function DisplayStars(props) {\n  return utils.range(1, props.numberOfStars).map(function (starId) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: starId,\n      className: \"star\"\n    });\n  });\n}; //const selectNumber = (num, candidateSet);\n\n\nvar DisplayPayNumbers = function DisplayPayNumbers(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"number\",\n    onClick: function onClick() {\n      return props.onClick(props.num);\n    },\n    style: {\n      backgroundColor: colors[props.status]\n    }\n  }, props.num);\n};\n\nvar PlayAgain = function PlayAgain(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game-done\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"message\",\n    style: {\n      color: props.gameStatus === \"lost\" ? \"red\" : \"green\"\n    }\n  }, props.gameStatus === \"lost\" ? \"Game Over\" : \"Nice\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.startNewGame();\n    }\n  }, \"Play Again\"));\n};\n\nvar useGameState = function useGameState() {\n  var playNumbers = 9;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(utils.random(1, playNumbers)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      stars = _useState2[0],\n      setStars = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(utils.range(1, playNumbers)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      availableNums = _useState4[0],\n      setAvailableNums = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      selectedNums = _useState6[0],\n      setSelectedNums = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(10),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      secondsLeft = _useState8[0],\n      setSecondsLeft = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"active\"),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      gameStatus = _useState10[0],\n      setGameStatus = _useState10[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (secondsLeft > 0 && availableNums.length > 0) {\n      var timerId = setTimeout(function () {\n        return setSecondsLeft(secondsLeft - 1);\n      }, 1000);\n      if (secondsLeft == 1) updateGameStatus(availableNums);\n      return function () {\n        clearTimeout(timerId);\n      };\n    }\n  });\n\n  var updateGameStatus = function updateGameStatus(newAvailableNums) {\n    console.log(newAvailableNums);\n    console.log(secondsLeft <= 1 && newAvailableNums.length !== 0 ? \"lost\" : newAvailableNums.length === 0 ? \"won\" : \"active\");\n    setGameStatus(secondsLeft <= 1 && newAvailableNums.length !== 0 ? \"lost\" : newAvailableNums.length === 0 ? \"won\" : \"active\");\n  };\n\n  var getNumberStatus = function getNumberStatus(selectedNum) {\n    var state = \"available\";\n    if (selectedNums.includes(selectedNum)) state = utils.sum(selectedNums) > stars ? \"wrong\" : \"candidate\";else if (!availableNums.includes(selectedNum)) state = \"used\";\n    return state;\n  };\n\n  var selectNumber = function selectNumber(selectedNum, currentStatus) {\n    var newAvailableNums = [];\n    var newSelectedNums = [];\n    if (currentStatus === \"used\") return;\n\n    if (selectedNums.includes(selectedNum)) {\n      newSelectedNums = selectedNums.filter(function (x) {\n        return x != selectedNum;\n      });\n      newAvailableNums = availableNums.concat(selectedNum);\n    } else {\n      newSelectedNums = selectedNums.concat(selectedNum);\n      newAvailableNums = availableNums.filter(function (x) {\n        return x != selectedNum;\n      });\n    }\n\n    if (utils.sum(newSelectedNums) === stars) {\n      var newStars = utils.randomSumIn(newAvailableNums, playNumbers);\n      setStars(newStars);\n      setSelectedNums([]);\n      setAvailableNums(newAvailableNums);\n    } else {\n      setSelectedNums(newSelectedNums);\n      setAvailableNums(newAvailableNums);\n    }\n\n    if (newAvailableNums.length === 0) updateGameStatus(newAvailableNums);\n  };\n\n  return {\n    playNumbers: playNumbers,\n    stars: stars,\n    getNumberStatus: getNumberStatus,\n    selectNumber: selectNumber,\n    gameStatus: gameStatus,\n    secondsLeft: secondsLeft\n  };\n};\n\nvar Game = function Game(props) {\n  var _useGameState = useGameState(),\n      playNumbers = _useGameState.playNumbers,\n      stars = _useGameState.stars,\n      getNumberStatus = _useGameState.getNumberStatus,\n      selectNumber = _useGameState.selectNumber,\n      gameStatus = _useGameState.gameStatus,\n      secondsLeft = _useGameState.secondsLeft;\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"game\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"help\"\n  }, \"Pick 1 or more numbers that sum to the number of stars\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"body\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"left\"\n  }, gameStatus === \"active\" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisplayStars, {\n    numberOfStars: stars\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayAgain, {\n    gameStatus: gameStatus,\n    startNewGame: props.startNewGame\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"right\"\n  }, utils.range(1, playNumbers).map(function (num) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DisplayPayNumbers, {\n      key: num,\n      onClick: selectNumber,\n      status: getNumberStatus(num),\n      num: num\n    });\n  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"timer\"\n  }, \"Time Remaining: \", secondsLeft));\n}; // Color Theme\n\n\nvar colors = {\n  available: \"lightgray\",\n  used: \"lightgreen\",\n  wrong: \"lightcoral\",\n  candidate: \"deepskyblue\"\n};\n\nvar StarMatch = function StarMatch() {\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),\n      gameId = _useState12[0],\n      setGameId = _useState12[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Game, {\n    key: gameId,\n    startNewGame: function startNewGame() {\n      return setGameId(gameId + 1);\n    }\n  });\n}; // Math science\n\n\nvar utils = {\n  // Sum an array\n  sum: function sum(arr) {\n    return arr.reduce(function (acc, curr) {\n      return acc + curr;\n    }, 0);\n  },\n  // create an array of numbers between min and max (edges included)\n  range: function range(min, max) {\n    return Array.from({\n      length: max - min + 1\n    }, function (_, i) {\n      return min + i;\n    });\n  },\n  // pick a random number between min and max (edges included)\n  random: function random(min, max) {\n    return min + Math.floor(max * Math.random());\n  },\n  // Given an array of numbers and a max...\n  // Pick a random sum (< max) from the set of all available sums in arr\n  randomSumIn: function randomSumIn(arr, max) {\n    var sets = [[]];\n    var sums = [];\n\n    for (var i = 0; i < arr.length; i++) {\n      for (var j = 0, len = sets.length; j < len; j++) {\n        var candidateSet = sets[j].concat(arr[i]);\n        var candidateSum = utils.sum(candidateSet);\n\n        if (candidateSum <= max) {\n          sets.push(candidateSet);\n          sums.push(candidateSum);\n        }\n      }\n    }\n\n    return sums[utils.random(0, sums.length)];\n  }\n};\nfunction App(_ref) {\n  var initialData = _ref.initialData;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarMatch, null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1VuYXJ5TGlrZSB9IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuY29uc3QgRGlzcGxheVN0YXJzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gdXRpbHNcbiAgICAucmFuZ2UoMSwgcHJvcHMubnVtYmVyT2ZTdGFycylcbiAgICAubWFwKHN0YXJJZCA9PiA8ZGl2IGtleT17c3RhcklkfSBjbGFzc05hbWU9XCJzdGFyXCIgLz4pO1xufTtcblxuLy9jb25zdCBzZWxlY3ROdW1iZXIgPSAobnVtLCBjYW5kaWRhdGVTZXQpO1xuXG5jb25zdCBEaXNwbGF5UGF5TnVtYmVycyA9IHByb3BzID0+IChcbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT1cIm51bWJlclwiXG4gICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhwcm9wcy5udW0pfVxuICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c10gfX1cbiAgPlxuICAgIHtwcm9wcy5udW19XG4gIDwvYnV0dG9uPlxuKTtcbmNvbnN0IFBsYXlBZ2FpbiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWRvbmVcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtZXNzYWdlXCJcbiAgICAgIHN0eWxlPXt7IGNvbG9yOiBwcm9wcy5nYW1lU3RhdHVzID09PSBcImxvc3RcIiA/IFwicmVkXCIgOiBcImdyZWVuXCIgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gXCJsb3N0XCIgPyBcIkdhbWUgT3ZlclwiIDogXCJOaWNlXCJ9XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zdGFydE5ld0dhbWUoKX0+UGxheSBBZ2FpbjwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHVzZUdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheU51bWJlcnMgPSA5O1xuICBjb25zdCBbc3RhcnMsIHNldFN0YXJzXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmRvbSgxLCBwbGF5TnVtYmVycykpO1xuICBjb25zdCBbYXZhaWxhYmxlTnVtcywgc2V0QXZhaWxhYmxlTnVtc10gPSB1c2VTdGF0ZShcbiAgICB1dGlscy5yYW5nZSgxLCBwbGF5TnVtYmVycylcbiAgKTtcbiAgY29uc3QgW3NlbGVjdGVkTnVtcywgc2V0U2VsZWN0ZWROdW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbc2Vjb25kc0xlZnQsIHNldFNlY29uZHNMZWZ0XSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoXCJhY3RpdmVcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlY29uZHNMZWZ0ID4gMCAmJiBhdmFpbGFibGVOdW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSksIDEwMDApO1xuICAgICAgaWYgKHNlY29uZHNMZWZ0ID09IDEpIHVwZGF0ZUdhbWVTdGF0dXMoYXZhaWxhYmxlTnVtcyk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1cGRhdGVHYW1lU3RhdHVzID0gbmV3QXZhaWxhYmxlTnVtcyA9PiB7XG4gICAgY29uc29sZS5sb2cobmV3QXZhaWxhYmxlTnVtcyk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBzZWNvbmRzTGVmdCA8PSAxICYmIG5ld0F2YWlsYWJsZU51bXMubGVuZ3RoICE9PSAwXG4gICAgICAgID8gXCJsb3N0XCJcbiAgICAgICAgOiBuZXdBdmFpbGFibGVOdW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IFwid29uXCJcbiAgICAgICAgOiBcImFjdGl2ZVwiXG4gICAgKTtcbiAgICBzZXRHYW1lU3RhdHVzKFxuICAgICAgc2Vjb25kc0xlZnQgPD0gMSAmJiBuZXdBdmFpbGFibGVOdW1zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IFwibG9zdFwiXG4gICAgICAgIDogbmV3QXZhaWxhYmxlTnVtcy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBcIndvblwiXG4gICAgICAgIDogXCJhY3RpdmVcIlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TnVtYmVyU3RhdHVzID0gc2VsZWN0ZWROdW0gPT4ge1xuICAgIGxldCBzdGF0ZSA9IFwiYXZhaWxhYmxlXCI7XG5cbiAgICBpZiAoc2VsZWN0ZWROdW1zLmluY2x1ZGVzKHNlbGVjdGVkTnVtKSlcbiAgICAgIHN0YXRlID0gdXRpbHMuc3VtKHNlbGVjdGVkTnVtcykgPiBzdGFycyA/IFwid3JvbmdcIiA6IFwiY2FuZGlkYXRlXCI7XG4gICAgZWxzZSBpZiAoIWF2YWlsYWJsZU51bXMuaW5jbHVkZXMoc2VsZWN0ZWROdW0pKSBzdGF0ZSA9IFwidXNlZFwiO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdE51bWJlciA9IChzZWxlY3RlZE51bSwgY3VycmVudFN0YXR1cykgPT4ge1xuICAgIGxldCBuZXdBdmFpbGFibGVOdW1zID0gW107XG4gICAgbGV0IG5ld1NlbGVjdGVkTnVtcyA9IFtdO1xuICAgIGlmIChjdXJyZW50U3RhdHVzID09PSBcInVzZWRcIikgcmV0dXJuO1xuXG4gICAgaWYgKHNlbGVjdGVkTnVtcy5pbmNsdWRlcyhzZWxlY3RlZE51bSkpIHtcbiAgICAgIG5ld1NlbGVjdGVkTnVtcyA9IHNlbGVjdGVkTnVtcy5maWx0ZXIoeCA9PiB4ICE9IHNlbGVjdGVkTnVtKTtcbiAgICAgIG5ld0F2YWlsYWJsZU51bXMgPSBhdmFpbGFibGVOdW1zLmNvbmNhdChzZWxlY3RlZE51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkTnVtcyA9IHNlbGVjdGVkTnVtcy5jb25jYXQoc2VsZWN0ZWROdW0pO1xuICAgICAgbmV3QXZhaWxhYmxlTnVtcyA9IGF2YWlsYWJsZU51bXMuZmlsdGVyKHggPT4geCAhPSBzZWxlY3RlZE51bSk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLnN1bShuZXdTZWxlY3RlZE51bXMpID09PSBzdGFycykge1xuICAgICAgY29uc3QgbmV3U3RhcnMgPSB1dGlscy5yYW5kb21TdW1JbihuZXdBdmFpbGFibGVOdW1zLCBwbGF5TnVtYmVycyk7XG5cbiAgICAgIHNldFN0YXJzKG5ld1N0YXJzKTtcbiAgICAgIHNldFNlbGVjdGVkTnVtcyhbXSk7XG4gICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZE51bXMobmV3U2VsZWN0ZWROdW1zKTtcbiAgICAgIHNldEF2YWlsYWJsZU51bXMobmV3QXZhaWxhYmxlTnVtcyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0F2YWlsYWJsZU51bXMubGVuZ3RoID09PSAwKSB1cGRhdGVHYW1lU3RhdHVzKG5ld0F2YWlsYWJsZU51bXMpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYXlOdW1iZXJzLFxuICAgIHN0YXJzLFxuICAgIGdldE51bWJlclN0YXR1cyxcbiAgICBzZWxlY3ROdW1iZXIsXG4gICAgZ2FtZVN0YXR1cyxcbiAgICBzZWNvbmRzTGVmdFxuICB9O1xufTtcblxuY29uc3QgR2FtZSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHBsYXlOdW1iZXJzLFxuICAgIHN0YXJzLFxuICAgIGdldE51bWJlclN0YXR1cyxcbiAgICBzZWxlY3ROdW1iZXIsXG4gICAgZ2FtZVN0YXR1cyxcbiAgICBzZWNvbmRzTGVmdFxuICB9ID0gdXNlR2FtZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIHtnYW1lU3RhdHVzID09PSBcImFjdGl2ZVwiID8gKFxuICAgICAgICAgICAgPERpc3BsYXlTdGFycyBudW1iZXJPZlN0YXJzPXtzdGFyc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFBsYXlBZ2FpblxuICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICAgICAgICBzdGFydE5ld0dhbWU9e3Byb3BzLnN0YXJ0TmV3R2FtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgcGxheU51bWJlcnMpLm1hcChudW0gPT4gKFxuICAgICAgICAgICAgPERpc3BsYXlQYXlOdW1iZXJzXG4gICAgICAgICAgICAgIGtleT17bnVtfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3ROdW1iZXJ9XG4gICAgICAgICAgICAgIHN0YXR1cz17Z2V0TnVtYmVyU3RhdHVzKG51bSl9XG4gICAgICAgICAgICAgIG51bT17bnVtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5UaW1lIFJlbWFpbmluZzoge3NlY29uZHNMZWZ0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gQ29sb3IgVGhlbWVcbmNvbnN0IGNvbG9ycyA9IHtcbiAgYXZhaWxhYmxlOiBcImxpZ2h0Z3JheVwiLFxuICB1c2VkOiBcImxpZ2h0Z3JlZW5cIixcbiAgd3Jvbmc6IFwibGlnaHRjb3JhbFwiLFxuICBjYW5kaWRhdGU6IFwiZGVlcHNreWJsdWVcIlxufTtcbmNvbnN0IFN0YXJNYXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW2dhbWVJZCwgc2V0R2FtZUlkXSA9IHVzZVN0YXRlKDEpO1xuICByZXR1cm4gPEdhbWUga2V5PXtnYW1lSWR9IHN0YXJ0TmV3R2FtZT17KCkgPT4gc2V0R2FtZUlkKGdhbWVJZCArIDEpfSAvPjtcbn07XG4vLyBNYXRoIHNjaWVuY2VcbmNvbnN0IHV0aWxzID0ge1xuICAvLyBTdW0gYW4gYXJyYXlcbiAgc3VtOiBhcnIgPT4gYXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLCAwKSxcblxuICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycyBiZXR3ZWVuIG1pbiBhbmQgbWF4IChlZGdlcyBpbmNsdWRlZClcbiAgcmFuZ2U6IChtaW4sIG1heCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbWF4IC0gbWluICsgMSB9LCAoXywgaSkgPT4gbWluICsgaSksXG5cbiAgLy8gcGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoZWRnZXMgaW5jbHVkZWQpXG4gIHJhbmRvbTogKG1pbiwgbWF4KSA9PiBtaW4gKyBNYXRoLmZsb29yKG1heCAqIE1hdGgucmFuZG9tKCkpLFxuXG4gIC8vIEdpdmVuIGFuIGFycmF5IG9mIG51bWJlcnMgYW5kIGEgbWF4Li4uXG4gIC8vIFBpY2sgYSByYW5kb20gc3VtICg8IG1heCkgZnJvbSB0aGUgc2V0IG9mIGFsbCBhdmFpbGFibGUgc3VtcyBpbiBhcnJcbiAgcmFuZG9tU3VtSW46IChhcnIsIG1heCkgPT4ge1xuICAgIGNvbnN0IHNldHMgPSBbW11dO1xuICAgIGNvbnN0IHN1bXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHNldHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlU2V0ID0gc2V0c1tqXS5jb25jYXQoYXJyW2ldKTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlU3VtID0gdXRpbHMuc3VtKGNhbmRpZGF0ZVNldCk7XG4gICAgICAgIGlmIChjYW5kaWRhdGVTdW0gPD0gbWF4KSB7XG4gICAgICAgICAgc2V0cy5wdXNoKGNhbmRpZGF0ZVNldCk7XG4gICAgICAgICAgc3Vtcy5wdXNoKGNhbmRpZGF0ZVN1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bXNbdXRpbHMucmFuZG9tKDAsIHN1bXMubGVuZ3RoKV07XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoeyBpbml0aWFsRGF0YSB9KSB7XG4gIHJldHVybiA8U3Rhck1hdGNoIC8+O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUJBO0FBNkJBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ }),

/***/ "sg+I":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2crSS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zNWMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///sg+I\n");

/***/ })

/******/ });