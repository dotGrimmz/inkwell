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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* harmony import */ var _context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/InkwellContext */ \"./pages/context/InkwellContext.js\");\n/* harmony import */ var _context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/ContextImplementation */ \"./pages/context/ContextImplementation.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext__WEBPACK_IMPORTED_MODULE_2__.default);\n  var hello = context.hello;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  console.log(hello);\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {\n    style: styles.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n      container: true,\n      spacing: 3,\n      justify: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n        item: true,\n        xs: 12,\n        style: styles.header,\n        align: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n          variant: \"h2\",\n          align: \"center\",\n          \"data-cy\": \"page-title\",\n          children: \"Welcome to the Anime Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n          variant: \"caption\",\n          children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \"Rakeem G.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 36\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n        item: true,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          container: true,\n          justify: \"center\",\n          children: animeList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n        item: true,\n        xs: 12,\n        style: styles.paginationContainer,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n          container: true,\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_7__.default, {\n            \"data-cy\": \"pagination\",\n            variant: \"outlined\",\n            color: \"primary\",\n            onChange: function onChange(e, value) {\n              return setPageNum(value);\n            },\n            defaultPage: 1,\n            page: pageNum,\n            count: pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"pWKP1x6W/1M980ncA6YX6IeEDgk=\");\n\n_c = AnimePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,_context_ContextImplementation__WEBPACK_IMPORTED_MODULE_3__.default)(AnimePage));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AnimePage\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJJbmt3ZWxsQ29udGV4dCIsImhlbGxvIiwidXNlU3RhdGUiLCJwYWdlTnVtIiwic2V0UGFnZU51bSIsImFuaW1lUGVyUGFnZSIsImFuaW1lRGlzcGxheWVkIiwicGFnZUNvdW50IiwiTWF0aCIsImZsb29yIiwiUGFnZSIsIm1lZGlhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInJvb3QiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJoZWFkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkIiwibWF4V2lkdGgiLCJib3JkZXIiLCJjYXJkQ29udGFpbmVyIiwiZGlzcGxheSIsInBhZGRpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJlbmdsaXNoIiwiaWQiLCJlIiwidmFsdWUiLCJDb250ZXh0SW1wbGVtZW50YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyxpREFBVSxDQUFDQyw0REFBRCxDQUExQjtBQUQ0QixNQUVwQkMsS0FGb0IsR0FFVkgsT0FGVSxDQUVwQkcsS0FGb0I7O0FBQUEsa0JBR0VDLCtDQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUEsTUFHckJDLE9BSHFCO0FBQUEsTUFHWkMsVUFIWTs7QUFJNUIsTUFBSUMsWUFBWSxHQUFHLENB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O0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBM0ZEOztHQUFNWCxTOztLQUFBQSxTOztBQTZGTiwrREFBZSxNQUFBOEMsdUVBQXFCLENBQUM5QyxTQUFELENBQXBDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUGFnaW5hdGlvbic7XG5pbXBvcnQgSW5rd2VsbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0lua3dlbGxDb250ZXh0JztcbmltcG9ydCBDb250ZXh0SW1wbGVtZW50YXRpb24gZnJvbSAnLi9jb250ZXh0L0NvbnRleHRJbXBsZW1lbnRhdGlvbidcblxuXG5cblxuXG5cbmNvbnN0IEFuaW1lUGFnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KElua3dlbGxDb250ZXh0KTtcbiAgICBjb25zdCB7IGhlbGxvIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IFtwYWdlTnVtLCBzZXRQYWdlTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGxldCBhbmltZVBlclBhZ2UgPSA5O1xuICAgIGxldCBhbmltZURpc3BsYXllZCA9IHBhZ2VOdW0gKiBhbmltZVBlclBhZ2U7XG4gICAgbGV0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IoZGF0YT8uUGFnZT8ubWVkaWEubGVuZ3RoIC8gYW5pbWVQZXJQYWdlKTtcblxuICAgIGNvbnNvbGUubG9nKGhlbGxvKVxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzgwODA4MFwiICtcbiAgICAgICAgICAgICAgICBcIiAwLFwiICtcbiAgICAgICAgICAgICAgICBcIiMwMDAwMDBcIiArXG4gICAgICAgICAgICAgICAgXCIgMTAwJSlcIixcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIG1hcmdpbjogJzAsIDAnXG5cbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5J1xuICAgICAgICB9LFxuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICczNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBncmV5JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmtncmV5J1xuICAgICAgICB9LFxuICAgICAgICBjYXJkQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMiUnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbidcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmV5JyxcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEgY29taW5nIGluJylcbiAgICBjb25zdCBhbmltZUxpc3QgPSBkYXRhPy5QYWdlPy5tZWRpYS5zbGljZShhbmltZURpc3BsYXllZCwgYW5pbWVEaXNwbGF5ZWQgKyBhbmltZVBlclBhZ2UpLm1hcCgoYW5pbWVPYmopID0+IChcbiAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkQ29udGFpbmVyfSBrZXk9e2FuaW1lT2JqLmlkfSBkYXRhLWN5PXtcImFuaW1lQ29udGFpbmVyXCJ9ID5cbiAgICAgICAgICAgIDwgZGl2IHN0eWxlPXtzdHlsZXMuY2FyZH0gID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5pbWVPYmouY292ZXJJbWFnZS5sYXJnZX0gLz5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnRpdGxlfSA+IDxiIGRhdGEtY3k9e2BhbmltZVRpdGxlYH0+e2FuaW1lT2JqLnRpdGxlLmVuZ2xpc2h9PC9iPiA8L3A+XG4gICAgICAgICAgICAgICAgPGVtID48cCBkYXRhLWN5PXtgYW5pbWVEZXNjcmlwdGlvbmB9PnthbmltZU9iai5kZXNjcmlwdGlvbn08L3A+PC9lbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGFsaWduPSdjZW50ZXInIGRhdGEtY3k9J3BhZ2UtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgQW5pbWUgUGFnZVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnkgPGI+UmFrZWVtIEcuPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gYWxpZ249J2NlbnRlcicgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbmltZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gc2V0UGFnZU51bSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2U9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZU51bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17cGFnZUNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9QYXBlciA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0SW1wbGVtZW50YXRpb24oQW5pbWVQYWdlKVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFuZGxlclwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IGRhdGFcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnZmFpbGVkIHRvIGZldGNoIGRhdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});