webpackHotUpdate("static/development/pages/list.js",{

/***/ "./pages/component/dbComponent.js":
/*!****************************************!*\
  !*** ./pages/component/dbComponent.js ***!
  \****************************************/
/*! exports provided: RawQuery, GetAll, AddOne, TmpDel, AdminDel, TableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawQuery", function() { return RawQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAll", function() { return GetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOne", function() { return AddOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmpDel", function() { return TmpDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDel", function() { return AdminDel; });
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
};
var AdminDel =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(table, condition) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (table && condition) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/Delete"), {
                table: table,
                data: data
              }).then(function (res) {
                console.log(res);
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function AdminDel(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}(); // Select column name form tartget table

var TableColumn =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(table) {
    var colname;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!table) {
              _context3.next = 11;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url, "/TableColumn"), {
              table: table
            });

          case 4:
            colname = _context3.sent;
            return _context3.abrupt("return", colname.data);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function TableColumn(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=list.js.8d0cca2dab63fba1a78c.hot-update.js.map