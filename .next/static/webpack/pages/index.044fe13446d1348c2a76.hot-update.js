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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* harmony import */ var _context_inkwellcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/inkwellcontext */ \"./pages/context/inkwellcontext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AnimePage = function AnimePage(_ref) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = _ref.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  console.log(data, 'data coming in');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this);\n  });\n\n  var AnimePage = function AnimePage(_ref2) {\n    var data = _ref2.data;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {\n      style: styles.root,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        container: true,\n        spacing: 3,\n        justify: \"center\",\n        alignItems: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          item: true,\n          xs: 12,\n          style: styles.header,\n          align: \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n            variant: \"h2\",\n            align: \"center\",\n            \"data-cy\": \"page-title\",\n            children: \"Welcome to the Anime Page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n            variant: \"caption\",\n            children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Rakeem G.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 40\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          item: true,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n            container: true,\n            justify: \"center\",\n            children: animeList\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          item: true,\n          xs: 12,\n          style: styles.paginationContainer,\n          align: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n            container: true,\n            justify: \"center\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__.default, {\n              \"data-cy\": \"pagination\",\n              variant: \"outlined\",\n              color: \"primary\",\n              onChange: function onChange(e, value) {\n                return setPageNum(value);\n              },\n              defaultPage: 1,\n              page: pageNum,\n              count: pageCount\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContextImplementation, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimePage, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimePage, \"HDYOMUAR6UNoRZgn1xeFUfR0Ljg=\");\n\n_c = AnimePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBbmltZVBhZ2UiLCJkYXRhIiwidXNlU3RhdGUiLCJwYWdlTnVtIiwic2V0UGFnZU51bSIsImFuaW1lUGVyUGFnZSIsImFuaW1lRGlzcGxheWVkIiwicGFnZUNvdW50IiwiTWF0aCIsImZsb29yIiwiUGFnZSIsIm1lZGlhIiwibGVuZ3RoIiwic3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImNhcmQiLCJtYXhXaWR0aCIsImJvcmRlciIsImNhcmRDb250YWluZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwYWdpbmF0aW9uQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJlbmdsaXNoIiwiaWQiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyx5QkFBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxDQUFELENBRFY7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUU1QixNQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxNQUFJQyxjQUFjLEdBQUdILE9BQU8sR0FBR0UsWUFBL0I7QUFDQSxNQUFJRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUFSLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMEJBQUFBLElBQUksQ0FBRVMsSUFBTiwwREFBWUMsS0FBWixDQUFrQkMsTUFBbEIsSUFBMkJQLFlBQXRD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REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQWxHRDs7R0FBTVAsUzs7S0FBQUEsUzs7QUFvR04sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcbmltcG9ydCBJbmt3ZWxsQ29udGV4dCBmcm9tICcuL2NvbnRleHQvaW5rd2VsbGNvbnRleHQnO1xuXG5cblxuXG5cblxuY29uc3QgQW5pbWVQYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgW3BhZ2VOdW0sIHNldFBhZ2VOdW1dID0gdXNlU3RhdGUoMSk7XG4gICAgbGV0IGFuaW1lUGVyUGFnZSA9IDk7XG4gICAgbGV0IGFuaW1lRGlzcGxheWVkID0gcGFnZU51bSAqIGFuaW1lUGVyUGFnZTtcbiAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5mbG9vcihkYXRhPy5QYWdlPy5tZWRpYS5sZW5ndGggLyBhbmltZVBlclBhZ2UpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlcixcIiArXG4gICAgICAgICAgICAgICAgXCIjODA4MDgwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDAsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiICtcbiAgICAgICAgICAgICAgICBcIiAxMDAlKVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCwgMCdcblxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzM1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGdyZXknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZGFya2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcyJSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb25Db250YWluZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YSBjb21pbmcgaW4nKVxuICAgIGNvbnN0IGFuaW1lTGlzdCA9IGRhdGE/LlBhZ2U/Lm1lZGlhLnNsaWNlKGFuaW1lRGlzcGxheWVkLCBhbmltZURpc3BsYXllZCArIGFuaW1lUGVyUGFnZSkubWFwKChhbmltZU9iaikgPT4gKFxuICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmRDb250YWluZXJ9IGtleT17YW5pbWVPYmouaWR9IGRhdGEtY3k9e1wiYW5pbWVDb250YWluZXJcIn0gPlxuICAgICAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfSAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthbmltZU9iai5jb3ZlckltYWdlLmxhcmdlfSAvPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMudGl0bGV9ID4gPGIgZGF0YS1jeT17YGFuaW1lVGl0bGVgfT57YW5pbWVPYmoudGl0bGUuZW5nbGlzaH08L2I+IDwvcD5cbiAgICAgICAgICAgICAgICA8ZW0gPjxwIGRhdGEtY3k9e2BhbmltZURlc2NyaXB0aW9uYH0+e2FuaW1lT2JqLmRlc2NyaXB0aW9ufTwvcD48L2VtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG5cbiAgICBjb25zdCBBbmltZVBhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5oZWFkZXJ9IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGFsaWduPSdjZW50ZXInIGRhdGEtY3k9J3BhZ2UtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIEFuaW1lIFBhZ2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5IDxiPlJha2VlbSBHLjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPSdjZW50ZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmltZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gc2V0UGFnZU51bSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17cGFnZUNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L1BhcGVyID5cbiAgICAgICAgKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHRJbXBsZW1lbnRhdGlvbj5cbiAgICAgICAgICAgIDxBbmltZVBhZ2UgLz5cbiAgICAgICAgPC9Db250ZXh0SW1wbGVtZW50YXRpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltZVBhZ2VcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hhbmRsZXJcIik7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiBkYXRhXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2ZhaWxlZCB0byBmZXRjaCBkYXRhJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});