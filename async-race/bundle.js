/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/button/button.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/button/button.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-black: #252525;
  --color-white: #e4e9e9;
  --color-green: #a0bf3a;
  --color-green-secondary: #8aaa1f;
  --color-blue: #3292d4;
  --color-blue-secondary: #287bb2;
  --color-red: #e85152;
  --color-red-secondary: #e33636;
  --color-grey-light: #959ea3;
  --color-grey: #444444;
  --color-yellow: #e9be0f;
  --color-yellow-secondary: #de9201;
}

body {
  background-color: var(--color-black);
  font-family: "Victor Mono", monospace;
  color: var(--color-white);
}

.button {
  background-color: var(--color-red);
  color: var(--color-black);
  border: none;
  border-radius: 0.35rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  font-style: italic;
  line-height: 100%;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s;
}
.button:last-child {
  margin-right: 0rem;
}
.button:disabled {
  background-color: var(--color-grey);
  pointer-events: none;
}
.button_green {
  background-color: var(--color-green);
}
@media (hover: hover) and (pointer: fine) {
  .button_green:hover {
    background-color: var(--color-green-secondary);
  }
}
.button_green:active {
  background-color: var(--color-green-secondary);
}
.button_blue {
  background-color: var(--color-blue);
}
@media (hover: hover) and (pointer: fine) {
  .button_blue:hover {
    background-color: var(--color-blue-secondary);
  }
}
.button_blue:active {
  background-color: var(--color-blue-secondary);
}
.button_red {
  background-color: var(--color-red);
}
@media (hover: hover) and (pointer: fine) {
  .button_red:hover {
    background-color: var(--color-red-secondary);
  }
}
.button_red:active {
  background-color: var(--color-red-secondary);
}
.button_small {
  border-radius: 0.35rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  font-size: 0.75rem;
}
@media (hover: hover) and (pointer: fine) {
  .button_remove:hover {
    background-color: var(--color-red);
  }
}
.button_remove:active {
  background-color: var(--color-red);
}
.button.selected {
  background-color: var(--color-yellow);
}
@media (hover: hover) and (pointer: fine) {
  .button.selected:hover {
    background-color: var(-color-yellow-secondary);
  }
}
.button.selected:active {
  background-color: var(-color-yellow-secondary);
}
.button_cars-control {
  background: none;
  border: solid 2px var(--color-green);
  color: var(--color-green);
  border-radius: 0.35rem;
  padding: 0.5rem;
  width: 2.25rem;
  margin-right: 0.25rem;
}
@media (hover: hover) and (pointer: fine) {
  .button_cars-control:hover {
    background: var(--color-green-secondary);
    border: solid 2px var(--color-green-secondary);
    color: var(--color-black);
  }
}
.button_cars-control:active {
  background: var(--color-green-secondary);
  border: solid 2px var(--color-green-secondary);
  color: var(--color-black);
}
.button_cars-control.active {
  background: var(--color-green);
  color: var(--color-black);
}
.button_cars-control:disabled {
  background: none;
  border: solid 2px var(--color-grey);
  color: var(--color-grey);
  pointer-events: none;
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/button/button.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AARA;EACE,kCAAA;EACA,yBAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;AAWF;AATE;EACE,kBAAA;AAWJ;AARE;EACE,mCAAA;EACA,oBAAA;AAUJ;AAPE;EACE,oCAAA;AASJ;AA7CE;EACE;IACE,8CAmCa;EAYjB;AACF;AA7CE;EACE,8CA+Be;AAgBnB;AAdE;EACE,mCAAA;AAgBJ;AAxDE;EACE;IACE,6CAuCa;EAmBjB;AACF;AAxDE;EACE,6CAmCe;AAuBnB;AApBE;EACE,kCAAA;AAsBJ;AAnEE;EACE;IACE,4CA6Ca;EAwBjB;AACF;AAnEE;EACE,4CAyCe;AA4BnB;AA1BE;EACE,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;AA4BJ;AAjFE;EACE;IACE,kCAuDa;EA4BjB;AACF;AAjFE;EACE,kCAmDe;AAgCnB;AA9BE;EACE,qCAAA;AAgCJ;AA5FE;EACE;IACE,8CA2Da;EAmCjB;AACF;AA5FE;EACE,8CAuDe;AAuCnB;AApCE;EACE,gBAAA;EACA,oCAAA;EACA,yBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,qBAAA;AAsCJ;AApCI;EACE;IACE,wCAAA;IACA,8CAAA;IACA,yBAAA;EAsCN;AACF;AApCI;EACE,wCAAA;EACA,8CAAA;EACA,yBAAA;AAsCN;AAnCI;EACE,8BAAA;EACA,yBAAA;AAqCN;AAlCI;EACE,gBAAA;EACA,mCAAA;EACA,wBAAA;EACA,oBAAA;AAoCN","sourcesContent":[":root {\r\n  --color-black: #252525;\r\n  --color-white: #e4e9e9;\r\n  --color-green: #a0bf3a;\r\n  --color-green-secondary: #8aaa1f;\r\n  --color-blue: #3292d4;\r\n  --color-blue-secondary: #287bb2;\r\n  --color-red: #e85152;\r\n  --color-red-secondary: #e33636;\r\n  --color-grey-light: #959ea3;\r\n  --color-grey: #444444;\r\n  --color-yellow: #e9be0f;\r\n  --color-yellow-secondary: #de9201;\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\r\n\r\nbody {\r\n  background-color: var(--color-black);\r\n  //font-family: 'Sono', monospace;\r\n  font-family: 'Victor Mono', monospace;\r\n  color: var(--color-white);\r\n}\r\n","@import './../../utils/variables.scss';\n\n@mixin hover($colorHover) {\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background-color: $colorHover;\n    }\n  }\n  &:active {\n    background-color: $colorHover;\n  }\n}\n\n.button {\n  background-color: var(--color-red);\n  color: var(--color-black);\n  border: none;\n  border-radius: 0.35rem;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  font-size: 1rem;\n  font-style: italic;\n  line-height: 100%;\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 1rem;\n  transition: all 0.3s;\n\n  &:last-child {\n    margin-right: 0rem;\n  }\n\n  &:disabled {\n    background-color: var(--color-grey);\n    pointer-events: none;\n  }\n\n  &_green {\n    background-color: var(--color-green);\n    @include hover(var(--color-green-secondary));\n  }\n  &_blue {\n    background-color: var(--color-blue);\n    @include hover(var(--color-blue-secondary));\n  }\n\n  &_red {\n    background-color: var(--color-red);\n\n    @include hover(var(--color-red-secondary));\n  }\n  &_small {\n    border-radius: 0.35rem;\n    padding: 0.25rem 0.5rem;\n    font-weight: 600;\n    font-size: 0.75rem;\n  }\n\n  &_remove {\n    @include hover(var(--color-red));\n  }\n  &.selected {\n    background-color: var(--color-yellow);\n    @include hover(var(-color-yellow-secondary));\n  }\n\n  &_cars-control {\n    background: none;\n    border: solid 2px var(--color-green);\n    color: var(--color-green);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    width: 2.25rem;\n    margin-right: 0.25rem;\n\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        background: var(--color-green-secondary);\n        border: solid 2px var(--color-green-secondary);\n        color: var(--color-black);\n      }\n    }\n    &:active {\n      background: var(--color-green-secondary);\n      border: solid 2px var(--color-green-secondary);\n      color: var(--color-black);\n    }\n\n    &.active {\n      background: var(--color-green);\n      color: var(--color-black);\n    }\n\n    &:disabled {\n      background: none;\n      border: solid 2px var(--color-grey);\n      color: var(--color-grey);\n      pointer-events: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/form/form.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/form/form.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../images/color.svg */ "./src/images/color.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-black: #252525;
  --color-white: #e4e9e9;
  --color-green: #a0bf3a;
  --color-green-secondary: #8aaa1f;
  --color-blue: #3292d4;
  --color-blue-secondary: #287bb2;
  --color-red: #e85152;
  --color-red-secondary: #e33636;
  --color-grey-light: #959ea3;
  --color-grey: #444444;
  --color-yellow: #e9be0f;
  --color-yellow-secondary: #de9201;
}

body {
  background-color: var(--color-black);
  font-family: "Victor Mono", monospace;
  color: var(--color-white);
}

.form {
  width: 24rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
}
.form:last-child {
  margin-bottom: 0rem;
}
.form .input_text {
  margin-right: 0.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  height: 1.75rem;
  border-radius: 0.25rem;
}
.form .input_color {
  margin-right: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat left 4px center;
  padding-left: 1.75rem;
  width: 4.5rem;
  height: 2rem;
  border: solid 2px var(--color-white);
  border-radius: 0.35rem;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/form/form.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AAnBA;EACE,YAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAsBF;AApBE;EACE,mBAAA;AAsBJ;AAnBE;EACE,oBAAA;EACA,oCAAA;EACA,oCAAA;EACA,eAAA;EACA,sBAAA;AAqBJ;AAnBE;EACE,kBAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,6EAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;AAqBJ","sourcesContent":[":root {\r\n  --color-black: #252525;\r\n  --color-white: #e4e9e9;\r\n  --color-green: #a0bf3a;\r\n  --color-green-secondary: #8aaa1f;\r\n  --color-blue: #3292d4;\r\n  --color-blue-secondary: #287bb2;\r\n  --color-red: #e85152;\r\n  --color-red-secondary: #e33636;\r\n  --color-grey-light: #959ea3;\r\n  --color-grey: #444444;\r\n  --color-yellow: #e9be0f;\r\n  --color-yellow-secondary: #de9201;\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\r\n\r\nbody {\r\n  background-color: var(--color-black);\r\n  //font-family: 'Sono', monospace;\r\n  font-family: 'Victor Mono', monospace;\r\n  color: var(--color-white);\r\n}\r\n","@import './../../utils/variables.scss';\r\n\r\n.form {\r\n  width: 24rem;\r\n  margin-bottom: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  &:last-child {\r\n    margin-bottom: 0rem;\r\n  }\r\n\r\n  .input_text {\r\n    margin-right: 0.5rem;\r\n    background-color: var(--color-white);\r\n    border: 1px solid var(--color-white);\r\n    height: 1.75rem;\r\n    border-radius: 0.25rem;\r\n  }\r\n  .input_color {\r\n    margin-right: 1rem;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url('./../../images/color.svg') no-repeat left 4px center;\r\n    padding-left: 1.75rem;\r\n    width: 4.5rem;\r\n    height: 2rem;\r\n    border: solid 2px var(--color-white);\r\n    border-radius: 0.35rem;\r\n    cursor: pointer;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/race-row/race-row.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/race-row/race-row.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../images/flag.svg */ "./src/images/flag.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.race-row {
  margin-bottom: 1.25rem;
}
.race-row:last-child {
  margin-bottom: 0;
}
.race-row__top-row {
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.75rem;
}
.race-row__top-buttons {
  margin-right: 1rem;
}
.race-row__track {
  height: 3rem;
  display: flex;
  align-items: flex-end;
  border-bottom: dashed 2px var(--color-white);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 90px bottom 3px;
  background-size: auto;
}
@media (max-width: 768px) {
  .race-row__track {
    background-position: right 50px bottom 3px;
  }
}
.race-row__control-buttons {
  align-self: flex-start;
  margin-right: 1rem;
}
@media (max-width: 768px) {
  .race-row__car-name {
    font-size: 0.75rem;
  }
}
.race-row svg {
  transform: translateX(0px);
}
@media (max-width: 768px) {
  .race-row svg {
    width: 60px;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/race-row/race-row.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;AAAE;EACE,gBAAA;AAEJ;AACE;EACE,aAAA;EACA,qBAAA;EACA,sBAAA;AACJ;AAEE;EACE,kBAAA;AAAJ;AAEE;EACE,YAAA;EACA,aAAA;EACA,qBAAA;EACA,4CAAA;EACA,yDAAA;EACA,4BAAA;EACA,0CAAA;EACA,qBAAA;AAAJ;AACI;EATF;IAUI,0CAAA;EAEJ;AACF;AACE;EACE,sBAAA;EACA,kBAAA;AACJ;AAEI;EADF;IAEI,kBAAA;EACJ;AACF;AAEE;EACE,0BAAA;AAAJ;AACI;EAFF;IAGI,WAAA;EAEJ;AACF","sourcesContent":[".race-row {\r\n  margin-bottom: 1.25rem;\r\n  &:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  &__top-row {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n  &__top-buttons {\r\n    margin-right: 1rem;\r\n  }\r\n  &__track {\r\n    height: 3rem;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    border-bottom: dashed 2px var(--color-white);\r\n    background-image: url('./../../images/flag.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: right 90px bottom 3px;\r\n    background-size: auto;\r\n    @media (max-width: 768px) {\r\n      background-position: right 50px bottom 3px;\r\n    }\r\n  }\r\n\r\n  &__control-buttons {\r\n    align-self: flex-start;\r\n    margin-right: 1rem;\r\n  }\r\n  &__car-name {\r\n    @media (max-width: 768px) {\r\n      font-size: 0.75rem;\r\n    }\r\n  }\r\n\r\n  svg {\r\n    transform: translateX(0px);\r\n    @media (max-width: 768px) {\r\n      width: 60px;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-row/winner-row.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-row/winner-row.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-black: #252525;
  --color-white: #e4e9e9;
  --color-green: #a0bf3a;
  --color-green-secondary: #8aaa1f;
  --color-blue: #3292d4;
  --color-blue-secondary: #287bb2;
  --color-red: #e85152;
  --color-red-secondary: #e33636;
  --color-grey-light: #959ea3;
  --color-grey: #444444;
  --color-yellow: #e9be0f;
  --color-yellow-secondary: #de9201;
}

body {
  background-color: var(--color-black);
  font-family: "Victor Mono", monospace;
  color: var(--color-white);
}

.winner-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  transition: all 0.5s;
  padding: 0.25rem;
}
@media (hover: hover) and (pointer: fine) {
  .winner-row:hover {
    background: var(--color-grey);
  }
}
.winner-row_header {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.winner-row_header .winner-row__cell {
  font-size: 1rem;
}
.winner-row_header .winner-row__cell_wins {
  cursor: pointer;
}
.winner-row_header .winner-row__cell_time {
  cursor: pointer;
}
@media (hover: hover) and (pointer: fine) {
  .winner-row_header:hover {
    background: none;
  }
}
.winner-row__cell {
  margin-right: 1rem;
  font-size: 0.75rem;
}
.winner-row__cell:last-child() {
  margin-right: 0;
}
.winner-row__cell_number {
  width: 1rem;
}
.winner-row__cell_car {
  width: 3rem;
}
.winner-row__cell_car svg {
  width: 100%;
}
.winner-row__cell_name {
  width: 12rem;
}
.winner-row__cell_wins {
  width: 3rem;
}
.winner-row__cell_time {
  width: 6rem;
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/winners-row/winner-row.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AAnBA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,oBAAA;EACA,gBAAA;AAsBF;AApBE;EACE;IACE,6BAAA;EAsBJ;AACF;AApBE;EACE,gBAAA;EACA,qBAAA;AAsBJ;AArBI;EACE,eAAA;AAuBN;AArBM;EACE,eAAA;AAuBR;AArBM;EACE,eAAA;AAuBR;AApBI;EACE;IACE,gBAAA;EAsBN;AACF;AAnBE;EACE,kBAAA;EACA,kBAAA;AAqBJ;AApBI;EACE,eAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AArBM;EACE,WAAA;AAuBR;AApBI;EACE,YAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AApBI;EACE,WAAA;AAsBN","sourcesContent":[":root {\r\n  --color-black: #252525;\r\n  --color-white: #e4e9e9;\r\n  --color-green: #a0bf3a;\r\n  --color-green-secondary: #8aaa1f;\r\n  --color-blue: #3292d4;\r\n  --color-blue-secondary: #287bb2;\r\n  --color-red: #e85152;\r\n  --color-red-secondary: #e33636;\r\n  --color-grey-light: #959ea3;\r\n  --color-grey: #444444;\r\n  --color-yellow: #e9be0f;\r\n  --color-yellow-secondary: #de9201;\r\n}\r\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\r\n\r\nbody {\r\n  background-color: var(--color-black);\r\n  //font-family: 'Sono', monospace;\r\n  font-family: 'Victor Mono', monospace;\r\n  color: var(--color-white);\r\n}\r\n","@import './../../utils/variables.scss';\r\n\r\n.winner-row {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 0.25rem;\r\n  transition: all 0.5s;\r\n  padding: 0.25rem;\r\n\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover {\r\n      background: var(--color-grey);\r\n    }\r\n  }\r\n  &_header {\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n    .winner-row__cell {\r\n      font-size: 1rem;\r\n\r\n      &_wins {\r\n        cursor: pointer;\r\n      }\r\n      &_time {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: none;\r\n      }\r\n    }\r\n  }\r\n  &__cell {\r\n    margin-right: 1rem;\r\n    font-size: 0.75rem;\r\n    &:last-child() {\r\n      margin-right: 0;\r\n    }\r\n    &_number {\r\n      width: 1rem;\r\n    }\r\n    &_car {\r\n      width: 3rem;\r\n      svg {\r\n        width: 100%;\r\n      }\r\n    }\r\n    &_name {\r\n      width: 12rem;\r\n    }\r\n    &_wins {\r\n      width: 3rem;\r\n    }\r\n    &_time {\r\n      width: 6rem;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-table/winner-table.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-table/winner-table.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.winners-table {
  width: max-content;
  margin-bottom: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/components/winners-table/winner-table.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,mBAAA;AACF","sourcesContent":[".winners-table {\r\n  width: max-content;\r\n  margin-bottom: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/garage.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/garage.scss ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../images/download.svg */ "./src/images/download.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../images/trophy-cup.svg */ "./src/images/trophy-cup.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.form-wrapper {
  margin: 0 0 2rem 0;
}

.button_reset.button_green {
  margin-right: 2rem;
}

.tool-buttons {
  margin-bottom: 3rem;
}

.cars-counter {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.race-table {
  margin-bottom: 2rem;
}

.input__error {
  position: absolute;
  font-size: 0.75rem;
  bottom: -1.25rem;
  color: var(--color-red);
}

.download-massege {
  padding-left: 2.5rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat left center;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.winner {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-red);
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) var(--color-white) no-repeat left 1rem center;
  background-size: auto;
  padding: 1rem 1rem 1rem 6rem;
  box-shadow: 13px 11px 1px #000;
}
@media (max-width: 768px) {
  .winner {
    font-size: 1rem;
  }
}

.page-counter {
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
}`, "",{"version":3,"sources":["webpack://./src/pages/garage.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;;AACA;EACE,kBAAA;AAEF;;AAAA;EACE,mBAAA;AAGF;;AADA;EACE,mBAAA;EACA,kBAAA;AAIF;;AAFA;EACE,mBAAA;AAKF;;AAHA;EACE,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;AAMF;;AAJA;EACE,oBAAA;EACA,yEAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AAOF;;AALA;EACE,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,iGAAA;EACA,qBAAA;EACA,4BAAA;EACA,8BAAA;AAQF;AANE;EAbF;IAcI,eAAA;EASF;AACF;;AAPA;EACE,qBAAA;EACA,kBAAA;AAUF","sourcesContent":[".form-wrapper {\r\n  margin: 0 0 2rem 0;\r\n}\r\n.button_reset.button_green {\r\n  margin-right: 2rem;\r\n}\r\n.tool-buttons {\r\n  margin-bottom: 3rem;\r\n}\r\n.cars-counter {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.25rem;\r\n}\r\n.race-table {\r\n  margin-bottom: 2rem;\r\n}\r\n.input__error {\r\n  position: absolute;\r\n  font-size: 0.75rem;\r\n  bottom: -1.25rem;\r\n  color: var(--color-red);\r\n}\r\n.download-massege {\r\n  padding-left: 2.5rem;\r\n  background: url('./../images/download.svg') no-repeat left center;\r\n  margin-top: 2rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n.winner {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--color-red);\r\n  background: url('./../images/trophy-cup.svg') var(--color-white) no-repeat left 1rem center;\r\n  background-size: auto;\r\n  padding: 1rem 1rem 1rem 6rem;\r\n  box-shadow: 13px 11px 1px #000;\r\n\r\n  @media (max-width: 768px) {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n.page-counter {\r\n  margin-bottom: 0.5rem;\r\n  font-size: 0.75rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/page.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/page.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-content {
  margin: auto;
  max-width: 1280px;
  padding: 1rem;
}

nav {
  margin-bottom: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/pages/page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;AACF;;AACA;EACE,mBAAA;AAEF","sourcesContent":[".main-content {\r\n  margin: auto;\r\n  max-width: 1280px;\r\n  padding: 1rem;\r\n}\r\nnav {\r\n  margin-bottom: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./button.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/button/button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/form/form.scss":
/*!***************************************!*\
  !*** ./src/components/form/form.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./form.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/form/form.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/race-row/race-row.scss":
/*!***********************************************!*\
  !*** ./src/components/race-row/race-row.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_race_row_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./race-row.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/race-row/race-row.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_race_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_race_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_race_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_race_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/winners-row/winner-row.scss":
/*!****************************************************!*\
  !*** ./src/components/winners-row/winner-row.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_row_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./winner-row.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-row/winner-row.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_row_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/winners-table/winner-table.scss":
/*!********************************************************!*\
  !*** ./src/components/winners-table/winner-table.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_table_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./winner-table.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/components/winners-table/winner-table.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_table_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_table_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_table_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_winner_table_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/garage.scss":
/*!*******************************!*\
  !*** ./src/pages/garage.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_garage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./garage.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/garage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_garage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_garage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_garage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_garage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/page.scss":
/*!*****************************!*\
  !*** ./src/pages/page.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./page.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/page.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PORT = 'http://127.0.0.1:3000';
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.fetchWithOptions = function (url, options, errorMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, options)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Error HTTP: ' + response.status);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Api.getCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/garage/';
                        fullUrl = PORT + pathUrl + String(id);
                        options = {
                            method: 'GET',
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error getting car: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.getCars = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response, totalCount, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/garage/';
                        fullUrl = PORT + pathUrl;
                        if (page || limit)
                            fullUrl = fullUrl + '?';
                        if (page)
                            fullUrl = fullUrl + '_page=' + String(page);
                        if (limit)
                            fullUrl = page ? fullUrl + '&_limit=' + String(limit) : fullUrl + '_limit=' + String(limit);
                        options = {
                            method: 'GET',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(fullUrl, options)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            console.error('Error:', response.statusText);
                            return [2 /*return*/, undefined];
                        }
                        totalCount = response.headers.get('X-Total-Count');
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = (_a.sent());
                        return [2 /*return*/, { cars: data, totalCount: totalCount }];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error:', error_1.message);
                        return [2 /*return*/, undefined];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Api.createCar = function (name, color) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, carData, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/garage';
                        fullUrl = PORT + pathUrl;
                        carData = {
                            name: name,
                            color: color,
                        };
                        options = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(carData),
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error creating car: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, options, fullUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/garage/';
                        options = {
                            method: 'DELETE',
                        };
                        fullUrl = PORT + pathUrl + String(id);
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error deleting car: ')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.updateCar = function (id, name, color) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, carData, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/garage/';
                        fullUrl = PORT + pathUrl + String(id);
                        carData = {
                            name: name,
                            color: color,
                        };
                        options = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(carData),
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error updating car: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.startOrStopCar = function (id, status) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/engine';
                        fullUrl = PORT + pathUrl + '?id=' + String(id) + '&status=' + status;
                        options = {
                            method: 'PATCH',
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error start or stop car: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.switchCarToDriveMode = function (id, abortController) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response, json, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/engine';
                        fullUrl = PORT + pathUrl + '?id=' + String(id) + '&status=' + 'drive';
                        options = {
                            method: 'PATCH',
                            signal: abortController.signal,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(fullUrl, options)];
                    case 2:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        if (response.status === 404) {
                            console.error('Engine parameters for car with such id was not found in the garage.');
                        }
                        else if (response.status === 429) {
                            console.error('Drive already in progress.');
                        }
                        // Ошибка, промис отклонен
                        throw new Error('Request failed with status: ' + response.status);
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        // Ошибка, промис отклонен
                        throw error_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Api.getWinners = function (page, limit, sort, order) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response, totalCount, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/winners';
                        fullUrl = PORT + pathUrl;
                        if (page || limit || sort || order)
                            fullUrl += '?';
                        if (page)
                            fullUrl += "_page=".concat(page, "&");
                        if (limit)
                            fullUrl += "_limit=".concat(limit, "&");
                        if (sort)
                            fullUrl += "_sort=".concat(sort, "&");
                        if (order)
                            fullUrl += "_order=".concat(order);
                        options = {
                            method: 'GET',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(fullUrl, options)];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            console.error('Error:', response.statusText);
                            return [2 /*return*/, undefined];
                        }
                        totalCount = response.headers.get('X-Total-Count');
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = (_a.sent());
                        return [2 /*return*/, { winners: data, totalCount: totalCount }];
                    case 4:
                        error_3 = _a.sent();
                        console.error('Error:', error_3.message);
                        return [2 /*return*/, undefined];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Api.getWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/winners/';
                        fullUrl = PORT + pathUrl + String(id);
                        options = {
                            method: 'GET',
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error getting winner: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.createWinner = function (id, wins, time) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, winnerData, options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/winners';
                        fullUrl = PORT + pathUrl;
                        winnerData = {
                            id: id,
                            wins: wins,
                            time: time,
                        };
                        options = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(winnerData),
                        };
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error creating winner: ')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Api.deleteWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, options, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/winners/';
                        fullUrl = PORT + pathUrl + String(id);
                        options = {
                            method: 'DELETE',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error deleting winner: ')];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.error('Error:', error_4.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.updateWinner = function (id, wins, time) {
        return __awaiter(this, void 0, void 0, function () {
            var pathUrl, fullUrl, winnerData, options, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathUrl = '/winners/';
                        fullUrl = PORT + pathUrl + String(id);
                        winnerData = {
                            wins: wins,
                            time: time,
                        };
                        options = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(winnerData),
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options, 'Error updating winner: ')];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3: return [2 /*return*/, (_a.sent())];
                    case 4:
                        error_5 = _a.sent();
                        console.error('Error:', error_5.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Api;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/app/api.ts");
/* harmony import */ var _pages_garage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/garage */ "./src/pages/garage.ts");
/* harmony import */ var _pages_winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/winners */ "./src/pages/winners.ts");
/* harmony import */ var _components_race_table_ts_race_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/race-table.ts/race-table */ "./src/components/race-table.ts/race-table.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var App = /** @class */ (function () {
    function App() {
        this.state = new _state__WEBPACK_IMPORTED_MODULE_0__.State('', '#ffffff', '', '#ffffff', 1, 1);
        this.race = false;
    }
    App.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var carsData, raceTable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pageGarage = new _pages_garage__WEBPACK_IMPORTED_MODULE_2__["default"](this);
                        this.pageWinners = new _pages_winners__WEBPACK_IMPORTED_MODULE_3__["default"](this);
                        this.winnersTableOrder = 'ASC';
                        this.winnersTableSort = 'id';
                        this.pageGarage.render();
                        this.raceTable = new _components_race_table_ts_race_table__WEBPACK_IMPORTED_MODULE_4__["default"]();
                        this.pageNumberGarage = 1;
                        this.pageNumberWinner = 1;
                        this.isRace = false;
                        this.abortController = new AbortController();
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getCars(1, 7)];
                    case 1:
                        carsData = _a.sent();
                        if (carsData.totalCount) {
                            this.pageGarage.createCarsCounter(this, parseInt(carsData.totalCount));
                        }
                        else {
                            this.pageGarage.createCarsCounter(this, carsData.cars.length);
                        }
                        this.pageGarage.createPageCounter(this, this.pageNumberGarage);
                        raceTable = this.pageGarage.createRaceTable(this, carsData.cars);
                        this.pageGarage.mainContent.append(raceTable);
                        this.pageGarage.addPaginationButtons(this);
                        this.pageGarage.setPaginationButtons(this, carsData);
                        this.buttonReset.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.startCarAnimation = function (car, time, isMoving) {
        var track = this.raceTable.rows[0].querySelector('.race-row__track');
        return setInterval(function () {
            if (isMoving === true) {
                var currentTransform = getComputedStyle(car).transform;
                var currentTranslateX = parseFloat(currentTransform.split(',')[4]);
                var speed = track.clientWidth / time;
                var newTranslateX = currentTranslateX + speed;
                var rigthPadding = 16;
                if (newTranslateX > track.clientWidth - car.clientWidth * 2 - rigthPadding) {
                    car.style.transform = "translateX(".concat(track.clientWidth - car.clientWidth * 2 - 16, "px)");
                    isMoving = false;
                }
                else {
                    car.style.transform = "translateX(".concat(newTranslateX, "px)");
                }
            }
        }, 10);
    };
    App.prototype.stopCar = function (id, buttonA, buttonB, car) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttonA.disabled = false;
                        buttonB.disabled = true;
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].startOrStopCar(id, 'stopped')];
                    case 1:
                        _a.sent();
                        car.style.transform = "translateX(0px)";
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.startAndSwitchCar = function (car, index, app) {
        var _this = this;
        var interval;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var startResponse, isMoving, carSVG, winner, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].startOrStopCar(car.id, 'started')];
                    case 1:
                        startResponse = (_a.sent());
                        isMoving = true;
                        carSVG = app.raceTable.rows[index].querySelector('svg');
                        interval = app.startCarAnimation(carSVG, startResponse.distance / startResponse.velocity / 10, isMoving);
                        winner = {
                            id: car.id,
                            speed: startResponse.velocity,
                            time: (startResponse.distance / startResponse.velocity / 1000).toFixed(2),
                            name: car.name,
                        };
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].switchCarToDriveMode(car.id, app.abortController)];
                    case 2:
                        _a.sent();
                        resolve(winner);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        //останавливаем анимацию
                        clearInterval(interval);
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    App.prototype.startRace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var carsData, promises, result, winnerData, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRace = true;
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getCars(this.pageNumberGarage, 7)];
                    case 1:
                        carsData = _a.sent();
                        promises = carsData.cars.map(function (car, index) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, this.startAndSwitchCar(car, index, this)];
                            });
                        }); });
                        //отключаю кнопки на время гонки
                        this.disableButtonsDuringRace();
                        return [4 /*yield*/, Promise.any(promises)];
                    case 2:
                        result = _a.sent();
                        this.turnButtonsAfterRace();
                        this.showWinner(result.name, result.time);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 9]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWinner(result.id)];
                    case 4:
                        winnerData = _a.sent();
                        if (winnerData.time > parseFloat(result.time)) {
                            _api__WEBPACK_IMPORTED_MODULE_1__["default"].updateWinner(result.id, winnerData.wins + 1, parseFloat(result.time));
                        }
                        else {
                            _api__WEBPACK_IMPORTED_MODULE_1__["default"].updateWinner(result.id, winnerData.wins + 1, winnerData.time);
                        }
                        return [3 /*break*/, 9];
                    case 5:
                        error_2 = _a.sent();
                        if (!(error_2.status = 404)) return [3 /*break*/, 7];
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].createWinner(result.id, 1, parseFloat(result.time))];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7: throw error_2;
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.disableButtonsDuringRace = function () {
        this.buttonRace.disabled = true;
        this.buttonReset.disabled = true;
        this.buttonGenerate.disabled = true;
        this.raceTable.rows.forEach(function (row) {
            var buttons = row.querySelectorAll('button');
            buttons.forEach(function (button) {
                button.disabled = true;
            });
        });
    };
    App.prototype.turnButtonsAfterRace = function () {
        this.buttonGenerate.disabled = false;
        this.buttonReset.disabled = false;
    };
    App.prototype.turnButtonsAfterReset = function () {
        this.raceTable.rows.forEach(function (row) {
            var buttons = row.querySelectorAll('button');
            buttons.forEach(function (button) {
                button.disabled = false;
            });
            var buttonB = row.querySelector('.button_reset');
            buttonB.disabled = true;
        });
    };
    App.prototype.resetRace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var carData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRace = false;
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getCars(this.pageNumberGarage, 7)];
                    case 1:
                        carData = _a.sent();
                        carData.cars.forEach(function (car, index) {
                            var buttonA = _this.raceTable.rows[index].querySelector('.button_start');
                            var buttonB = _this.raceTable.rows[index].querySelector('.button_reset');
                            var svg = _this.raceTable.rows[index].querySelector('svg');
                            _this.stopCar(car.id, buttonA, buttonB, svg);
                        });
                        this.formCreateCar.querySelector('button').disabled = false;
                        this.buttonRace.disabled = false;
                        this.buttonGenerate.disabled = false;
                        this.abortController.abort();
                        this.abortController = new AbortController();
                        if (this.winnerMessage) {
                            this.winnerMessage.remove();
                        }
                        this.turnButtonsAfterReset();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.showWinner = function (name, time) {
        this.winnerMessage = this.pageGarage.createMessageAboutWinner(name, time);
        this.pageGarage.mainContent.append(this.winnerMessage);
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/app/state.ts":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
var State = /** @class */ (function () {
    function State(value1, color1, value2, color2, pageGarage, pageWinners) {
        this.inputCreateValue = value1;
        this.inputCreateColor = color1;
        this.inputUpdateValue = value2;
        this.inputUpdateColor = color2;
        this.pageGarage = pageGarage;
        this.pageWinners = pageWinners;
    }
    return State;
}());



/***/ }),

/***/ "./src/assets/carsMakers.ts":
/*!**********************************!*\
  !*** ./src/assets/carsMakers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAKERS: () => (/* binding */ MAKERS)
/* harmony export */ });
var MAKERS = [
    {
        maker: 'Toyota',
        models: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tacoma', 'Sienna', 'Tundra', '4Runner', 'Yaris'],
    },
    {
        maker: 'Honda',
        models: ['Accord', 'Civic', 'CR-V', 'Pilot', 'Odyssey', 'Fit', 'HR-V', 'Ridgeline', 'Insight', 'Passport'],
    },
    {
        maker: 'Ford',
        models: ['F-150', 'Escape', 'Explorer', 'Focus', 'Mustang', 'Edge', 'Ranger', 'Expedition', 'Fusion', 'EcoSport'],
    },
    {
        maker: 'Chevrolet',
        models: [
            'Silverado',
            'Equinox',
            'Traverse',
            'Malibu',
            'Tahoe',
            'Camaro',
            'Suburban',
            'Colorado',
            'Impala',
            'Bolt EV',
        ],
    },
    {
        maker: 'Nissan',
        models: ['Altima', 'Rogue', 'Sentra', 'Murano', 'Pathfinder', 'Versa', 'Frontier', 'Titan', 'Maxima', 'Kicks'],
    },
    {
        maker: 'Hyundai',
        models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Accent', 'Veloster', 'Palisade', 'Venue', 'Nexo'],
    },
    {
        maker: 'BMW',
        models: ['3 Series', '5 Series', 'X3', 'X5', '7 Series', 'X1', 'X7', '4 Series', 'X6', '2 Series'],
    },
    {
        maker: 'Mercedes-Benz',
        models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'A-Class', 'S-Class', 'GLA', 'GLS', 'CLA', 'G-Class'],
    },
    {
        maker: 'Audi',
        models: ['A4', 'Q5', 'A3', 'Q7', 'A6', 'Q3', 'A5', 'Q8', 'A8', 'TT'],
    },
    {
        maker: 'Volkswagen',
        models: ['Jetta', 'Tiguan', 'Passat', 'Atlas', 'Golf', 'Arteon', 'Atlas Cross Sport', 'Touareg', 'ID.4', 'Beetle'],
    },
];


/***/ }),

/***/ "./src/assets/colors.ts":
/*!******************************!*\
  !*** ./src/assets/colors.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLORS: () => (/* binding */ COLORS)
/* harmony export */ });
var COLORS = [
    '#F0F8FF',
    '#FAEBD7',
    '#00FFFF',
    '#7FFFD4',
    '#F0FFFF',
    '#F5F5DC',
    '#FFE4C4',
    '#FFEBCD',
    '#0000FF',
    '#8A2BE2',
    '#A52A2A',
    '#DEB887',
    '#5F9EA0',
    '#7FFF00',
    '#D2691E',
    '#FF7F50',
    '#6495ED',
    '#FFF8DC',
    '#DC143C',
    '#00FFFF',
    '#00008B',
    '#008B8B',
    '#B8860B',
    '#A9A9A9',
    '#A9A9A9',
    '#006400',
    '#BDB76B',
    '#8B008B',
    '#556B2F',
    '#FF8C00',
    '#9932CC',
    '#8B0000',
    '#E9967A',
    '#8FBC8F',
    '#483D8B',
    '#2F4F4F',
    '#2F4F4F',
    '#00CED1',
    '#9400D3',
    '#FF1493',
    '#00BFFF',
    '#696969',
    '#696969',
    '#1E90FF',
    '#B22222',
    '#FFFAF0',
    '#228B22',
    '#FF00FF',
    '#DCDCDC',
    '#F8F8FF',
    '#FFD700',
    '#DAA520',
    '#808080',
    '#808080',
    '#008000',
    '#ADFF2F',
    '#F0FFF0',
    '#FF69B4',
    '#CD5C5C',
    '#4B0082',
    '#FFFFF0',
    '#F0E68C',
    '#E6E6FA',
    '#FFF0F5',
    '#7CFC00',
    '#FFFACD',
    '#ADD8E6',
    '#F08080',
    '#E0FFFF',
    '#FAFAD2',
    '#D3D3D3',
    '#D3D3D3',
    '#90EE90',
    '#FFB6C1',
    '#FFA07A',
    '#20B2AA',
    '#87CEFA',
    '#778899',
    '#778899',
    '#B0C4DE',
    '#FFFFE0',
    '#00FF00',
    '#32CD32',
    '#FAF0E6',
    '#FF00FF',
    '#800000',
    '#66CDAA',
    '#0000CD',
    '#BA55D3',
    '#9370DB',
    '#3CB371',
    '#7B68EE',
    '#00FA9A',
    '#48D1CC',
    '#C71585',
    '#191970',
    '#F5FFFA',
    '#FFE4E1',
    '#FFE4B5',
    '#FFDEAD',
    '#000080',
    '#FDF5E6',
    '#808000',
    '#6B8E23',
    '#FFA500',
    '#FF4500',
    '#DA70D6',
    '#EEE8AA',
    '#98FB98',
    '#AFEEEE',
    '#DB7093',
    '#FFEFD5',
    '#FFDAB9',
    '#CD853F',
    '#FFC0CB',
    '#DDA0DD',
    '#B0E0E6',
    '#800080',
    '#663399',
    '#FF0000',
    '#BC8F8F',
    '#4169E1',
    '#8B4513',
    '#FA8072',
    '#F4A460',
    '#2E8B57',
    '#FFF5EE',
    '#A0522D',
    '#C0C0C0',
    '#87CEEB',
    '#6A5ACD',
    '#708090',
    '#708090',
    '#FFFAFA',
    '#00FF7F',
    '#4682B4',
    '#D2B48C',
    '#008080',
    '#D8BFD8',
    '#FF6347',
    '#40E0D0',
    '#EE82EE',
    '#F5DEB3',
    '#FFFFFF',
    '#F5F5F5',
    '#FFFF00',
    '#9ACD32',
];


/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");

var Button = /** @class */ (function () {
    function Button() {
    }
    Button.create = function (text, className, handler) {
        var button = document.createElement('button');
        button.className = "button";
        className.forEach(function (str) { return button.classList.add(str); });
        button.innerHTML = text;
        button.addEventListener('click', handler);
        button.addEventListener('click', function (event) { return event.preventDefault(); });
        return button;
    };
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/car/car.ts":
/*!***********************************!*\
  !*** ./src/components/car/car.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CarEl = /** @class */ (function () {
    function CarEl() {
    }
    CarEl.create = function (color) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '80');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 80 24');
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M1.58682 9.43331C39.4445 -10.3701 57.7793 7.15621 57.7793 7.15621C75.9642 6.90905 80.0002 11.4776 80.0002 11.4776C80.0002 11.4776 76.1668 16.3252 78.7628 18.0187C81.3604 19.7138 71.7018 19.4985 71.7018 19.4985C71.8071 19.0121 71.8709 18.5194 71.8709 18.0028C71.8709 14.2825 68.8539 11.2655 65.1336 11.2655C61.4134 11.2655 58.3948 14.2809 58.3948 18.0028C58.3948 18.5146 58.457 19.0153 58.5654 19.4985H53.4595H20.7461H19.6968C19.8037 19.0121 19.8659 18.5194 19.8659 18.0028C19.8659 14.2825 16.8457 11.2655 13.1238 11.2655C9.4052 11.2655 6.38023 14.2809 6.38023 18.0028C6.38023 18.5146 6.4456 19.0153 6.55244 19.4985C6.51895 19.4985 6.07884 19.4985 1.60117 19.4985C-1.99308 15.8931 1.58682 9.43331 1.58682 9.43331ZM35.9172 7.46238H54.9042C54.9042 7.46238 46.5054 2.44573 35.922 1.87965V7.46238H35.9172ZM33.8809 7.46716V1.85254C28.1786 1.87008 21.9867 3.26536 16.1935 7.46716H33.8809ZM65.1416 11.9416C68.468 11.9416 71.1597 14.6302 71.1597 17.9549C71.1597 21.2765 68.468 23.9698 65.1416 23.9698C61.8185 23.9698 59.1252 21.2765 59.1252 17.9549C59.1236 14.6318 61.8169 11.9416 65.1416 11.9416ZM65.1416 20.2719C66.4189 20.2719 67.457 19.2418 67.457 17.9613C67.457 16.6824 66.4189 15.6491 65.1416 15.6491C63.8659 15.6491 62.8262 16.6808 62.8262 17.9613C62.8215 19.2322 63.8596 20.2719 65.1416 20.2719ZM12.9835 11.9416C16.3067 11.9416 18.9984 14.6302 18.9984 17.9549C18.9984 21.2765 16.3067 23.9698 12.9835 23.9698C9.66033 23.9698 6.97023 21.2765 6.97023 17.9549C6.96544 14.6318 9.66033 11.9416 12.9835 11.9416ZM12.9835 20.2719C14.2608 20.2719 15.2973 19.2418 15.2973 17.9613C15.2973 16.6824 14.2608 15.6491 12.9835 15.6491C11.7046 15.6491 10.6697 16.6808 10.6697 17.9613C10.6649 19.2322 11.7046 20.2719 12.9835 20.2719Z');
        path.setAttribute('fill', color);
        svg.appendChild(path);
        return svg;
    };
    CarEl.changeColor = function (color, svg) {
        var path = svg.querySelector('path');
        path.setAttribute('fill', color);
    };
    CarEl.changeName = function (value, nameEl) {
        nameEl.innerHTML = value;
    };
    return CarEl;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarEl);


/***/ }),

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.scss */ "./src/components/form/form.scss");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");


var Form = /** @class */ (function () {
    function Form() {
    }
    Form.create = function (value, color, className, buttonText, buttonClassList, buttonHandler) {
        var wrapper = document.createElement('div');
        wrapper.className = 'form';
        var form = document.createElement('form');
        form.className = "form_".concat(className, " form");
        var inputText = document.createElement('input');
        inputText.className = 'form__input input_text';
        inputText.type = 'text';
        inputText.maxLength = 20;
        inputText.pattern = '^[a-zA-Z0-9]+$';
        inputText.value = value;
        var inputColor = document.createElement('input');
        inputColor.className = 'form__input input_color';
        inputColor.type = 'color';
        inputColor.value = color;
        var button = _button_button__WEBPACK_IMPORTED_MODULE_1__["default"].create(buttonText, buttonClassList, buttonHandler);
        form.append(inputText);
        form.append(inputColor);
        form.append(button);
        wrapper.append(form);
        return wrapper;
    };
    return Form;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./src/components/nav/nav.ts":
/*!***********************************!*\
  !*** ./src/components/nav/nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");

var Navigation = /** @class */ (function () {
    function Navigation(app) {
        this.nav = document.createElement('nav');
        var buttonToGarage = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('To garage', ['nav__button', 'button_green'], function () {
            app.pageGarage.clearContent();
            app.pageGarage.render();
        });
        var buttonToWinner = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('To winners', ['nav__button', 'button_green'], function () {
            app.pageWinners.clearContent();
            app.pageWinners.render();
            app.pageWinners.updatePage(app);
        });
        this.nav.append(buttonToGarage);
        this.nav.append(buttonToWinner);
    }
    Navigation.prototype.render = function () {
        return this.nav;
    };
    return Navigation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ "./src/components/race-row/race-row.ts":
/*!*********************************************!*\
  !*** ./src/components/race-row/race-row.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car/car */ "./src/components/car/car.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/api */ "./src/app/api.ts");
/* harmony import */ var _race_row_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./race-row.scss */ "./src/components/race-row/race-row.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RaceRow = /** @class */ (function () {
    function RaceRow() {
    }
    RaceRow.create = function (id, name, color, app) {
        var _this = this;
        var row = document.createElement('div');
        row.className = 'race-row';
        row.id = String(id);
        var top = document.createElement('div');
        top.className = 'race-row__top-row';
        var topButtons = document.createElement('div');
        topButtons.className = 'race-row__top-buttons';
        var carName = document.createElement('div');
        carName.className = 'race-row__car-name';
        carName.innerHTML = name;
        var track = document.createElement('div');
        track.className = 'race-row__track';
        var car = _car_car__WEBPACK_IMPORTED_MODULE_1__["default"].create(color);
        var controlButtons = document.createElement('div');
        controlButtons.className = 'race-row__control-buttons';
        var buttonB;
        var buttonA = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('A', ['race-row__button', 'button_start', 'button_cars-control'], function () { return __awaiter(_this, void 0, void 0, function () {
            var interval, startResponse, isMoving, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttonA.disabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].startOrStopCar(id, 'started')];
                    case 2:
                        startResponse = (_a.sent());
                        isMoving = true;
                        interval = app.startCarAnimation(car, startResponse.distance / startResponse.velocity / 10, isMoving);
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].switchCarToDriveMode(id, app.abortController)];
                    case 3:
                        _a.sent();
                        buttonB.disabled = false;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        clearInterval(interval);
                        buttonB.disabled = false;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        buttonB = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('B', ['race-row__button', 'button_reset', 'button_cars-control'], function () {
            app.stopCar(id, buttonA, buttonB, car);
        });
        buttonB.disabled = true;
        var buttonSelect = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('Select', ['race-row__button', 'button_select', 'button_small', 'button_blue'], this.buttonSelectOnClick.bind(this, this, app, id, carName, car));
        var buttonRemove = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('Remove', ['race-row__button', 'button_remove', 'button_small', 'button_blue'], function () { return __awaiter(_this, void 0, void 0, function () {
            var winnerData, _a, carsData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].deleteCar(id)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].getWinner(id)];
                    case 3:
                        winnerData = _b.sent();
                        if (winnerData) {
                            _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].deleteWinner(id);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        console.log('delete car');
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].getCars(app.pageNumberGarage, 7)];
                    case 6:
                        carsData = _b.sent();
                        app.raceTable.table.remove();
                        app.raceTable.table = app.pageGarage.createRaceTable(app, carsData.cars);
                        app.pageNumberGarageElem.after(app.raceTable.table);
                        app.pageGarage.setCarsCounter(app, Number(carsData.totalCount));
                        app.pageGarage.setPaginationButtons(app, carsData);
                        if (app.raceTable.rows.length === 0) {
                            app.pageGarage.creatPrevPage(app);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        topButtons.append(buttonSelect);
        topButtons.append(buttonRemove);
        top.append(topButtons);
        top.append(carName);
        controlButtons.append(buttonA);
        controlButtons.append(buttonB);
        track.append(controlButtons);
        track.append(car);
        row.append(top);
        row.append(track);
        return row;
    };
    RaceRow.buttonSelectOnClick = function (buttonSelect, app, id, nameEl, svg) {
        return __awaiter(this, void 0, void 0, function () {
            var inputText, inputColor, button, carData, buttons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.formUpdateCar.querySelector('button').disabled = false;
                        inputText = app.formUpdateCar.querySelector('.input_text');
                        inputColor = app.formUpdateCar.querySelector('.input_color');
                        button = app.formUpdateCar.querySelector('button');
                        inputText.focus();
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_2__["default"].getCar(id)];
                    case 1:
                        carData = _a.sent();
                        inputText.value = carData.name;
                        inputColor.value = carData.color;
                        app.selectedCarId = id;
                        app.selectedCarName = nameEl;
                        app.selectedCarSVG = svg;
                        buttonSelect.disabled = true;
                        buttons = app.raceTable.table.querySelectorAll('.button');
                        buttons.forEach(function (button) { return (button.disabled = true); });
                        //отменяем выделение машины
                        document.body.addEventListener('click', function onClick(event) {
                            var target = event.target;
                            if (!target.closest('.form_update-car') || event.target === button) {
                                buttons.forEach(function (button) {
                                    if (!button.classList.contains('button_reset')) {
                                        button.disabled = false;
                                    }
                                });
                                button.disabled = true;
                                buttonSelect.disabled = false;
                                inputText.value = '';
                                inputColor.value = '#ffffff';
                                document.body.removeEventListener('click', onClick);
                                app.selectedCarId = null;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return RaceRow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RaceRow);


/***/ }),

/***/ "./src/components/race-table.ts/race-table.ts":
/*!****************************************************!*\
  !*** ./src/components/race-table.ts/race-table.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _race_row_race_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../race-row/race-row */ "./src/components/race-row/race-row.ts");

var RaceTable = /** @class */ (function () {
    function RaceTable() {
        this.rows = [];
    }
    RaceTable.prototype.createTable = function (cars, app) {
        var _this = this;
        this.table = document.createElement('div');
        this.table.className = 'race-table';
        cars.forEach(function (car) {
            var row = _race_row_race_row__WEBPACK_IMPORTED_MODULE_0__["default"].create(car.id, car.name, car.color, app);
            _this.table.append(row);
            _this.rows.push(row);
        });
        return this.table;
    };
    return RaceTable;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RaceTable);


/***/ }),

/***/ "./src/components/winners-row/winner-row.ts":
/*!**************************************************!*\
  !*** ./src/components/winners-row/winner-row.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _winner_row_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner-row.scss */ "./src/components/winners-row/winner-row.scss");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car/car */ "./src/components/car/car.ts");


var WinnerRow = /** @class */ (function () {
    function WinnerRow() {
    }
    WinnerRow.create = function (rowNumber, name, color, wins, time) {
        var row = document.createElement('div');
        row.className = 'winner-row';
        var numberCell = document.createElement('div');
        numberCell.className = 'winner-row__cell winner-row__cell_number';
        numberCell.innerHTML = String(rowNumber);
        var carCell = document.createElement('div');
        carCell.className = 'winner-row__cell winner-row__cell_car';
        var svg = _car_car__WEBPACK_IMPORTED_MODULE_1__["default"].create(color);
        carCell.append(svg);
        var nameCell = document.createElement('div');
        nameCell.className = 'winner-row__cell winner-row__cell_name';
        nameCell.innerHTML = name;
        var winsCell = document.createElement('div');
        winsCell.className = 'winner-row__cell winner-row__cell_wins';
        winsCell.innerHTML = String(wins);
        var timeCell = document.createElement('div');
        timeCell.className = 'winner-row__cell winner-row__cell_time';
        timeCell.innerHTML = String(time);
        row.append(numberCell);
        row.append(carCell);
        row.append(nameCell);
        row.append(winsCell);
        row.append(timeCell);
        return row;
    };
    return WinnerRow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerRow);


/***/ }),

/***/ "./src/components/winners-table/winner-table.ts":
/*!******************************************************!*\
  !*** ./src/components/winners-table/winner-table.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/api */ "./src/app/api.ts");
/* harmony import */ var _winner_table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner-table.scss */ "./src/components/winners-table/winner-table.scss");
/* harmony import */ var _winners_row_winner_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winners-row/winner-row */ "./src/components/winners-row/winner-row.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WinnerTable = /** @class */ (function () {
    function WinnerTable() {
        this.rows = [];
    }
    WinnerTable.prototype.create = function (app, sort, order) {
        return __awaiter(this, void 0, void 0, function () {
            var winnersObj, winners, carsData, cars, rowHeader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(sort && order)) return [3 /*break*/, 2];
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners(app.pageNumberWinner, 10, sort, order)];
                    case 1:
                        winnersObj = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners(app.pageNumberWinner, 10)];
                    case 3:
                        winnersObj = _a.sent();
                        _a.label = 4;
                    case 4:
                        winners = winnersObj.winners;
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getCars()];
                    case 5:
                        carsData = _a.sent();
                        cars = carsData.cars;
                        this.table = document.createElement('div');
                        this.table.className = 'winners-table';
                        rowHeader = this.createHeader(app);
                        this.table.append(rowHeader);
                        this.rows.push(rowHeader);
                        winners.forEach(function (winner, index) {
                            var car = cars.find(function (car) { return car.id === winner.id; });
                            var name = car.name;
                            var color = car.color;
                            var wins = winner.wins;
                            var time = winner.time;
                            var row = _winners_row_winner_row__WEBPACK_IMPORTED_MODULE_2__["default"].create(index + 1, name, color, wins, time);
                            _this.table.append(row);
                            _this.rows.push(row);
                        });
                        return [2 /*return*/, this.table];
                }
            });
        });
    };
    WinnerTable.prototype.createHeader = function (app) {
        var _this = this;
        var rowHeader = document.createElement('div');
        rowHeader.classList.add('winner-row', 'winner-row_header');
        var numberCell = document.createElement('div');
        numberCell.className = 'winner-row__cell winner-row__cell_number';
        numberCell.innerHTML = '#';
        var carCell = document.createElement('div');
        carCell.className = 'winner-row__cell winner-row__cell_car';
        carCell.innerHTML = 'Car';
        var nameCell = document.createElement('div');
        nameCell.className = 'winner-row__cell winner-row__cell_name';
        nameCell.innerHTML = 'Name';
        var winsCell = document.createElement('div');
        winsCell.className = 'winner-row__cell winner-row__cell_wins';
        winsCell.innerHTML = 'Wins';
        winsCell.addEventListener('click', function (event) { return _this.sort(event, app); });
        var timeCell = document.createElement('div');
        timeCell.className = 'winner-row__cell winner-row__cell_time';
        timeCell.innerHTML = 'Best time';
        timeCell.addEventListener('click', function (event) { return _this.sort(event, app); });
        rowHeader.append(numberCell);
        rowHeader.append(carCell);
        rowHeader.append(nameCell);
        rowHeader.append(winsCell);
        rowHeader.append(timeCell);
        return rowHeader;
    };
    WinnerTable.prototype.sort = function (event, app) {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                button = event.target;
                if (button.innerHTML === 'Wins') {
                    app.winnersTableSort = 'wins';
                }
                else if (button.innerHTML === 'Best time') {
                    app.winnersTableSort = 'time';
                }
                app.winnersTableOrder === 'ASC' ? (app.winnersTableOrder = 'DESC') : (app.winnersTableOrder = 'ASC');
                app.pageWinners.updatePage(app);
                return [2 /*return*/];
            });
        });
    };
    return WinnerTable;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerTable);


/***/ }),

/***/ "./src/pages/garage.ts":
/*!*****************************!*\
  !*** ./src/pages/garage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _garage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garage.scss */ "./src/pages/garage.scss");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/api */ "./src/app/api.ts");
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/form */ "./src/components/form/form.ts");
/* harmony import */ var _components_race_table_ts_race_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/race-table.ts/race-table */ "./src/components/race-table.ts/race-table.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/button/button */ "./src/components/button/button.ts");
/* harmony import */ var _components_car_car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/car/car */ "./src/components/car/car.ts");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/colors */ "./src/assets/colors.ts");
/* harmony import */ var _assets_carsMakers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/carsMakers */ "./src/assets/carsMakers.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var GaragePageView = /** @class */ (function (_super) {
    __extends(GaragePageView, _super);
    function GaragePageView(app) {
        var _this = _super.call(this, app) || this;
        var formWrapper = _this.createForm(app);
        var toolButtonsRow = _this.createToolButtonsRow(app);
        _this.mainContent.append(formWrapper);
        _this.mainContent.append(toolButtonsRow);
        return _this;
    }
    GaragePageView.prototype.createForm = function (app) {
        var _this = this;
        var formWrapper = document.createElement('div');
        formWrapper.className = 'form-wrapper';
        //creat error massege for createCar
        var isErrorMessage = false;
        var errorMessageEl = this.createErrorMassege();
        var formCreateCar = _components_form_form__WEBPACK_IMPORTED_MODULE_2__["default"].create(app.state.inputCreateValue, app.state.inputCreateColor, 'create-car', 'Create', ['button_create', 'button_blue'], function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText, inputColor, name, color;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputText = app.formCreateCar.querySelector('.input_text');
                        inputColor = app.formCreateCar.querySelector('.input_color');
                        name = inputText.value;
                        color = inputColor.value;
                        if (!(name != '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_1__["default"].createCar(name, color)];
                    case 1:
                        _a.sent();
                        this.updateCarsTable(app);
                        inputText.value = '';
                        inputColor.value = '#ffffff';
                        if (isErrorMessage)
                            errorMessageEl.remove();
                        return [3 /*break*/, 3];
                    case 2:
                        app.formCreateCar.append(errorMessageEl);
                        setTimeout(function () { return errorMessageEl.remove(); }, 5000);
                        isErrorMessage = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        app.formCreateCar = formCreateCar;
        var formUpdateCar = _components_form_form__WEBPACK_IMPORTED_MODULE_2__["default"].create(app.state.inputUpdateValue, app.state.inputUpdateColor, 'update-car', 'Update', ['button_update', 'button_blue'], function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.updateCar(app, app.selectedCarId)];
        }); }); });
        app.formUpdateCar = formUpdateCar;
        var buttonUpdate = formUpdateCar.querySelector('button');
        buttonUpdate.disabled = true;
        formWrapper.append(formCreateCar);
        formWrapper.append(formUpdateCar);
        return formWrapper;
    };
    GaragePageView.prototype.createErrorMassege = function () {
        var errorMessageEl = document.createElement('p');
        errorMessageEl.className = 'input__error';
        errorMessageEl.innerHTML = 'Please enter a name';
        return errorMessageEl;
    };
    GaragePageView.prototype.createToolButtonsRow = function (app) {
        var _this = this;
        var buttonsWrapper = document.createElement('div');
        buttonsWrapper.className = 'tool-buttons';
        var buttonRace = _components_button_button__WEBPACK_IMPORTED_MODULE_5__["default"].create('Race', ['button_race', 'button_green'], function () { return app.startRace(); });
        app.buttonRace = buttonRace;
        var buttonReset = _components_button_button__WEBPACK_IMPORTED_MODULE_5__["default"].create('Reset', ['button_reset', 'button_green'], function () {
            app.resetRace();
        });
        app.buttonReset = buttonReset;
        var buttonGenerate = _components_button_button__WEBPACK_IMPORTED_MODULE_5__["default"].create('Generate', ['button_generate', 'button_blue'], function () { return _this.generateCars(app); });
        app.buttonGenerate = buttonGenerate;
        buttonsWrapper.append(buttonRace);
        buttonsWrapper.append(buttonReset);
        buttonsWrapper.append(buttonGenerate);
        return buttonsWrapper;
    };
    GaragePageView.prototype.createRaceTable = function (app, cars) {
        app.raceTable = new _components_race_table_ts_race_table__WEBPACK_IMPORTED_MODULE_3__["default"]();
        var table = app.raceTable.createTable(cars, app);
        return table;
    };
    GaragePageView.prototype.createCarsCounter = function (app, num) {
        var counter = document.createElement('div');
        counter.className = 'cars-counter';
        counter.innerHTML = "Garage (".concat(num, ")");
        app.counterGarage = counter;
        this.mainContent.append(counter);
    };
    GaragePageView.prototype.setCarsCounter = function (app, num) {
        app.counterGarage.innerHTML = "Garage (".concat(num, ")");
    };
    GaragePageView.prototype.createPageCounter = function (app, num) {
        var counter = document.createElement('div');
        counter.className = 'page-counter';
        counter.innerHTML = "Page #".concat(num);
        app.pageNumberGarageElem = counter;
        this.mainContent.append(counter);
    };
    GaragePageView.prototype.setPageCounter = function (app) {
        app.pageNumberGarageElem.innerHTML = "Page #".concat(app.pageNumberGarage);
    };
    GaragePageView.prototype.addPaginationButtons = function (app) {
        var _this = this;
        var pagination = document.createElement('div');
        pagination.className = 'pagination';
        var buttonPrev = _components_button_button__WEBPACK_IMPORTED_MODULE_5__["default"].create('Previous', ['pagination__button', 'button_blue'], function () {
            _this.creatPrevPage.bind(_this, app)();
        });
        var buttonNext = _components_button_button__WEBPACK_IMPORTED_MODULE_5__["default"].create('Next', ['pagination__button', 'button_blue'], function () {
            _this.creatNextPage.bind(_this, app)();
        });
        app.paginationButtonGarage = { prev: buttonPrev, next: buttonNext };
        pagination.append(buttonPrev);
        pagination.append(buttonNext);
        this.mainContent.append(pagination);
    };
    GaragePageView.prototype.setPaginationButtons = function (app, cars) {
        if (app.pageNumberGarage === 1) {
            app.paginationButtonGarage.prev.disabled = true;
        }
        else {
            app.paginationButtonGarage.prev.disabled = false;
        }
        if (Math.ceil(Number(cars.totalCount) / 7) === app.pageNumberGarage || Number(cars.totalCount) === 0) {
            app.paginationButtonGarage.next.disabled = true;
        }
        else {
            app.paginationButtonGarage.next.disabled = false;
        }
    };
    GaragePageView.prototype.creatNextPage = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                app.pageNumberGarage += 1;
                this.setPageCounter(app);
                this.updateCarsTable(app);
                return [2 /*return*/];
            });
        });
    };
    GaragePageView.prototype.creatPrevPage = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                app.pageNumberGarage -= 1;
                this.setPageCounter(app);
                this.updateCarsTable(app);
                return [2 /*return*/];
            });
        });
    };
    GaragePageView.prototype.updateCarsTable = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var carsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_1__["default"].getCars(app.pageNumberGarage, 7)];
                    case 1:
                        carsData = _a.sent();
                        app.raceTable.table.remove();
                        app.raceTable.table = app.pageGarage.createRaceTable(app, carsData.cars);
                        app.pageNumberGarageElem.after(app.raceTable.table);
                        this.setPaginationButtons(app, carsData);
                        this.setCarsCounter(app, parseInt(carsData.totalCount));
                        return [2 /*return*/];
                }
            });
        });
    };
    GaragePageView.prototype.updateCar = function (app, id) {
        return __awaiter(this, void 0, void 0, function () {
            var inputText, inputColor, name, color;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputText = app.formUpdateCar.querySelector('.input_text');
                        inputColor = app.formUpdateCar.querySelector('.input_color');
                        name = inputText.value;
                        color = inputColor.value;
                        app.selectedCarName.innerHTML = name;
                        _components_car_car__WEBPACK_IMPORTED_MODULE_6__["default"].changeColor(color, app.selectedCarSVG);
                        _components_car_car__WEBPACK_IMPORTED_MODULE_6__["default"].changeName(name, app.selectedCarName);
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_1__["default"].updateCar(id, name, color)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GaragePageView.prototype.generateCars = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            function getRandom(array) {
                return Math.floor(Math.random() * array.length);
            }
            var downloadMassege, name, color, i, maker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.buttonGenerate.disabled = true;
                        app.buttonRace.disabled = true;
                        app.buttonReset.disabled = true;
                        downloadMassege = document.createElement('div');
                        downloadMassege.className = 'download-massege';
                        downloadMassege.innerHTML = 'Cars are created...';
                        app.buttonGenerate.after(downloadMassege);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 100)) return [3 /*break*/, 4];
                        color = _assets_colors__WEBPACK_IMPORTED_MODULE_7__.COLORS[getRandom(_assets_colors__WEBPACK_IMPORTED_MODULE_7__.COLORS)];
                        maker = _assets_carsMakers__WEBPACK_IMPORTED_MODULE_8__.MAKERS[getRandom(_assets_carsMakers__WEBPACK_IMPORTED_MODULE_8__.MAKERS)];
                        name = "".concat(maker.maker, " ").concat(maker.models[getRandom(maker.models)]);
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_1__["default"].createCar(name, color)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i += 1;
                        return [3 /*break*/, 1];
                    case 4:
                        this.updateCarsTable(app);
                        app.buttonGenerate.disabled = false;
                        app.buttonRace.disabled = false;
                        app.buttonReset.disabled = false;
                        downloadMassege.remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    GaragePageView.prototype.createMessageAboutWinner = function (name, time) {
        var messageWrapper = document.createElement('div');
        messageWrapper.className = 'winner';
        var winner = document.createElement('div');
        winner.className = 'winner__text';
        winner.innerHTML = "Winner: ".concat(name, " [").concat(time, "s]");
        messageWrapper.append(winner);
        return messageWrapper;
    };
    return GaragePageView;
}(_page__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaragePageView);


/***/ }),

/***/ "./src/pages/page.ts":
/*!***************************!*\
  !*** ./src/pages/page.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.scss */ "./src/pages/page.scss");
/* harmony import */ var _components_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav/nav */ "./src/components/nav/nav.ts");


var Page = /** @class */ (function () {
    function Page(app) {
        this.mainContent = document.createElement('div');
        this.mainContent.classList.add('main-content');
        var nav = new _components_nav_nav__WEBPACK_IMPORTED_MODULE_1__["default"](app).render();
        this.mainContent.append(nav);
    }
    Page.prototype.render = function () {
        document.body.append(this.mainContent);
    };
    Page.prototype.clearContent = function () {
        document.body.innerHTML = '';
    };
    return Page;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ "./src/pages/winners.ts":
/*!******************************!*\
  !*** ./src/pages/winners.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/api */ "./src/app/api.ts");
/* harmony import */ var _components_winners_table_winner_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/winners-table/winner-table */ "./src/components/winners-table/winner-table.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/pages/page.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button/button */ "./src/components/button/button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var WinnersPageView = /** @class */ (function (_super) {
    __extends(WinnersPageView, _super);
    function WinnersPageView(app) {
        var _this = _super.call(this, app) || this;
        var winnerTable = new _components_winners_table_winner_table__WEBPACK_IMPORTED_MODULE_1__["default"]();
        app.winnersTable = winnerTable;
        var winnersCountew = _this.createWinnersCounter(app);
        var numberPage = _this.createPageNumber(app, app.pageNumberWinner);
        _this.mainContent.append(winnersCountew);
        _this.mainContent.append(numberPage);
        _this.addPaginationButtons(app);
        return _this;
    }
    WinnersPageView.prototype.updatePage = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.winnersTable.rows.forEach(function (row) { return row.remove(); });
                        return [4 /*yield*/, app.winnersTable.create(app, app.winnersTableSort, app.winnersTableOrder)];
                    case 1:
                        table = _a.sent();
                        this.setWinnersCounter(app);
                        this.setPageNumber(app);
                        this.mainContent.append(table);
                        if (app.paginationButtonWinner.prev && app.paginationButtonWinner.next) {
                            app.paginationButtonWinner.prev.remove();
                            app.paginationButtonWinner.next.remove();
                        }
                        this.mainContent.append(this.addPaginationButtons(app));
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnersPageView.prototype.createPageNumber = function (app, num) {
        var counter = document.createElement('div');
        counter.className = 'page-counter';
        counter.innerHTML = "Page #".concat(num);
        app.pageNumberWinnerElem = counter;
        return counter;
    };
    WinnersPageView.prototype.setPageNumber = function (app) {
        app.pageNumberWinnerElem.innerHTML = "Page #".concat(app.pageNumberWinner);
    };
    WinnersPageView.prototype.createWinnersCounter = function (app) {
        var counter = document.createElement('div');
        counter.className = 'cars-counter';
        app.counterWinner = counter;
        return counter;
    };
    WinnersPageView.prototype.setWinnersCounter = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var winnerData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners()];
                    case 1:
                        winnerData = _a.sent();
                        app.counterWinner.innerHTML = "Winners(".concat(winnerData.winners.length, ")");
                        this.setPaginationButtons(app, winnerData.winners);
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnersPageView.prototype.addPaginationButtons = function (app) {
        var _this = this;
        var pagination = document.createElement('div');
        pagination.className = 'pagination';
        var buttonPrev = _components_button_button__WEBPACK_IMPORTED_MODULE_3__["default"].create('Previous', ['pagination__button', 'button_blue'], function () {
            _this.creatPrevPage.bind(_this, app)();
        });
        var buttonNext = _components_button_button__WEBPACK_IMPORTED_MODULE_3__["default"].create('Next', ['pagination__button', 'button_blue'], function () {
            _this.creatNextPage.bind(_this, app)();
        });
        app.paginationButtonWinner = { prev: buttonPrev, next: buttonNext };
        pagination.append(buttonPrev);
        pagination.append(buttonNext);
        return pagination;
    };
    WinnersPageView.prototype.setPaginationButtons = function (app, winners) {
        if (app.pageNumberWinner === 1) {
            app.paginationButtonWinner.prev.disabled = true;
        }
        else {
            app.paginationButtonWinner.prev.disabled = false;
        }
        if (Math.ceil(Number(winners.length) / 10) === app.pageNumberWinner || Number(winners.length) === 0) {
            app.paginationButtonWinner.next.disabled = true;
        }
        else {
            app.paginationButtonWinner.next.disabled = false;
        }
    };
    WinnersPageView.prototype.creatNextPage = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var winnerData, winners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.pageNumberWinner += 1;
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners()];
                    case 1:
                        winnerData = _a.sent();
                        winners = winnerData.winners;
                        this.setPaginationButtons(app, winners);
                        this.updatePage(app);
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnersPageView.prototype.creatPrevPage = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var winnerData, winners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.pageNumberWinner -= 1;
                        return [4 /*yield*/, _app_api__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners()];
                    case 1:
                        winnerData = _a.sent();
                        winners = winnerData.winners;
                        this.setPaginationButtons(app, winners);
                        this.updatePage(app);
                        return [2 /*return*/];
                }
            });
        });
    };
    return WinnersPageView;
}(_page__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnersPageView);


/***/ }),

/***/ "./src/images/color.svg":
/*!******************************!*\
  !*** ./src/images/color.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a747538c06ff8b7ba08f.svg";

/***/ }),

/***/ "./src/images/download.svg":
/*!*********************************!*\
  !*** ./src/images/download.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdd2dcef9ef875923de2.svg";

/***/ }),

/***/ "./src/images/flag.svg":
/*!*****************************!*\
  !*** ./src/images/flag.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69521364ab04e913b9ab.svg";

/***/ }),

/***/ "./src/images/trophy-cup.svg":
/*!***********************************!*\
  !*** ./src/images/trophy-cup.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36508c6b9a51432bf0bf.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");

var app = new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNU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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBRXJCLElBQU0sR0FBRyxHQUFHLElBQUksZ0RBQUcsRUFBRSxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL2Zvcm0vZm9ybS5zY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXJvdy9yYWNlLXJvdy5zY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXJvdy93aW5uZXItcm93LnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9nYXJhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzcz8wY2M5Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0uc2Nzcz80YWU2Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXJvdy9yYWNlLXJvdy5zY3NzPzEzMGIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtcm93L3dpbm5lci1yb3cuc2Nzcz8zM2IyIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXRhYmxlL3dpbm5lci10YWJsZS5zY3NzPzM4YjAiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9nYXJhZ2Uuc2Nzcz81NDllIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvcGFnZS5zY3NzP2Y1ODIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2FwcC9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9hcHAvYXBwLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvYXBwL3N0YXRlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvYXNzZXRzL2NhcnNNYWtlcnMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9hc3NldHMvY29sb3JzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9jYXIvY2FyLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3JhY2Utcm93L3JhY2Utcm93LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXRhYmxlLnRzL3JhY2UtdGFibGUudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtcm93L3dpbm5lci1yb3cudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvZ2FyYWdlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvcGFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29ubzp3Z2h0QDIwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpY3RvcitNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItYmxhY2s6ICMyNTI1MjU7XG4gIC0tY29sb3Itd2hpdGU6ICNlNGU5ZTk7XG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XG4gIC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjOGFhYTFmO1xuICAtLWNvbG9yLWJsdWU6ICMzMjkyZDQ7XG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XG4gIC0tY29sb3ItcmVkOiAjZTg1MTUyO1xuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICNlMzM2MzY7XG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcbiAgLS1jb2xvci1ncmV5OiAjNDQ0NDQ0O1xuICAtLWNvbG9yLXllbGxvdzogI2U5YmUwZjtcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBmb250LWZhbWlseTogXCJWaWN0b3IgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDByZW07XG59XG4uYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJ1dHRvbl9ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmJ1dHRvbl9ncmVlbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcbiAgfVxufVxuLmJ1dHRvbl9ncmVlbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xufVxuLmJ1dHRvbl9ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5idXR0b25fYmx1ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1zZWNvbmRhcnkpO1xuICB9XG59XG4uYnV0dG9uX2JsdWU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1zZWNvbmRhcnkpO1xufVxuLmJ1dHRvbl9yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuYnV0dG9uX3JlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSk7XG4gIH1cbn1cbi5idXR0b25fcmVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpO1xufVxuLmJ1dHRvbl9zbWFsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5idXR0b25fcmVtb3ZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xuICB9XG59XG4uYnV0dG9uX3JlbW92ZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuLmJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5idXR0b24uc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtY29sb3IteWVsbG93LXNlY29uZGFyeSk7XG4gIH1cbn1cbi5idXR0b24uc2VsZWN0ZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5KTtcbn1cbi5idXR0b25fY2Fycy1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiAyLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5idXR0b25fY2Fycy1jb250cm9sOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgfVxufVxuLmJ1dHRvbl9jYXJzLWNvbnRyb2w6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cbi5idXR0b25fY2Fycy1jb250cm9sLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cbi5idXR0b25fY2Fycy1jb250cm9sOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdXRpbHMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQ0dGOztBREVBO0VBQ0Usb0NBQUE7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FBUkE7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBV0Y7QUFURTtFQUNFLGtCQUFBO0FBV0o7QUFSRTtFQUNFLG1DQUFBO0VBQ0Esb0JBQUE7QUFVSjtBQVBFO0VBQ0Usb0NBQUE7QUFTSjtBQTdDRTtFQUNFO0lBQ0UsOENBbUNhO0VBWWpCO0FBQ0Y7QUE3Q0U7RUFDRSw4Q0ErQmU7QUFnQm5CO0FBZEU7RUFDRSxtQ0FBQTtBQWdCSjtBQXhERTtFQUNFO0lBQ0UsNkNBdUNhO0VBbUJqQjtBQUNGO0FBeERFO0VBQ0UsNkNBbUNlO0FBdUJuQjtBQXBCRTtFQUNFLGtDQUFBO0FBc0JKO0FBbkVFO0VBQ0U7SUFDRSw0Q0E2Q2E7RUF3QmpCO0FBQ0Y7QUFuRUU7RUFDRSw0Q0F5Q2U7QUE0Qm5CO0FBMUJFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE0Qko7QUFqRkU7RUFDRTtJQUNFLGtDQXVEYTtFQTRCakI7QUFDRjtBQWpGRTtFQUNFLGtDQW1EZTtBQWdDbkI7QUE5QkU7RUFDRSxxQ0FBQTtBQWdDSjtBQTVGRTtFQUNFO0lBQ0UsOENBMkRhO0VBbUNqQjtBQUNGO0FBNUZFO0VBQ0UsOENBdURlO0FBdUNuQjtBQXBDRTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQXNDSjtBQXBDSTtFQUNFO0lBQ0Usd0NBQUE7SUFDQSw4Q0FBQTtJQUNBLHlCQUFBO0VBc0NOO0FBQ0Y7QUFwQ0k7RUFDRSx3Q0FBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUFzQ047QUFuQ0k7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FBcUNOO0FBbENJO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFvQ05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1ibGFjazogIzI1MjUyNTtcXHJcXG4gIC0tY29sb3Itd2hpdGU6ICNlNGU5ZTk7XFxyXFxuICAtLWNvbG9yLWdyZWVuOiAjYTBiZjNhO1xcclxcbiAgLS1jb2xvci1ncmVlbi1zZWNvbmRhcnk6ICM4YWFhMWY7XFxyXFxuICAtLWNvbG9yLWJsdWU6ICMzMjkyZDQ7XFxyXFxuICAtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5OiAjMjg3YmIyO1xcclxcbiAgLS1jb2xvci1yZWQ6ICNlODUxNTI7XFxyXFxuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICNlMzM2MzY7XFxyXFxuICAtLWNvbG9yLWdyZXktbGlnaHQ6ICM5NTllYTM7XFxyXFxuICAtLWNvbG9yLWdyZXk6ICM0NDQ0NDQ7XFxyXFxuICAtLWNvbG9yLXllbGxvdzogI2U5YmUwZjtcXHJcXG4gIC0tY29sb3IteWVsbG93LXNlY29uZGFyeTogI2RlOTIwMTtcXHJcXG59XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29ubzp3Z2h0QDIwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpY3RvcitNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAvL2ZvbnQtZmFtaWx5OiAnU29ubycsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCBtb25vc3BhY2U7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJy4vLi4vLi4vdXRpbHMvdmFyaWFibGVzLnNjc3MnO1xcblxcbkBtaXhpbiBob3ZlcigkY29sb3JIb3Zlcikge1xcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JIb3ZlcjtcXG4gICAgfVxcbiAgfVxcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JIb3ZlcjtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xcbiAgfVxcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4gICZfZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgIEBpbmNsdWRlIGhvdmVyKHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSkpO1xcbiAgfVxcbiAgJl9ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSk7XFxuICAgIEBpbmNsdWRlIGhvdmVyKHZhcigtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5KSk7XFxuICB9XFxuXFxuICAmX3JlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuXFxuICAgIEBpbmNsdWRlIGhvdmVyKHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpKTtcXG4gIH1cXG4gICZfc21hbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgfVxcblxcbiAgJl9yZW1vdmUge1xcbiAgICBAaW5jbHVkZSBob3Zlcih2YXIoLS1jb2xvci1yZWQpKTtcXG4gIH1cXG4gICYuc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xcbiAgICBAaW5jbHVkZSBob3Zlcih2YXIoLWNvbG9yLXllbGxvdy1zZWNvbmRhcnkpKTtcXG4gIH1cXG5cXG4gICZfY2Fycy1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAyLjI1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XFxuICAgICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgICB9XFxuXFxuICAgICYuYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gICAgfVxcblxcbiAgICAmOmRpc2FibGVkIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vaW1hZ2VzL2NvbG9yLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29ubzp3Z2h0QDIwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpY3RvcitNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLWJsYWNrOiAjMjUyNTI1O1xuICAtLWNvbG9yLXdoaXRlOiAjZTRlOWU5O1xuICAtLWNvbG9yLWdyZWVuOiAjYTBiZjNhO1xuICAtLWNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzhhYWExZjtcbiAgLS1jb2xvci1ibHVlOiAjMzI5MmQ0O1xuICAtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5OiAjMjg3YmIyO1xuICAtLWNvbG9yLXJlZDogI2U4NTE1MjtcbiAgLS1jb2xvci1yZWQtc2Vjb25kYXJ5OiAjZTMzNjM2O1xuICAtLWNvbG9yLWdyZXktbGlnaHQ6ICM5NTllYTM7XG4gIC0tY29sb3ItZ3JleTogIzQ0NDQ0NDtcbiAgLS1jb2xvci15ZWxsb3c6ICNlOWJlMGY7XG4gIC0tY29sb3IteWVsbG93LXNlY29uZGFyeTogI2RlOTIwMTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgZm9udC1mYW1pbHk6IFwiVmljdG9yIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAyNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cbi5mb3JtIC5pbnB1dF90ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uZm9ybSAuaW5wdXRfY29sb3Ige1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGxlZnQgNHB4IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3V0aWxzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQ0dGOztBREVBO0VBQ0Usb0NBQUE7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FBbkJBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFzQkY7QUFwQkU7RUFDRSxtQkFBQTtBQXNCSjtBQW5CRTtFQUNFLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXFCSjtBQW5CRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFxQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1ibGFjazogIzI1MjUyNTtcXHJcXG4gIC0tY29sb3Itd2hpdGU6ICNlNGU5ZTk7XFxyXFxuICAtLWNvbG9yLWdyZWVuOiAjYTBiZjNhO1xcclxcbiAgLS1jb2xvci1ncmVlbi1zZWNvbmRhcnk6ICM4YWFhMWY7XFxyXFxuICAtLWNvbG9yLWJsdWU6ICMzMjkyZDQ7XFxyXFxuICAtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5OiAjMjg3YmIyO1xcclxcbiAgLS1jb2xvci1yZWQ6ICNlODUxNTI7XFxyXFxuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICNlMzM2MzY7XFxyXFxuICAtLWNvbG9yLWdyZXktbGlnaHQ6ICM5NTllYTM7XFxyXFxuICAtLWNvbG9yLWdyZXk6ICM0NDQ0NDQ7XFxyXFxuICAtLWNvbG9yLXllbGxvdzogI2U5YmUwZjtcXHJcXG4gIC0tY29sb3IteWVsbG93LXNlY29uZGFyeTogI2RlOTIwMTtcXHJcXG59XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29ubzp3Z2h0QDIwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpY3RvcitNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAvL2ZvbnQtZmFtaWx5OiAnU29ubycsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVmljdG9yIE1vbm8nLCBtb25vc3BhY2U7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJy4vLi4vLi4vdXRpbHMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHdpZHRoOiAyNHJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbnB1dF90ZXh0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcclxcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB9XFxyXFxuICAuaW5wdXRfY29sb3Ige1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vaW1hZ2VzL2NvbG9yLnN2ZycpIG5vLXJlcGVhdCBsZWZ0IDRweCBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS43NXJlbTtcXHJcXG4gICAgd2lkdGg6IDQuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2ltYWdlcy9mbGFnLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnJhY2Utcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5yYWNlLXJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5yYWNlLXJvd19fdG9wLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cbi5yYWNlLXJvd19fdG9wLWJ1dHRvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ucmFjZS1yb3dfX3RyYWNrIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAycHggdmFyKC0tY29sb3Itd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDkwcHggYm90dG9tIDNweDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yYWNlLXJvd19fdHJhY2sge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDUwcHggYm90dG9tIDNweDtcbiAgfVxufVxuLnJhY2Utcm93X19jb250cm9sLWJ1dHRvbnMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJhY2Utcm93X19jYXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4ucmFjZS1yb3cgc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJhY2Utcm93IHN2ZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3JhY2Utcm93L3JhY2Utcm93LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQUFKO0FBQ0k7RUFURjtJQVVJLDBDQUFBO0VBRUo7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUk7RUFERjtJQUVJLGtCQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsMEJBQUE7QUFBSjtBQUNJO0VBRkY7SUFHSSxXQUFBO0VBRUo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmFjZS1yb3cge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXHJcXG4gICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190b3Atcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdG9wLWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAmX190cmFjayB7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMnB4IHZhcigtLWNvbG9yLXdoaXRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2ltYWdlcy9mbGFnLnN2ZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA5MHB4IGJvdHRvbSAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgNTBweCBib3R0b20gM3B4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb250cm9sLWJ1dHRvbnMge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICAmX19jYXItbmFtZSB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvbm86d2dodEAyMDAuLjgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaWN0b3IrTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLWJsYWNrOiAjMjUyNTI1O1xuICAtLWNvbG9yLXdoaXRlOiAjZTRlOWU5O1xuICAtLWNvbG9yLWdyZWVuOiAjYTBiZjNhO1xuICAtLWNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzhhYWExZjtcbiAgLS1jb2xvci1ibHVlOiAjMzI5MmQ0O1xuICAtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5OiAjMjg3YmIyO1xuICAtLWNvbG9yLXJlZDogI2U4NTE1MjtcbiAgLS1jb2xvci1yZWQtc2Vjb25kYXJ5OiAjZTMzNjM2O1xuICAtLWNvbG9yLWdyZXktbGlnaHQ6ICM5NTllYTM7XG4gIC0tY29sb3ItZ3JleTogIzQ0NDQ0NDtcbiAgLS1jb2xvci15ZWxsb3c6ICNlOWJlMGY7XG4gIC0tY29sb3IteWVsbG93LXNlY29uZGFyeTogI2RlOTIwMTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgZm9udC1mYW1pbHk6IFwiVmljdG9yIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG4ud2lubmVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAud2lubmVyLXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JleSk7XG4gIH1cbn1cbi53aW5uZXItcm93X2hlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi53aW5uZXItcm93X2hlYWRlciAud2lubmVyLXJvd19fY2VsbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi53aW5uZXItcm93X2hlYWRlciAud2lubmVyLXJvd19fY2VsbF93aW5zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndpbm5lci1yb3dfaGVhZGVyIC53aW5uZXItcm93X19jZWxsX3RpbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC53aW5uZXItcm93X2hlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuLndpbm5lci1yb3dfX2NlbGwge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi53aW5uZXItcm93X19jZWxsOmxhc3QtY2hpbGQoKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi53aW5uZXItcm93X19jZWxsX251bWJlciB7XG4gIHdpZHRoOiAxcmVtO1xufVxuLndpbm5lci1yb3dfX2NlbGxfY2FyIHtcbiAgd2lkdGg6IDNyZW07XG59XG4ud2lubmVyLXJvd19fY2VsbF9jYXIgc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2lubmVyLXJvd19fY2VsbF9uYW1lIHtcbiAgd2lkdGg6IDEycmVtO1xufVxuLndpbm5lci1yb3dfX2NlbGxfd2lucyB7XG4gIHdpZHRoOiAzcmVtO1xufVxuLndpbm5lci1yb3dfX2NlbGxfdGltZSB7XG4gIHdpZHRoOiA2cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3V0aWxzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXJvdy93aW5uZXItcm93LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUNHRjs7QURFQTtFQUNFLG9DQUFBO0VBRUEscUNBQUE7RUFDQSx5QkFBQTtBQ0FGOztBQW5CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXNCRjtBQXBCRTtFQUNFO0lBQ0UsNkJBQUE7RUFzQko7QUFDRjtBQXBCRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFzQko7QUFyQkk7RUFDRSxlQUFBO0FBdUJOO0FBckJNO0VBQ0UsZUFBQTtBQXVCUjtBQXJCTTtFQUNFLGVBQUE7QUF1QlI7QUFwQkk7RUFDRTtJQUNFLGdCQUFBO0VBc0JOO0FBQ0Y7QUFuQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBcUJKO0FBcEJJO0VBQ0UsZUFBQTtBQXNCTjtBQXBCSTtFQUNFLFdBQUE7QUFzQk47QUFwQkk7RUFDRSxXQUFBO0FBc0JOO0FBckJNO0VBQ0UsV0FBQTtBQXVCUjtBQXBCSTtFQUNFLFlBQUE7QUFzQk47QUFwQkk7RUFDRSxXQUFBO0FBc0JOO0FBcEJJO0VBQ0UsV0FBQTtBQXNCTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMjUyNTI1O1xcclxcbiAgLS1jb2xvci13aGl0ZTogI2U0ZTllOTtcXHJcXG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XFxyXFxuICAtLWNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzhhYWExZjtcXHJcXG4gIC0tY29sb3ItYmx1ZTogIzMyOTJkNDtcXHJcXG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XFxyXFxuICAtLWNvbG9yLXJlZDogI2U4NTE1MjtcXHJcXG4gIC0tY29sb3ItcmVkLXNlY29uZGFyeTogI2UzMzYzNjtcXHJcXG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcXHJcXG4gIC0tY29sb3ItZ3JleTogIzQ0NDQ0NDtcXHJcXG4gIC0tY29sb3IteWVsbG93OiAjZTliZTBmO1xcclxcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xcclxcbn1cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb25vOndnaHRAMjAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmljdG9yK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gIC8vZm9udC1mYW1pbHk6ICdTb25vJywgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsIG1vbm9zcGFjZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi8uLi8uLi91dGlscy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLndpbm5lci1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmV5KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9oZWFkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIC53aW5uZXItcm93X19jZWxsIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgJl93aW5zIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJl90aW1lIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2NlbGwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgJjpsYXN0LWNoaWxkKCkge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAmX251bWJlciB7XFxyXFxuICAgICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJl9jYXIge1xcclxcbiAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgIHN2ZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9uYW1lIHtcXHJcXG4gICAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJl93aW5zIHtcXHJcXG4gICAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX3RpbWUge1xcclxcbiAgICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpbm5lcnMtdGFibGUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXRhYmxlL3dpbm5lci10YWJsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aW5uZXJzLXRhYmxlIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9pbWFnZXMvZG93bmxvYWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi9pbWFnZXMvdHJvcGh5LWN1cC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9ybS13cmFwcGVyIHtcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xufVxuXG4uYnV0dG9uX3Jlc2V0LmJ1dHRvbl9ncmVlbiB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnRvb2wtYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5jYXJzLWNvdW50ZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5yYWNlLXRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmlucHV0X19lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBib3R0b206IC0xLjI1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cblxuLmRvd25sb2FkLW1hc3NlZ2Uge1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi53aW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgdmFyKC0tY29sb3Itd2hpdGUpIG5vLXJlcGVhdCBsZWZ0IDFyZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDZyZW07XG4gIGJveC1zaGFkb3c6IDEzcHggMTFweCAxcHggIzAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud2lubmVyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLnBhZ2UtY291bnRlciB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2dhcmFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBTUY7O0FBSkE7RUFDRSxvQkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUdBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUFRRjtBQU5FO0VBYkY7SUFjSSxlQUFBO0VBU0Y7QUFDRjs7QUFQQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFVRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9ybS13cmFwcGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcXHJcXG59XFxyXFxuLmJ1dHRvbl9yZXNldC5idXR0b25fZ3JlZW4ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG4udG9vbC1idXR0b25zIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcbi5jYXJzLWNvdW50ZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuLnJhY2UtdGFibGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuLmlucHV0X19lcnJvciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBib3R0b206IC0xLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxyXFxufVxcclxcbi5kb3dubG9hZC1tYXNzZWdlIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuLy4uL2ltYWdlcy9kb3dubG9hZC5zdmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4ud2lubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vaW1hZ2VzL3Ryb3BoeS1jdXAuc3ZnJykgdmFyKC0tY29sb3Itd2hpdGUpIG5vLXJlcGVhdCBsZWZ0IDFyZW0gY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNnJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDEzcHggMTFweCAxcHggIzAwMDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi5wYWdlLWNvdW50ZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluLWNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5uYXYge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL3BhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tY29udGVudCB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vYnV0dG9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2J1dHRvbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2Zvcm0uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vZm9ybS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3JhY2Utcm93LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3JhY2Utcm93LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vd2lubmVyLXJvdy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi93aW5uZXItcm93LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vd2lubmVyLXRhYmxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3dpbm5lci10YWJsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2dhcmFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9nYXJhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9wYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3BhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ2FyLCBDYXJzRGF0YSwgU3BlZWRDYXIsIFdpbm5lciwgV2lubmVycyB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xyXG5cclxuY29uc3QgUE9SVCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xyXG5jbGFzcyBBcGkge1xyXG4gIHN0YXRpYyBhc3luYyBmZXRjaFdpdGhPcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0SW5pdCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgSFRUUDogJyArIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0Q2FyKGlkOiBudW1iZXIpOiBQcm9taXNlPENhcj4ge1xyXG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy9nYXJhZ2UvJztcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zLCAnRXJyb3IgZ2V0dGluZyBjYXI6ICcpO1xyXG4gICAgcmV0dXJuIChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIENhcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYXJzKHBhZ2U/OiBudW1iZXIsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxDYXJzRGF0YSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy9nYXJhZ2UvJztcclxuICAgIGxldCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybDtcclxuICAgIGlmIChwYWdlIHx8IGxpbWl0KSBmdWxsVXJsID0gZnVsbFVybCArICc/JztcclxuICAgIGlmIChwYWdlKSBmdWxsVXJsID0gZnVsbFVybCArICdfcGFnZT0nICsgU3RyaW5nKHBhZ2UpO1xyXG4gICAgaWYgKGxpbWl0KSBmdWxsVXJsID0gcGFnZSA/IGZ1bGxVcmwgKyAnJl9saW1pdD0nICsgU3RyaW5nKGxpbWl0KSA6IGZ1bGxVcmwgKyAnX2xpbWl0PScgKyBTdHJpbmcobGltaXQpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZ1bGxVcmwsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIENhcltdO1xyXG4gICAgICByZXR1cm4geyBjYXJzOiBkYXRhLCB0b3RhbENvdW50IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVDYXIobmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogUHJvbWlzZTxDYXI+IHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZ2FyYWdlJztcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsO1xyXG4gICAgY29uc3QgY2FyRGF0YSA9IHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyRGF0YSksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zLCAnRXJyb3IgY3JlYXRpbmcgY2FyOiAnKTtcclxuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBDYXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZGVsZXRlQ2FyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZ2FyYWdlLyc7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcclxuICAgIGF3YWl0IEFwaS5mZXRjaFdpdGhPcHRpb25zKGZ1bGxVcmwsIG9wdGlvbnMsICdFcnJvciBkZWxldGluZyBjYXI6ICcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBQcm9taXNlPENhcj4ge1xyXG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy9nYXJhZ2UvJztcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcclxuICAgIGNvbnN0IGNhckRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgIH07XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyRGF0YSksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zLCAnRXJyb3IgdXBkYXRpbmcgY2FyOiAnKTtcclxuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBDYXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgc3RhcnRPclN0b3BDYXIoaWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpIHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZW5naW5lJztcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgJz9pZD0nICsgU3RyaW5nKGlkKSArICcmc3RhdHVzPScgKyBzdGF0dXM7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucywgJ0Vycm9yIHN0YXJ0IG9yIHN0b3AgY2FyOiAnKTtcclxuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBTcGVlZENhcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBzd2l0Y2hDYXJUb0RyaXZlTW9kZShpZDogbnVtYmVyLCBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcikge1xyXG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy9lbmdpbmUnO1xyXG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyAnP2lkPScgKyBTdHJpbmcoaWQpICsgJyZzdGF0dXM9JyArICdkcml2ZSc7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmdWxsVXJsLCBvcHRpb25zKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRW5naW5lIHBhcmFtZXRlcnMgZm9yIGNhciB3aXRoIHN1Y2ggaWQgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZ2FyYWdlLicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjkpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RyaXZlIGFscmVhZHkgaW4gcHJvZ3Jlc3MuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINCe0YjQuNCx0LrQsCwg0L/RgNC+0LzQuNGBINC+0YLQutC70L7QvdC10L1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyDQntGI0LjQsdC60LAsINC/0YDQvtC80LjRgSDQvtGC0LrQu9C+0L3QtdC9XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFdpbm5lcnMoXHJcbiAgICBwYWdlPzogbnVtYmVyLFxyXG4gICAgbGltaXQ/OiBudW1iZXIsXHJcbiAgICBzb3J0PzogJ2lkJyB8ICd3aW5zJyB8ICd0aW1lJyxcclxuICAgIG9yZGVyPzogJ0FTQycgfCAnREVTQydcclxuICApOiBQcm9taXNlPFdpbm5lcnMgfCB1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvd2lubmVycyc7XHJcbiAgICBsZXQgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmw7XHJcbiAgICBpZiAocGFnZSB8fCBsaW1pdCB8fCBzb3J0IHx8IG9yZGVyKSBmdWxsVXJsICs9ICc/JztcclxuICAgIGlmIChwYWdlKSBmdWxsVXJsICs9IGBfcGFnZT0ke3BhZ2V9JmA7XHJcbiAgICBpZiAobGltaXQpIGZ1bGxVcmwgKz0gYF9saW1pdD0ke2xpbWl0fSZgO1xyXG4gICAgaWYgKHNvcnQpIGZ1bGxVcmwgKz0gYF9zb3J0PSR7c29ydH0mYDtcclxuICAgIGlmIChvcmRlcikgZnVsbFVybCArPSBgX29yZGVyPSR7b3JkZXJ9YDtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmdWxsVXJsLCBvcHRpb25zKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdG90YWxDb3VudCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBXaW5uZXJbXTtcclxuICAgICAgcmV0dXJuIHsgd2lubmVyczogZGF0YSwgdG90YWxDb3VudCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0V2lubmVyKGlkOiBudW1iZXIpOiBQcm9taXNlPFdpbm5lcj4ge1xyXG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy93aW5uZXJzLyc7XHJcbiAgICBjb25zdCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybCArIFN0cmluZyhpZCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucywgJ0Vycm9yIGdldHRpbmcgd2lubmVyOiAnKTtcclxuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBXaW5uZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlV2lubmVyKGlkOiBudW1iZXIsIHdpbnM6IG51bWJlciwgdGltZTogbnVtYmVyKTogUHJvbWlzZTxXaW5uZXI+IHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvd2lubmVycyc7XHJcbiAgICBjb25zdCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybDtcclxuICAgIGNvbnN0IHdpbm5lckRhdGE6IFdpbm5lciA9IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICB3aW5zOiB3aW5zLFxyXG4gICAgICB0aW1lOiB0aW1lLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkod2lubmVyRGF0YSksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zLCAnRXJyb3IgY3JlYXRpbmcgd2lubmVyOiAnKTtcclxuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBXaW5uZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZGVsZXRlV2lubmVyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvd2lubmVycy8nO1xyXG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyBTdHJpbmcoaWQpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zLCAnRXJyb3IgZGVsZXRpbmcgd2lubmVyOiAnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcik6IFByb21pc2U8V2lubmVyPiB7XHJcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL3dpbm5lcnMvJztcclxuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcclxuICAgIGNvbnN0IHdpbm5lckRhdGEgPSB7XHJcbiAgICAgIHdpbnM6IHdpbnMsXHJcbiAgICAgIHRpbWU6IHRpbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdpbm5lckRhdGEpLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucywgJ0Vycm9yIHVwZGF0aW5nIHdpbm5lcjogJyk7XHJcbiAgICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBXaW5uZXI7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBpO1xyXG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcclxuaW1wb3J0IEdhcmFnZVBhZ2VWaWV3IGZyb20gJy4uL3BhZ2VzL2dhcmFnZSc7XHJcbmltcG9ydCBXaW5uZXJzUGFnZVZpZXcgZnJvbSAnLi4vcGFnZXMvd2lubmVycyc7XHJcbmltcG9ydCBSYWNlVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yYWNlLXRhYmxlLnRzL3JhY2UtdGFibGUnO1xyXG5pbXBvcnQgeyBDYXIsIENhcnNEYXRhLCBGaW5pc2hlciwgUGFnaW5hdGlvbkJ1dHRvbnMsIFNwZWVkQ2FyIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBXaW5uZXJUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlJztcclxuaW1wb3J0IHsgT3JkZXIsIFNvcnRpbmcgfSBmcm9tICcuLi91dGlscy90eXBlJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgc3RhdGU6IFN0YXRlO1xyXG4gIHJhY2U6IGJvb2xlYW47XHJcbiAgY2Fyc0VsZW1lbnRzOiBIVE1MRWxlbWVudFtdO1xyXG4gIHBhZ2VHYXJhZ2U6IEdhcmFnZVBhZ2VWaWV3O1xyXG4gIHBhZ2VXaW5uZXJzOiBXaW5uZXJzUGFnZVZpZXc7XHJcbiAgcmFjZVRhYmxlOiBSYWNlVGFibGU7XHJcbiAgd2lubmVyc1RhYmxlOiBXaW5uZXJUYWJsZTtcclxuICB3aW5uZXJzVGFibGVTb3J0OiBTb3J0aW5nO1xyXG4gIHdpbm5lcnNUYWJsZU9yZGVyOiBPcmRlcjtcclxuICBjb3VudGVyR2FyYWdlOiBIVE1MRWxlbWVudDtcclxuICBjb3VudGVyV2lubmVyOiBIVE1MRWxlbWVudDtcclxuICBwYWdlTnVtYmVyR2FyYWdlOiBudW1iZXI7XHJcbiAgcGFnZU51bWJlcldpbm5lcjogbnVtYmVyO1xyXG4gIHBhZ2VOdW1iZXJHYXJhZ2VFbGVtOiBIVE1MRWxlbWVudDtcclxuICBwYWdlTnVtYmVyV2lubmVyRWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgcGFnaW5hdGlvbkJ1dHRvbkdhcmFnZTogUGFnaW5hdGlvbkJ1dHRvbnM7XHJcbiAgcGFnaW5hdGlvbkJ1dHRvbldpbm5lcjogUGFnaW5hdGlvbkJ1dHRvbnM7XHJcbiAgZm9ybVVwZGF0ZUNhcjogSFRNTEVsZW1lbnQ7XHJcbiAgZm9ybUNyZWF0ZUNhcjogSFRNTEVsZW1lbnQ7XHJcbiAgc2VsZWN0ZWRDYXJJZDogbnVtYmVyO1xyXG4gIHNlbGVjdGVkQ2FyTmFtZTogSFRNTEVsZW1lbnQ7XHJcbiAgc2VsZWN0ZWRDYXJTVkc6IFNWR0VsZW1lbnQ7XHJcbiAgYnV0dG9uR2VuZXJhdGU6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGJ1dHRvblJhY2U6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIGJ1dHRvblJlc2V0OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBpc1JhY2U6IGJvb2xlYW47XHJcbiAgYWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcbiAgd2lubmVyTWVzc2FnZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGF0ZSgnJywgJyNmZmZmZmYnLCAnJywgJyNmZmZmZmYnLCAxLCAxKTtcclxuICAgIHRoaXMucmFjZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5wYWdlR2FyYWdlID0gbmV3IEdhcmFnZVBhZ2VWaWV3KHRoaXMpO1xyXG4gICAgdGhpcy5wYWdlV2lubmVycyA9IG5ldyBXaW5uZXJzUGFnZVZpZXcodGhpcyk7XHJcbiAgICB0aGlzLndpbm5lcnNUYWJsZU9yZGVyID0gJ0FTQyc7XHJcbiAgICB0aGlzLndpbm5lcnNUYWJsZVNvcnQgPSAnaWQnO1xyXG4gICAgdGhpcy5wYWdlR2FyYWdlLnJlbmRlcigpO1xyXG4gICAgdGhpcy5yYWNlVGFibGUgPSBuZXcgUmFjZVRhYmxlKCk7XHJcbiAgICB0aGlzLnBhZ2VOdW1iZXJHYXJhZ2UgPSAxO1xyXG4gICAgdGhpcy5wYWdlTnVtYmVyV2lubmVyID0gMTtcclxuICAgIHRoaXMuaXNSYWNlID0gZmFsc2U7XHJcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIGNvbnN0IGNhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoMSwgNyk7XHJcbiAgICBpZiAoY2Fyc0RhdGEudG90YWxDb3VudCkge1xyXG4gICAgICB0aGlzLnBhZ2VHYXJhZ2UuY3JlYXRlQ2Fyc0NvdW50ZXIodGhpcywgcGFyc2VJbnQoY2Fyc0RhdGEudG90YWxDb3VudCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlR2FyYWdlLmNyZWF0ZUNhcnNDb3VudGVyKHRoaXMsIGNhcnNEYXRhLmNhcnMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnZUdhcmFnZS5jcmVhdGVQYWdlQ291bnRlcih0aGlzLCB0aGlzLnBhZ2VOdW1iZXJHYXJhZ2UpO1xyXG4gICAgY29uc3QgcmFjZVRhYmxlID0gdGhpcy5wYWdlR2FyYWdlLmNyZWF0ZVJhY2VUYWJsZSh0aGlzLCBjYXJzRGF0YS5jYXJzKTtcclxuICAgIHRoaXMucGFnZUdhcmFnZS5tYWluQ29udGVudC5hcHBlbmQocmFjZVRhYmxlKTtcclxuICAgIHRoaXMucGFnZUdhcmFnZS5hZGRQYWdpbmF0aW9uQnV0dG9ucyh0aGlzKTtcclxuICAgIHRoaXMucGFnZUdhcmFnZS5zZXRQYWdpbmF0aW9uQnV0dG9ucyh0aGlzLCBjYXJzRGF0YSk7XHJcbiAgICB0aGlzLmJ1dHRvblJlc2V0LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRDYXJBbmltYXRpb24oY2FyOiBTVkdFbGVtZW50LCB0aW1lOiBudW1iZXIsIGlzTW92aW5nOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB0cmFjayA9IHRoaXMucmFjZVRhYmxlLnJvd3NbMF0ucXVlcnlTZWxlY3RvcignLnJhY2Utcm93X190cmFjaycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGlzTW92aW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IGdldENvbXB1dGVkU3R5bGUoY2FyKS50cmFuc2Zvcm07XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVggPSBwYXJzZUZsb2F0KGN1cnJlbnRUcmFuc2Zvcm0uc3BsaXQoJywnKVs0XSk7XHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0cmFjay5jbGllbnRXaWR0aCAvIHRpbWU7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGN1cnJlbnRUcmFuc2xhdGVYICsgc3BlZWQ7XHJcbiAgICAgICAgY29uc3QgcmlndGhQYWRkaW5nID0gMTY7XHJcbiAgICAgICAgaWYgKG5ld1RyYW5zbGF0ZVggPiB0cmFjay5jbGllbnRXaWR0aCAtIGNhci5jbGllbnRXaWR0aCAqIDIgLSByaWd0aFBhZGRpbmcpIHtcclxuICAgICAgICAgIGNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYWNrLmNsaWVudFdpZHRoIC0gY2FyLmNsaWVudFdpZHRoICogMiAtIDE2fXB4KWA7XHJcbiAgICAgICAgICBpc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdUcmFuc2xhdGVYfXB4KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc3RvcENhcihpZDogbnVtYmVyLCBidXR0b25BOiBIVE1MQnV0dG9uRWxlbWVudCwgYnV0dG9uQjogSFRNTEJ1dHRvbkVsZW1lbnQsIGNhcjogU1ZHRWxlbWVudCkge1xyXG4gICAgYnV0dG9uQS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYnV0dG9uQi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBhd2FpdCBBcGkuc3RhcnRPclN0b3BDYXIoaWQsICdzdG9wcGVkJyk7XHJcbiAgICBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRBbmRTd2l0Y2hDYXIoY2FyOiBDYXIsIGluZGV4OiBudW1iZXIsIGFwcDogQXBwKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGxldCBpbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+O1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydFJlc3BvbnNlID0gKGF3YWl0IEFwaS5zdGFydE9yU3RvcENhcihjYXIuaWQsICdzdGFydGVkJykpIGFzIFNwZWVkQ2FyO1xyXG4gICAgICAgIC8v0YLRg9GCINC90LDRh9C40L3QsNC10Lwg0LDQvdC40LzQsNGG0LjRjlxyXG4gICAgICAgIGxldCBpc01vdmluZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGNhclNWRyA9IGFwcC5yYWNlVGFibGUucm93c1tpbmRleF0ucXVlcnlTZWxlY3Rvcignc3ZnJyk7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBhcHAuc3RhcnRDYXJBbmltYXRpb24oY2FyU1ZHLCBzdGFydFJlc3BvbnNlLmRpc3RhbmNlIC8gc3RhcnRSZXNwb25zZS52ZWxvY2l0eSAvIDEwLCBpc01vdmluZyk7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyOiBGaW5pc2hlciA9IHtcclxuICAgICAgICAgIGlkOiBjYXIuaWQsXHJcbiAgICAgICAgICBzcGVlZDogc3RhcnRSZXNwb25zZS52ZWxvY2l0eSxcclxuICAgICAgICAgIHRpbWU6IChzdGFydFJlc3BvbnNlLmRpc3RhbmNlIC8gc3RhcnRSZXNwb25zZS52ZWxvY2l0eSAvIDEwMDApLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICBuYW1lOiBjYXIubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IEFwaS5zd2l0Y2hDYXJUb0RyaXZlTW9kZShjYXIuaWQsIGFwcC5hYm9ydENvbnRyb2xsZXIpO1xyXG4gICAgICAgIHJlc29sdmUod2lubmVyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvL9C+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCw0L3QuNC80LDRhtC40Y5cclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzdGFydFJhY2UoKSB7XHJcbiAgICB0aGlzLmlzUmFjZSA9IHRydWU7XHJcbiAgICBjb25zdCBjYXJzRGF0YTogQ2Fyc0RhdGEgPSBhd2FpdCBBcGkuZ2V0Q2Fycyh0aGlzLnBhZ2VOdW1iZXJHYXJhZ2UsIDcpO1xyXG5cclxuICAgIGNvbnN0IHByb21pc2VzID0gY2Fyc0RhdGEuY2Fycy5tYXAoYXN5bmMgKGNhciwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRBbmRTd2l0Y2hDYXIoY2FyLCBpbmRleCwgdGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9C+0YLQutC70Y7Rh9Cw0Y4g0LrQvdC+0L/QutC4INC90LAg0LLRgNC10LzRjyDQs9C+0L3QutC4XHJcbiAgICB0aGlzLmRpc2FibGVCdXR0b25zRHVyaW5nUmFjZSgpO1xyXG4gICAgLy/Qs9C+0L3QutCwXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFueShwcm9taXNlcyk7XHJcbiAgICB0aGlzLnR1cm5CdXR0b25zQWZ0ZXJSYWNlKCk7XHJcbiAgICB0aGlzLnNob3dXaW5uZXIocmVzdWx0Lm5hbWUsIHJlc3VsdC50aW1lKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3aW5uZXJEYXRhID0gYXdhaXQgQXBpLmdldFdpbm5lcihyZXN1bHQuaWQpO1xyXG4gICAgICBpZiAod2lubmVyRGF0YS50aW1lID4gcGFyc2VGbG9hdChyZXN1bHQudGltZSkpIHtcclxuICAgICAgICBBcGkudXBkYXRlV2lubmVyKHJlc3VsdC5pZCwgd2lubmVyRGF0YS53aW5zICsgMSwgcGFyc2VGbG9hdChyZXN1bHQudGltZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwaS51cGRhdGVXaW5uZXIocmVzdWx0LmlkLCB3aW5uZXJEYXRhLndpbnMgKyAxLCB3aW5uZXJEYXRhLnRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoKGVycm9yLnN0YXR1cyA9IDQwNCkpIHtcclxuICAgICAgICBhd2FpdCBBcGkuY3JlYXRlV2lubmVyKHJlc3VsdC5pZCwgMSwgcGFyc2VGbG9hdChyZXN1bHQudGltZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc2FibGVCdXR0b25zRHVyaW5nUmFjZSgpIHtcclxuICAgIHRoaXMuYnV0dG9uUmFjZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmJ1dHRvblJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYnV0dG9uR2VuZXJhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yYWNlVGFibGUucm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3QgYnV0dG9ucyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0dXJuQnV0dG9uc0FmdGVyUmFjZSgpIHtcclxuICAgIHRoaXMuYnV0dG9uR2VuZXJhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYnV0dG9uUmVzZXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgcHJpdmF0ZSB0dXJuQnV0dG9uc0FmdGVyUmVzZXQoKSB7XHJcbiAgICB0aGlzLnJhY2VUYWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBidXR0b25zID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGJ1dHRvbkIgPSByb3cucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9yZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBidXR0b25CLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHJlc2V0UmFjZSgpIHtcclxuICAgIHRoaXMuaXNSYWNlID0gZmFsc2U7XHJcbiAgICBjb25zdCBjYXJEYXRhOiBDYXJzRGF0YSA9IGF3YWl0IEFwaS5nZXRDYXJzKHRoaXMucGFnZU51bWJlckdhcmFnZSwgNyk7XHJcbiAgICBjYXJEYXRhLmNhcnMuZm9yRWFjaCgoY2FyLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBidXR0b25BID0gdGhpcy5yYWNlVGFibGUucm93c1tpbmRleF0ucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9zdGFydCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBidXR0b25CID0gdGhpcy5yYWNlVGFibGUucm93c1tpbmRleF0ucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9yZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBzdmcgPSB0aGlzLnJhY2VUYWJsZS5yb3dzW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xyXG4gICAgICB0aGlzLnN0b3BDYXIoY2FyLmlkLCBidXR0b25BLCBidXR0b25CLCBzdmcpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm1DcmVhdGVDYXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYnV0dG9uUmFjZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5idXR0b25HZW5lcmF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuXHJcbiAgICBpZiAodGhpcy53aW5uZXJNZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMud2lubmVyTWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMudHVybkJ1dHRvbnNBZnRlclJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dXaW5uZXIobmFtZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMud2lubmVyTWVzc2FnZSA9IHRoaXMucGFnZUdhcmFnZS5jcmVhdGVNZXNzYWdlQWJvdXRXaW5uZXIobmFtZSwgdGltZSk7XHJcbiAgICB0aGlzLnBhZ2VHYXJhZ2UubWFpbkNvbnRlbnQuYXBwZW5kKHRoaXMud2lubmVyTWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCB7IGNhclN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gIGlucHV0Q3JlYXRlVmFsdWU6IHN0cmluZztcclxuICBpbnB1dENyZWF0ZUNvbG9yOiBzdHJpbmc7XHJcbiAgaW5wdXRVcGRhdGVWYWx1ZTogc3RyaW5nO1xyXG4gIGlucHV0VXBkYXRlQ29sb3I6IHN0cmluZztcclxuICBwYWdlR2FyYWdlOiBudW1iZXI7XHJcbiAgcGFnZVdpbm5lcnM6IG51bWJlcjtcclxuICAvL9C30LDQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0LzQvtC80LXQvdGCINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRgdGC0YDQsNC90LjRhtGLINC10YHQu9C4INC40LTQtdGCINCz0L7QvdC60LBcclxuICBjYXJzU3RhdGU/OiBjYXJTdGF0ZVtdO1xyXG4gIC8v0L/QvtC70Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LHRg9C00YPRgiDQt9Cw0L/QvtC70L3Rj9GC0YzRgdGPINCyINC80LXQvNC10L3RgiDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0YHRgtGA0LDQvdC40YYsINC10YHQu9C4INC/0YDQuNC80LXQvdC10L3Ri1xyXG4gIHNvcnRXaW5uZXJzPzogJ2lkJyB8ICd3aW5zJyB8ICd0aW1lJztcclxuICBvcmRlcldpbm5lcnM/OiAnQVNDJyB8ICdERVNDJztcclxuXHJcbiAgY29uc3RydWN0b3IodmFsdWUxOiBzdHJpbmcsIGNvbG9yMTogc3RyaW5nLCB2YWx1ZTI6IHN0cmluZywgY29sb3IyOiBzdHJpbmcsIHBhZ2VHYXJhZ2U6IG51bWJlciwgcGFnZVdpbm5lcnM6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnB1dENyZWF0ZVZhbHVlID0gdmFsdWUxO1xyXG4gICAgdGhpcy5pbnB1dENyZWF0ZUNvbG9yID0gY29sb3IxO1xyXG4gICAgdGhpcy5pbnB1dFVwZGF0ZVZhbHVlID0gdmFsdWUyO1xyXG4gICAgdGhpcy5pbnB1dFVwZGF0ZUNvbG9yID0gY29sb3IyO1xyXG4gICAgdGhpcy5wYWdlR2FyYWdlID0gcGFnZUdhcmFnZTtcclxuICAgIHRoaXMucGFnZVdpbm5lcnMgPSBwYWdlV2lubmVycztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2Fyc01ha2VyIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFLRVJTOiBDYXJzTWFrZXJbXSA9IFtcclxuICB7XHJcbiAgICBtYWtlcjogJ1RveW90YScsXHJcbiAgICBtb2RlbHM6IFsnQ2FtcnknLCAnQ29yb2xsYScsICdSQVY0JywgJ0hpZ2hsYW5kZXInLCAnUHJpdXMnLCAnVGFjb21hJywgJ1NpZW5uYScsICdUdW5kcmEnLCAnNFJ1bm5lcicsICdZYXJpcyddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdIb25kYScsXHJcbiAgICBtb2RlbHM6IFsnQWNjb3JkJywgJ0NpdmljJywgJ0NSLVYnLCAnUGlsb3QnLCAnT2R5c3NleScsICdGaXQnLCAnSFItVicsICdSaWRnZWxpbmUnLCAnSW5zaWdodCcsICdQYXNzcG9ydCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdGb3JkJyxcclxuICAgIG1vZGVsczogWydGLTE1MCcsICdFc2NhcGUnLCAnRXhwbG9yZXInLCAnRm9jdXMnLCAnTXVzdGFuZycsICdFZGdlJywgJ1JhbmdlcicsICdFeHBlZGl0aW9uJywgJ0Z1c2lvbicsICdFY29TcG9ydCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdDaGV2cm9sZXQnLFxyXG4gICAgbW9kZWxzOiBbXHJcbiAgICAgICdTaWx2ZXJhZG8nLFxyXG4gICAgICAnRXF1aW5veCcsXHJcbiAgICAgICdUcmF2ZXJzZScsXHJcbiAgICAgICdNYWxpYnUnLFxyXG4gICAgICAnVGFob2UnLFxyXG4gICAgICAnQ2FtYXJvJyxcclxuICAgICAgJ1N1YnVyYmFuJyxcclxuICAgICAgJ0NvbG9yYWRvJyxcclxuICAgICAgJ0ltcGFsYScsXHJcbiAgICAgICdCb2x0IEVWJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYWtlcjogJ05pc3NhbicsXHJcbiAgICBtb2RlbHM6IFsnQWx0aW1hJywgJ1JvZ3VlJywgJ1NlbnRyYScsICdNdXJhbm8nLCAnUGF0aGZpbmRlcicsICdWZXJzYScsICdGcm9udGllcicsICdUaXRhbicsICdNYXhpbWEnLCAnS2lja3MnXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1ha2VyOiAnSHl1bmRhaScsXHJcbiAgICBtb2RlbHM6IFsnRWxhbnRyYScsICdTb25hdGEnLCAnVHVjc29uJywgJ1NhbnRhIEZlJywgJ0tvbmEnLCAnQWNjZW50JywgJ1ZlbG9zdGVyJywgJ1BhbGlzYWRlJywgJ1ZlbnVlJywgJ05leG8nXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1ha2VyOiAnQk1XJyxcclxuICAgIG1vZGVsczogWyczIFNlcmllcycsICc1IFNlcmllcycsICdYMycsICdYNScsICc3IFNlcmllcycsICdYMScsICdYNycsICc0IFNlcmllcycsICdYNicsICcyIFNlcmllcyddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdNZXJjZWRlcy1CZW56JyxcclxuICAgIG1vZGVsczogWydDLUNsYXNzJywgJ0UtQ2xhc3MnLCAnR0xDJywgJ0dMRScsICdBLUNsYXNzJywgJ1MtQ2xhc3MnLCAnR0xBJywgJ0dMUycsICdDTEEnLCAnRy1DbGFzcyddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdBdWRpJyxcclxuICAgIG1vZGVsczogWydBNCcsICdRNScsICdBMycsICdRNycsICdBNicsICdRMycsICdBNScsICdROCcsICdBOCcsICdUVCddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFrZXI6ICdWb2xrc3dhZ2VuJyxcclxuICAgIG1vZGVsczogWydKZXR0YScsICdUaWd1YW4nLCAnUGFzc2F0JywgJ0F0bGFzJywgJ0dvbGYnLCAnQXJ0ZW9uJywgJ0F0bGFzIENyb3NzIFNwb3J0JywgJ1RvdWFyZWcnLCAnSUQuNCcsICdCZWV0bGUnXSxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgY29uc3QgQ09MT1JTOiBzdHJpbmdbXSA9IFtcclxuICAnI0YwRjhGRicsXHJcbiAgJyNGQUVCRDcnLFxyXG4gICcjMDBGRkZGJyxcclxuICAnIzdGRkZENCcsXHJcbiAgJyNGMEZGRkYnLFxyXG4gICcjRjVGNURDJyxcclxuICAnI0ZGRTRDNCcsXHJcbiAgJyNGRkVCQ0QnLFxyXG4gICcjMDAwMEZGJyxcclxuICAnIzhBMkJFMicsXHJcbiAgJyNBNTJBMkEnLFxyXG4gICcjREVCODg3JyxcclxuICAnIzVGOUVBMCcsXHJcbiAgJyM3RkZGMDAnLFxyXG4gICcjRDI2OTFFJyxcclxuICAnI0ZGN0Y1MCcsXHJcbiAgJyM2NDk1RUQnLFxyXG4gICcjRkZGOERDJyxcclxuICAnI0RDMTQzQycsXHJcbiAgJyMwMEZGRkYnLFxyXG4gICcjMDAwMDhCJyxcclxuICAnIzAwOEI4QicsXHJcbiAgJyNCODg2MEInLFxyXG4gICcjQTlBOUE5JyxcclxuICAnI0E5QTlBOScsXHJcbiAgJyMwMDY0MDAnLFxyXG4gICcjQkRCNzZCJyxcclxuICAnIzhCMDA4QicsXHJcbiAgJyM1NTZCMkYnLFxyXG4gICcjRkY4QzAwJyxcclxuICAnIzk5MzJDQycsXHJcbiAgJyM4QjAwMDAnLFxyXG4gICcjRTk5NjdBJyxcclxuICAnIzhGQkM4RicsXHJcbiAgJyM0ODNEOEInLFxyXG4gICcjMkY0RjRGJyxcclxuICAnIzJGNEY0RicsXHJcbiAgJyMwMENFRDEnLFxyXG4gICcjOTQwMEQzJyxcclxuICAnI0ZGMTQ5MycsXHJcbiAgJyMwMEJGRkYnLFxyXG4gICcjNjk2OTY5JyxcclxuICAnIzY5Njk2OScsXHJcbiAgJyMxRTkwRkYnLFxyXG4gICcjQjIyMjIyJyxcclxuICAnI0ZGRkFGMCcsXHJcbiAgJyMyMjhCMjInLFxyXG4gICcjRkYwMEZGJyxcclxuICAnI0RDRENEQycsXHJcbiAgJyNGOEY4RkYnLFxyXG4gICcjRkZENzAwJyxcclxuICAnI0RBQTUyMCcsXHJcbiAgJyM4MDgwODAnLFxyXG4gICcjODA4MDgwJyxcclxuICAnIzAwODAwMCcsXHJcbiAgJyNBREZGMkYnLFxyXG4gICcjRjBGRkYwJyxcclxuICAnI0ZGNjlCNCcsXHJcbiAgJyNDRDVDNUMnLFxyXG4gICcjNEIwMDgyJyxcclxuICAnI0ZGRkZGMCcsXHJcbiAgJyNGMEU2OEMnLFxyXG4gICcjRTZFNkZBJyxcclxuICAnI0ZGRjBGNScsXHJcbiAgJyM3Q0ZDMDAnLFxyXG4gICcjRkZGQUNEJyxcclxuICAnI0FERDhFNicsXHJcbiAgJyNGMDgwODAnLFxyXG4gICcjRTBGRkZGJyxcclxuICAnI0ZBRkFEMicsXHJcbiAgJyNEM0QzRDMnLFxyXG4gICcjRDNEM0QzJyxcclxuICAnIzkwRUU5MCcsXHJcbiAgJyNGRkI2QzEnLFxyXG4gICcjRkZBMDdBJyxcclxuICAnIzIwQjJBQScsXHJcbiAgJyM4N0NFRkEnLFxyXG4gICcjNzc4ODk5JyxcclxuICAnIzc3ODg5OScsXHJcbiAgJyNCMEM0REUnLFxyXG4gICcjRkZGRkUwJyxcclxuICAnIzAwRkYwMCcsXHJcbiAgJyMzMkNEMzInLFxyXG4gICcjRkFGMEU2JyxcclxuICAnI0ZGMDBGRicsXHJcbiAgJyM4MDAwMDAnLFxyXG4gICcjNjZDREFBJyxcclxuICAnIzAwMDBDRCcsXHJcbiAgJyNCQTU1RDMnLFxyXG4gICcjOTM3MERCJyxcclxuICAnIzNDQjM3MScsXHJcbiAgJyM3QjY4RUUnLFxyXG4gICcjMDBGQTlBJyxcclxuICAnIzQ4RDFDQycsXHJcbiAgJyNDNzE1ODUnLFxyXG4gICcjMTkxOTcwJyxcclxuICAnI0Y1RkZGQScsXHJcbiAgJyNGRkU0RTEnLFxyXG4gICcjRkZFNEI1JyxcclxuICAnI0ZGREVBRCcsXHJcbiAgJyMwMDAwODAnLFxyXG4gICcjRkRGNUU2JyxcclxuICAnIzgwODAwMCcsXHJcbiAgJyM2QjhFMjMnLFxyXG4gICcjRkZBNTAwJyxcclxuICAnI0ZGNDUwMCcsXHJcbiAgJyNEQTcwRDYnLFxyXG4gICcjRUVFOEFBJyxcclxuICAnIzk4RkI5OCcsXHJcbiAgJyNBRkVFRUUnLFxyXG4gICcjREI3MDkzJyxcclxuICAnI0ZGRUZENScsXHJcbiAgJyNGRkRBQjknLFxyXG4gICcjQ0Q4NTNGJyxcclxuICAnI0ZGQzBDQicsXHJcbiAgJyNEREEwREQnLFxyXG4gICcjQjBFMEU2JyxcclxuICAnIzgwMDA4MCcsXHJcbiAgJyM2NjMzOTknLFxyXG4gICcjRkYwMDAwJyxcclxuICAnI0JDOEY4RicsXHJcbiAgJyM0MTY5RTEnLFxyXG4gICcjOEI0NTEzJyxcclxuICAnI0ZBODA3MicsXHJcbiAgJyNGNEE0NjAnLFxyXG4gICcjMkU4QjU3JyxcclxuICAnI0ZGRjVFRScsXHJcbiAgJyNBMDUyMkQnLFxyXG4gICcjQzBDMEMwJyxcclxuICAnIzg3Q0VFQicsXHJcbiAgJyM2QTVBQ0QnLFxyXG4gICcjNzA4MDkwJyxcclxuICAnIzcwODA5MCcsXHJcbiAgJyNGRkZBRkEnLFxyXG4gICcjMDBGRjdGJyxcclxuICAnIzQ2ODJCNCcsXHJcbiAgJyNEMkI0OEMnLFxyXG4gICcjMDA4MDgwJyxcclxuICAnI0Q4QkZEOCcsXHJcbiAgJyNGRjYzNDcnLFxyXG4gICcjNDBFMEQwJyxcclxuICAnI0VFODJFRScsXHJcbiAgJyNGNURFQjMnLFxyXG4gICcjRkZGRkZGJyxcclxuICAnI0Y1RjVGNScsXHJcbiAgJyNGRkZGMDAnLFxyXG4gICcjOUFDRDMyJyxcclxuXTtcclxuIiwiaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcbmNsYXNzIEJ1dHRvbiB7XG4gIHN0YXRpYyBjcmVhdGUodGV4dDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZ1tdLCBoYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgY29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnV0dG9uYDtcbiAgICBjbGFzc05hbWUuZm9yRWFjaCgoc3RyKSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZChzdHIpKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjbGFzcyBDYXJFbCB7XHJcbiAgc3RhdGljIGNyZWF0ZShjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnODAnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcyNCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgODAgMjQnKTtcclxuXHJcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICAgJ2QnLFxyXG4gICAgICAnTTEuNTg2ODIgOS40MzMzMUMzOS40NDQ1IC0xMC4zNzAxIDU3Ljc3OTMgNy4xNTYyMSA1Ny43NzkzIDcuMTU2MjFDNzUuOTY0MiA2LjkwOTA1IDgwLjAwMDIgMTEuNDc3NiA4MC4wMDAyIDExLjQ3NzZDODAuMDAwMiAxMS40Nzc2IDc2LjE2NjggMTYuMzI1MiA3OC43NjI4IDE4LjAxODdDODEuMzYwNCAxOS43MTM4IDcxLjcwMTggMTkuNDk4NSA3MS43MDE4IDE5LjQ5ODVDNzEuODA3MSAxOS4wMTIxIDcxLjg3MDkgMTguNTE5NCA3MS44NzA5IDE4LjAwMjhDNzEuODcwOSAxNC4yODI1IDY4Ljg1MzkgMTEuMjY1NSA2NS4xMzM2IDExLjI2NTVDNjEuNDEzNCAxMS4yNjU1IDU4LjM5NDggMTQuMjgwOSA1OC4zOTQ4IDE4LjAwMjhDNTguMzk0OCAxOC41MTQ2IDU4LjQ1NyAxOS4wMTUzIDU4LjU2NTQgMTkuNDk4NUg1My40NTk1SDIwLjc0NjFIMTkuNjk2OEMxOS44MDM3IDE5LjAxMjEgMTkuODY1OSAxOC41MTk0IDE5Ljg2NTkgMTguMDAyOEMxOS44NjU5IDE0LjI4MjUgMTYuODQ1NyAxMS4yNjU1IDEzLjEyMzggMTEuMjY1NUM5LjQwNTIgMTEuMjY1NSA2LjM4MDIzIDE0LjI4MDkgNi4zODAyMyAxOC4wMDI4QzYuMzgwMjMgMTguNTE0NiA2LjQ0NTYgMTkuMDE1MyA2LjU1MjQ0IDE5LjQ5ODVDNi41MTg5NSAxOS40OTg1IDYuMDc4ODQgMTkuNDk4NSAxLjYwMTE3IDE5LjQ5ODVDLTEuOTkzMDggMTUuODkzMSAxLjU4NjgyIDkuNDMzMzEgMS41ODY4MiA5LjQzMzMxWk0zNS45MTcyIDcuNDYyMzhINTQuOTA0MkM1NC45MDQyIDcuNDYyMzggNDYuNTA1NCAyLjQ0NTczIDM1LjkyMiAxLjg3OTY1VjcuNDYyMzhIMzUuOTE3MlpNMzMuODgwOSA3LjQ2NzE2VjEuODUyNTRDMjguMTc4NiAxLjg3MDA4IDIxLjk4NjcgMy4yNjUzNiAxNi4xOTM1IDcuNDY3MTZIMzMuODgwOVpNNjUuMTQxNiAxMS45NDE2QzY4LjQ2OCAxMS45NDE2IDcxLjE1OTcgMTQuNjMwMiA3MS4xNTk3IDE3Ljk1NDlDNzEuMTU5NyAyMS4yNzY1IDY4LjQ2OCAyMy45Njk4IDY1LjE0MTYgMjMuOTY5OEM2MS44MTg1IDIzLjk2OTggNTkuMTI1MiAyMS4yNzY1IDU5LjEyNTIgMTcuOTU0OUM1OS4xMjM2IDE0LjYzMTggNjEuODE2OSAxMS45NDE2IDY1LjE0MTYgMTEuOTQxNlpNNjUuMTQxNiAyMC4yNzE5QzY2LjQxODkgMjAuMjcxOSA2Ny40NTcgMTkuMjQxOCA2Ny40NTcgMTcuOTYxM0M2Ny40NTcgMTYuNjgyNCA2Ni40MTg5IDE1LjY0OTEgNjUuMTQxNiAxNS42NDkxQzYzLjg2NTkgMTUuNjQ5MSA2Mi44MjYyIDE2LjY4MDggNjIuODI2MiAxNy45NjEzQzYyLjgyMTUgMTkuMjMyMiA2My44NTk2IDIwLjI3MTkgNjUuMTQxNiAyMC4yNzE5Wk0xMi45ODM1IDExLjk0MTZDMTYuMzA2NyAxMS45NDE2IDE4Ljk5ODQgMTQuNjMwMiAxOC45OTg0IDE3Ljk1NDlDMTguOTk4NCAyMS4yNzY1IDE2LjMwNjcgMjMuOTY5OCAxMi45ODM1IDIzLjk2OThDOS42NjAzMyAyMy45Njk4IDYuOTcwMjMgMjEuMjc2NSA2Ljk3MDIzIDE3Ljk1NDlDNi45NjU0NCAxNC42MzE4IDkuNjYwMzMgMTEuOTQxNiAxMi45ODM1IDExLjk0MTZaTTEyLjk4MzUgMjAuMjcxOUMxNC4yNjA4IDIwLjI3MTkgMTUuMjk3MyAxOS4yNDE4IDE1LjI5NzMgMTcuOTYxM0MxNS4yOTczIDE2LjY4MjQgMTQuMjYwOCAxNS42NDkxIDEyLjk4MzUgMTUuNjQ5MUMxMS43MDQ2IDE1LjY0OTEgMTAuNjY5NyAxNi42ODA4IDEwLjY2OTcgMTcuOTYxM0MxMC42NjQ5IDE5LjIzMjIgMTEuNzA0NiAyMC4yNzE5IDEyLjk4MzUgMjAuMjcxOVonXHJcbiAgICApO1xyXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcik7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XHJcbiAgICByZXR1cm4gc3ZnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcsIHN2ZzogU1ZHRWxlbWVudCkge1xyXG4gICAgY29uc3QgcGF0aCA9IHN2Zy5xdWVyeVNlbGVjdG9yKCdwYXRoJykgYXMgU1ZHUGF0aEVsZW1lbnQ7XHJcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGFuZ2VOYW1lKHZhbHVlOiBzdHJpbmcsIG5hbWVFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIG5hbWVFbC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FyRWw7XHJcbiIsImltcG9ydCAnLi9mb3JtLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xyXG5cclxuY2xhc3MgRm9ybSB7XHJcbiAgc3RhdGljIGNyZWF0ZShcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICBidXR0b25UZXh0OiBzdHJpbmcsXHJcbiAgICBidXR0b25DbGFzc0xpc3Q6IHN0cmluZ1tdLFxyXG4gICAgYnV0dG9uSGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZFxyXG4gICk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdmb3JtJztcclxuXHJcbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmNsYXNzTmFtZSA9IGBmb3JtXyR7Y2xhc3NOYW1lfSBmb3JtYDtcclxuXHJcbiAgICBjb25zdCBpbnB1dFRleHQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRUZXh0LmNsYXNzTmFtZSA9ICdmb3JtX19pbnB1dCBpbnB1dF90ZXh0JztcclxuICAgIGlucHV0VGV4dC50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXRUZXh0Lm1heExlbmd0aCA9IDIwO1xyXG4gICAgaW5wdXRUZXh0LnBhdHRlcm4gPSAnXlthLXpBLVowLTldKyQnO1xyXG4gICAgaW5wdXRUZXh0LnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgY29uc3QgaW5wdXRDb2xvcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dENvbG9yLmNsYXNzTmFtZSA9ICdmb3JtX19pbnB1dCBpbnB1dF9jb2xvcic7XHJcbiAgICBpbnB1dENvbG9yLnR5cGUgPSAnY29sb3InO1xyXG4gICAgaW5wdXRDb2xvci52YWx1ZSA9IGNvbG9yO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbi5jcmVhdGUoYnV0dG9uVGV4dCwgYnV0dG9uQ2xhc3NMaXN0LCBidXR0b25IYW5kbGVyKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgZm9ybS5hcHBlbmQoaW5wdXRDb2xvcik7XHJcbiAgICBmb3JtLmFwcGVuZChidXR0b24pO1xyXG4gICAgd3JhcHBlci5hcHBlbmQoZm9ybSk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnLi4vLi4vYXBwL2FwcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XHJcblxyXG5jbGFzcyBOYXZpZ2F0aW9uIHtcclxuICBuYXY6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Ub0dhcmFnZSA9IEJ1dHRvbi5jcmVhdGUoJ1RvIGdhcmFnZScsIFsnbmF2X19idXR0b24nLCAnYnV0dG9uX2dyZWVuJ10sICgpID0+IHtcclxuICAgICAgYXBwLnBhZ2VHYXJhZ2UuY2xlYXJDb250ZW50KCk7XHJcbiAgICAgIGFwcC5wYWdlR2FyYWdlLnJlbmRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uVG9XaW5uZXIgPSBCdXR0b24uY3JlYXRlKCdUbyB3aW5uZXJzJywgWyduYXZfX2J1dHRvbicsICdidXR0b25fZ3JlZW4nXSwgKCkgPT4ge1xyXG4gICAgICBhcHAucGFnZVdpbm5lcnMuY2xlYXJDb250ZW50KCk7XHJcbiAgICAgIGFwcC5wYWdlV2lubmVycy5yZW5kZXIoKTtcclxuICAgICAgYXBwLnBhZ2VXaW5uZXJzLnVwZGF0ZVBhZ2UoYXBwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubmF2LmFwcGVuZChidXR0b25Ub0dhcmFnZSk7XHJcbiAgICB0aGlzLm5hdi5hcHBlbmQoYnV0dG9uVG9XaW5uZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgQ2FyRWwgZnJvbSAnLi4vY2FyL2Nhcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vYXBwL2FwcCc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vYXBwL2FwaSc7XHJcbmltcG9ydCAnLi9yYWNlLXJvdy5zY3NzJztcclxuaW1wb3J0IHsgU3BlZWRDYXIgfSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2VzJztcclxuXHJcbmNsYXNzIFJhY2VSb3cge1xyXG4gIHN0YXRpYyBjcmVhdGUoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBhcHA6IEFwcCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9ICdyYWNlLXJvdyc7XHJcbiAgICByb3cuaWQgPSBTdHJpbmcoaWQpO1xyXG4gICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3AuY2xhc3NOYW1lID0gJ3JhY2Utcm93X190b3Atcm93JztcclxuICAgIGNvbnN0IHRvcEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvcEJ1dHRvbnMuY2xhc3NOYW1lID0gJ3JhY2Utcm93X190b3AtYnV0dG9ucyc7XHJcblxyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyTmFtZS5jbGFzc05hbWUgPSAncmFjZS1yb3dfX2Nhci1uYW1lJztcclxuICAgIGNhck5hbWUuaW5uZXJIVE1MID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdHJhY2suY2xhc3NOYW1lID0gJ3JhY2Utcm93X190cmFjayc7XHJcblxyXG4gICAgY29uc3QgY2FyID0gQ2FyRWwuY3JlYXRlKGNvbG9yKTtcclxuXHJcbiAgICBjb25zdCBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udHJvbEJ1dHRvbnMuY2xhc3NOYW1lID0gJ3JhY2Utcm93X19jb250cm9sLWJ1dHRvbnMnO1xyXG4gICAgbGV0IGJ1dHRvbkI6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkEgPSBCdXR0b24uY3JlYXRlKCdBJywgWydyYWNlLXJvd19fYnV0dG9uJywgJ2J1dHRvbl9zdGFydCcsICdidXR0b25fY2Fycy1jb250cm9sJ10sIGFzeW5jICgpID0+IHtcclxuICAgICAgYnV0dG9uQS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGxldCBpbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UmVzcG9uc2UgPSAoYXdhaXQgQXBpLnN0YXJ0T3JTdG9wQ2FyKGlkLCAnc3RhcnRlZCcpKSBhcyBTcGVlZENhcjtcclxuICAgICAgICBsZXQgaXNNb3Zpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIGludGVydmFsID0gYXBwLnN0YXJ0Q2FyQW5pbWF0aW9uKGNhciwgc3RhcnRSZXNwb25zZS5kaXN0YW5jZSAvIHN0YXJ0UmVzcG9uc2UudmVsb2NpdHkgLyAxMCwgaXNNb3ZpbmcpO1xyXG4gICAgICAgIGF3YWl0IEFwaS5zd2l0Y2hDYXJUb0RyaXZlTW9kZShpZCwgYXBwLmFib3J0Q29udHJvbGxlcik7XHJcbiAgICAgICAgYnV0dG9uQi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGJ1dHRvbkIuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uQiA9IEJ1dHRvbi5jcmVhdGUoJ0InLCBbJ3JhY2Utcm93X19idXR0b24nLCAnYnV0dG9uX3Jlc2V0JywgJ2J1dHRvbl9jYXJzLWNvbnRyb2wnXSwgKCkgPT4ge1xyXG4gICAgICBhcHAuc3RvcENhcihpZCwgYnV0dG9uQSwgYnV0dG9uQiwgY2FyKTtcclxuICAgIH0pO1xyXG4gICAgYnV0dG9uQi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU2VsZWN0ID0gQnV0dG9uLmNyZWF0ZShcclxuICAgICAgJ1NlbGVjdCcsXHJcbiAgICAgIFsncmFjZS1yb3dfX2J1dHRvbicsICdidXR0b25fc2VsZWN0JywgJ2J1dHRvbl9zbWFsbCcsICdidXR0b25fYmx1ZSddLFxyXG4gICAgICB0aGlzLmJ1dHRvblNlbGVjdE9uQ2xpY2suYmluZCh0aGlzLCB0aGlzLCBhcHAsIGlkLCBjYXJOYW1lLCBjYXIpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnV0dG9uUmVtb3ZlID0gQnV0dG9uLmNyZWF0ZShcclxuICAgICAgJ1JlbW92ZScsXHJcbiAgICAgIFsncmFjZS1yb3dfX2J1dHRvbicsICdidXR0b25fcmVtb3ZlJywgJ2J1dHRvbl9zbWFsbCcsICdidXR0b25fYmx1ZSddLFxyXG4gICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQXBpLmRlbGV0ZUNhcihpZCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHdpbm5lckRhdGEgPSBhd2FpdCBBcGkuZ2V0V2lubmVyKGlkKTtcclxuICAgICAgICAgIGlmICh3aW5uZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIEFwaS5kZWxldGVXaW5uZXIoaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjYXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoYXBwLnBhZ2VOdW1iZXJHYXJhZ2UsIDcpO1xyXG4gICAgICAgIGFwcC5yYWNlVGFibGUudGFibGUucmVtb3ZlKCk7XHJcbiAgICAgICAgYXBwLnJhY2VUYWJsZS50YWJsZSA9IGFwcC5wYWdlR2FyYWdlLmNyZWF0ZVJhY2VUYWJsZShhcHAsIGNhcnNEYXRhLmNhcnMpO1xyXG4gICAgICAgIGFwcC5wYWdlTnVtYmVyR2FyYWdlRWxlbS5hZnRlcihhcHAucmFjZVRhYmxlLnRhYmxlKTtcclxuICAgICAgICBhcHAucGFnZUdhcmFnZS5zZXRDYXJzQ291bnRlcihhcHAsIE51bWJlcihjYXJzRGF0YS50b3RhbENvdW50KSk7XHJcbiAgICAgICAgYXBwLnBhZ2VHYXJhZ2Uuc2V0UGFnaW5hdGlvbkJ1dHRvbnMoYXBwLCBjYXJzRGF0YSk7XHJcbiAgICAgICAgaWYgKGFwcC5yYWNlVGFibGUucm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGFwcC5wYWdlR2FyYWdlLmNyZWF0UHJldlBhZ2UoYXBwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdG9wQnV0dG9ucy5hcHBlbmQoYnV0dG9uU2VsZWN0KTtcclxuICAgIHRvcEJ1dHRvbnMuYXBwZW5kKGJ1dHRvblJlbW92ZSk7XHJcbiAgICB0b3AuYXBwZW5kKHRvcEJ1dHRvbnMpO1xyXG5cclxuICAgIHRvcC5hcHBlbmQoY2FyTmFtZSk7XHJcbiAgICBjb250cm9sQnV0dG9ucy5hcHBlbmQoYnV0dG9uQSk7XHJcbiAgICBjb250cm9sQnV0dG9ucy5hcHBlbmQoYnV0dG9uQik7XHJcbiAgICB0cmFjay5hcHBlbmQoY29udHJvbEJ1dHRvbnMpO1xyXG4gICAgdHJhY2suYXBwZW5kKGNhcik7XHJcbiAgICByb3cuYXBwZW5kKHRvcCk7XHJcbiAgICByb3cuYXBwZW5kKHRyYWNrKTtcclxuXHJcbiAgICByZXR1cm4gcm93O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGJ1dHRvblNlbGVjdE9uQ2xpY2soXHJcbiAgICBidXR0b25TZWxlY3Q6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYXBwOiBBcHAsXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZUVsOiBIVE1MRWxlbWVudCxcclxuICAgIHN2ZzogU1ZHRWxlbWVudFxyXG4gICkge1xyXG4gICAgYXBwLmZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlucHV0VGV4dCA9IGFwcC5mb3JtVXBkYXRlQ2FyLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF90ZXh0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Q29sb3IgPSBhcHAuZm9ybVVwZGF0ZUNhci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfY29sb3InKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgYnV0dG9uID0gYXBwLmZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBpbnB1dFRleHQuZm9jdXMoKTtcclxuICAgIGNvbnN0IGNhckRhdGEgPSBhd2FpdCBBcGkuZ2V0Q2FyKGlkKTtcclxuICAgIGlucHV0VGV4dC52YWx1ZSA9IGNhckRhdGEubmFtZTtcclxuICAgIGlucHV0Q29sb3IudmFsdWUgPSBjYXJEYXRhLmNvbG9yO1xyXG4gICAgYXBwLnNlbGVjdGVkQ2FySWQgPSBpZDtcclxuICAgIGFwcC5zZWxlY3RlZENhck5hbWUgPSBuYW1lRWw7XHJcbiAgICBhcHAuc2VsZWN0ZWRDYXJTVkcgPSBzdmc7XHJcbiAgICBidXR0b25TZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGFwcC5yYWNlVGFibGUudGFibGUucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b246IEhUTUxCdXR0b25FbGVtZW50KSA9PiAoYnV0dG9uLmRpc2FibGVkID0gdHJ1ZSkpO1xyXG5cclxuICAgIC8v0L7RgtC80LXQvdGP0LXQvCDQstGL0LTQtdC70LXQvdC40LUg0LzQsNGI0LjQvdGLXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcuZm9ybV91cGRhdGUtY2FyJykgfHwgZXZlbnQudGFyZ2V0ID09PSBidXR0b24pIHtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGlmICghYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uX3Jlc2V0JykpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBidXR0b25TZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnB1dFRleHQudmFsdWUgPSAnJztcclxuICAgICAgICBpbnB1dENvbG9yLnZhbHVlID0gJyNmZmZmZmYnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcclxuICAgICAgICBhcHAuc2VsZWN0ZWRDYXJJZCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFjZVJvdztcclxuIiwiaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9hcHAvYXBwJztcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBSYWNlUm93IGZyb20gJy4uL3JhY2Utcm93L3JhY2Utcm93JztcclxuXHJcbmNsYXNzIFJhY2VUYWJsZSB7XHJcbiAgcm93czogSFRNTEVsZW1lbnRbXTtcclxuICB0YWJsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb3dzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlVGFibGUoY2FyczogQ2FyW10sIGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50YWJsZS5jbGFzc05hbWUgPSAncmFjZS10YWJsZSc7XHJcblxyXG4gICAgY2Fycy5mb3JFYWNoKChjYXIpID0+IHtcclxuICAgICAgY29uc3Qgcm93ID0gUmFjZVJvdy5jcmVhdGUoY2FyLmlkLCBjYXIubmFtZSwgY2FyLmNvbG9yLCBhcHApO1xyXG5cclxuICAgICAgdGhpcy50YWJsZS5hcHBlbmQocm93KTtcclxuICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnRhYmxlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFjZVRhYmxlO1xyXG4iLCJpbXBvcnQgJy4vd2lubmVyLXJvdy5zY3NzJztcclxuaW1wb3J0IENhckVsIGZyb20gJy4uL2Nhci9jYXInO1xyXG5cclxuY2xhc3MgV2lubmVyUm93IHtcclxuICBzdGF0aWMgY3JlYXRlKHJvd051bWJlcjogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIHdpbnM6IG51bWJlciwgdGltZTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3cnO1xyXG5cclxuICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG51bWJlckNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF9udW1iZXInO1xyXG4gICAgbnVtYmVyQ2VsbC5pbm5lckhUTUwgPSBTdHJpbmcocm93TnVtYmVyKTtcclxuXHJcbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJDZWxsLmNsYXNzTmFtZSA9ICd3aW5uZXItcm93X19jZWxsIHdpbm5lci1yb3dfX2NlbGxfY2FyJztcclxuICAgIGNvbnN0IHN2ZyA9IENhckVsLmNyZWF0ZShjb2xvcik7XHJcbiAgICBjYXJDZWxsLmFwcGVuZChzdmcpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX25hbWUnO1xyXG4gICAgbmFtZUNlbGwuaW5uZXJIVE1MID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCB3aW5zQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2luc0NlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF93aW5zJztcclxuICAgIHdpbnNDZWxsLmlubmVySFRNTCA9IFN0cmluZyh3aW5zKTtcclxuXHJcbiAgICBjb25zdCB0aW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGltZUNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF90aW1lJztcclxuICAgIHRpbWVDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aW1lKTtcclxuXHJcbiAgICByb3cuYXBwZW5kKG51bWJlckNlbGwpO1xyXG4gICAgcm93LmFwcGVuZChjYXJDZWxsKTtcclxuICAgIHJvdy5hcHBlbmQobmFtZUNlbGwpO1xyXG4gICAgcm93LmFwcGVuZCh3aW5zQ2VsbCk7XHJcbiAgICByb3cuYXBwZW5kKHRpbWVDZWxsKTtcclxuXHJcbiAgICByZXR1cm4gcm93O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBXaW5uZXJSb3c7XHJcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vYXBwL2FwaSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vYXBwL2FwcCc7XHJcbmltcG9ydCAnLi93aW5uZXItdGFibGUuc2Nzcyc7XHJcbmltcG9ydCB7IENhcnNEYXRhLCBXaW5uZXIsIFdpbm5lcnMgfSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IFdpbm5lclJvdyBmcm9tICcuLi93aW5uZXJzLXJvdy93aW5uZXItcm93JztcclxuaW1wb3J0IHsgT3JkZXIsIFNvcnRpbmcgfSBmcm9tICcuLi8uLi91dGlscy90eXBlJztcclxuXHJcbmNsYXNzIFdpbm5lclRhYmxlIHtcclxuICByb3dzOiBIVE1MRWxlbWVudFtdO1xyXG4gIHRhYmxlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJvd3MgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoYXBwOiBBcHAsIHNvcnQ/OiBTb3J0aW5nLCBvcmRlcj86IE9yZGVyKTogUHJvbWlzZTxIVE1MRWxlbWVudD4ge1xyXG4gICAgbGV0IHdpbm5lcnNPYmo6IFdpbm5lcnM7XHJcbiAgICBpZiAoc29ydCAmJiBvcmRlcikge1xyXG4gICAgICB3aW5uZXJzT2JqID0gYXdhaXQgQXBpLmdldFdpbm5lcnMoYXBwLnBhZ2VOdW1iZXJXaW5uZXIsIDEwLCBzb3J0LCBvcmRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5uZXJzT2JqID0gYXdhaXQgQXBpLmdldFdpbm5lcnMoYXBwLnBhZ2VOdW1iZXJXaW5uZXIsIDEwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdpbm5lcnM6IFdpbm5lcltdID0gd2lubmVyc09iai53aW5uZXJzO1xyXG4gICAgY29uc3QgY2Fyc0RhdGE6IENhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoKTtcclxuICAgIGNvbnN0IGNhcnMgPSBjYXJzRGF0YS5jYXJzO1xyXG5cclxuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMudGFibGUuY2xhc3NOYW1lID0gJ3dpbm5lcnMtdGFibGUnO1xyXG5cclxuICAgIGNvbnN0IHJvd0hlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVyKGFwcCk7XHJcbiAgICB0aGlzLnRhYmxlLmFwcGVuZChyb3dIZWFkZXIpO1xyXG4gICAgdGhpcy5yb3dzLnB1c2gocm93SGVhZGVyKTtcclxuXHJcbiAgICB3aW5uZXJzLmZvckVhY2goKHdpbm5lciwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY2FyID0gY2Fycy5maW5kKChjYXIpID0+IGNhci5pZCA9PT0gd2lubmVyLmlkKTtcclxuICAgICAgY29uc3QgbmFtZSA9IGNhci5uYW1lO1xyXG4gICAgICBjb25zdCBjb2xvciA9IGNhci5jb2xvcjtcclxuICAgICAgY29uc3Qgd2lucyA9IHdpbm5lci53aW5zO1xyXG4gICAgICBjb25zdCB0aW1lID0gd2lubmVyLnRpbWU7XHJcblxyXG4gICAgICBjb25zdCByb3cgPSBXaW5uZXJSb3cuY3JlYXRlKGluZGV4ICsgMSwgbmFtZSwgY29sb3IsIHdpbnMsIHRpbWUpO1xyXG4gICAgICB0aGlzLnRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3Qgcm93SGVhZGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1yb3cnLCAnd2lubmVyLXJvd19oZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBudW1iZXJDZWxsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbnVtYmVyQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX251bWJlcic7XHJcbiAgICBudW1iZXJDZWxsLmlubmVySFRNTCA9ICcjJztcclxuXHJcbiAgICBjb25zdCBjYXJDZWxsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX2Nhcic7XHJcbiAgICBjYXJDZWxsLmlubmVySFRNTCA9ICdDYXInO1xyXG5cclxuICAgIGNvbnN0IG5hbWVDZWxsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmFtZUNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF9uYW1lJztcclxuICAgIG5hbWVDZWxsLmlubmVySFRNTCA9ICdOYW1lJztcclxuXHJcbiAgICBjb25zdCB3aW5zQ2VsbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdpbnNDZWxsLmNsYXNzTmFtZSA9ICd3aW5uZXItcm93X19jZWxsIHdpbm5lci1yb3dfX2NlbGxfd2lucyc7XHJcbiAgICB3aW5zQ2VsbC5pbm5lckhUTUwgPSAnV2lucyc7XHJcbiAgICB3aW5zQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuc29ydChldmVudCwgYXBwKSk7XHJcblxyXG4gICAgY29uc3QgdGltZUNlbGw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aW1lQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX3RpbWUnO1xyXG4gICAgdGltZUNlbGwuaW5uZXJIVE1MID0gJ0Jlc3QgdGltZSc7XHJcbiAgICB0aW1lQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuc29ydChldmVudCwgYXBwKSk7XHJcblxyXG4gICAgcm93SGVhZGVyLmFwcGVuZChudW1iZXJDZWxsKTtcclxuICAgIHJvd0hlYWRlci5hcHBlbmQoY2FyQ2VsbCk7XHJcbiAgICByb3dIZWFkZXIuYXBwZW5kKG5hbWVDZWxsKTtcclxuICAgIHJvd0hlYWRlci5hcHBlbmQod2luc0NlbGwpO1xyXG4gICAgcm93SGVhZGVyLmFwcGVuZCh0aW1lQ2VsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJvd0hlYWRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc29ydChldmVudDogRXZlbnQsIGFwcDogQXBwKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ1dpbnMnKSB7XHJcbiAgICAgIGFwcC53aW5uZXJzVGFibGVTb3J0ID0gJ3dpbnMnO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAnQmVzdCB0aW1lJykge1xyXG4gICAgICBhcHAud2lubmVyc1RhYmxlU29ydCA9ICd0aW1lJztcclxuICAgIH1cclxuICAgIGFwcC53aW5uZXJzVGFibGVPcmRlciA9PT0gJ0FTQycgPyAoYXBwLndpbm5lcnNUYWJsZU9yZGVyID0gJ0RFU0MnKSA6IChhcHAud2lubmVyc1RhYmxlT3JkZXIgPSAnQVNDJyk7XHJcbiAgICBhcHAucGFnZVdpbm5lcnMudXBkYXRlUGFnZShhcHApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lubmVyVGFibGU7XHJcbiIsImltcG9ydCAnLi9nYXJhZ2Uuc2Nzcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vYXBwL2FwaSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL2FwcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtJztcclxuaW1wb3J0IFJhY2VUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3JhY2UtdGFibGUudHMvcmFjZS10YWJsZSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IENhciwgQ2Fyc0RhdGEgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgQ2FyRWwgZnJvbSAnLi4vY29tcG9uZW50cy9jYXIvY2FyJztcclxuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vYXNzZXRzL2NvbG9ycyc7XHJcbmltcG9ydCB7IE1BS0VSUyB9IGZyb20gJy4uL2Fzc2V0cy9jYXJzTWFrZXJzJztcclxuXHJcbmNsYXNzIEdhcmFnZVBhZ2VWaWV3IGV4dGVuZHMgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKGFwcCk7XHJcblxyXG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSB0aGlzLmNyZWF0ZUZvcm0oYXBwKTtcclxuICAgIGNvbnN0IHRvb2xCdXR0b25zUm93ID0gdGhpcy5jcmVhdGVUb29sQnV0dG9uc1JvdyhhcHApO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQoZm9ybVdyYXBwZXIpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQodG9vbEJ1dHRvbnNSb3cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVGb3JtKGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1XcmFwcGVyLmNsYXNzTmFtZSA9ICdmb3JtLXdyYXBwZXInO1xyXG4gICAgLy9jcmVhdCBlcnJvciBtYXNzZWdlIGZvciBjcmVhdGVDYXJcclxuICAgIGxldCBpc0Vycm9yTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWwgPSB0aGlzLmNyZWF0ZUVycm9yTWFzc2VnZSgpO1xyXG4gICAgY29uc3QgZm9ybUNyZWF0ZUNhciA9IEZvcm0uY3JlYXRlKFxyXG4gICAgICBhcHAuc3RhdGUuaW5wdXRDcmVhdGVWYWx1ZSxcclxuICAgICAgYXBwLnN0YXRlLmlucHV0Q3JlYXRlQ29sb3IsXHJcbiAgICAgICdjcmVhdGUtY2FyJyxcclxuICAgICAgJ0NyZWF0ZScsXHJcbiAgICAgIFsnYnV0dG9uX2NyZWF0ZScsICdidXR0b25fYmx1ZSddLFxyXG4gICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gYXBwLmZvcm1DcmVhdGVDYXIucXVlcnlTZWxlY3RvcignLmlucHV0X3RleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGlucHV0Q29sb3IgPSBhcHAuZm9ybUNyZWF0ZUNhci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfY29sb3InKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbnB1dFRleHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBpbnB1dENvbG9yLnZhbHVlO1xyXG4gICAgICAgIGlmIChuYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICBhd2FpdCBBcGkuY3JlYXRlQ2FyKG5hbWUsIGNvbG9yKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2Fyc1RhYmxlKGFwcCk7XHJcbiAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSAnJztcclxuICAgICAgICAgIGlucHV0Q29sb3IudmFsdWUgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgICBpZiAoaXNFcnJvck1lc3NhZ2UpIGVycm9yTWVzc2FnZUVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhcHAuZm9ybUNyZWF0ZUNhci5hcHBlbmQoZXJyb3JNZXNzYWdlRWwpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2VFbC5yZW1vdmUoKSwgNTAwMCk7XHJcbiAgICAgICAgICBpc0Vycm9yTWVzc2FnZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgYXBwLmZvcm1DcmVhdGVDYXIgPSBmb3JtQ3JlYXRlQ2FyO1xyXG4gICAgY29uc3QgZm9ybVVwZGF0ZUNhciA9IEZvcm0uY3JlYXRlKFxyXG4gICAgICBhcHAuc3RhdGUuaW5wdXRVcGRhdGVWYWx1ZSxcclxuICAgICAgYXBwLnN0YXRlLmlucHV0VXBkYXRlQ29sb3IsXHJcbiAgICAgICd1cGRhdGUtY2FyJyxcclxuICAgICAgJ1VwZGF0ZScsXHJcbiAgICAgIFsnYnV0dG9uX3VwZGF0ZScsICdidXR0b25fYmx1ZSddLFxyXG4gICAgICBhc3luYyAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLnVwZGF0ZUNhcihhcHAsIGFwcC5zZWxlY3RlZENhcklkKVxyXG4gICAgKTtcclxuICAgIGFwcC5mb3JtVXBkYXRlQ2FyID0gZm9ybVVwZGF0ZUNhcjtcclxuICAgIGNvbnN0IGJ1dHRvblVwZGF0ZSA9IGZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBidXR0b25VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZm9ybVdyYXBwZXIuYXBwZW5kKGZvcm1DcmVhdGVDYXIpO1xyXG4gICAgZm9ybVdyYXBwZXIuYXBwZW5kKGZvcm1VcGRhdGVDYXIpO1xyXG4gICAgcmV0dXJuIGZvcm1XcmFwcGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFcnJvck1hc3NlZ2UoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NOYW1lID0gJ2lucHV0X19lcnJvcic7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC5pbm5lckhUTUwgPSAnUGxlYXNlIGVudGVyIGEgbmFtZSc7XHJcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlRWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVRvb2xCdXR0b25zUm93KGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTmFtZSA9ICd0b29sLWJ1dHRvbnMnO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblJhY2UgPSBCdXR0b24uY3JlYXRlKCdSYWNlJywgWydidXR0b25fcmFjZScsICdidXR0b25fZ3JlZW4nXSwgKCkgPT4gYXBwLnN0YXJ0UmFjZSgpKTtcclxuICAgIGFwcC5idXR0b25SYWNlID0gYnV0dG9uUmFjZTtcclxuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gQnV0dG9uLmNyZWF0ZSgnUmVzZXQnLCBbJ2J1dHRvbl9yZXNldCcsICdidXR0b25fZ3JlZW4nXSwgKCkgPT4ge1xyXG4gICAgICBhcHAucmVzZXRSYWNlKCk7XHJcbiAgICB9KTtcclxuICAgIGFwcC5idXR0b25SZXNldCA9IGJ1dHRvblJlc2V0O1xyXG4gICAgY29uc3QgYnV0dG9uR2VuZXJhdGUgPSBCdXR0b24uY3JlYXRlKCdHZW5lcmF0ZScsIFsnYnV0dG9uX2dlbmVyYXRlJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHRoaXMuZ2VuZXJhdGVDYXJzKGFwcCkpO1xyXG4gICAgYXBwLmJ1dHRvbkdlbmVyYXRlID0gYnV0dG9uR2VuZXJhdGU7XHJcbiAgICBidXR0b25zV3JhcHBlci5hcHBlbmQoYnV0dG9uUmFjZSk7XHJcbiAgICBidXR0b25zV3JhcHBlci5hcHBlbmQoYnV0dG9uUmVzZXQpO1xyXG4gICAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kKGJ1dHRvbkdlbmVyYXRlKTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uc1dyYXBwZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlUmFjZVRhYmxlKGFwcDogQXBwLCBjYXJzOiBDYXJbXSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGFwcC5yYWNlVGFibGUgPSBuZXcgUmFjZVRhYmxlKCk7XHJcbiAgICBjb25zdCB0YWJsZSA9IGFwcC5yYWNlVGFibGUuY3JlYXRlVGFibGUoY2FycywgYXBwKTtcclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVDYXJzQ291bnRlcihhcHA6IEFwcCwgbnVtOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvdW50ZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb3VudGVyLmNsYXNzTmFtZSA9ICdjYXJzLWNvdW50ZXInO1xyXG4gICAgY291bnRlci5pbm5lckhUTUwgPSBgR2FyYWdlICgke251bX0pYDtcclxuICAgIGFwcC5jb3VudGVyR2FyYWdlID0gY291bnRlcjtcclxuICAgIHRoaXMubWFpbkNvbnRlbnQuYXBwZW5kKGNvdW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENhcnNDb3VudGVyKGFwcDogQXBwLCBudW06IG51bWJlcikge1xyXG4gICAgYXBwLmNvdW50ZXJHYXJhZ2UuaW5uZXJIVE1MID0gYEdhcmFnZSAoJHtudW19KWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlUGFnZUNvdW50ZXIoYXBwOiBBcHAsIG51bTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRlci5jbGFzc05hbWUgPSAncGFnZS1jb3VudGVyJztcclxuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYFBhZ2UgIyR7bnVtfWA7XHJcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZUVsZW0gPSBjb3VudGVyO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQoY291bnRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZUNvdW50ZXIoYXBwOiBBcHApIHtcclxuICAgIGFwcC5wYWdlTnVtYmVyR2FyYWdlRWxlbS5pbm5lckhUTUwgPSBgUGFnZSAjJHthcHAucGFnZU51bWJlckdhcmFnZX1gO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdpbmF0aW9uLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uJztcclxuICAgIGNvbnN0IGJ1dHRvblByZXYgPSBCdXR0b24uY3JlYXRlKCdQcmV2aW91cycsIFsncGFnaW5hdGlvbl9fYnV0dG9uJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdFByZXZQYWdlLmJpbmQodGhpcywgYXBwKSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25OZXh0ID0gQnV0dG9uLmNyZWF0ZSgnTmV4dCcsIFsncGFnaW5hdGlvbl9fYnV0dG9uJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdE5leHRQYWdlLmJpbmQodGhpcywgYXBwKSgpO1xyXG4gICAgfSk7XHJcbiAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbkdhcmFnZSA9IHsgcHJldjogYnV0dG9uUHJldiwgbmV4dDogYnV0dG9uTmV4dCB9O1xyXG4gICAgcGFnaW5hdGlvbi5hcHBlbmQoYnV0dG9uUHJldik7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChidXR0b25OZXh0KTtcclxuICAgIHRoaXMubWFpbkNvbnRlbnQuYXBwZW5kKHBhZ2luYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwLCBjYXJzOiBDYXJzRGF0YSkge1xyXG4gICAgaWYgKGFwcC5wYWdlTnVtYmVyR2FyYWdlID09PSAxKSB7XHJcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uR2FyYWdlLnByZXYuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBwLnBhZ2luYXRpb25CdXR0b25HYXJhZ2UucHJldi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKE1hdGguY2VpbChOdW1iZXIoY2Fycy50b3RhbENvdW50KSAvIDcpID09PSBhcHAucGFnZU51bWJlckdhcmFnZSB8fCBOdW1iZXIoY2Fycy50b3RhbENvdW50KSA9PT0gMCkge1xyXG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbkdhcmFnZS5uZXh0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uR2FyYWdlLm5leHQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgY3JlYXROZXh0UGFnZShhcHA6IEFwcCkge1xyXG4gICAgYXBwLnBhZ2VOdW1iZXJHYXJhZ2UgKz0gMTtcclxuICAgIHRoaXMuc2V0UGFnZUNvdW50ZXIoYXBwKTtcclxuICAgIHRoaXMudXBkYXRlQ2Fyc1RhYmxlKGFwcCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBjcmVhdFByZXZQYWdlKGFwcDogQXBwKSB7XHJcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZSAtPSAxO1xyXG4gICAgdGhpcy5zZXRQYWdlQ291bnRlcihhcHApO1xyXG4gICAgdGhpcy51cGRhdGVDYXJzVGFibGUoYXBwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlQ2Fyc1RhYmxlKGFwcDogQXBwKSB7XHJcbiAgICBjb25zdCBjYXJzRGF0YSA9IGF3YWl0IEFwaS5nZXRDYXJzKGFwcC5wYWdlTnVtYmVyR2FyYWdlLCA3KTtcclxuICAgIGFwcC5yYWNlVGFibGUudGFibGUucmVtb3ZlKCk7XHJcbiAgICBhcHAucmFjZVRhYmxlLnRhYmxlID0gYXBwLnBhZ2VHYXJhZ2UuY3JlYXRlUmFjZVRhYmxlKGFwcCwgY2Fyc0RhdGEuY2Fycyk7XHJcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZUVsZW0uYWZ0ZXIoYXBwLnJhY2VUYWJsZS50YWJsZSk7XHJcbiAgICB0aGlzLnNldFBhZ2luYXRpb25CdXR0b25zKGFwcCwgY2Fyc0RhdGEpO1xyXG4gICAgdGhpcy5zZXRDYXJzQ291bnRlcihhcHAsIHBhcnNlSW50KGNhcnNEYXRhLnRvdGFsQ291bnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlQ2FyKGFwcDogQXBwLCBpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpbnB1dFRleHQgPSBhcHAuZm9ybVVwZGF0ZUNhci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfdGV4dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dENvbG9yID0gYXBwLmZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignLmlucHV0X2NvbG9yJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IG5hbWUgPSBpbnB1dFRleHQudmFsdWU7XHJcbiAgICBjb25zdCBjb2xvciA9IGlucHV0Q29sb3IudmFsdWU7XHJcbiAgICBhcHAuc2VsZWN0ZWRDYXJOYW1lLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICBDYXJFbC5jaGFuZ2VDb2xvcihjb2xvciwgYXBwLnNlbGVjdGVkQ2FyU1ZHKTtcclxuICAgIENhckVsLmNoYW5nZU5hbWUobmFtZSwgYXBwLnNlbGVjdGVkQ2FyTmFtZSk7XHJcbiAgICBhd2FpdCBBcGkudXBkYXRlQ2FyKGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdlbmVyYXRlQ2FycyhhcHA6IEFwcCkge1xyXG4gICAgYXBwLmJ1dHRvbkdlbmVyYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFwcC5idXR0b25SYWNlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFwcC5idXR0b25SZXNldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBjb25zdCBkb3dubG9hZE1hc3NlZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvd25sb2FkTWFzc2VnZS5jbGFzc05hbWUgPSAnZG93bmxvYWQtbWFzc2VnZSc7XHJcbiAgICBkb3dubG9hZE1hc3NlZ2UuaW5uZXJIVE1MID0gJ0NhcnMgYXJlIGNyZWF0ZWQuLi4nO1xyXG4gICAgYXBwLmJ1dHRvbkdlbmVyYXRlLmFmdGVyKGRvd25sb2FkTWFzc2VnZSk7XHJcbiAgICBsZXQgbmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbG9yID0gQ09MT1JTW2dldFJhbmRvbShDT0xPUlMpXTtcclxuICAgICAgbGV0IG1ha2VyID0gTUFLRVJTW2dldFJhbmRvbShNQUtFUlMpXTtcclxuICAgICAgbmFtZSA9IGAke21ha2VyLm1ha2VyfSAke21ha2VyLm1vZGVsc1tnZXRSYW5kb20obWFrZXIubW9kZWxzKV19YDtcclxuICAgICAgYXdhaXQgQXBpLmNyZWF0ZUNhcihuYW1lLCBjb2xvcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUNhcnNUYWJsZShhcHApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbTxUPihhcnJheTogVFtdKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBhcHAuYnV0dG9uR2VuZXJhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGFwcC5idXR0b25SYWNlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBhcHAuYnV0dG9uUmVzZXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGRvd25sb2FkTWFzc2VnZS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVNZXNzYWdlQWJvdXRXaW5uZXIobmFtZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXcmFwcGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVzc2FnZVdyYXBwZXIuY2xhc3NOYW1lID0gJ3dpbm5lcic7XHJcbiAgICBjb25zdCB3aW5uZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3aW5uZXIuY2xhc3NOYW1lID0gJ3dpbm5lcl9fdGV4dCc7XHJcbiAgICB3aW5uZXIuaW5uZXJIVE1MID0gYFdpbm5lcjogJHtuYW1lfSBbJHt0aW1lfXNdYDtcclxuICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZCh3aW5uZXIpO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2VXcmFwcGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlUGFnZVZpZXc7XHJcbiIsImltcG9ydCAnLi9wYWdlLnNjc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9hcHAnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdi9uYXYnO1xyXG5cclxuY2xhc3MgUGFnZSB7XHJcbiAgcHVibGljIG1haW5Db250ZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHRoaXMubWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBuYXYgPSBuZXcgTmF2aWdhdGlvbihhcHApLnJlbmRlcigpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQobmF2KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm1haW5Db250ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckNvbnRlbnQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvYXBwJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi9hcHAvYXBpJztcclxuaW1wb3J0IFdpbm5lclRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvd2lubmVycy10YWJsZS93aW5uZXItdGFibGUnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7IFdpbm5lciB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xyXG5cclxuY2xhc3MgV2lubmVyc1BhZ2VWaWV3IGV4dGVuZHMgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuICAgIHN1cGVyKGFwcCk7XHJcbiAgICBjb25zdCB3aW5uZXJUYWJsZSA9IG5ldyBXaW5uZXJUYWJsZSgpO1xyXG4gICAgYXBwLndpbm5lcnNUYWJsZSA9IHdpbm5lclRhYmxlO1xyXG4gICAgY29uc3Qgd2lubmVyc0NvdW50ZXcgPSB0aGlzLmNyZWF0ZVdpbm5lcnNDb3VudGVyKGFwcCk7XHJcbiAgICBjb25zdCBudW1iZXJQYWdlID0gdGhpcy5jcmVhdGVQYWdlTnVtYmVyKGFwcCwgYXBwLnBhZ2VOdW1iZXJXaW5uZXIpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQod2lubmVyc0NvdW50ZXcpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQobnVtYmVyUGFnZSk7XHJcbiAgICB0aGlzLmFkZFBhZ2luYXRpb25CdXR0b25zKGFwcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUGFnZShhcHA6IEFwcCkge1xyXG4gICAgYXBwLndpbm5lcnNUYWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4gcm93LnJlbW92ZSgpKTtcclxuICAgIGNvbnN0IHRhYmxlID0gYXdhaXQgYXBwLndpbm5lcnNUYWJsZS5jcmVhdGUoYXBwLCBhcHAud2lubmVyc1RhYmxlU29ydCwgYXBwLndpbm5lcnNUYWJsZU9yZGVyKTtcclxuICAgIHRoaXMuc2V0V2lubmVyc0NvdW50ZXIoYXBwKTtcclxuICAgIHRoaXMuc2V0UGFnZU51bWJlcihhcHApO1xyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQodGFibGUpO1xyXG4gICAgaWYgKGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLnByZXYgJiYgYXBwLnBhZ2luYXRpb25CdXR0b25XaW5uZXIubmV4dCkge1xyXG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5wcmV2LnJlbW92ZSgpO1xyXG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5uZXh0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQodGhpcy5hZGRQYWdpbmF0aW9uQnV0dG9ucyhhcHApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUGFnZU51bWJlcihhcHA6IEFwcCwgbnVtOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRlci5jbGFzc05hbWUgPSAncGFnZS1jb3VudGVyJztcclxuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYFBhZ2UgIyR7bnVtfWA7XHJcbiAgICBhcHAucGFnZU51bWJlcldpbm5lckVsZW0gPSBjb3VudGVyO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UGFnZU51bWJlcihhcHA6IEFwcCkge1xyXG4gICAgYXBwLnBhZ2VOdW1iZXJXaW5uZXJFbGVtLmlubmVySFRNTCA9IGBQYWdlICMke2FwcC5wYWdlTnVtYmVyV2lubmVyfWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlV2lubmVyc0NvdW50ZXIoYXBwOiBBcHApOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRlci5jbGFzc05hbWUgPSAnY2Fycy1jb3VudGVyJztcclxuICAgIGFwcC5jb3VudGVyV2lubmVyID0gY291bnRlcjtcclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNldFdpbm5lcnNDb3VudGVyKGFwcDogQXBwKSB7XHJcbiAgICBjb25zdCB3aW5uZXJEYXRhID0gYXdhaXQgQXBpLmdldFdpbm5lcnMoKTtcclxuICAgIGFwcC5jb3VudGVyV2lubmVyLmlubmVySFRNTCA9IGBXaW5uZXJzKCR7d2lubmVyRGF0YS53aW5uZXJzLmxlbmd0aH0pYDtcclxuICAgIHRoaXMuc2V0UGFnaW5hdGlvbkJ1dHRvbnMoYXBwLCB3aW5uZXJEYXRhLndpbm5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnaW5hdGlvbi5jbGFzc05hbWUgPSAncGFnaW5hdGlvbic7XHJcbiAgICBjb25zdCBidXR0b25QcmV2ID0gQnV0dG9uLmNyZWF0ZSgnUHJldmlvdXMnLCBbJ3BhZ2luYXRpb25fX2J1dHRvbicsICdidXR0b25fYmx1ZSddLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRQcmV2UGFnZS5iaW5kKHRoaXMsIGFwcCkoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IEJ1dHRvbi5jcmVhdGUoJ05leHQnLCBbJ3BhZ2luYXRpb25fX2J1dHRvbicsICdidXR0b25fYmx1ZSddLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXROZXh0UGFnZS5iaW5kKHRoaXMsIGFwcCkoKTtcclxuICAgIH0pO1xyXG4gICAgYXBwLnBhZ2luYXRpb25CdXR0b25XaW5uZXIgPSB7IHByZXY6IGJ1dHRvblByZXYsIG5leHQ6IGJ1dHRvbk5leHQgfTtcclxuICAgIHBhZ2luYXRpb24uYXBwZW5kKGJ1dHRvblByZXYpO1xyXG4gICAgcGFnaW5hdGlvbi5hcHBlbmQoYnV0dG9uTmV4dCk7XHJcbiAgICByZXR1cm4gcGFnaW5hdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHA6IEFwcCwgd2lubmVyczogV2lubmVyW10pIHtcclxuICAgIGlmIChhcHAucGFnZU51bWJlcldpbm5lciA9PT0gMSkge1xyXG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5wcmV2LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLnByZXYuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChNYXRoLmNlaWwoTnVtYmVyKHdpbm5lcnMubGVuZ3RoKSAvIDEwKSA9PT0gYXBwLnBhZ2VOdW1iZXJXaW5uZXIgfHwgTnVtYmVyKHdpbm5lcnMubGVuZ3RoKSA9PT0gMCkge1xyXG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5uZXh0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLm5leHQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgY3JlYXROZXh0UGFnZShhcHA6IEFwcCkge1xyXG4gICAgYXBwLnBhZ2VOdW1iZXJXaW5uZXIgKz0gMTtcclxuICAgIGNvbnN0IHdpbm5lckRhdGEgPSBhd2FpdCBBcGkuZ2V0V2lubmVycygpO1xyXG4gICAgY29uc3Qgd2lubmVycyA9IHdpbm5lckRhdGEud2lubmVycztcclxuICAgIHRoaXMuc2V0UGFnaW5hdGlvbkJ1dHRvbnMoYXBwLCB3aW5uZXJzKTtcclxuICAgIHRoaXMudXBkYXRlUGFnZShhcHApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0UHJldlBhZ2UoYXBwOiBBcHApIHtcclxuICAgIGFwcC5wYWdlTnVtYmVyV2lubmVyIC09IDE7XHJcbiAgICBjb25zdCB3aW5uZXJEYXRhID0gYXdhaXQgQXBpLmdldFdpbm5lcnMoKTtcclxuICAgIGNvbnN0IHdpbm5lcnMgPSB3aW5uZXJEYXRhLndpbm5lcnM7XHJcbiAgICB0aGlzLnNldFBhZ2luYXRpb25CdXR0b25zKGFwcCwgd2lubmVycyk7XHJcbiAgICB0aGlzLnVwZGF0ZVBhZ2UoYXBwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbm5lcnNQYWdlVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAvYXBwJztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9