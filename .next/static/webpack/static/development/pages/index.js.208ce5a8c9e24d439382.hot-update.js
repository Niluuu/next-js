webpackHotUpdate("static/development/pages/index.js",{

/***/ "./scr/components/Layout.js":
/*!**********************************!*\
  !*** ./scr/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./scr/components/Nav.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./scr/components/Header.js");
/* harmony import */ var _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scr/img/banner.png */ "./scr/img/banner.png");
/* harmony import */ var _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_cards_bigCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/cards/bigCart */ "./scr/ui/cards/bigCart.js");
/* harmony import */ var _ui_typograf_h3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/typograf/h3 */ "./scr/ui/typograf/h3.js");
var _jsxFileName = "/home/nilufar/next-with-styled-component/scr/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Body",
  componentId: "sc-4rumfj-0"
})(["width:auto;"]);
function Layout() {
  return __jsx(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    background: _scr_img_banner_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_ui_cards_bigCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_ui_typograf_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "adsd"))));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/logo.png */ "./scr/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_buttons_boxedButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/buttons/boxedButton */ "./scr/ui/buttons/boxedButton.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");

var _jsxFileName = "/home/nilufar/next-with-styled-component/scr/components/Nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    & > a {\n      color: white !important;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__Navbar",
  componentId: "sc-190rgft-0"
})(["width:auto;display:flex;justify-content:space-evenly;align-items:center;position:sticky;z-index:300;"]);
var HoverLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__HoverLink",
  componentId: "sc-190rgft-1"
})(["width:70px;height:60px;text-align:center;display:block;color:#fff !important;font-size:16px;text-transform:capitalize;font-weight:400;display:inline-block;padding:35px 10px;position:relative;", " cursor:pointer;&:hover{color:green;display:block;}&:hover > .dropdown{opacity:1;visibility:visible;top:87px;}&:after{content:'';position:relative;display:block;bottom:0px;width:100%;height:2px;background:#78b454;margin-top:30px;z-index:-1;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s;transition:transform .5s;}&:hover:after{position:relative;display:flex;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}"], function (props) {
  return props.primary && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
});
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__Dropdown",
  componentId: "sc-190rgft-2"
})(["position:absolute;top:140%;background:#fff;color:#333;width:200px;z-index:2;box-shadow:0 0 10px rgba(0,0,0,.02);opacity:0;visibility:hidden;-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Gallery")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Pages "), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaAngleDown"], {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Pages "), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaAngleDown"], {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Contact")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_ui_buttons_boxedButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Costum Order")));
}

/***/ }),

/***/ "./scr/components/bigCart.js":
false,

/***/ "./scr/components/boxedButton.js":
false,

/***/ "./scr/ui/buttons/boxedButton.js":
/*!***************************************!*\
  !*** ./scr/ui/buttons/boxedButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BoxsedButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BigCart = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "bigCart__BigCart",
  componentId: "sc-14yottf-0"
})(["background:#fff;position:relative;border-radius:5px;padding:69px 90px;"]);
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var H3 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "h3__H3",
  componentId: "sc-1ue56yu-0"
})(["font-size:60px;font-weight:700;line-height:66px;margin-bottom:26px;color:green"]);
/* harmony default export */ __webpack_exports__["default"] = (H3);

/***/ })

})
//# sourceMappingURL=index.js.208ce5a8c9e24d439382.hot-update.js.map