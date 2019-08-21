webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/component/dbComponent.js":
/*!****************************************!*\
  !*** ./pages/component/dbComponent.js ***!
  \****************************************/
/*! exports provided: GetAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAll", function() { return GetAll; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var url = 'http://localhost:8080//api';
var GetAll = function GetAll() {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/getAll"), {
    data: 'hello'
  });
};

/***/ })

})
//# sourceMappingURL=index.js.289e11597d7f8a5067c7.hot-update.js.map