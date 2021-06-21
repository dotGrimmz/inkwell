(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,397,859];
exports.modules = {

/***/ 640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InkwellContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(301);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ContextImplementation extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      title: 'Welcome to the Anime Page',
      signature: 'Rakeem G.'
    });
  }

  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_InkwellContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
      value: this.state,
      children: [" ", children]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContextImplementation);

/***/ }),

/***/ 301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const InkwellContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
/* harmony default export */ __webpack_exports__["default"] = (InkwellContext);

/***/ }),

/***/ 459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./pages/context/ContextImplementation.tsx
var ContextImplementation = __webpack_require__(640);
// EXTERNAL MODULE: ./pages/context/InkwellContext.ts
var InkwellContext = __webpack_require__(301);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(318);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Pagination/Pagination.js + 27 modules
var Pagination = __webpack_require__(884);
;// CONCATENATED MODULE: ./components/AnimeDisplay.tsx









const AnimeDisplay = data => {
  var _data$Page, _data$Page2;

  const {
    0: pageNum,
    1: setPageNum
  } = (0,external_react_.useState)(1);
  let animePerPage = 9;
  let animeDisplayed = pageNum * animePerPage;
  let pageCount = Math.floor((data === null || data === void 0 ? void 0 : (_data$Page = data.Page) === null || _data$Page === void 0 ? void 0 : _data$Page.media.length) / animePerPage);
  const context = (0,external_react_.useContext)(InkwellContext.default);
  const {
    title,
    signature
  } = context;
  const styles = {
    root: {
      background: "radial-gradient(ellipse at center," + "#808080" + " 0," + "#000000" + " 100%)",
      height: 'auto',
      width: '100%',
      margin: '0, 0'
    },
    header: {
      backgroundColor: 'grey'
    },
    card: {
      width: '100%',
      maxWidth: '350px',
      height: 'auto',
      border: 'solid 1px grey',
      backgroundColor: 'darkgrey'
    },
    cardContainer: {
      display: 'flex',
      padding: '2%'
    },
    title: {
      backgroundColor: 'green'
    },
    description: {
      backgroundColor: 'white'
    },
    paginationContainer: {
      backgroundColor: 'grey'
    }
  };
  const animeList = data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.media.slice(animeDisplayed, animeDisplayed + animePerPage).map(animeObj => /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: styles.cardContainer,
    "data-cy": "animeContainer",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: styles.card,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: animeObj.coverImage.large
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        style: styles.title,
        children: [" ", /*#__PURE__*/jsx_runtime_.jsx("b", {
          "data-cy": `animeTitle`,
          children: animeObj.title.english
        }), " "]
      }), /*#__PURE__*/jsx_runtime_.jsx("em", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          "data-cy": `animeDescription`,
          children: animeObj.description
        })
      })]
    })
  }, animeObj.id));
  return /*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
    style: styles.root,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
      container: true,
      spacing: 3,
      justify: "center",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        item: true,
        xs: 12,
        style: styles.header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "h2",
          align: "center",
          "data-cy": "page-title",
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
          variant: "caption",
          children: ["Powered by ", /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: signature
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          justify: "center",
          children: animeList
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
        item: true,
        xs: 12,
        style: styles.paginationContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          container: true,
          justify: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
            "data-cy": "pagination",
            variant: "outlined",
            color: "primary",
            onChange: (e, value) => setPageNum(value),
            defaultPage: 1,
            page: pageNum,
            count: pageCount
          })
        })
      })]
    })
  });
};

/* harmony default export */ var components_AnimeDisplay = (AnimeDisplay);
;// CONCATENATED MODULE: ./pages/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AnimePage = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ContextImplementation.default, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_AnimeDisplay, _objectSpread({}, data))
  });
};

/* harmony default export */ var pages = (AnimePage);
const getServerSideProps = async () => {
  try {
    let res = await fetch("http://localhost:3000/api/handler");
    let data = await res.json();
    return {
      props: data
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        error: 'failed to fetch data'
      }
    };
  }
};

/***/ }),

/***/ 47:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [450], function() { return __webpack_exec__(459); });
module.exports = __webpack_exports__;

})();