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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_InkwellContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/InkwellContext.js */ \"./pages/context/InkwellContext.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Pagination */ \"./node_modules/@material-ui/lab/esm/Pagination/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keem/Desktop/inkwell/pages/components/AnimeDisplay.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AnimeDisplay = function AnimeDisplay(props) {\n  _s();\n\n  var _data, _data$Page;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      pageNum = _useState[0],\n      setPageNum = _useState[1];\n\n  var animePerPage = 9;\n  var animeDisplayed = pageNum * animePerPage; // let pageCount = Math.floor(data?.Page?.media.length / animePerPage);\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_InkwellContext_js__WEBPACK_IMPORTED_MODULE_2__.default);\n  console.log(context, 'should be context');\n  console.log(props, 'should be data ');\n  var animeList = (_data = data) === null || _data === void 0 ? void 0 : (_data$Page = _data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(function (animeObj) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: styles.cardContainer,\n      \"data-cy\": \"animeContainer\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: animeObj.coverImage.large\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          style: styles.title,\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            \"data-cy\": \"animeTitle\",\n            children: animeObj.title.english\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 43\n          }, _this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            \"data-cy\": \"animeDescription\",\n            children: animeObj.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 22\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this)\n    }, animeObj.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this);\n  });\n  var styles = {\n    root: {\n      background: \"radial-gradient(ellipse at center,\" + \"#808080\" + \" 0,\" + \"#000000\" + \" 100%)\",\n      height: 'auto',\n      width: '100%',\n      margin: '0, 0'\n    },\n    header: {\n      backgroundColor: 'grey'\n    },\n    card: {\n      width: '100%',\n      maxWidth: '350px',\n      height: 'auto',\n      border: 'solid 1px grey',\n      backgroundColor: 'darkgrey'\n    },\n    cardContainer: {\n      display: 'flex',\n      padding: '2%'\n    },\n    title: {\n      backgroundColor: 'green'\n    },\n    description: {\n      backgroundColor: 'white'\n    },\n    paginationContainer: {\n      backgroundColor: 'grey'\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {\n    style: styles.root,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n      container: true,\n      spacing: 3,\n      justify: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.header,\n        align: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"h2\",\n          align: \"center\",\n          \"data-cy\": \"page-title\",\n          children: \"Welcome to the Anime Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n          variant: \"caption\",\n          children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \"Rakeem G.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 36\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: animeList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        item: true,\n        xs: 12,\n        style: styles.paginationContainer,\n        align: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n          container: true,\n          justify: \"center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_6__.default, {\n            \"data-cy\": \"pagination\",\n            variant: \"outlined\",\n            color: \"primary\",\n            onChange: function onChange(e, value) {\n              return setPageNum(value);\n            },\n            defaultPage: 1,\n            page: pageNum,\n            count: pageCount\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AnimeDisplay, \"fsAESmwc2ww0zRe5HDzWEOVpEok=\");\n\n_c = AnimeDisplay;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimeDisplay);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimeDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9BbmltZURpc3BsYXkuanM/ZDkxOCJdLCJuYW1lcyI6WyJBbmltZURpc3BsYXkiLCJwcm9wcyIsInVzZVN0YXRlIiwicGFnZU51bSIsInNldFBhZ2VOdW0iLCJhbmltZVBlclBhZ2UiLCJhbmltZURpc3BsYXllZCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW5rd2VsbENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYW5pbWVMaXN0IiwiZGF0YSIsIlBhZ2UiLCJtZWRpYSIsInNsaWNlIiwibWFwIiwiYW5pbWVPYmoiLCJzdHlsZXMiLCJjYXJkQ29udGFpbmVyIiwiY2FyZCIsImNvdmVySW1hZ2UiLCJsYXJnZSIsInRpdGxlIiwiZW5nbGlzaCIsImRlc2NyaXB0aW9uIiwiaWQiLCJyb290IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiaGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJib3JkZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInBhZ2luYXRpb25Db250YWluZXIiLCJlIiwidmFsdWUiLCJwYWdlQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUFBLGtCQUVFQywrQ0FBUSxDQUFDLENBQUQsQ0FGVjtBQUFBLE1BRXJCQyxPQUZxQjtBQUFBLE1BRVpDLFVBRlk7O0FBRzVCLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlDLGNBQWMsR0FBR0gsT0FBTyxHQUFHRSxZQUEvQixDQUo0QixDQUs1Qjs7QUFFQSxNQUFNRSxPQUFPLEdBQUdDLGlEQUFVLENBQUNDLCtEQUFELENBQTFCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaLEVBQXFC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QSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVNJLDhEQUFDLDJEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsYUFBSyxFQUFDLFFBQWpCO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLGlCQUFPLEVBQUMsUUFBeEI7QUFBQSxvQkFDS3JCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWNJLDhEQUFDLDJEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsYUFBSyxFQUFFTyxNQUFNLENBQUNvQixtQkFBakM7QUFBc0QsYUFBSyxFQUFDLFFBQTVEO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLGlCQUFPLEVBQUMsUUFBeEI7QUFBQSxpQ0FDSSw4REFBQyxnRUFBRDtBQUNJLHVCQUFRLFlBRFo7QUFFSSxtQkFBTyxFQUFDLFVBRlo7QUFHSSxpQkFBSyxFQUFDLFNBSFY7QUFJSSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSxxQkFBY3JDLFVBQVUsQ0FBQ3FDLEtBQUQsQ0FBeEI7QUFBQSxhQUpkO0FBS0ksdUJBQVcsRUFBRSxDQUxqQjtBQU1JLGdCQUFJLEVBQUV0QyxPQU5WO0FBT0ksaUJBQUssRUFBRXVDO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBNUZEOztHQUFNMUMsWTs7S0FBQUEsWTs7QUE4Rk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FuaW1lRGlzcGxheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElua3dlbGxDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvSW5rd2VsbENvbnRleHQuanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1BhZ2luYXRpb24nO1xuXG5jb25zdCBBbmltZURpc3BsYXkgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFtwYWdlTnVtLCBzZXRQYWdlTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGxldCBhbmltZVBlclBhZ2UgPSA5O1xuICAgIGxldCBhbmltZURpc3BsYXllZCA9IHBhZ2VOdW0gKiBhbmltZVBlclBhZ2U7XG4gICAgLy8gbGV0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IoZGF0YT8uUGFnZT8ubWVkaWEubGVuZ3RoIC8gYW5pbWVQZXJQYWdlKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KElua3dlbGxDb250ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LCAnc2hvdWxkIGJlIGNvbnRleHQnKVxuICAgIGNvbnNvbGUubG9nKHByb3BzLCAnc2hvdWxkIGJlIGRhdGEgJylcblxuICAgIGNvbnN0IGFuaW1lTGlzdCA9IGRhdGE/LlBhZ2U/Lm1lZGlhLnNsaWNlKGFuaW1lRGlzcGxheWVkLCBhbmltZURpc3BsYXllZCArIGFuaW1lUGVyUGFnZSkubWFwKChhbmltZU9iaikgPT4gKFxuICAgICAgICA8IGRpdiBzdHlsZT17c3R5bGVzLmNhcmRDb250YWluZXJ9IGtleT17YW5pbWVPYmouaWR9IGRhdGEtY3k9e1wiYW5pbWVDb250YWluZXJcIn0gPlxuICAgICAgICAgICAgPCBkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfSAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthbmltZU9iai5jb3ZlckltYWdlLmxhcmdlfSAvPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMudGl0bGV9ID4gPGIgZGF0YS1jeT17YGFuaW1lVGl0bGVgfT57YW5pbWVPYmoudGl0bGUuZW5nbGlzaH08L2I+IDwvcD5cbiAgICAgICAgICAgICAgICA8ZW0gPjxwIGRhdGEtY3k9e2BhbmltZURlc2NyaXB0aW9uYH0+e2FuaW1lT2JqLmRlc2NyaXB0aW9ufTwvcD48L2VtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlcixcIiArXG4gICAgICAgICAgICAgICAgXCIjODA4MDgwXCIgK1xuICAgICAgICAgICAgICAgIFwiIDAsXCIgK1xuICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiICtcbiAgICAgICAgICAgICAgICBcIiAxMDAlKVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgbWFyZ2luOiAnMCwgMCdcblxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzM1MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGdyZXknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZGFya2dyZXknXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcyJSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb25Db250YWluZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17c3R5bGVzLmhlYWRlcn0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBhbGlnbj0nY2VudGVyJyBkYXRhLWN5PSdwYWdlLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIEFuaW1lIFBhZ2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG93ZXJlZCBieSA8Yj5SYWtlZW0gRy48L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBhbGlnbj0nY2VudGVyJyA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FuaW1lTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3N0eWxlcy5wYWdpbmF0aW9uQ29udGFpbmVyfSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY3k9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHZhbHVlKSA9PiBzZXRQYWdlTnVtKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlTnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1BhcGVyID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1lRGlzcGxheVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFuZGxlclwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IGRhdGFcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnZmFpbGVkIHRvIGZldGNoIGRhdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/AnimeDisplay.js\n");

/***/ })

});