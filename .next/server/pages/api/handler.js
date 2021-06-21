(function() {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getAnimeList; }
/* harmony export */ });
function getAnimeList(req, res) {
  // shape of the object expected
  const query = `
    query {
      Page {
        media(isAdult: false, sort: POPULARITY_DESC) {
          id
          description
          title {
            english
          }
          coverImage {
            large
          }
        }
      }
    }
    `; // method required from the front end to fetch data. 

  const url = 'https://graphql.anilist.co',
        options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: {}
    })
  };
  fetch(url, options).then(handleResponse).then(handleData).catch(handleError); // middleware to make sure the post was successful.

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.catch(json);
    });
  }

  function handleData(data) {
    res.send(data);
    res.end();
  }

  function handleError(error) {
    console.error(error, 'this is the error');
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(521));
module.exports = __webpack_exports__;

})();