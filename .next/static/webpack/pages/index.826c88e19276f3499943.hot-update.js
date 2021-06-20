/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/AnimeDisplay.js":
/*!******************************************!*\
  !*** ./pages/components/AnimeDisplay.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_InkwellContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/InkwellContext.js */ \"./pages/context/InkwellContext.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/components/AnimeDisplay.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AnimeDisplay = function AnimeDisplay(props) {\n  _s();\n\n  var _data$Page, _data$Page2;\n\n  var data = props.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage;\n  var pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext_js__WEBPACK_IMPORTED_MODULE_2__.default);\n  console.log(context, 'should be context');\n  console.log(props, 'should be data ');\n  var animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this);\n  });\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {\n    style: styles.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n      container: true,\n      spacing: 3,\n      justify: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.header,\n        align: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"h2\",\n          align: \"center\",\n          \"data-cy\": \"page-title\",\n          children: \"Welcome to the Anime Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"caption\",\n          children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \"Rakeem G.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 36\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: animeList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.paginationContainer,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__.default, {\n            \"data-cy\": \"pagination\",\n            variant: \"outlined\",\n            color: \"primary\",\n            onChange: function onChange(e, value) {\n              return setPageNum(value);\n            },\n            defaultPage: 1,\n            page: pageNum,\n            count: pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimeDisplay, \"fsAESmwc2ww0zRe5HDzWEOVpEok=\");\n\n_c = AnimeDisplay;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimeDisplay);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimeDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9BbmltZURpc3BsYXkuanM/ZDkxOCJdLCJuYW1lcyI6WyJBbmltZURpc3BsYXkiLCJwcm9wcyIsImRhdGEiLCJ1c2VTdGF0ZSIsInBhZ2VOdW0iLCJzZXRQYWdlTnVtIiwiYW5pbWVQZXJQYWdlIiwiYW5pbWVEaXNwbGF5ZWQiLCJwYWdlQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJQYWdlIiwibWVkaWEiLCJsZW5ndGgiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIklua3dlbGxDb250ZXh0IiwiY29uc29sZSIsImxvZyIsImFuaW1lTGlzdCIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJzdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiY2FyZCIsImNvdmVySW1hZ2UiLCJsYXJnZSIsInRpdGxlIiwiZW5nbGlzaCIsImRlc2NyaXB0aW9uIiwiaWQiLCJyb290IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiaGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJib3JkZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInBhZ2luYXRpb25Db250YWluZXIiLCJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLE1BQ3BCQyxJQURvQixHQUNYRCxLQURXLENBQ3BCQyxJQURvQjs7QUFBQSxrQkFHRUMsK0NBQVEsQ0FBQyxDQUFELENBSFY7QUFBQSxNQUdyQkMsT0FIcUI7QUFBQSxNQUdaQyxVQUhZOztBQUk1QixNQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxNQUFJQyxjQUFjLEdBQUdILE9BQU8sR0FBR0UsWUFBL0I7QUFDQSxNQUFJRSxTQUFTLEdBQUdDLElBQUksQ0FB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QTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnQ0gsQ0E3RkQ7O0dBQU1SLFk7O0tBQUFBLFk7O0FBK0ZOLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9BbmltZURpc3BsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmt3ZWxsQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0lua3dlbGxDb250ZXh0LmpzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9QYWdpbmF0aW9uJztcblxuY29uc3QgQW5pbWVEaXNwbGF5ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgW3BhZ2VOdW0sIHNldFBhZ2VOdW1dID0gdXNlU3RhdGUoMSk7XG4gICAgbGV0IGFuaW1lUGVyUGFnZSA9IDk7XG4gICAgbGV0IGFuaW1lRGlzcGxheWVkID0gcGFnZU51bSAqIGFuaW1lUGVyUGFnZTtcbiAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5mbG9vcihkYXRhPy5QYWdlPy5tZWRpYS5sZW5ndGggLyBhbmltZVBlclBhZ2UpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoSW5rd2VsbENvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQsICdzaG91bGQgYmUgY29udGV4dCcpXG4gICAgY29uc29sZS5sb2cocHJvcHMsICdzaG91bGQgYmUgZGF0YSAnKVxuXG4gICAgY29uc3QgYW5pbWVMaXN0ID0gZGF0YT8uUGFnZT8ubWVkaWEuc2xpY2UoYW5pbWVEaXNwbGF5ZWQsIGFuaW1lRGlzcGxheWVkICsgYW5pbWVQZXJQYWdlKS5tYXAoKGFuaW1lT2JqKSA9PiAoXG4gICAgICAgIDwgZGl2IHN0eWxlPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0ga2V5PXthbmltZU9iai5pZH0gZGF0YS1jeT17XCJhbmltZUNvbnRhaW5lclwifSA+XG4gICAgICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmR9ICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2FuaW1lT2JqLmNvdmVySW1hZ2UubGFyZ2V9IC8+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50aXRsZX0gPiA8YiBkYXRhLWN5PXtgYW5pbWVUaXRsZWB9PnthbmltZU9iai50aXRsZS5lbmdsaXNofTwvYj4gPC9wPlxuICAgICAgICAgICAgICAgIDxlbSA+PHAgZGF0YS1jeT17YGFuaW1lRGVzY3JpcHRpb25gfT57YW5pbWVPYmouZGVzY3JpcHRpb259PC9wPjwvZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLFwiICtcbiAgICAgICAgICAgICAgICBcIiM4MDgwODBcIiArXG4gICAgICAgICAgICAgICAgXCIgMCxcIiArXG4gICAgICAgICAgICAgICAgXCIjMDAwMDAwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDEwMCUpXCIsXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXJnaW46ICcwLCAwJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleSdcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMzUwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggZ3JleScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrZ3JleSdcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZENvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzIlJ1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRhaW5lcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGFsaWduPSdjZW50ZXInIGRhdGEtY3k9J3BhZ2UtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgQW5pbWUgUGFnZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5IDxiPlJha2VlbSBHLjwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGFsaWduPSdjZW50ZXInID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YW5pbWVMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17c3R5bGVzLnBhZ2luYXRpb25Db250YWluZXJ9IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jeT1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdmFsdWUpID0+IHNldFBhZ2VOdW0odmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2VOdW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvUGFwZXIgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWVEaXNwbGF5XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYW5kbGVyXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczogZGF0YVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICdmYWlsZWQgdG8gZmV0Y2ggZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/AnimeDisplay.js\n");

/***/ })

});