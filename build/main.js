require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * The point of this is to build an abstraction over requests from
 * server side and client side. Just call this and don't worry about
 * where and how you're making the request.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(url) {
    var next_url, res;
    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next_url = url;


            if (typeof window === "undefined") {
              next_url = "https://a.4cdn.org" + url + ".json";
            } else {
              next_url = "/api" + next_url;
            }

            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1_axios___default()(next_url);

          case 4:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nuxt_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(7);





__WEBPACK_IMPORTED_MODULE_2__nuxt_config_js___default.a.dev = !("development" === "production");

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var port = process.env.PORT || 3000;
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](__WEBPACK_IMPORTED_MODULE_2__nuxt_config_js___default.a);

if (nuxt.options.dev) {
  new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt).build();
}

app.set("port", port);
app.use("/api", __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);
app.use(nuxt.render);
app.listen(port, function () {
  return console.log("\nServer has started.\n");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  head: {
    title: "Turbo Chan",
    meta: [{ charset: "utf-8" }, {
      name: "viewport",
      content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }, {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/apple-icon-57x57.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/apple-icon-60x60.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/apple-icon-72x72.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/apple-icon-76x76.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/apple-icon-114x114.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/apple-icon-120x120.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/apple-icon-144x144.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/apple-icon-152x152.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-icon-180x180.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/android-icon-192x192.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/android-icon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/android-icon-96x96.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/android-icon-16x16.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "TEST",
      href: "/android-icon-192x192.png"
    }, { rel: "manifest", href: "/manifest.json" }, { name: "msapplication-TileColor", content: "#343442" }, { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }, { name: "theme-color", content: "#343442" }, { name: "apple-mobile-web-app-capable", content: "yes" }, { name: "apple-mobile-web-app-title", content: "Turbo Chan" }, {
      rel: "apple-touch-startup-image",
      href: "/android-icon-192x192.png",
      media: "(device-height:480px)"
    }, {
      rel: "apple-touch-startup-image",
      href: "/android-icon-192x192.png",
      media: "(device-height:568px)"
    }, {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto"
    }]
  },
  loading: { color: "white" }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boards__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__threads__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media__ = __webpack_require__(12);






var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.use(__WEBPACK_IMPORTED_MODULE_1__boards__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__threads__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__posts__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_4__media__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_request__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/boards", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(_, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = res;
            _context.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_2__constants_request__["a" /* default */])("/boards");

          case 3:
            _context.t1 = _context.sent;

            _context.t0.json.call(_context.t0, _context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_request__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/:board/:page", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var _req$params, board, page;

    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, board = _req$params.board, page = _req$params.page;
            _context.t0 = res;
            _context.next = 4;
            return Object(__WEBPACK_IMPORTED_MODULE_2__constants_request__["a" /* default */])("/" + board + "/" + page);

          case 4:
            _context.t1 = _context.sent;

            _context.t0.json.call(_context.t0, _context.t1);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_request__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/:board/thread/:thread", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var _req$params, board, thread;

    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, board = _req$params.board, thread = _req$params.thread;
            _context.t0 = res;
            _context.next = 4;
            return Object(__WEBPACK_IMPORTED_MODULE_2__constants_request__["a" /* default */])("/" + board + "/thread/" + thread);

          case 4:
            _context.t1 = _context.sent;

            _context.t0.json.call(_context.t0, _context.t1);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

var opts = {
  method: "get",
  responseType: "stream"
};

router.get("/media/:thread/:media", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var _req$params, thread, media, url;

    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, thread = _req$params.thread, media = _req$params.media;
            url = "http://i.4cdn.org/" + thread + "/" + media;

            __WEBPACK_IMPORTED_MODULE_2_axios___default()(Object.assign({}, opts, { url: url })).then(function (_ref2) {
              var data = _ref2.data;
              return data.pipe(res);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map