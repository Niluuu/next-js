module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scr_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scr/css/index.css */ "./scr/css/index.css");
/* harmony import */ var _scr_css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scr_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scr_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scr/components/Layout */ "./scr/components/Layout.js");
var _jsxFileName = "/home/nilufar/next-with-styled-component/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_scr_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./scr/components/Header.js":
/*!**********************************!*\
  !*** ./scr/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header",
  componentId: "r6bprn-0"
})(["width:100%;height:170%;background:url(", ") no-repeat top center;background-size:150%;position:absolute;top:0;display:flex;align-items:center;justify-content:center;"], props => props.background);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./scr/components/Layout.js":
/*!**********************************!*\
  !*** ./scr/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./scr/components/Nav.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./scr/components/Header.js");
/* harmony import */ var _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scr/img/banner.png */ "./scr/img/banner.png");
/* harmony import */ var _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_cards_bigCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/cards/bigCart */ "./scr/ui/cards/bigCart.js");
/* harmony import */ var _ui_typograf_h3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/typograf/h3 */ "./scr/ui/typograf/h3.js");
/* harmony import */ var _ui_typograf_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/typograf/text */ "./scr/ui/typograf/text.js");
/* harmony import */ var _img_zigzag_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/zigzag.svg */ "./scr/img/zigzag.svg");
/* harmony import */ var _img_zigzag_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_zigzag_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/nilufar/next-with-styled-component/scr/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Body",
  componentId: "sc-4rumfj-0"
})(["width:auto;"]);
const ZigzadSvg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__ZigzadSvg",
  componentId: "sc-4rumfj-1"
})(["position:absolute;width:100%;bottom:-61%;height:39px;z-index:200;& > img{transform:rotate(180deg);}"]);
function Layout() {
  return __jsx(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    background: _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_ui_cards_bigCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_ui_typograf_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Food Catering Service."), __jsx(_ui_typograf_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    grey: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "inappropriate behavior is often laughed off as \u201Cboys will be boys,\u201D women face higher conduct standards especially in the workplace. That\u2019s why it\u2019s crucial that, as women."))), __jsx(ZigzadSvg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: _img_zigzag_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

/***/ }),

