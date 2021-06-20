/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* harmony import */ var _context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/InkwellContext */ \"./pages/context/InkwellContext.js\");\n/* harmony import */ var _context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/ContextImplementation */ \"./pages/context/ContextImplementation.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__.default); // const { hello } = context;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage); // console.log(hello)\n\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {\n      style: styles.root,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n        container: true,\n        spacing: 3,\n        justify: \"center\",\n        alignItems: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          xs: 12,\n          style: styles.header,\n          align: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n            variant: \"h2\",\n            align: \"center\",\n            \"data-cy\": \"page-title\",\n            children: \"Welcome to the Anime Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n            variant: \"caption\",\n            children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Rakeem G.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 40\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n            container: true,\n            justify: \"center\",\n            children: animeList\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          item: true,\n          xs: 12,\n          style: styles.paginationContainer,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n            container: true,\n            justify: \"center\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__.default, {\n              \"data-cy\": \"pagination\",\n              variant: \"outlined\",\n              color: \"primary\",\n              onChange: function onChange(e, value) {\n                return setPageNum(value);\n              },\n              defaultPage: 1,\n              page: pageNum,\n              count: pageCount\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"pWKP1x6W/1M980ncA6YX6IeEDgk=\");\n\n_c = AnimePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJJbmt3ZWxsQ29udGV4dCIsInVzZVN0YXRlIiwicGFnZU51bSIsInNldFBhZ2VOdW0iLCJhbmltZVBlclBhZ2UiLCJhbmltZURpc3BsYXllZCIsInBhZ2VDb3VudCIsIk1hdGgiLCJmbG9vciIsIlBhZ2UiLCJtZWRpYSIsImxlbmd0aCIsInN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJoZWFkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkIiwibWF4V2lkdGgiLCJib3JkZXIiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsInBhZGRpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJhbmltZUxpc3QiLCJzbGljZSIsIm1hcCIsImFuaW1lT2JqIiwiY292ZXJJbWFnZSIsImxhcmdlIiwiZW5nbGlzaCIsImlkIiwiZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUE7O0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLE1BQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ0MsNERBQUQsQ0FBMUIsQ0FENEIsQ0FFNUI7O0FBRjRCLGtCQUdFQywrQ0FBUSxDQUFDLENBQUQsQ0FIVjtBQUFBLE1BR3JCQyxPQUhxQjtBQUFBLE1BR1pDLFVBSFk7O0FBSTVCLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlDLGNBQWMsR0FBR0gsT0FBTyxHQUFHRSxZQUEvQjtBQUNBLE1BQUlFLFNBQVMsR0FB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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQTdGRDs7R0FBTVYsUzs7S0FBQUEsUzs7QUErRk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcbmltcG9ydCBJbmt3ZWxsQ29udGV4dCBmcm9tICcuL2NvbnRleHQvSW5rd2VsbENvbnRleHQnO1xuaW1wb3J0IENvbnRleHRJbXBsZW1lbnRhdGlvbiBmcm9tICcuL2NvbnRleHQvQ29udGV4dEltcGxlbWVudGF0aW9uJztcblxuXG5cblxuXG5cbmNvbnN0IEFuaW1lUGFnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KElua3dlbGxDb250ZXh0KTtcbiAgICAvLyBjb25zdCB7IGhlbGxvIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IFtwYWdlTnVtLCBzZXRQYWdlTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGxldCBhbmltZVBlclBhZ2UgPSA5O1xuICAgIGxldCBhbmltZURpc3BsYXllZCA9IHBhZ2VOdW0gKiBhbmltZVBlclBhZ2U7XG4gICAgbGV0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IoZGF0YT8uUGFnZT8ubWVkaWEubGVuZ3RoIC8gYW5pbWVQZXJQYWdlKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGhlbGxvKVxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzgwODA4MFwiICtcbiAgICAgICAgICAgICAgICBcIiAwLFwiICtcbiAgICAgICAgICAgICAgICBcIiMwMDAwMDBcIiArXG4gICAgICAgICAgICAgICAgXCIgMTAwJSlcIixcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzAsIDAnXG5cbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5J1xuICAgICAgICB9LFxuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICczNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBncmV5JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmtncmV5J1xuICAgICAgICB9LFxuICAgICAgICBjYXJkQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMiUnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbidcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5JyxcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEgY29taW5nIGluJylcbiAgICBjb25zdCBhbmltZUxpc3QgPSBkYXRhPy5QYWdlPy5tZWRpYS5zbGljZShhbmltZURpc3BsYXllZCwgYW5pbWVEaXNwbGF5ZWQgKyBhbmltZVBlclBhZ2UpLm1hcCgoYW5pbWVPYmopID0+IChcbiAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfSBrZXk9e2FuaW1lT2JqLmlkfSBkYXRhLWN5PXtcImFuaW1lQ29udGFpbmVyXCJ9ID5cbiAgICAgICAgICAgIDwgZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0gID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5pbWVPYmouY292ZXJJbWFnZS5sYXJnZX0gLz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnRpdGxlfSA+IDxiIGRhdGEtY3k9e2BhbmltZVRpdGxlYH0+e2FuaW1lT2JqLnRpdGxlLmVuZ2xpc2h9PC9iPiA8L3A+XG4gICAgICAgICAgICAgICAgPGVtID48cCBkYXRhLWN5PXtgYW5pbWVEZXNjcmlwdGlvbmB9PnthbmltZU9iai5kZXNjcmlwdGlvbn08L3A+PC9lbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0SW1wbGVtZW50YXRpb24+XG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30ganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBhbGlnbj0nY2VudGVyJyBkYXRhLWN5PSdwYWdlLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBBbmltZSBQYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5IDxiPlJha2VlbSBHLjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPSdjZW50ZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmltZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gc2V0UGFnZU51bSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17cGFnZUNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L1BhcGVyID5cbiAgICAgICAgPC9Db250ZXh0SW1wbGVtZW50YXRpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltZVBhZ2VcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hhbmRsZXJcIik7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiBkYXRhXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2ZhaWxlZCB0byBmZXRjaCBkYXRhJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});