webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/component/dbComponent.js":
/*!****************************************!*\
  !*** ./pages/component/dbComponent.js ***!
  \****************************************/
/*! exports provided: RawQuery, GetAll, AddOne, TmpDel, TableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawQuery", function() { return RawQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAll", function() { return GetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOne", function() { return AddOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmpDel", function() { return TmpDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumn", function() { return TableColumn; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var url = 'http://localhost:8080/api'; // Query with raw sql

var RawQuery = function RawQuery(sql) {
  if (sql) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/rawQuery"), {
      sql: sql
    }).then(function (res) {
      console.log(res.data);
    })["catch"](function (err) {
      return err;
    }); // Axios.post(`${url}/rawQuery`,{sql})
    // .then(res => {
    //     console.log(res.data);
    // })
    // .catch(err => {return err;});
  }
}; // Select all column on table

var GetAll = function GetAll(table) {
  if (table) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/getAll"), {
      table: table
    }).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      return err;
    });
  }
}; // Inser single row to table

var AddOne = function AddOne(table, data) {
  if (table && data) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/addOne"), {
      table: table,
      data: data
    }).then(function (res) {
      console.log(res);
    });
  }
}; // Set request to remove data

var TmpDel = function TmpDel(table, data) {
  if (table && data) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/tmpDel"), {
      table: table,
      data: data
    }).then(function (res) {
      console.log(res);
    });
  }
}; // Select column name form tartget table

var TableColumn = function TableColumn(table) {
  if (table) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(url, "/TableColumn"), {
      table: table
    }).then(function (res) {
      console.log(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }
};

/***/ })

})
//# sourceMappingURL=list.js.e6bf16668470f0bef321.hot-update.js.map