/***/ "./scr/components/Nav.js":
/*!*******************************!*\
  !*** ./scr/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.png */ "./scr/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_buttons_boxedButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/buttons/boxedButton */ "./scr/ui/buttons/boxedButton.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/nilufar/next-with-styled-component/scr/components/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__Navbar",
  componentId: "sc-190rgft-0"
})(["width:auto;display:flex;justify-content:space-evenly;align-items:center;position:sticky;z-index:300;"]);
const HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__HoverLink",
  componentId: "sc-190rgft-1"
})(["width:70px;height:60px;text-align:center;display:block;color:#fff !important;font-size:16px;text-transform:capitalize;font-weight:400;display:inline-block;padding:35px 10px;position:relative;", " cursor:pointer;&:hover{color:green;display:block;}&:hover > .dropdown{opacity:1;visibility:visible;top:87px;}&:after{content:'';position:relative;display:block;bottom:0px;width:100%;height:2px;background:#78b454;margin-top:30px;z-index:-1;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;}&:hover:after{position:relative;display:flex;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}"], props => props.primary && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    & > a {
      color: white !important;
    }
  `);
const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Nav__Dropdown",
  componentId: "sc-190rgft-2"
})(["position:absolute;top:140%;background:#fff;color:#333;width:200px;z-index:2;box-shadow:0 0 10px rgba(0,0,0,.02);opacity:0;visibility:hidden;-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Nav__List",
  componentId: "sc-190rgft-3"
})(["padding:15px 20px;color:#333 !important;overflow:hidden;display:flex;justify-content:flex-start;font-weight:bold;&:hover > a{color:#78b454;}"]);
function Nav() {
  return __jsx(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "About")), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Servise")), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Menu")), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Gallery")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Pages "), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaAngleDown"], {
    className: "down-i",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(Dropdown, {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Blog")), __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Community")))), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Pages "), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaAngleDown"], {
    className: "down-i",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(Dropdown, {
    className: "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Blog")), __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Community")))), __jsx(HoverLink, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Contact")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_ui_buttons_boxedButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Costum Order")));
}

/***/ }),

/***/ "./scr/css/index.css":
/*!***************************!*\
  !*** ./scr/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"down-i": "down-i___wkvZh"
};

/***/ }),

/***/ "./scr/img/banner.png":
/*!****************************!*\
  !*** ./scr/img/banner.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-05ba7510f52bfaf510c2073cc7945c1f.png";

/***/ }),

/***/ "./scr/img/logo.png":
/*!**************************!*\
  !*** ./scr/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./scr/img/zigzag.svg":
/*!****************************!*\
  !*** ./scr/img/zigzag.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTkyMCAyMCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSJCRyIgY2xhc3M9ImNscy0xIiBkPSJNMTkyMCwwbC0xOS4wOCwyMEwxODgxLjcsMGwtMTkuMiwyMEwxODQzLjI5LDBsLTE5LjIxLDIwTDE4MDQuODcsMGwtMTkuMiwyMEwxNzY2LjQ2LDBsLTE5LjIsMjBMMTcyOC4wNSwwbC0xOS4yLDIwLTE5LjItMjAtMTkuMjEsMjAtMTkuMi0yMC0xOS4yLDIwTDE2MTIuODMsMGwtMTkuMiwyMEwxNTc0LjQyLDBsLTE5LjIsMjAtMTkuMi0yMC0xOS4yMSwyMC0xOS4yLTIwLTE5LjIsMjBMMTQ1OS4yLDBsLTE5LjIsMjBMMTQyMC44LDBsLTE5LjIsMjBMMTM4Mi40LDBsLTE5LjIsMjBMMTM0My45OSwwbC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMTksMjBMMTE1MiwwbC0xOS4yLDIwTDExMTMuNiwwbC0xOS4yLDIwTDEwNzUuMTksMGwtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMEw5MjEuNTgsMGwtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjBMNjE0LjM3LDBsLTE5LjIsMjBMNTc1Ljk3LDBsLTE5LjIsMjBMNTM3LjU3LDBsLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMC0xOS4yLTIwLTE5LjIsMjAtMTkuMi0yMC0xOS4yLDIwLTE5LjItMjAtMTkuMiwyMEw3Ni43OSwwbC0xOS4yLDIwTDM4LjQsMGwtMTkuMiwyMEwwLDBIMTkyMFoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./scr/ui/buttons/boxedButton.js":
/*!***************************************!*\
  !*** ./scr/ui/buttons/boxedButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BoxsedButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "boxedButton__BoxsedButton",
  componentId: "sc-1j71w0s-0"
})(["width:160px;height:60px;background:#fff;cursor:pointer;margin-bottom:30px;border:none;font-weight:bold;"]);
/* harmony default export */ __webpack_exports__["default"] = (BoxsedButton);

/***/ }),

/***/ "./scr/ui/cards/bigCart.js":
/*!*********************************!*\
  !*** ./scr/ui/cards/bigCart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BigCart = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bigCart__BigCart",
  componentId: "sc-14yottf-0"
})(["background:#fff;position:absolute;top:334px;border-radius:10px;padding:60px 115px;width:40%;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (BigCart);

/***/ }),

/***/ "./scr/ui/typograf/h3.js":
/*!*******************************!*\
  !*** ./scr/ui/typograf/h3.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const H3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "h3__H3",
  componentId: "sc-1ue56yu-0"
})(["font-size:60px;font-weight:700;line-height:66px;margin-bottom:26px;margin-top:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (H3);

/***/ }),

/***/ "./scr/ui/typograf/text.js":
/*!*********************************!*\
  !*** ./scr/ui/typograf/text.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "text__Text",
  componentId: "sc-1if1p2z-0"
})(["font-size:16px;font-weight:300;margin-bottom:0;margin-top:0;line-height:30px;color:#777"]);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nilufar/next-with-styled-component/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map