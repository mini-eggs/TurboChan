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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(8);






__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default.a.dev = !("development" === "production");

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var port = process.env.PORT || 3000;
var nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default.a);

if (nuxt.options.dev) {
  new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();
}

app.set("port", port);
app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
app.use("/api", __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */]);
app.use(nuxt.render);
app.listen(port, function () {
  return console.log("\nServer has started.\n");
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(2);

module.exports = {
  head: {
    title: "Turbo Chan",
    meta: [{ charset: "utf-8" }, {
      name: "viewport",
      content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }, { name: "apple-mobile-web-app-title", content: "Turbo Chan" }, { name: "apple-mobile-web-app-capable", content: "yes" }, {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }, { name: "msapplication-TileColor", content: "#343442" }, { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }, { name: "theme-color", content: "#343442" }],
    link: [{
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
    }, { rel: "manifest", href: "/manifest.json" }, {
      rel: "apple-touch-startup-image",
      href: "/splash.png"
    }, { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto"
    }]
  },
  loading: { color: "transparent"
    // generate: {
    //   routes: async () => {
    //     const res = await axios("https://a.4cdn.org/boards.json");

    //     const routes = res.data.boards.map(({ board }) => [
    //       `/${board}`,
    //       ...Array.from({ length: 10 }).map((_, i) => `/${board}/${i + 1}`)
    //     ]);

    //     return routes.reduce((a, b) => [...a, ...b]);
    //   }
    // }
  } };

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boards__ = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/boards", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(_, res) {
    var next_res;
    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default()("https://a.4cdn.org/boards.json");

          case 2:
            next_res = _context.sent;

            res.json(next_res.data);

          case 4:
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/:board/:page", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var _req$params, board, page, next_res;

    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, board = _req$params.board, page = _req$params.page;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default()("https://a.4cdn.org/" + board + "/" + page + ".json");

          case 3:
            next_res = _context.sent;

            res.json(next_res.data);

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get("/:board/thread/:thread", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var _req$params, board, thread, next_res;

    return __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, board = _req$params.board, thread = _req$params.thread;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default()("https://a.4cdn.org/" + board + "/thread/" + thread + ".json");

          case 3:
            next_res = _context.sent;

            res.json(next_res.data);

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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_evan_Projects_TurboChan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  'use strict';

  var assign = __webpack_require__(14);
  var vary = __webpack_require__(15);

  var defaults = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = options.maxAge && options.maxAge.toString();
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue ) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus || defaults.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vary");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map