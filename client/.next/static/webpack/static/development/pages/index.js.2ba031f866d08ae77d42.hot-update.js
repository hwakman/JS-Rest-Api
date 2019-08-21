webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/component/dbComponent.js":
/*!****************************************!*\
  !*** ./pages/component/dbComponent.js ***!
  \****************************************/
/*! exports provided: GetAll, AddOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAll", function() { return GetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOne", function() { return AddOne; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var url = 'http://localhost:8080/api';
var GetAll = function GetAll(tableSelected) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/getAll"), {
    table: tableSelected
  }).then(function (res) {
    return res.data;
  })["catch"](function (err) {
    return err;
  });
};
var AddOne = function AddOne(table, data) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/addOne"), {
    table: table,
    data: data
  }).then(function (res) {
    console.log(res);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.2ba031f866d08ae77d42.hot-update.js.map