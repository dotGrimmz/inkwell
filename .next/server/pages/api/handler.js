/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/handler";
exports.ids = ["pages/api/handler"];
exports.modules = {

/***/ "./pages/api/handler.js":
/*!******************************!*\
  !*** ./pages/api/handler.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getAnimeList; }\n/* harmony export */ });\nfunction getAnimeList(req, res) {\n  // shape of the object expected\n  const query = `\n    query {\n      Page {\n        media(isAdult: false, sort: POPULARITY_DESC) {\n          id\n          description\n          title {\n            english\n          }\n          coverImage {\n            large\n          }\n        }\n      }\n    }\n    `; // method required from the front end to fetch data. \n\n  const url = 'https://graphql.anilist.co',\n        options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    },\n    body: JSON.stringify({\n      query: query,\n      variables: {}\n    })\n  };\n  fetch(url, options).then(handleResponse).then(handleData).catch(handleError); // middleware to make sure the post was successful.\n\n  function handleResponse(response) {\n    return response.json().then(function (json) {\n      return response.ok ? json : Promise.catch(json);\n    });\n  }\n\n  function handleData(data) {\n    res.send(data);\n    res.end();\n  }\n\n  function handleError(error) {\n    console.error(error, 'this is the error');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmt3ZWxsLy4vcGFnZXMvYXBpL2hhbmRsZXIuanM/ZmY3MiJdLCJuYW1lcyI6WyJnZXRBbmltZUxpc3QiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YXJpYWJsZXMiLCJmZXRjaCIsInRoZW4iLCJoYW5kbGVSZXNwb25zZSIsImhhbmRsZURhdGEiLCJjYXRjaCIsImhhbmRsZUVycm9yIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJQcm9taXNlIiwiZGF0YSIsInNlbmQiLCJlbmQiLCJlcnJvciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFHM0M7QUFDQSxRQUFNQyxLQUFLLEdBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZkksQ0FKMkMsQ0FzQjNDOztBQUNBLFFBQU1DLEdBQUcsR0FBRyw0QkFBWjtBQUFBLFFBQ0lDLE9BQU8sR0FBRztBQUNOQyxVQUFNLEVBQUUsTUFERjtBQUVOQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCxnQkFBVTtBQUZMLEtBRkg7QUFNTkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQlAsV0FBSyxFQUFFQSxLQURVO0FBRWpCUSxlQUFTLEVBQUU7QUFGTSxLQUFmO0FBTkEsR0FEZDtBQWFBQyxPQUFLLENBQUNSLEdBQUQsRUFBTUMsT0FBTixDQUFMLENBQW9CUSxJQUFwQixDQUF5QkMsY0FBekIsRUFDS0QsSUFETCxDQUNVRSxVQURWLEVBRUtDLEtBRkwsQ0FFV0MsV0FGWCxFQXBDMkMsQ0F3QzNDOztBQUNBLFdBQVNILGNBQVQsQ0FBd0JJLFFBQXhCLEVBQWtDO0FBQzlCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQk4sSUFBaEIsQ0FBcUIsVUFBVU0sSUFBVixFQUFnQjtBQUN4QyxhQUFPRCxRQUFRLENBQUNFLEVBQVQsR0FBY0QsSUFBZCxHQUFxQkUsT0FBTyxDQUFDTCxLQUFSLENBQWNHLElBQWQsQ0FBNUI7QUFDSCxLQUZNLENBQVA7QUFHSDs7QUFHRCxXQUFTSixVQUFULENBQW9CTyxJQUFwQixFQUEwQjtBQUN0QnBCLE9BQUcsQ0FBQ3FCLElBQUosQ0FBU0QsSUFBVDtBQUNBcEIsT0FBRyxDQUFDc0IsR0FBSjtBQUNIOztBQUVELFdBQVNQLFdBQVQsQ0FBcUJRLEtBQXJCLEVBQTRCO0FBQ3hCQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZCxFQUFxQixtQkFBckI7QUFDSDtBQUlKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2hhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbmltZUxpc3QocmVxLCByZXMpIHtcblxuXG4gICAgLy8gc2hhcGUgb2YgdGhlIG9iamVjdCBleHBlY3RlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIHF1ZXJ5IHtcbiAgICAgIFBhZ2Uge1xuICAgICAgICBtZWRpYShpc0FkdWx0OiBmYWxzZSwgc29ydDogUE9QVUxBUklUWV9ERVNDKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHRpdGxlIHtcbiAgICAgICAgICAgIGVuZ2xpc2hcbiAgICAgICAgICB9XG4gICAgICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgICAgICBsYXJnZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgO1xuXG5cbiAgICAvLyBtZXRob2QgcmVxdWlyZWQgZnJvbSB0aGUgZnJvbnQgZW5kIHRvIGZldGNoIGRhdGEuIFxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2dyYXBocWwuYW5pbGlzdC5jbycsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuXG4gICAgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgICAgICAudGhlbihoYW5kbGVEYXRhKVxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXG4gICAgLy8gbWlkZGxld2FyZSB0byBtYWtlIHN1cmUgdGhlIHBvc3Qgd2FzIHN1Y2Nlc3NmdWwuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2sgPyBqc29uIDogUHJvbWlzZS5jYXRjaChqc29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVEYXRhKGRhdGEpIHtcbiAgICAgICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgICAgIHJlcy5lbmQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsICd0aGlzIGlzIHRoZSBlcnJvcicpO1xuICAgIH1cblxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/handler.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/handler.js"));
module.exports = __webpack_exports__;

})();