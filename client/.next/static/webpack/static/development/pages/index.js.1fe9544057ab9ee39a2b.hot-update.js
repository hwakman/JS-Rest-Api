webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var url = 'http://localhost:8080/api'; // Query with raw sql

var RawQuery =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(sql) {
    var Query;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!sql) {
              _context.next = 11;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/rawQuery"), {
              sql: sql
            });

          case 4:
            Query = _context.sent;
            return _context.abrupt("return", Query.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function RawQuery(_x) {
    return _ref.apply(this, arguments);
  };
}(); // Select all column on table

var GetAll = function GetAll(table) {
  if (table) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/getAll"), {
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
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/addOne"), {
      table: table,
      data: data
    }).then(function (res) {
      console.log(res);
    });
  }
}; // Set request to remove data

var TmpDel = function TmpDel(table, data) {
  if (table && data) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/tmpDel"), {
      table: table,
      data: data
    }).then(function (res) {
      console.log(res);
    });
  }
}; // Select column name form tartget table

var TableColumn =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(table) {
    var colname;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!table) {
              _context2.next = 11;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/TableColumn"), {
              table: table
            });

          case 4:
            colname = _context2.sent;
            return _context2.abrupt("return", colname.data);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function TableColumn(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.1fe9544057ab9ee39a2b.hot-update.js.map