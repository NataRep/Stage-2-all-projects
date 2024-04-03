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
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/button/button.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AARA;EACE,kCAAA;EACA,yBAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;AAWF;AATE;EACE,kBAAA;AAWJ;AARE;EACE,mCAAA;EACA,oBAAA;AAUJ;AAPE;EACE,oCAAA;AASJ;AA7CE;EACE;IACE,8CAmCa;EAYjB;AACF;AA7CE;EACE,8CA+Be;AAgBnB;AAdE;EACE,mCAAA;AAgBJ;AAxDE;EACE;IACE,6CAuCa;EAmBjB;AACF;AAxDE;EACE,6CAmCe;AAuBnB;AApBE;EACE,kCAAA;AAsBJ;AAnEE;EACE;IACE,4CA6Ca;EAwBjB;AACF;AAnEE;EACE,4CAyCe;AA4BnB;AA1BE;EACE,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;AA4BJ;AAjFE;EACE;IACE,kCAuDa;EA4BjB;AACF;AAjFE;EACE,kCAmDe;AAgCnB;AA9BE;EACE,qCAAA;AAgCJ;AA5FE;EACE;IACE,8CA2Da;EAmCjB;AACF;AA5FE;EACE,8CAuDe;AAuCnB;AApCE;EACE,gBAAA;EACA,oCAAA;EACA,yBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,qBAAA;AAsCJ;AApCI;EACE;IACE,wCAAA;IACA,8CAAA;IACA,yBAAA;EAsCN;AACF;AApCI;EACE,wCAAA;EACA,8CAAA;EACA,yBAAA;AAsCN;AAnCI;EACE,8BAAA;EACA,yBAAA;AAqCN;AAlCI;EACE,gBAAA;EACA,mCAAA;EACA,wBAAA;EACA,oBAAA;AAoCN","sourcesContent":[":root {\n  --color-black: #252525;\n  --color-white: #e4e9e9;\n  --color-green: #a0bf3a;\n  --color-green-secondary: #8aaa1f;\n  --color-blue: #3292d4;\n  --color-blue-secondary: #287bb2;\n  --color-red: #e85152;\n  --color-red-secondary: #e33636;\n  --color-grey-light: #959ea3;\n  --color-grey: #444444;\n  --color-yellow: #e9be0f;\n  --color-yellow-secondary: #de9201;\n}\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\n\nbody {\n  background-color: var(--color-black);\n  //font-family: 'Sono', monospace;\n  font-family: 'Victor Mono', monospace;\n  color: var(--color-white);\n}\n","@import './../../utils/variables.scss';\n\n@mixin hover($colorHover) {\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background-color: $colorHover;\n    }\n  }\n  &:active {\n    background-color: $colorHover;\n  }\n}\n\n.button {\n  background-color: var(--color-red);\n  color: var(--color-black);\n  border: none;\n  border-radius: 0.35rem;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  font-size: 1rem;\n  font-style: italic;\n  line-height: 100%;\n  letter-spacing: 0.03rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 1rem;\n  transition: all 0.3s;\n\n  &:last-child {\n    margin-right: 0rem;\n  }\n\n  &:disabled {\n    background-color: var(--color-grey);\n    pointer-events: none;\n  }\n\n  &_green {\n    background-color: var(--color-green);\n    @include hover(var(--color-green-secondary));\n  }\n  &_blue {\n    background-color: var(--color-blue);\n    @include hover(var(--color-blue-secondary));\n  }\n\n  &_red {\n    background-color: var(--color-red);\n\n    @include hover(var(--color-red-secondary));\n  }\n  &_small {\n    border-radius: 0.35rem;\n    padding: 0.25rem 0.5rem;\n    font-weight: 600;\n    font-size: 0.75rem;\n  }\n\n  &_remove {\n    @include hover(var(--color-red));\n  }\n  &.selected {\n    background-color: var(--color-yellow);\n    @include hover(var(-color-yellow-secondary));\n  }\n\n  &_cars-control {\n    background: none;\n    border: solid 2px var(--color-green);\n    color: var(--color-green);\n    border-radius: 0.35rem;\n    padding: 0.5rem;\n    width: 2.25rem;\n    margin-right: 0.25rem;\n\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        background: var(--color-green-secondary);\n        border: solid 2px var(--color-green-secondary);\n        color: var(--color-black);\n      }\n    }\n    &:active {\n      background: var(--color-green-secondary);\n      border: solid 2px var(--color-green-secondary);\n      color: var(--color-black);\n    }\n\n    &.active {\n      background: var(--color-green);\n      color: var(--color-black);\n    }\n\n    &:disabled {\n      background: none;\n      border: solid 2px var(--color-grey);\n      color: var(--color-grey);\n      pointer-events: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/form/form.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AAnBA;EACE,YAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAsBF;AApBE;EACE,mBAAA;AAsBJ;AAnBE;EACE,oBAAA;EACA,oCAAA;EACA,oCAAA;EACA,eAAA;EACA,sBAAA;AAqBJ;AAnBE;EACE,kBAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,6EAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,oCAAA;EACA,sBAAA;EACA,eAAA;AAqBJ","sourcesContent":[":root {\n  --color-black: #252525;\n  --color-white: #e4e9e9;\n  --color-green: #a0bf3a;\n  --color-green-secondary: #8aaa1f;\n  --color-blue: #3292d4;\n  --color-blue-secondary: #287bb2;\n  --color-red: #e85152;\n  --color-red-secondary: #e33636;\n  --color-grey-light: #959ea3;\n  --color-grey: #444444;\n  --color-yellow: #e9be0f;\n  --color-yellow-secondary: #de9201;\n}\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\n\nbody {\n  background-color: var(--color-black);\n  //font-family: 'Sono', monospace;\n  font-family: 'Victor Mono', monospace;\n  color: var(--color-white);\n}\n","@import './../../utils/variables.scss';\n\n.form {\n  width: 24rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  &:last-child {\n    margin-bottom: 0rem;\n  }\n\n  .input_text {\n    margin-right: 0.5rem;\n    background-color: var(--color-white);\n    border: 1px solid var(--color-white);\n    height: 1.75rem;\n    border-radius: 0.25rem;\n  }\n  .input_color {\n    margin-right: 1rem;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url('./../../images/color.svg') no-repeat left 4px center;\n    padding-left: 1.75rem;\n    width: 4.5rem;\n    height: 2rem;\n    border: solid 2px var(--color-white);\n    border-radius: 0.35rem;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/components/race-row/race-row.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;AAAE;EACE,gBAAA;AAEJ;AACE;EACE,aAAA;EACA,qBAAA;EACA,sBAAA;AACJ;AAEE;EACE,kBAAA;AAAJ;AAEE;EACE,YAAA;EACA,aAAA;EACA,qBAAA;EACA,4CAAA;EACA,yDAAA;EACA,4BAAA;EACA,0CAAA;EACA,qBAAA;AAAJ;AACI;EATF;IAUI,0CAAA;EAEJ;AACF;AACE;EACE,sBAAA;EACA,kBAAA;AACJ;AAEI;EADF;IAEI,kBAAA;EACJ;AACF;AAEE;EACE,0BAAA;AAAJ;AACI;EAFF;IAGI,WAAA;EAEJ;AACF","sourcesContent":[".race-row {\n  margin-bottom: 1.25rem;\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &__top-row {\n    display: flex;\n    align-items: flex-end;\n    margin-bottom: 0.75rem;\n  }\n\n  &__top-buttons {\n    margin-right: 1rem;\n  }\n  &__track {\n    height: 3rem;\n    display: flex;\n    align-items: flex-end;\n    border-bottom: dashed 2px var(--color-white);\n    background-image: url('./../../images/flag.svg');\n    background-repeat: no-repeat;\n    background-position: right 90px bottom 3px;\n    background-size: auto;\n    @media (max-width: 768px) {\n      background-position: right 50px bottom 3px;\n    }\n  }\n\n  &__control-buttons {\n    align-self: flex-start;\n    margin-right: 1rem;\n  }\n  &__car-name {\n    @media (max-width: 768px) {\n      font-size: 0.75rem;\n    }\n  }\n\n  svg {\n    transform: translateX(0px);\n    @media (max-width: 768px) {\n      width: 60px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/utils/variables.scss","webpack://./src/components/winners-row/winner-row.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,gCAAA;EACA,qBAAA;EACA,+BAAA;EACA,oBAAA;EACA,8BAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,iCAAA;ACGF;;ADEA;EACE,oCAAA;EAEA,qCAAA;EACA,yBAAA;ACAF;;AAnBA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,oBAAA;EACA,gBAAA;AAsBF;AApBE;EACE;IACE,6BAAA;EAsBJ;AACF;AApBE;EACE,gBAAA;EACA,qBAAA;AAsBJ;AArBI;EACE,eAAA;AAuBN;AArBM;EACE,eAAA;AAuBR;AArBM;EACE,eAAA;AAuBR;AApBI;EACE;IACE,gBAAA;EAsBN;AACF;AAnBE;EACE,kBAAA;EACA,kBAAA;AAqBJ;AApBI;EACE,eAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AArBM;EACE,WAAA;AAuBR;AApBI;EACE,YAAA;AAsBN;AApBI;EACE,WAAA;AAsBN;AApBI;EACE,WAAA;AAsBN","sourcesContent":[":root {\n  --color-black: #252525;\n  --color-white: #e4e9e9;\n  --color-green: #a0bf3a;\n  --color-green-secondary: #8aaa1f;\n  --color-blue: #3292d4;\n  --color-blue-secondary: #287bb2;\n  --color-red: #e85152;\n  --color-red-secondary: #e33636;\n  --color-grey-light: #959ea3;\n  --color-grey: #444444;\n  --color-yellow: #e9be0f;\n  --color-yellow-secondary: #de9201;\n}\n@import url('https://fonts.googleapis.com/css2?family=Sono:wght@200..800&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');\n\nbody {\n  background-color: var(--color-black);\n  //font-family: 'Sono', monospace;\n  font-family: 'Victor Mono', monospace;\n  color: var(--color-white);\n}\n","@import './../../utils/variables.scss';\n\n.winner-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.25rem;\n  transition: all 0.5s;\n  padding: 0.25rem;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background: var(--color-grey);\n    }\n  }\n  &_header {\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n    .winner-row__cell {\n      font-size: 1rem;\n\n      &_wins {\n        cursor: pointer;\n      }\n      &_time {\n        cursor: pointer;\n      }\n    }\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        background: none;\n      }\n    }\n  }\n  &__cell {\n    margin-right: 1rem;\n    font-size: 0.75rem;\n    &:last-child() {\n      margin-right: 0;\n    }\n    &_number {\n      width: 1rem;\n    }\n    &_car {\n      width: 3rem;\n      svg {\n        width: 100%;\n      }\n    }\n    &_name {\n      width: 12rem;\n    }\n    &_wins {\n      width: 3rem;\n    }\n    &_time {\n      width: 6rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/components/winners-table/winner-table.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,mBAAA;AACF","sourcesContent":[".winners-table {\n  width: max-content;\n  margin-bottom: 2rem;\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/pages/garage.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;;AACA;EACE,kBAAA;AAEF;;AAAA;EACE,mBAAA;AAGF;;AADA;EACE,mBAAA;EACA,kBAAA;AAIF;;AAFA;EACE,mBAAA;AAKF;;AAHA;EACE,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;AAMF;;AAJA;EACE,oBAAA;EACA,yEAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AAOF;;AALA;EACE,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,iGAAA;EACA,qBAAA;EACA,4BAAA;EACA,8BAAA;AAQF;AANE;EAbF;IAcI,eAAA;EASF;AACF;;AAPA;EACE,qBAAA;EACA,kBAAA;AAUF","sourcesContent":[".form-wrapper {\n  margin: 0 0 2rem 0;\n}\n.button_reset.button_green {\n  margin-right: 2rem;\n}\n.tool-buttons {\n  margin-bottom: 3rem;\n}\n.cars-counter {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.race-table {\n  margin-bottom: 2rem;\n}\n.input__error {\n  position: absolute;\n  font-size: 0.75rem;\n  bottom: -1.25rem;\n  color: var(--color-red);\n}\n.download-massege {\n  padding-left: 2.5rem;\n  background: url('./../images/download.svg') no-repeat left center;\n  margin-top: 2rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.winner {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--color-red);\n  background: url('./../images/trophy-cup.svg') var(--color-white) no-repeat left 1rem center;\n  background-size: auto;\n  padding: 1rem 1rem 1rem 6rem;\n  box-shadow: 13px 11px 1px #000;\n\n  @media (max-width: 768px) {\n    font-size: 1rem;\n  }\n}\n.page-counter {\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n}\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/pages/page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;AACF;;AACA;EACE,mBAAA;AAEF","sourcesContent":[".main-content {\n  margin: auto;\n  max-width: 1280px;\n  padding: 1rem;\n}\nnav {\n  margin-bottom: 2rem;\n}\n"],"sourceRoot":""}]);
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
    Api.fetchWithOptions = function (url, options) {
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
                        return [4 /*yield*/, Api.fetchWithOptions(fullUrl, options)];
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/enums */ "./src/utils/enums.ts");
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
        this.state = new _state__WEBPACK_IMPORTED_MODULE_0__.State('', '#ffffff', '', '#ffffff');
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
                        this.winnersTableOrder = _utils_enums__WEBPACK_IMPORTED_MODULE_5__.OrderType.ASB;
                        this.winnersTableSort = _utils_enums__WEBPACK_IMPORTED_MODULE_5__.SortTypes.ID;
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
            var carsData, promises, result, winnerData, error_2, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isRace = true;
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getCars(this.pageNumberGarage, 7)];
                    case 1:
                        carsData = _b.sent();
                        promises = carsData.cars.map(function (car, index) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, this.startAndSwitchCar(car, index, this)];
                            });
                        }); });
                        //отключаю кнопки на время гонки
                        this.disableButtonsDuringRace();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 11, , 12]);
                        return [4 /*yield*/, Promise.any(promises)];
                    case 3:
                        result = _b.sent();
                        this.turnButtonsAfterRace();
                        this.showWinner(result.name, result.time);
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 10]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWinner(result.id)];
                    case 5:
                        winnerData = _b.sent();
                        if (winnerData.time > parseFloat(result.time)) {
                            _api__WEBPACK_IMPORTED_MODULE_1__["default"].updateWinner(result.id, winnerData.wins + 1, parseFloat(result.time));
                        }
                        else {
                            _api__WEBPACK_IMPORTED_MODULE_1__["default"].updateWinner(result.id, winnerData.wins + 1, winnerData.time);
                        }
                        return [3 /*break*/, 10];
                    case 6:
                        error_2 = _b.sent();
                        if (!(error_2.status = 404)) return [3 /*break*/, 8];
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_1__["default"].createWinner(result.id, 1, parseFloat(result.time))];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8: throw error_2;
                    case 9: return [3 /*break*/, 10];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        _a = _b.sent();
                        this.turnButtonsAfterRace();
                        this.showWinner('nobody', 'all cars are broken');
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
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
    function State(value1, color1, value2, color2) {
        this.inputCreateValue = value1;
        this.inputCreateColor = color1;
        this.inputUpdateValue = value2;
        this.inputUpdateColor = color2;
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
        var buttonB = _button_button__WEBPACK_IMPORTED_MODULE_0__["default"].create('B', ['race-row__button', 'button_reset', 'button_cars-control'], function () { });
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
        buttonB.addEventListener('click', function () {
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
                        buttons.forEach(function (elem) { return (elem.disabled = true); });
                        //отменяем выделение машины
                        document.body.addEventListener('click', function onClick(event) {
                            var target = event.target;
                            if (!target.closest('.form_update-car') || event.target === button) {
                                buttons.forEach(function (elem) {
                                    if (!elem.classList.contains('button_reset')) {
                                        elem.disabled = false;
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
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
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
                            var car = cars.find(function (item) { return item.id === winner.id; });
                            var name = car.name;
                            var color = car.color;
                            var wins = winner.wins;
                            var time = winner.time;
                            var row = app.pageNumberWinner === 1
                                ? _winners_row_winner_row__WEBPACK_IMPORTED_MODULE_2__["default"].create(index + 1, name, color, wins, time)
                                : _winners_row_winner_row__WEBPACK_IMPORTED_MODULE_2__["default"].create(index + (app.pageNumberWinner - 1) * 10, name, color, wins, time);
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
                    app.winnersTableSort = _utils_enums__WEBPACK_IMPORTED_MODULE_3__.SortTypes.WINS;
                }
                else if (button.innerHTML === 'Best time') {
                    app.winnersTableSort = _utils_enums__WEBPACK_IMPORTED_MODULE_3__.SortTypes.TIME;
                }
                if (app.winnersTableOrder === _utils_enums__WEBPACK_IMPORTED_MODULE_3__.OrderType.ASB) {
                    app.winnersTableOrder = _utils_enums__WEBPACK_IMPORTED_MODULE_3__.OrderType.DESC;
                }
                else
                    app.winnersTableOrder = _utils_enums__WEBPACK_IMPORTED_MODULE_3__.OrderType.ASB;
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
        var formUpdateCar = _components_form_form__WEBPACK_IMPORTED_MODULE_2__["default"].create(app.state.inputUpdateValue, app.state.inputUpdateColor, 'update-car', 'Update', ['button_update', 'button_blue'], function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
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

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderType: () => (/* binding */ OrderType),
/* harmony export */   SortTypes: () => (/* binding */ SortTypes)
/* harmony export */ });
var SortTypes;
(function (SortTypes) {
    SortTypes["ID"] = "id";
    SortTypes["WINS"] = "wins";
    SortTypes["TIME"] = "time";
})(SortTypes || (SortTypes = {}));
var OrderType;
(function (OrderType) {
    OrderType["ASB"] = "ASC";
    OrderType["DESC"] = "DESC";
})(OrderType || (OrderType = {}));


/***/ }),

/***/ "./src/images/color.svg":
/*!******************************!*\
  !*** ./src/images/color.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84ab5a0bfe035aff0b1f.svg";

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

module.exports = __webpack_require__.p + "098ca68f898408001c79.svg";

/***/ }),

/***/ "./src/images/trophy-cup.svg":
/*!***********************************!*\
  !*** ./src/images/trophy-cup.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ba1783e9c8f22e4b176.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lB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QUNiLDBCQUFhO0FBQ2YsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLHdCQUFXO0lBQ1gsMEJBQWE7QUFDZixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBRXJCLElBQU0sR0FBRyxHQUFHLElBQUksZ0RBQUcsRUFBRSxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL2Zvcm0vZm9ybS5zY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXJvdy9yYWNlLXJvdy5zY3NzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXJvdy93aW5uZXItcm93LnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9nYXJhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL3BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzcz8wY2M5Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0uc2Nzcz80YWU2Iiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXJvdy9yYWNlLXJvdy5zY3NzPzEzMGIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtcm93L3dpbm5lci1yb3cuc2Nzcz8zM2IyIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy93aW5uZXJzLXRhYmxlL3dpbm5lci10YWJsZS5zY3NzPzM4YjAiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9wYWdlcy9nYXJhZ2Uuc2Nzcz81NDllIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvcGFnZS5zY3NzP2Y1ODIiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL2FwcC9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9hcHAvYXBwLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvYXBwL3N0YXRlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvYXNzZXRzL2NhcnNNYWtlcnMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9hc3NldHMvY29sb3JzLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9jYXIvY2FyLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL25hdi9uYXYudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3JhY2Utcm93L3JhY2Utcm93LnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvY29tcG9uZW50cy9yYWNlLXRhYmxlLnRzL3JhY2UtdGFibGUudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtcm93L3dpbm5lci1yb3cudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvZ2FyYWdlLnRzIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvcGFnZXMvcGFnZS50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlLy4vc3JjL3BhZ2VzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS8uL3NyYy91dGlscy9lbnVtcy50cyIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLXB1enpsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc3MtcHV6emxlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jzcy1wdXp6bGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jzcy1wdXp6bGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb25vOndnaHRAMjAwLi44MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmljdG9yK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1jb2xvci1ibGFjazogIzI1MjUyNTtcbiAgLS1jb2xvci13aGl0ZTogI2U0ZTllOTtcbiAgLS1jb2xvci1ncmVlbjogI2EwYmYzYTtcbiAgLS1jb2xvci1ncmVlbi1zZWNvbmRhcnk6ICM4YWFhMWY7XG4gIC0tY29sb3ItYmx1ZTogIzMyOTJkNDtcbiAgLS1jb2xvci1ibHVlLXNlY29uZGFyeTogIzI4N2JiMjtcbiAgLS1jb2xvci1yZWQ6ICNlODUxNTI7XG4gIC0tY29sb3ItcmVkLXNlY29uZGFyeTogI2UzMzYzNjtcbiAgLS1jb2xvci1ncmV5LWxpZ2h0OiAjOTU5ZWEzO1xuICAtLWNvbG9yLWdyZXk6ICM0NDQ0NDQ7XG4gIC0tY29sb3IteWVsbG93OiAjZTliZTBmO1xuICAtLWNvbG9yLXllbGxvdy1zZWNvbmRhcnk6ICNkZTkyMDE7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIGZvbnQtZmFtaWx5OiBcIlZpY3RvciBNb25vXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5idXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHJlbTtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnV0dG9uX2dyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuYnV0dG9uX2dyZWVuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xuICB9XG59XG4uYnV0dG9uX2dyZWVuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XG59XG4uYnV0dG9uX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmJ1dHRvbl9ibHVlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLXNlY29uZGFyeSk7XG4gIH1cbn1cbi5idXR0b25fYmx1ZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLXNlY29uZGFyeSk7XG59XG4uYnV0dG9uX3JlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5idXR0b25fcmVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtc2Vjb25kYXJ5KTtcbiAgfVxufVxuLmJ1dHRvbl9yZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSk7XG59XG4uYnV0dG9uX3NtYWxsIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmJ1dHRvbl9yZW1vdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG4gIH1cbn1cbi5idXR0b25fcmVtb3ZlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmJ1dHRvbi5zZWxlY3RlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5KTtcbiAgfVxufVxuLmJ1dHRvbi5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLWNvbG9yLXllbGxvdy1zZWNvbmRhcnkpO1xufVxuLmJ1dHRvbl9jYXJzLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDIuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmJ1dHRvbl9jYXJzLWNvbnRyb2w6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICB9XG59XG4uYnV0dG9uX2NhcnMtY29udHJvbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xufVxuLmJ1dHRvbl9jYXJzLWNvbnRyb2wuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xufVxuLmJ1dHRvbl9jYXJzLWNvbnRyb2w6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91dGlscy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FDR0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUVBLHFDQUFBO0VBQ0EseUJBQUE7QUNBRjs7QUFSQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFXRjtBQVRFO0VBQ0Usa0JBQUE7QUFXSjtBQVJFO0VBQ0UsbUNBQUE7RUFDQSxvQkFBQTtBQVVKO0FBUEU7RUFDRSxvQ0FBQTtBQVNKO0FBN0NFO0VBQ0U7SUFDRSw4Q0FtQ2E7RUFZakI7QUFDRjtBQTdDRTtFQUNFLDhDQStCZTtBQWdCbkI7QUFkRTtFQUNFLG1DQUFBO0FBZ0JKO0FBeERFO0VBQ0U7SUFDRSw2Q0F1Q2E7RUFtQmpCO0FBQ0Y7QUF4REU7RUFDRSw2Q0FtQ2U7QUF1Qm5CO0FBcEJFO0VBQ0Usa0NBQUE7QUFzQko7QUFuRUU7RUFDRTtJQUNFLDRDQTZDYTtFQXdCakI7QUFDRjtBQW5FRTtFQUNFLDRDQXlDZTtBQTRCbkI7QUExQkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTRCSjtBQWpGRTtFQUNFO0lBQ0Usa0NBdURhO0VBNEJqQjtBQUNGO0FBakZFO0VBQ0Usa0NBbURlO0FBZ0NuQjtBQTlCRTtFQUNFLHFDQUFBO0FBZ0NKO0FBNUZFO0VBQ0U7SUFDRSw4Q0EyRGE7RUFtQ2pCO0FBQ0Y7QUE1RkU7RUFDRSw4Q0F1RGU7QUF1Q25CO0FBcENFO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBc0NKO0FBcENJO0VBQ0U7SUFDRSx3Q0FBQTtJQUNBLDhDQUFBO0lBQ0EseUJBQUE7RUFzQ047QUFDRjtBQXBDSTtFQUNFLHdDQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXNDTjtBQW5DSTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUFxQ047QUFsQ0k7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQW9DTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLWJsYWNrOiAjMjUyNTI1O1xcbiAgLS1jb2xvci13aGl0ZTogI2U0ZTllOTtcXG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XFxuICAtLWNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzhhYWExZjtcXG4gIC0tY29sb3ItYmx1ZTogIzMyOTJkNDtcXG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XFxuICAtLWNvbG9yLXJlZDogI2U4NTE1MjtcXG4gIC0tY29sb3ItcmVkLXNlY29uZGFyeTogI2UzMzYzNjtcXG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcXG4gIC0tY29sb3ItZ3JleTogIzQ0NDQ0NDtcXG4gIC0tY29sb3IteWVsbG93OiAjZTliZTBmO1xcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xcbn1cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb25vOndnaHRAMjAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmljdG9yK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIC8vZm9udC1mYW1pbHk6ICdTb25vJywgbW9ub3NwYWNlO1xcbiAgZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblwiLFwiQGltcG9ydCAnLi8uLi8uLi91dGlscy92YXJpYWJsZXMuc2Nzcyc7XFxuXFxuQG1peGluIGhvdmVyKCRjb2xvckhvdmVyKSB7XFxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckhvdmVyO1xcbiAgICB9XFxuICB9XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckhvdmVyO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAmOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW07XFxuICB9XFxuXFxuICAmOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgJl9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgQGluY2x1ZGUgaG92ZXIodmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KSk7XFxuICB9XFxuICAmX2JsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gICAgQGluY2x1ZGUgaG92ZXIodmFyKC0tY29sb3ItYmx1ZS1zZWNvbmRhcnkpKTtcXG4gIH1cXG5cXG4gICZfcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG5cXG4gICAgQGluY2x1ZGUgaG92ZXIodmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSkpO1xcbiAgfVxcbiAgJl9zbWFsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICB9XFxuXFxuICAmX3JlbW92ZSB7XFxuICAgIEBpbmNsdWRlIGhvdmVyKHZhcigtLWNvbG9yLXJlZCkpO1xcbiAgfVxcbiAgJi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XFxuICAgIEBpbmNsdWRlIGhvdmVyKHZhcigtY29sb3IteWVsbG93LXNlY29uZGFyeSkpO1xcbiAgfVxcblxcbiAgJl9jYXJzLWNvbnRyb2wge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDIuMjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG5cXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWdyZWVuLXNlY29uZGFyeSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5KTtcXG4gICAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1ncmVlbi1zZWNvbmRhcnkpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxuICAgIH1cXG5cXG4gICAgJi5hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgICB9XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9pbWFnZXMvY29sb3Iuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb25vOndnaHRAMjAwLi44MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmljdG9yK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItYmxhY2s6ICMyNTI1MjU7XG4gIC0tY29sb3Itd2hpdGU6ICNlNGU5ZTk7XG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XG4gIC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjOGFhYTFmO1xuICAtLWNvbG9yLWJsdWU6ICMzMjkyZDQ7XG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XG4gIC0tY29sb3ItcmVkOiAjZTg1MTUyO1xuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICNlMzM2MzY7XG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcbiAgLS1jb2xvci1ncmV5OiAjNDQ0NDQ0O1xuICAtLWNvbG9yLXllbGxvdzogI2U5YmUwZjtcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBmb250LWZhbWlseTogXCJWaWN0b3IgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDI0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuLmZvcm0gLmlucHV0X3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGhlaWdodDogMS43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5mb3JtIC5pbnB1dF9jb2xvciB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgbGVmdCA0cHggY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3Itd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdXRpbHMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvcm0vZm9ybS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FDR0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUVBLHFDQUFBO0VBQ0EseUJBQUE7QUNBRjs7QUFuQkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXNCRjtBQXBCRTtFQUNFLG1CQUFBO0FBc0JKO0FBbkJFO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBcUJKO0FBbkJFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2RUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQXFCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLWJsYWNrOiAjMjUyNTI1O1xcbiAgLS1jb2xvci13aGl0ZTogI2U0ZTllOTtcXG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XFxuICAtLWNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzhhYWExZjtcXG4gIC0tY29sb3ItYmx1ZTogIzMyOTJkNDtcXG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XFxuICAtLWNvbG9yLXJlZDogI2U4NTE1MjtcXG4gIC0tY29sb3ItcmVkLXNlY29uZGFyeTogI2UzMzYzNjtcXG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcXG4gIC0tY29sb3ItZ3JleTogIzQ0NDQ0NDtcXG4gIC0tY29sb3IteWVsbG93OiAjZTliZTBmO1xcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xcbn1cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb25vOndnaHRAMjAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmljdG9yK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gIC8vZm9udC1mYW1pbHk6ICdTb25vJywgbW9ub3NwYWNlO1xcbiAgZm9udC1mYW1pbHk6ICdWaWN0b3IgTW9ubycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblwiLFwiQGltcG9ydCAnLi8uLi8uLi91dGlscy92YXJpYWJsZXMuc2Nzcyc7XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IDI0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAmOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbiAgfVxcblxcbiAgLmlucHV0X3RleHQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIH1cXG4gIC5pbnB1dF9jb2xvciB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9pbWFnZXMvY29sb3Iuc3ZnJykgbm8tcmVwZWF0IGxlZnQgNHB4IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xcbiAgICB3aWR0aDogNC41cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vaW1hZ2VzL2ZsYWcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucmFjZS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLnJhY2Utcm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnJhY2Utcm93X190b3Atcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLnJhY2Utcm93X190b3AtYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5yYWNlLXJvd19fdHJhY2sge1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDJweCB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOTBweCBib3R0b20gM3B4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJhY2Utcm93X190cmFjayB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgNTBweCBib3R0b20gM3B4O1xuICB9XG59XG4ucmFjZS1yb3dfX2NvbnRyb2wtYnV0dG9ucyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmFjZS1yb3dfX2Nhci1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5yYWNlLXJvdyBzdmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmFjZS1yb3cgc3ZnIHtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcmFjZS1yb3cvcmFjZS1yb3cuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FBQUo7QUFDSTtFQVRGO0lBVUksMENBQUE7RUFFSjtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFSTtFQURGO0lBRUksa0JBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSwwQkFBQTtBQUFKO0FBQ0k7RUFGRjtJQUdJLFdBQUE7RUFFSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yYWNlLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gICZfX3RvcC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICB9XFxuXFxuICAmX190b3AtYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG4gICZfX3RyYWNrIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAycHggdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vaW1hZ2VzL2ZsYWcuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDkwcHggYm90dG9tIDNweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA1MHB4IGJvdHRvbSAzcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2NvbnRyb2wtYnV0dG9ucyB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG4gICZfX2Nhci1uYW1lIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBzdmcge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29ubzp3Z2h0QDIwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZpY3RvcitNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29sb3ItYmxhY2s6ICMyNTI1MjU7XG4gIC0tY29sb3Itd2hpdGU6ICNlNGU5ZTk7XG4gIC0tY29sb3ItZ3JlZW46ICNhMGJmM2E7XG4gIC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjOGFhYTFmO1xuICAtLWNvbG9yLWJsdWU6ICMzMjkyZDQ7XG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyODdiYjI7XG4gIC0tY29sb3ItcmVkOiAjZTg1MTUyO1xuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICNlMzM2MzY7XG4gIC0tY29sb3ItZ3JleS1saWdodDogIzk1OWVhMztcbiAgLS1jb2xvci1ncmV5OiAjNDQ0NDQ0O1xuICAtLWNvbG9yLXllbGxvdzogI2U5YmUwZjtcbiAgLS1jb2xvci15ZWxsb3ctc2Vjb25kYXJ5OiAjZGU5MjAxO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBmb250LWZhbWlseTogXCJWaWN0b3IgTW9ub1wiLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbi53aW5uZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC53aW5uZXItcm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgfVxufVxuLndpbm5lci1yb3dfaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLndpbm5lci1yb3dfaGVhZGVyIC53aW5uZXItcm93X19jZWxsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLndpbm5lci1yb3dfaGVhZGVyIC53aW5uZXItcm93X19jZWxsX3dpbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2lubmVyLXJvd19oZWFkZXIgLndpbm5lci1yb3dfX2NlbGxfdGltZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLndpbm5lci1yb3dfaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG4ud2lubmVyLXJvd19fY2VsbCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLndpbm5lci1yb3dfX2NlbGw6bGFzdC1jaGlsZCgpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLndpbm5lci1yb3dfX2NlbGxfbnVtYmVyIHtcbiAgd2lkdGg6IDFyZW07XG59XG4ud2lubmVyLXJvd19fY2VsbF9jYXIge1xuICB3aWR0aDogM3JlbTtcbn1cbi53aW5uZXItcm93X19jZWxsX2NhciBzdmcge1xuICB3aWR0aDogMTAwJTtcbn1cbi53aW5uZXItcm93X19jZWxsX25hbWUge1xuICB3aWR0aDogMTJyZW07XG59XG4ud2lubmVyLXJvd19fY2VsbF93aW5zIHtcbiAgd2lkdGg6IDNyZW07XG59XG4ud2lubmVyLXJvd19fY2VsbF90aW1lIHtcbiAgd2lkdGg6IDZyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdXRpbHMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtcm93L3dpbm5lci1yb3cuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQ0dGOztBREVBO0VBQ0Usb0NBQUE7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FBbkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBc0JGO0FBcEJFO0VBQ0U7SUFDRSw2QkFBQTtFQXNCSjtBQUNGO0FBcEJFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQXNCSjtBQXJCSTtFQUNFLGVBQUE7QUF1Qk47QUFyQk07RUFDRSxlQUFBO0FBdUJSO0FBckJNO0VBQ0UsZUFBQTtBQXVCUjtBQXBCSTtFQUNFO0lBQ0UsZ0JBQUE7RUFzQk47QUFDRjtBQW5CRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFxQko7QUFwQkk7RUFDRSxlQUFBO0FBc0JOO0FBcEJJO0VBQ0UsV0FBQTtBQXNCTjtBQXBCSTtFQUNFLFdBQUE7QUFzQk47QUFyQk07RUFDRSxXQUFBO0FBdUJSO0FBcEJJO0VBQ0UsWUFBQTtBQXNCTjtBQXBCSTtFQUNFLFdBQUE7QUFzQk47QUFwQkk7RUFDRSxXQUFBO0FBc0JOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItYmxhY2s6ICMyNTI1MjU7XFxuICAtLWNvbG9yLXdoaXRlOiAjZTRlOWU5O1xcbiAgLS1jb2xvci1ncmVlbjogI2EwYmYzYTtcXG4gIC0tY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjOGFhYTFmO1xcbiAgLS1jb2xvci1ibHVlOiAjMzI5MmQ0O1xcbiAgLS1jb2xvci1ibHVlLXNlY29uZGFyeTogIzI4N2JiMjtcXG4gIC0tY29sb3ItcmVkOiAjZTg1MTUyO1xcbiAgLS1jb2xvci1yZWQtc2Vjb25kYXJ5OiAjZTMzNjM2O1xcbiAgLS1jb2xvci1ncmV5LWxpZ2h0OiAjOTU5ZWEzO1xcbiAgLS1jb2xvci1ncmV5OiAjNDQ0NDQ0O1xcbiAgLS1jb2xvci15ZWxsb3c6ICNlOWJlMGY7XFxuICAtLWNvbG9yLXllbGxvdy1zZWNvbmRhcnk6ICNkZTkyMDE7XFxufVxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvbm86d2dodEAyMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WaWN0b3IrTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcbiAgLy9mb250LWZhbWlseTogJ1Nvbm8nLCBtb25vc3BhY2U7XFxuICBmb250LWZhbWlseTogJ1ZpY3RvciBNb25vJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG59XFxuXCIsXCJAaW1wb3J0ICcuLy4uLy4uL3V0aWxzL3ZhcmlhYmxlcy5zY3NzJztcXG5cXG4ud2lubmVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuXFxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICB9XFxuICB9XFxuICAmX2hlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgLndpbm5lci1yb3dfX2NlbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICAgICAmX3dpbnMge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgICAmX3RpbWUge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgJl9fY2VsbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICAmOmxhc3QtY2hpbGQoKSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB9XFxuICAgICZfbnVtYmVyIHtcXG4gICAgICB3aWR0aDogMXJlbTtcXG4gICAgfVxcbiAgICAmX2NhciB7XFxuICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmX25hbWUge1xcbiAgICAgIHdpZHRoOiAxMnJlbTtcXG4gICAgfVxcbiAgICAmX3dpbnMge1xcbiAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICB9XFxuICAgICZfdGltZSB7XFxuICAgICAgd2lkdGg6IDZyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2lubmVycy10YWJsZSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3dpbm5lcnMtdGFibGUvd2lubmVyLXRhYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpbm5lcnMtdGFibGUge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2ltYWdlcy9kb3dubG9hZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2ltYWdlcy90cm9waHktY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb3JtLXdyYXBwZXIge1xuICBtYXJnaW46IDAgMCAycmVtIDA7XG59XG5cbi5idXR0b25fcmVzZXQuYnV0dG9uX2dyZWVuIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4udG9vbC1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmNhcnMtY291bnRlciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnJhY2UtdGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaW5wdXRfX2Vycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJvdHRvbTogLTEuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuXG4uZG93bmxvYWQtbWFzc2VnZSB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLndpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSB2YXIoLS1jb2xvci13aGl0ZSkgbm8tcmVwZWF0IGxlZnQgMXJlbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gNnJlbTtcbiAgYm94LXNoYWRvdzogMTNweCAxMXB4IDFweCAjMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53aW5uZXIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4ucGFnZS1jb3VudGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZ2FyYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLG9CQUFBO0VBQ0EseUVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpR0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtBQVFGO0FBTkU7RUFiRjtJQWNJLGVBQUE7RUFTRjtBQUNGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQVVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xcbn1cXG4uYnV0dG9uX3Jlc2V0LmJ1dHRvbl9ncmVlbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi50b29sLWJ1dHRvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuLmNhcnMtY291bnRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ucmFjZS10YWJsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uaW5wdXRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGJvdHRvbTogLTEuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG59XFxuLmRvd25sb2FkLW1hc3NlZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vaW1hZ2VzL2Rvd25sb2FkLnN2ZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi53aW5uZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9pbWFnZXMvdHJvcGh5LWN1cC5zdmcnKSB2YXIoLS1jb2xvci13aGl0ZSkgbm8tcmVwZWF0IGxlZnQgMXJlbSBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSA2cmVtO1xcbiAgYm94LXNoYWRvdzogMTNweCAxMXB4IDFweCAjMDAwO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuLnBhZ2UtY291bnRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4tY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvcGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxubmF2IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9idXR0b24uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vYnV0dG9uLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vZm9ybS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9mb3JtLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vcmFjZS1yb3cuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vcmFjZS1yb3cuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi93aW5uZXItcm93LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3dpbm5lci1yb3cuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi93aW5uZXItdGFibGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vd2lubmVyLXRhYmxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vZ2FyYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2dhcmFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3BhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vcGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDYXIsIENhcnNEYXRhLCBTcGVlZENhciwgV2lubmVyLCBXaW5uZXJzIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbmNvbnN0IFBPUlQgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcbmNsYXNzIEFwaSB7XG4gIHN0YXRpYyBhc3luYyBmZXRjaFdpdGhPcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBIVFRQOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENhcihpZDogbnVtYmVyKTogUHJvbWlzZTxDYXI+IHtcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL2dhcmFnZS8nO1xuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIENhcjtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDYXJzKHBhZ2U/OiBudW1iZXIsIGxpbWl0PzogbnVtYmVyKTogUHJvbWlzZTxDYXJzRGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZ2FyYWdlLyc7XG4gICAgbGV0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsO1xuICAgIGlmIChwYWdlIHx8IGxpbWl0KSBmdWxsVXJsID0gZnVsbFVybCArICc/JztcbiAgICBpZiAocGFnZSkgZnVsbFVybCA9IGZ1bGxVcmwgKyAnX3BhZ2U9JyArIFN0cmluZyhwYWdlKTtcbiAgICBpZiAobGltaXQpIGZ1bGxVcmwgPSBwYWdlID8gZnVsbFVybCArICcmX2xpbWl0PScgKyBTdHJpbmcobGltaXQpIDogZnVsbFVybCArICdfbGltaXQ9JyArIFN0cmluZyhsaW1pdCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmdWxsVXJsLCBvcHRpb25zKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBDYXJbXTtcbiAgICAgIHJldHVybiB7IGNhcnM6IGRhdGEsIHRvdGFsQ291bnQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVDYXIobmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogUHJvbWlzZTxDYXI+IHtcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL2dhcmFnZSc7XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmw7XG4gICAgY29uc3QgY2FyRGF0YSA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgfTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyRGF0YSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFwaS5mZXRjaFdpdGhPcHRpb25zKGZ1bGxVcmwsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBDYXI7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZGVsZXRlQ2FyKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL2dhcmFnZS8nO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH07XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyBTdHJpbmcoaWQpO1xuICAgIGF3YWl0IEFwaS5mZXRjaFdpdGhPcHRpb25zKGZ1bGxVcmwsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBQcm9taXNlPENhcj4ge1xuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZ2FyYWdlLyc7XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyBTdHJpbmcoaWQpO1xuICAgIGNvbnN0IGNhckRhdGEgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgY29sb3I6IGNvbG9yLFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyRGF0YSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFwaS5mZXRjaFdpdGhPcHRpb25zKGZ1bGxVcmwsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBDYXI7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc3RhcnRPclN0b3BDYXIoaWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpIHtcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL2VuZ2luZSc7XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyAnP2lkPScgKyBTdHJpbmcoaWQpICsgJyZzdGF0dXM9JyArIHN0YXR1cztcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFwaS5mZXRjaFdpdGhPcHRpb25zKGZ1bGxVcmwsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBTcGVlZENhcjtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBzd2l0Y2hDYXJUb0RyaXZlTW9kZShpZDogbnVtYmVyLCBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcikge1xuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvZW5naW5lJztcbiAgICBjb25zdCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybCArICc/aWQ9JyArIFN0cmluZyhpZCkgKyAnJnN0YXR1cz0nICsgJ2RyaXZlJztcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmdWxsVXJsLCBvcHRpb25zKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRW5naW5lIHBhcmFtZXRlcnMgZm9yIGNhciB3aXRoIHN1Y2ggaWQgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZ2FyYWdlLicpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJpdmUgYWxyZWFkeSBpbiBwcm9ncmVzcy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDQntGI0LjQsdC60LAsINC/0YDQvtC80LjRgSDQvtGC0LrQu9C+0L3QtdC9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXM6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vINCe0YjQuNCx0LrQsCwg0L/RgNC+0LzQuNGBINC+0YLQutC70L7QvdC10L1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRXaW5uZXJzKFxuICAgIHBhZ2U/OiBudW1iZXIsXG4gICAgbGltaXQ/OiBudW1iZXIsXG4gICAgc29ydD86ICdpZCcgfCAnd2lucycgfCAndGltZScsXG4gICAgb3JkZXI/OiAnQVNDJyB8ICdERVNDJ1xuICApOiBQcm9taXNlPFdpbm5lcnMgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwYXRoVXJsOiBzdHJpbmcgPSAnL3dpbm5lcnMnO1xuICAgIGxldCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybDtcbiAgICBpZiAocGFnZSB8fCBsaW1pdCB8fCBzb3J0IHx8IG9yZGVyKSBmdWxsVXJsICs9ICc/JztcbiAgICBpZiAocGFnZSkgZnVsbFVybCArPSBgX3BhZ2U9JHtwYWdlfSZgO1xuICAgIGlmIChsaW1pdCkgZnVsbFVybCArPSBgX2xpbWl0PSR7bGltaXR9JmA7XG4gICAgaWYgKHNvcnQpIGZ1bGxVcmwgKz0gYF9zb3J0PSR7c29ydH0mYDtcbiAgICBpZiAob3JkZXIpIGZ1bGxVcmwgKz0gYF9vcmRlcj0ke29yZGVyfWA7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmdWxsVXJsLCBvcHRpb25zKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBXaW5uZXJbXTtcbiAgICAgIHJldHVybiB7IHdpbm5lcnM6IGRhdGEsIHRvdGFsQ291bnQgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRXaW5uZXIoaWQ6IG51bWJlcik6IFByb21pc2U8V2lubmVyPiB7XG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy93aW5uZXJzLyc7XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyBTdHJpbmcoaWQpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgV2lubmVyO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcik6IFByb21pc2U8V2lubmVyPiB7XG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy93aW5uZXJzJztcbiAgICBjb25zdCBmdWxsVXJsOiBzdHJpbmcgPSBQT1JUICsgcGF0aFVybDtcbiAgICBjb25zdCB3aW5uZXJEYXRhOiBXaW5uZXIgPSB7XG4gICAgICBpZDogaWQsXG4gICAgICB3aW5zOiB3aW5zLFxuICAgICAgdGltZTogdGltZSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3aW5uZXJEYXRhKSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFdpbm5lcjtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkZWxldGVXaW5uZXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhdGhVcmw6IHN0cmluZyA9ICcvd2lubmVycy8nO1xuICAgIGNvbnN0IGZ1bGxVcmw6IHN0cmluZyA9IFBPUlQgKyBwYXRoVXJsICsgU3RyaW5nKGlkKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBBcGkuZmV0Y2hXaXRoT3B0aW9ucyhmdWxsVXJsLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVdpbm5lcihpZDogbnVtYmVyLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcik6IFByb21pc2U8V2lubmVyPiB7XG4gICAgY29uc3QgcGF0aFVybDogc3RyaW5nID0gJy93aW5uZXJzLyc7XG4gICAgY29uc3QgZnVsbFVybDogc3RyaW5nID0gUE9SVCArIHBhdGhVcmwgKyBTdHJpbmcoaWQpO1xuICAgIGNvbnN0IHdpbm5lckRhdGEgPSB7XG4gICAgICB3aW5zOiB3aW5zLFxuICAgICAgdGltZTogdGltZSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdpbm5lckRhdGEpLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQXBpLmZldGNoV2l0aE9wdGlvbnMoZnVsbFVybCwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgV2lubmVyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwaTtcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgQXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCBHYXJhZ2VQYWdlVmlldyBmcm9tICcuLi9wYWdlcy9nYXJhZ2UnO1xuaW1wb3J0IFdpbm5lcnNQYWdlVmlldyBmcm9tICcuLi9wYWdlcy93aW5uZXJzJztcbmltcG9ydCBSYWNlVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9yYWNlLXRhYmxlLnRzL3JhY2UtdGFibGUnO1xuaW1wb3J0IHsgQ2FyLCBDYXJzRGF0YSwgRmluaXNoZXIsIFBhZ2luYXRpb25CdXR0b25zLCBTcGVlZENhciB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IFdpbm5lclRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvd2lubmVycy10YWJsZS93aW5uZXItdGFibGUnO1xuaW1wb3J0IHsgT3JkZXIsIFNvcnRpbmcgfSBmcm9tICcuLi91dGlscy90eXBlJztcbmltcG9ydCB7IE9yZGVyVHlwZSwgU29ydFR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuXG5jbGFzcyBBcHAge1xuICBzdGF0ZTogU3RhdGU7XG5cbiAgcmFjZTogYm9vbGVhbjtcblxuICBjYXJzRWxlbWVudHM6IEhUTUxFbGVtZW50W107XG5cbiAgcGFnZUdhcmFnZTogR2FyYWdlUGFnZVZpZXc7XG5cbiAgcGFnZVdpbm5lcnM6IFdpbm5lcnNQYWdlVmlldztcblxuICByYWNlVGFibGU6IFJhY2VUYWJsZTtcblxuICB3aW5uZXJzVGFibGU6IFdpbm5lclRhYmxlO1xuXG4gIHdpbm5lcnNUYWJsZVNvcnQ6IFNvcnRpbmc7XG5cbiAgd2lubmVyc1RhYmxlT3JkZXI6IE9yZGVyO1xuXG4gIGNvdW50ZXJHYXJhZ2U6IEhUTUxFbGVtZW50O1xuXG4gIGNvdW50ZXJXaW5uZXI6IEhUTUxFbGVtZW50O1xuXG4gIHBhZ2VOdW1iZXJHYXJhZ2U6IG51bWJlcjtcblxuICBwYWdlTnVtYmVyV2lubmVyOiBudW1iZXI7XG5cbiAgcGFnZU51bWJlckdhcmFnZUVsZW06IEhUTUxFbGVtZW50O1xuXG4gIHBhZ2VOdW1iZXJXaW5uZXJFbGVtOiBIVE1MRWxlbWVudDtcblxuICBwYWdpbmF0aW9uQnV0dG9uR2FyYWdlOiBQYWdpbmF0aW9uQnV0dG9ucztcblxuICBwYWdpbmF0aW9uQnV0dG9uV2lubmVyOiBQYWdpbmF0aW9uQnV0dG9ucztcblxuICBmb3JtVXBkYXRlQ2FyOiBIVE1MRWxlbWVudDtcblxuICBmb3JtQ3JlYXRlQ2FyOiBIVE1MRWxlbWVudDtcblxuICBzZWxlY3RlZENhcklkOiBudW1iZXI7XG5cbiAgc2VsZWN0ZWRDYXJOYW1lOiBIVE1MRWxlbWVudDtcblxuICBzZWxlY3RlZENhclNWRzogU1ZHRWxlbWVudDtcblxuICBidXR0b25HZW5lcmF0ZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgYnV0dG9uUmFjZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgYnV0dG9uUmVzZXQ6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGlzUmFjZTogYm9vbGVhbjtcblxuICBhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcblxuICB3aW5uZXJNZXNzYWdlOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKCcnLCAnI2ZmZmZmZicsICcnLCAnI2ZmZmZmZicpO1xuICAgIHRoaXMucmFjZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuICAgIHRoaXMucGFnZUdhcmFnZSA9IG5ldyBHYXJhZ2VQYWdlVmlldyh0aGlzKTtcbiAgICB0aGlzLnBhZ2VXaW5uZXJzID0gbmV3IFdpbm5lcnNQYWdlVmlldyh0aGlzKTtcbiAgICB0aGlzLndpbm5lcnNUYWJsZU9yZGVyID0gT3JkZXJUeXBlLkFTQjtcbiAgICB0aGlzLndpbm5lcnNUYWJsZVNvcnQgPSBTb3J0VHlwZXMuSUQ7XG4gICAgdGhpcy5wYWdlR2FyYWdlLnJlbmRlcigpO1xuICAgIHRoaXMucmFjZVRhYmxlID0gbmV3IFJhY2VUYWJsZSgpO1xuICAgIHRoaXMucGFnZU51bWJlckdhcmFnZSA9IDE7XG4gICAgdGhpcy5wYWdlTnVtYmVyV2lubmVyID0gMTtcbiAgICB0aGlzLmlzUmFjZSA9IGZhbHNlO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IGNhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoMSwgNyk7XG4gICAgaWYgKGNhcnNEYXRhLnRvdGFsQ291bnQpIHtcbiAgICAgIHRoaXMucGFnZUdhcmFnZS5jcmVhdGVDYXJzQ291bnRlcih0aGlzLCBwYXJzZUludChjYXJzRGF0YS50b3RhbENvdW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFnZUdhcmFnZS5jcmVhdGVDYXJzQ291bnRlcih0aGlzLCBjYXJzRGF0YS5jYXJzLmxlbmd0aCk7XG4gICAgfVxuICAgIHRoaXMucGFnZUdhcmFnZS5jcmVhdGVQYWdlQ291bnRlcih0aGlzLCB0aGlzLnBhZ2VOdW1iZXJHYXJhZ2UpO1xuICAgIGNvbnN0IHJhY2VUYWJsZSA9IHRoaXMucGFnZUdhcmFnZS5jcmVhdGVSYWNlVGFibGUodGhpcywgY2Fyc0RhdGEuY2Fycyk7XG4gICAgdGhpcy5wYWdlR2FyYWdlLm1haW5Db250ZW50LmFwcGVuZChyYWNlVGFibGUpO1xuICAgIHRoaXMucGFnZUdhcmFnZS5hZGRQYWdpbmF0aW9uQnV0dG9ucyh0aGlzKTtcbiAgICB0aGlzLnBhZ2VHYXJhZ2Uuc2V0UGFnaW5hdGlvbkJ1dHRvbnModGhpcywgY2Fyc0RhdGEpO1xuICAgIHRoaXMuYnV0dG9uUmVzZXQuY2xpY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydENhckFuaW1hdGlvbihjYXI6IFNWR0VsZW1lbnQsIHRpbWU6IG51bWJlciwgaXNNb3Zpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0cmFjayA9IHRoaXMucmFjZVRhYmxlLnJvd3NbMF0ucXVlcnlTZWxlY3RvcignLnJhY2Utcm93X190cmFjaycpIGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoaXNNb3ZpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IGdldENvbXB1dGVkU3R5bGUoY2FyKS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gcGFyc2VGbG9hdChjdXJyZW50VHJhbnNmb3JtLnNwbGl0KCcsJylbNF0pO1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRyYWNrLmNsaWVudFdpZHRoIC8gdGltZTtcbiAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGN1cnJlbnRUcmFuc2xhdGVYICsgc3BlZWQ7XG4gICAgICAgIGNvbnN0IHJpZ3RoUGFkZGluZyA9IDE2O1xuICAgICAgICBpZiAobmV3VHJhbnNsYXRlWCA+IHRyYWNrLmNsaWVudFdpZHRoIC0gY2FyLmNsaWVudFdpZHRoICogMiAtIHJpZ3RoUGFkZGluZykge1xuICAgICAgICAgIGNhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYWNrLmNsaWVudFdpZHRoIC0gY2FyLmNsaWVudFdpZHRoICogMiAtIDE2fXB4KWA7XG4gICAgICAgICAgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdUcmFuc2xhdGVYfXB4KWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc3RvcENhcihpZDogbnVtYmVyLCBidXR0b25BOiBIVE1MQnV0dG9uRWxlbWVudCwgYnV0dG9uQjogSFRNTEJ1dHRvbkVsZW1lbnQsIGNhcjogU1ZHRWxlbWVudCkge1xuICAgIGJ1dHRvbkEuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b25CLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhd2FpdCBBcGkuc3RhcnRPclN0b3BDYXIoaWQsICdzdG9wcGVkJyk7XG4gICAgY2FyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0QW5kU3dpdGNoQ2FyKGNhcjogQ2FyLCBpbmRleDogbnVtYmVyLCBhcHA6IEFwcCk6IFByb21pc2U8RmluaXNoZXI+IHtcbiAgICBsZXQgaW50ZXJ2YWw6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPjtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhcnRSZXNwb25zZSA9IChhd2FpdCBBcGkuc3RhcnRPclN0b3BDYXIoY2FyLmlkLCAnc3RhcnRlZCcpKSBhcyBTcGVlZENhcjtcbiAgICAgICAgLy/RgtGD0YIg0L3QsNGH0LjQvdCw0LXQvCDQsNC90LjQvNCw0YbQuNGOXG4gICAgICAgIGNvbnN0IGlzTW92aW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2FyU1ZHID0gYXBwLnJhY2VUYWJsZS5yb3dzW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBhcHAuc3RhcnRDYXJBbmltYXRpb24oY2FyU1ZHLCBzdGFydFJlc3BvbnNlLmRpc3RhbmNlIC8gc3RhcnRSZXNwb25zZS52ZWxvY2l0eSAvIDEwLCBpc01vdmluZyk7XG4gICAgICAgIGNvbnN0IHdpbm5lcjogRmluaXNoZXIgPSB7XG4gICAgICAgICAgaWQ6IGNhci5pZCxcbiAgICAgICAgICBzcGVlZDogc3RhcnRSZXNwb25zZS52ZWxvY2l0eSxcbiAgICAgICAgICB0aW1lOiAoc3RhcnRSZXNwb25zZS5kaXN0YW5jZSAvIHN0YXJ0UmVzcG9uc2UudmVsb2NpdHkgLyAxMDAwKS50b0ZpeGVkKDIpLFxuICAgICAgICAgIG5hbWU6IGNhci5uYW1lLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBBcGkuc3dpdGNoQ2FyVG9Ecml2ZU1vZGUoY2FyLmlkLCBhcHAuYWJvcnRDb250cm9sbGVyKTtcbiAgICAgICAgcmVzb2x2ZSh3aW5uZXIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy/QvtGB0YLQsNC90LDQstC70LjQstCw0LXQvCDQsNC90LjQvNCw0YbQuNGOXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN0YXJ0UmFjZSgpIHtcbiAgICB0aGlzLmlzUmFjZSA9IHRydWU7XG4gICAgY29uc3QgY2Fyc0RhdGE6IENhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnModGhpcy5wYWdlTnVtYmVyR2FyYWdlLCA3KTtcblxuICAgIGNvbnN0IHByb21pc2VzID0gY2Fyc0RhdGEuY2Fycy5tYXAoYXN5bmMgKGNhciwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0QW5kU3dpdGNoQ2FyKGNhciwgaW5kZXgsIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgLy/QvtGC0LrQu9GO0YfQsNGOINC60L3QvtC/0LrQuCDQvdCwINCy0YDQtdC80Y8g0LPQvtC90LrQuFxuICAgIHRoaXMuZGlzYWJsZUJ1dHRvbnNEdXJpbmdSYWNlKCk7XG4gICAgLy/Qs9C+0L3QutCwXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYW55KHByb21pc2VzKTtcbiAgICAgIHRoaXMudHVybkJ1dHRvbnNBZnRlclJhY2UoKTtcbiAgICAgIHRoaXMuc2hvd1dpbm5lcihyZXN1bHQubmFtZSwgcmVzdWx0LnRpbWUpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB3aW5uZXJEYXRhID0gYXdhaXQgQXBpLmdldFdpbm5lcihyZXN1bHQuaWQpO1xuICAgICAgICBpZiAod2lubmVyRGF0YS50aW1lID4gcGFyc2VGbG9hdChyZXN1bHQudGltZSkpIHtcbiAgICAgICAgICBBcGkudXBkYXRlV2lubmVyKHJlc3VsdC5pZCwgd2lubmVyRGF0YS53aW5zICsgMSwgcGFyc2VGbG9hdChyZXN1bHQudGltZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFwaS51cGRhdGVXaW5uZXIocmVzdWx0LmlkLCB3aW5uZXJEYXRhLndpbnMgKyAxLCB3aW5uZXJEYXRhLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoKGVycm9yLnN0YXR1cyA9IDQwNCkpIHtcbiAgICAgICAgICBhd2FpdCBBcGkuY3JlYXRlV2lubmVyKHJlc3VsdC5pZCwgMSwgcGFyc2VGbG9hdChyZXN1bHQudGltZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLnR1cm5CdXR0b25zQWZ0ZXJSYWNlKCk7XG4gICAgICB0aGlzLnNob3dXaW5uZXIoJ25vYm9keScsICdhbGwgY2FycyBhcmUgYnJva2VuJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlQnV0dG9uc0R1cmluZ1JhY2UoKSB7XG4gICAgdGhpcy5idXR0b25SYWNlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvblJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvbkdlbmVyYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJhY2VUYWJsZS5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgY29uc3QgYnV0dG9ucyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHVybkJ1dHRvbnNBZnRlclJhY2UoKSB7XG4gICAgdGhpcy5idXR0b25HZW5lcmF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuYnV0dG9uUmVzZXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHVybkJ1dHRvbnNBZnRlclJlc2V0KCkge1xuICAgIHRoaXMucmFjZVRhYmxlLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCBidXR0b25zID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYnV0dG9uQiA9IHJvdy5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3Jlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBidXR0b25CLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZXNldFJhY2UoKSB7XG4gICAgdGhpcy5pc1JhY2UgPSBmYWxzZTtcbiAgICBjb25zdCBjYXJEYXRhOiBDYXJzRGF0YSA9IGF3YWl0IEFwaS5nZXRDYXJzKHRoaXMucGFnZU51bWJlckdhcmFnZSwgNyk7XG4gICAgY2FyRGF0YS5jYXJzLmZvckVhY2goKGNhciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkEgPSB0aGlzLnJhY2VUYWJsZS5yb3dzW2luZGV4XS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3N0YXJ0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBjb25zdCBidXR0b25CID0gdGhpcy5yYWNlVGFibGUucm93c1tpbmRleF0ucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9yZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5yYWNlVGFibGUucm93c1tpbmRleF0ucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICAgIHRoaXMuc3RvcENhcihjYXIuaWQsIGJ1dHRvbkEsIGJ1dHRvbkIsIHN2Zyk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtQ3JlYXRlQ2FyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5idXR0b25SYWNlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5idXR0b25HZW5lcmF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGlmICh0aGlzLndpbm5lck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMud2lubmVyTWVzc2FnZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy50dXJuQnV0dG9uc0FmdGVyUmVzZXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1dpbm5lcihuYW1lOiBzdHJpbmcsIHRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2lubmVyTWVzc2FnZSA9IHRoaXMucGFnZUdhcmFnZS5jcmVhdGVNZXNzYWdlQWJvdXRXaW5uZXIobmFtZSwgdGltZSk7XG4gICAgdGhpcy5wYWdlR2FyYWdlLm1haW5Db250ZW50LmFwcGVuZCh0aGlzLndpbm5lck1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gIGlucHV0Q3JlYXRlVmFsdWU6IHN0cmluZztcblxuICBpbnB1dENyZWF0ZUNvbG9yOiBzdHJpbmc7XG5cbiAgaW5wdXRVcGRhdGVWYWx1ZTogc3RyaW5nO1xuXG4gIGlucHV0VXBkYXRlQ29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTE6IHN0cmluZywgY29sb3IxOiBzdHJpbmcsIHZhbHVlMjogc3RyaW5nLCBjb2xvcjI6IHN0cmluZykge1xuICAgIHRoaXMuaW5wdXRDcmVhdGVWYWx1ZSA9IHZhbHVlMTtcbiAgICB0aGlzLmlucHV0Q3JlYXRlQ29sb3IgPSBjb2xvcjE7XG4gICAgdGhpcy5pbnB1dFVwZGF0ZVZhbHVlID0gdmFsdWUyO1xuICAgIHRoaXMuaW5wdXRVcGRhdGVDb2xvciA9IGNvbG9yMjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2Fyc01ha2VyIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBNQUtFUlM6IENhcnNNYWtlcltdID0gW1xuICB7XG4gICAgbWFrZXI6ICdUb3lvdGEnLFxuICAgIG1vZGVsczogWydDYW1yeScsICdDb3JvbGxhJywgJ1JBVjQnLCAnSGlnaGxhbmRlcicsICdQcml1cycsICdUYWNvbWEnLCAnU2llbm5hJywgJ1R1bmRyYScsICc0UnVubmVyJywgJ1lhcmlzJ10sXG4gIH0sXG4gIHtcbiAgICBtYWtlcjogJ0hvbmRhJyxcbiAgICBtb2RlbHM6IFsnQWNjb3JkJywgJ0NpdmljJywgJ0NSLVYnLCAnUGlsb3QnLCAnT2R5c3NleScsICdGaXQnLCAnSFItVicsICdSaWRnZWxpbmUnLCAnSW5zaWdodCcsICdQYXNzcG9ydCddLFxuICB9LFxuICB7XG4gICAgbWFrZXI6ICdGb3JkJyxcbiAgICBtb2RlbHM6IFsnRi0xNTAnLCAnRXNjYXBlJywgJ0V4cGxvcmVyJywgJ0ZvY3VzJywgJ011c3RhbmcnLCAnRWRnZScsICdSYW5nZXInLCAnRXhwZWRpdGlvbicsICdGdXNpb24nLCAnRWNvU3BvcnQnXSxcbiAgfSxcbiAge1xuICAgIG1ha2VyOiAnQ2hldnJvbGV0JyxcbiAgICBtb2RlbHM6IFtcbiAgICAgICdTaWx2ZXJhZG8nLFxuICAgICAgJ0VxdWlub3gnLFxuICAgICAgJ1RyYXZlcnNlJyxcbiAgICAgICdNYWxpYnUnLFxuICAgICAgJ1RhaG9lJyxcbiAgICAgICdDYW1hcm8nLFxuICAgICAgJ1N1YnVyYmFuJyxcbiAgICAgICdDb2xvcmFkbycsXG4gICAgICAnSW1wYWxhJyxcbiAgICAgICdCb2x0IEVWJyxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFrZXI6ICdOaXNzYW4nLFxuICAgIG1vZGVsczogWydBbHRpbWEnLCAnUm9ndWUnLCAnU2VudHJhJywgJ011cmFubycsICdQYXRoZmluZGVyJywgJ1ZlcnNhJywgJ0Zyb250aWVyJywgJ1RpdGFuJywgJ01heGltYScsICdLaWNrcyddLFxuICB9LFxuICB7XG4gICAgbWFrZXI6ICdIeXVuZGFpJyxcbiAgICBtb2RlbHM6IFsnRWxhbnRyYScsICdTb25hdGEnLCAnVHVjc29uJywgJ1NhbnRhIEZlJywgJ0tvbmEnLCAnQWNjZW50JywgJ1ZlbG9zdGVyJywgJ1BhbGlzYWRlJywgJ1ZlbnVlJywgJ05leG8nXSxcbiAgfSxcbiAge1xuICAgIG1ha2VyOiAnQk1XJyxcbiAgICBtb2RlbHM6IFsnMyBTZXJpZXMnLCAnNSBTZXJpZXMnLCAnWDMnLCAnWDUnLCAnNyBTZXJpZXMnLCAnWDEnLCAnWDcnLCAnNCBTZXJpZXMnLCAnWDYnLCAnMiBTZXJpZXMnXSxcbiAgfSxcbiAge1xuICAgIG1ha2VyOiAnTWVyY2VkZXMtQmVueicsXG4gICAgbW9kZWxzOiBbJ0MtQ2xhc3MnLCAnRS1DbGFzcycsICdHTEMnLCAnR0xFJywgJ0EtQ2xhc3MnLCAnUy1DbGFzcycsICdHTEEnLCAnR0xTJywgJ0NMQScsICdHLUNsYXNzJ10sXG4gIH0sXG4gIHtcbiAgICBtYWtlcjogJ0F1ZGknLFxuICAgIG1vZGVsczogWydBNCcsICdRNScsICdBMycsICdRNycsICdBNicsICdRMycsICdBNScsICdROCcsICdBOCcsICdUVCddLFxuICB9LFxuICB7XG4gICAgbWFrZXI6ICdWb2xrc3dhZ2VuJyxcbiAgICBtb2RlbHM6IFsnSmV0dGEnLCAnVGlndWFuJywgJ1Bhc3NhdCcsICdBdGxhcycsICdHb2xmJywgJ0FydGVvbicsICdBdGxhcyBDcm9zcyBTcG9ydCcsICdUb3VhcmVnJywgJ0lELjQnLCAnQmVldGxlJ10sXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IENPTE9SUzogc3RyaW5nW10gPSBbXG4gICcjRjBGOEZGJyxcbiAgJyNGQUVCRDcnLFxuICAnIzAwRkZGRicsXG4gICcjN0ZGRkQ0JyxcbiAgJyNGMEZGRkYnLFxuICAnI0Y1RjVEQycsXG4gICcjRkZFNEM0JyxcbiAgJyNGRkVCQ0QnLFxuICAnIzAwMDBGRicsXG4gICcjOEEyQkUyJyxcbiAgJyNBNTJBMkEnLFxuICAnI0RFQjg4NycsXG4gICcjNUY5RUEwJyxcbiAgJyM3RkZGMDAnLFxuICAnI0QyNjkxRScsXG4gICcjRkY3RjUwJyxcbiAgJyM2NDk1RUQnLFxuICAnI0ZGRjhEQycsXG4gICcjREMxNDNDJyxcbiAgJyMwMEZGRkYnLFxuICAnIzAwMDA4QicsXG4gICcjMDA4QjhCJyxcbiAgJyNCODg2MEInLFxuICAnI0E5QTlBOScsXG4gICcjQTlBOUE5JyxcbiAgJyMwMDY0MDAnLFxuICAnI0JEQjc2QicsXG4gICcjOEIwMDhCJyxcbiAgJyM1NTZCMkYnLFxuICAnI0ZGOEMwMCcsXG4gICcjOTkzMkNDJyxcbiAgJyM4QjAwMDAnLFxuICAnI0U5OTY3QScsXG4gICcjOEZCQzhGJyxcbiAgJyM0ODNEOEInLFxuICAnIzJGNEY0RicsXG4gICcjMkY0RjRGJyxcbiAgJyMwMENFRDEnLFxuICAnIzk0MDBEMycsXG4gICcjRkYxNDkzJyxcbiAgJyMwMEJGRkYnLFxuICAnIzY5Njk2OScsXG4gICcjNjk2OTY5JyxcbiAgJyMxRTkwRkYnLFxuICAnI0IyMjIyMicsXG4gICcjRkZGQUYwJyxcbiAgJyMyMjhCMjInLFxuICAnI0ZGMDBGRicsXG4gICcjRENEQ0RDJyxcbiAgJyNGOEY4RkYnLFxuICAnI0ZGRDcwMCcsXG4gICcjREFBNTIwJyxcbiAgJyM4MDgwODAnLFxuICAnIzgwODA4MCcsXG4gICcjMDA4MDAwJyxcbiAgJyNBREZGMkYnLFxuICAnI0YwRkZGMCcsXG4gICcjRkY2OUI0JyxcbiAgJyNDRDVDNUMnLFxuICAnIzRCMDA4MicsXG4gICcjRkZGRkYwJyxcbiAgJyNGMEU2OEMnLFxuICAnI0U2RTZGQScsXG4gICcjRkZGMEY1JyxcbiAgJyM3Q0ZDMDAnLFxuICAnI0ZGRkFDRCcsXG4gICcjQUREOEU2JyxcbiAgJyNGMDgwODAnLFxuICAnI0UwRkZGRicsXG4gICcjRkFGQUQyJyxcbiAgJyNEM0QzRDMnLFxuICAnI0QzRDNEMycsXG4gICcjOTBFRTkwJyxcbiAgJyNGRkI2QzEnLFxuICAnI0ZGQTA3QScsXG4gICcjMjBCMkFBJyxcbiAgJyM4N0NFRkEnLFxuICAnIzc3ODg5OScsXG4gICcjNzc4ODk5JyxcbiAgJyNCMEM0REUnLFxuICAnI0ZGRkZFMCcsXG4gICcjMDBGRjAwJyxcbiAgJyMzMkNEMzInLFxuICAnI0ZBRjBFNicsXG4gICcjRkYwMEZGJyxcbiAgJyM4MDAwMDAnLFxuICAnIzY2Q0RBQScsXG4gICcjMDAwMENEJyxcbiAgJyNCQTU1RDMnLFxuICAnIzkzNzBEQicsXG4gICcjM0NCMzcxJyxcbiAgJyM3QjY4RUUnLFxuICAnIzAwRkE5QScsXG4gICcjNDhEMUNDJyxcbiAgJyNDNzE1ODUnLFxuICAnIzE5MTk3MCcsXG4gICcjRjVGRkZBJyxcbiAgJyNGRkU0RTEnLFxuICAnI0ZGRTRCNScsXG4gICcjRkZERUFEJyxcbiAgJyMwMDAwODAnLFxuICAnI0ZERjVFNicsXG4gICcjODA4MDAwJyxcbiAgJyM2QjhFMjMnLFxuICAnI0ZGQTUwMCcsXG4gICcjRkY0NTAwJyxcbiAgJyNEQTcwRDYnLFxuICAnI0VFRThBQScsXG4gICcjOThGQjk4JyxcbiAgJyNBRkVFRUUnLFxuICAnI0RCNzA5MycsXG4gICcjRkZFRkQ1JyxcbiAgJyNGRkRBQjknLFxuICAnI0NEODUzRicsXG4gICcjRkZDMENCJyxcbiAgJyNEREEwREQnLFxuICAnI0IwRTBFNicsXG4gICcjODAwMDgwJyxcbiAgJyM2NjMzOTknLFxuICAnI0ZGMDAwMCcsXG4gICcjQkM4RjhGJyxcbiAgJyM0MTY5RTEnLFxuICAnIzhCNDUxMycsXG4gICcjRkE4MDcyJyxcbiAgJyNGNEE0NjAnLFxuICAnIzJFOEI1NycsXG4gICcjRkZGNUVFJyxcbiAgJyNBMDUyMkQnLFxuICAnI0MwQzBDMCcsXG4gICcjODdDRUVCJyxcbiAgJyM2QTVBQ0QnLFxuICAnIzcwODA5MCcsXG4gICcjNzA4MDkwJyxcbiAgJyNGRkZBRkEnLFxuICAnIzAwRkY3RicsXG4gICcjNDY4MkI0JyxcbiAgJyNEMkI0OEMnLFxuICAnIzAwODA4MCcsXG4gICcjRDhCRkQ4JyxcbiAgJyNGRjYzNDcnLFxuICAnIzQwRTBEMCcsXG4gICcjRUU4MkVFJyxcbiAgJyNGNURFQjMnLFxuICAnI0ZGRkZGRicsXG4gICcjRjVGNUY1JyxcbiAgJyNGRkZGMDAnLFxuICAnIzlBQ0QzMicsXG5dO1xuIiwiaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcbmNsYXNzIEJ1dHRvbiB7XG4gIHN0YXRpYyBjcmVhdGUodGV4dDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZ1tdLCBoYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgY29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnV0dG9uYDtcbiAgICBjbGFzc05hbWUuZm9yRWFjaCgoc3RyKSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZChzdHIpKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjbGFzcyBDYXJFbCB7XG4gIHN0YXRpYyBjcmVhdGUoY29sb3I6IHN0cmluZykge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnODAnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMjQnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCA4MCAyNCcpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ00xLjU4NjgyIDkuNDMzMzFDMzkuNDQ0NSAtMTAuMzcwMSA1Ny43NzkzIDcuMTU2MjEgNTcuNzc5MyA3LjE1NjIxQzc1Ljk2NDIgNi45MDkwNSA4MC4wMDAyIDExLjQ3NzYgODAuMDAwMiAxMS40Nzc2QzgwLjAwMDIgMTEuNDc3NiA3Ni4xNjY4IDE2LjMyNTIgNzguNzYyOCAxOC4wMTg3QzgxLjM2MDQgMTkuNzEzOCA3MS43MDE4IDE5LjQ5ODUgNzEuNzAxOCAxOS40OTg1QzcxLjgwNzEgMTkuMDEyMSA3MS44NzA5IDE4LjUxOTQgNzEuODcwOSAxOC4wMDI4QzcxLjg3MDkgMTQuMjgyNSA2OC44NTM5IDExLjI2NTUgNjUuMTMzNiAxMS4yNjU1QzYxLjQxMzQgMTEuMjY1NSA1OC4zOTQ4IDE0LjI4MDkgNTguMzk0OCAxOC4wMDI4QzU4LjM5NDggMTguNTE0NiA1OC40NTcgMTkuMDE1MyA1OC41NjU0IDE5LjQ5ODVINTMuNDU5NUgyMC43NDYxSDE5LjY5NjhDMTkuODAzNyAxOS4wMTIxIDE5Ljg2NTkgMTguNTE5NCAxOS44NjU5IDE4LjAwMjhDMTkuODY1OSAxNC4yODI1IDE2Ljg0NTcgMTEuMjY1NSAxMy4xMjM4IDExLjI2NTVDOS40MDUyIDExLjI2NTUgNi4zODAyMyAxNC4yODA5IDYuMzgwMjMgMTguMDAyOEM2LjM4MDIzIDE4LjUxNDYgNi40NDU2IDE5LjAxNTMgNi41NTI0NCAxOS40OTg1QzYuNTE4OTUgMTkuNDk4NSA2LjA3ODg0IDE5LjQ5ODUgMS42MDExNyAxOS40OTg1Qy0xLjk5MzA4IDE1Ljg5MzEgMS41ODY4MiA5LjQzMzMxIDEuNTg2ODIgOS40MzMzMVpNMzUuOTE3MiA3LjQ2MjM4SDU0LjkwNDJDNTQuOTA0MiA3LjQ2MjM4IDQ2LjUwNTQgMi40NDU3MyAzNS45MjIgMS44Nzk2NVY3LjQ2MjM4SDM1LjkxNzJaTTMzLjg4MDkgNy40NjcxNlYxLjg1MjU0QzI4LjE3ODYgMS44NzAwOCAyMS45ODY3IDMuMjY1MzYgMTYuMTkzNSA3LjQ2NzE2SDMzLjg4MDlaTTY1LjE0MTYgMTEuOTQxNkM2OC40NjggMTEuOTQxNiA3MS4xNTk3IDE0LjYzMDIgNzEuMTU5NyAxNy45NTQ5QzcxLjE1OTcgMjEuMjc2NSA2OC40NjggMjMuOTY5OCA2NS4xNDE2IDIzLjk2OThDNjEuODE4NSAyMy45Njk4IDU5LjEyNTIgMjEuMjc2NSA1OS4xMjUyIDE3Ljk1NDlDNTkuMTIzNiAxNC42MzE4IDYxLjgxNjkgMTEuOTQxNiA2NS4xNDE2IDExLjk0MTZaTTY1LjE0MTYgMjAuMjcxOUM2Ni40MTg5IDIwLjI3MTkgNjcuNDU3IDE5LjI0MTggNjcuNDU3IDE3Ljk2MTNDNjcuNDU3IDE2LjY4MjQgNjYuNDE4OSAxNS42NDkxIDY1LjE0MTYgMTUuNjQ5MUM2My44NjU5IDE1LjY0OTEgNjIuODI2MiAxNi42ODA4IDYyLjgyNjIgMTcuOTYxM0M2Mi44MjE1IDE5LjIzMjIgNjMuODU5NiAyMC4yNzE5IDY1LjE0MTYgMjAuMjcxOVpNMTIuOTgzNSAxMS45NDE2QzE2LjMwNjcgMTEuOTQxNiAxOC45OTg0IDE0LjYzMDIgMTguOTk4NCAxNy45NTQ5QzE4Ljk5ODQgMjEuMjc2NSAxNi4zMDY3IDIzLjk2OTggMTIuOTgzNSAyMy45Njk4QzkuNjYwMzMgMjMuOTY5OCA2Ljk3MDIzIDIxLjI3NjUgNi45NzAyMyAxNy45NTQ5QzYuOTY1NDQgMTQuNjMxOCA5LjY2MDMzIDExLjk0MTYgMTIuOTgzNSAxMS45NDE2Wk0xMi45ODM1IDIwLjI3MTlDMTQuMjYwOCAyMC4yNzE5IDE1LjI5NzMgMTkuMjQxOCAxNS4yOTczIDE3Ljk2MTNDMTUuMjk3MyAxNi42ODI0IDE0LjI2MDggMTUuNjQ5MSAxMi45ODM1IDE1LjY0OTFDMTEuNzA0NiAxNS42NDkxIDEwLjY2OTcgMTYuNjgwOCAxMC42Njk3IDE3Ljk2MTNDMTAuNjY0OSAxOS4yMzIyIDExLjcwNDYgMjAuMjcxOSAxMi45ODM1IDIwLjI3MTlaJ1xuICAgICk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBzdGF0aWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZywgc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHN2Zy5xdWVyeVNlbGVjdG9yKCdwYXRoJykgYXMgU1ZHUGF0aEVsZW1lbnQ7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcik7XG4gIH1cblxuICBzdGF0aWMgY2hhbmdlTmFtZSh2YWx1ZTogc3RyaW5nLCBuYW1lRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgbmFtZUVsLmlubmVySFRNTCA9IHZhbHVlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJFbDtcbiIsImltcG9ydCAnLi9mb3JtLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcblxuY2xhc3MgRm9ybSB7XG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICAgIGJ1dHRvblRleHQ6IHN0cmluZyxcbiAgICBidXR0b25DbGFzc0xpc3Q6IHN0cmluZ1tdLFxuICAgIGJ1dHRvbkhhbmRsZXI6IChldmVudDogRXZlbnQpID0+IHZvaWRcbiAgKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnZm9ybSc7XG5cbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSBgZm9ybV8ke2NsYXNzTmFtZX0gZm9ybWA7XG5cbiAgICBjb25zdCBpbnB1dFRleHQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGV4dC5jbGFzc05hbWUgPSAnZm9ybV9faW5wdXQgaW5wdXRfdGV4dCc7XG4gICAgaW5wdXRUZXh0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRUZXh0Lm1heExlbmd0aCA9IDIwO1xuICAgIGlucHV0VGV4dC5wYXR0ZXJuID0gJ15bYS16QS1aMC05XSskJztcbiAgICBpbnB1dFRleHQudmFsdWUgPSB2YWx1ZTtcblxuICAgIGNvbnN0IGlucHV0Q29sb3I6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gJ2Zvcm1fX2lucHV0IGlucHV0X2NvbG9yJztcbiAgICBpbnB1dENvbG9yLnR5cGUgPSAnY29sb3InO1xuICAgIGlucHV0Q29sb3IudmFsdWUgPSBjb2xvcjtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbi5jcmVhdGUoYnV0dG9uVGV4dCwgYnV0dG9uQ2xhc3NMaXN0LCBidXR0b25IYW5kbGVyKTtcblxuICAgIGZvcm0uYXBwZW5kKGlucHV0VGV4dCk7XG4gICAgZm9ybS5hcHBlbmQoaW5wdXRDb2xvcik7XG4gICAgZm9ybS5hcHBlbmQoYnV0dG9uKTtcbiAgICB3cmFwcGVyLmFwcGVuZChmb3JtKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9hcHAvYXBwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5cbmNsYXNzIE5hdmlnYXRpb24ge1xuICBuYXY6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG4gICAgdGhpcy5uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGJ1dHRvblRvR2FyYWdlID0gQnV0dG9uLmNyZWF0ZSgnVG8gZ2FyYWdlJywgWyduYXZfX2J1dHRvbicsICdidXR0b25fZ3JlZW4nXSwgKCkgPT4ge1xuICAgICAgYXBwLnBhZ2VHYXJhZ2UuY2xlYXJDb250ZW50KCk7XG4gICAgICBhcHAucGFnZUdhcmFnZS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1dHRvblRvV2lubmVyID0gQnV0dG9uLmNyZWF0ZSgnVG8gd2lubmVycycsIFsnbmF2X19idXR0b24nLCAnYnV0dG9uX2dyZWVuJ10sICgpID0+IHtcbiAgICAgIGFwcC5wYWdlV2lubmVycy5jbGVhckNvbnRlbnQoKTtcbiAgICAgIGFwcC5wYWdlV2lubmVycy5yZW5kZXIoKTtcbiAgICAgIGFwcC5wYWdlV2lubmVycy51cGRhdGVQYWdlKGFwcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5hdi5hcHBlbmQoYnV0dG9uVG9HYXJhZ2UpO1xuICAgIHRoaXMubmF2LmFwcGVuZChidXR0b25Ub1dpbm5lcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBDYXJFbCBmcm9tICcuLi9jYXIvY2FyJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vYXBwL2FwcCc7XG5pbXBvcnQgQXBpIGZyb20gJy4uLy4uL2FwcC9hcGknO1xuaW1wb3J0ICcuL3JhY2Utcm93LnNjc3MnO1xuaW1wb3J0IHsgU3BlZWRDYXIgfSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2VzJztcblxuY2xhc3MgUmFjZVJvdyB7XG4gIHN0YXRpYyBjcmVhdGUoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBhcHA6IEFwcCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ3JhY2Utcm93JztcbiAgICByb3cuaWQgPSBTdHJpbmcoaWQpO1xuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcC5jbGFzc05hbWUgPSAncmFjZS1yb3dfX3RvcC1yb3cnO1xuICAgIGNvbnN0IHRvcEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BCdXR0b25zLmNsYXNzTmFtZSA9ICdyYWNlLXJvd19fdG9wLWJ1dHRvbnMnO1xuXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhck5hbWUuY2xhc3NOYW1lID0gJ3JhY2Utcm93X19jYXItbmFtZSc7XG4gICAgY2FyTmFtZS5pbm5lckhUTUwgPSBuYW1lO1xuXG4gICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFjay5jbGFzc05hbWUgPSAncmFjZS1yb3dfX3RyYWNrJztcblxuICAgIGNvbnN0IGNhciA9IENhckVsLmNyZWF0ZShjb2xvcik7XG5cbiAgICBjb25zdCBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRyb2xCdXR0b25zLmNsYXNzTmFtZSA9ICdyYWNlLXJvd19fY29udHJvbC1idXR0b25zJztcbiAgICBjb25zdCBidXR0b25COiBIVE1MQnV0dG9uRWxlbWVudCA9IEJ1dHRvbi5jcmVhdGUoXG4gICAgICAnQicsXG4gICAgICBbJ3JhY2Utcm93X19idXR0b24nLCAnYnV0dG9uX3Jlc2V0JywgJ2J1dHRvbl9jYXJzLWNvbnRyb2wnXSxcbiAgICAgICgpID0+IHt9XG4gICAgKTtcblxuICAgIGNvbnN0IGJ1dHRvbkEgPSBCdXR0b24uY3JlYXRlKCdBJywgWydyYWNlLXJvd19fYnV0dG9uJywgJ2J1dHRvbl9zdGFydCcsICdidXR0b25fY2Fycy1jb250cm9sJ10sIGFzeW5jICgpID0+IHtcbiAgICAgIGJ1dHRvbkEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgbGV0IGludGVydmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD47XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGFydFJlc3BvbnNlID0gKGF3YWl0IEFwaS5zdGFydE9yU3RvcENhcihpZCwgJ3N0YXJ0ZWQnKSkgYXMgU3BlZWRDYXI7XG4gICAgICAgIGNvbnN0IGlzTW92aW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgaW50ZXJ2YWwgPSBhcHAuc3RhcnRDYXJBbmltYXRpb24oY2FyLCBzdGFydFJlc3BvbnNlLmRpc3RhbmNlIC8gc3RhcnRSZXNwb25zZS52ZWxvY2l0eSAvIDEwLCBpc01vdmluZyk7XG4gICAgICAgIGF3YWl0IEFwaS5zd2l0Y2hDYXJUb0RyaXZlTW9kZShpZCwgYXBwLmFib3J0Q29udHJvbGxlcik7XG4gICAgICAgIGJ1dHRvbkIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBidXR0b25CLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b25CLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYXBwLnN0b3BDYXIoaWQsIGJ1dHRvbkEsIGJ1dHRvbkIsIGNhcik7XG4gICAgfSk7XG4gICAgYnV0dG9uQi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBidXR0b25TZWxlY3QgPSBCdXR0b24uY3JlYXRlKFxuICAgICAgJ1NlbGVjdCcsXG4gICAgICBbJ3JhY2Utcm93X19idXR0b24nLCAnYnV0dG9uX3NlbGVjdCcsICdidXR0b25fc21hbGwnLCAnYnV0dG9uX2JsdWUnXSxcbiAgICAgIHRoaXMuYnV0dG9uU2VsZWN0T25DbGljay5iaW5kKHRoaXMsIHRoaXMsIGFwcCwgaWQsIGNhck5hbWUsIGNhcilcbiAgICApO1xuICAgIGNvbnN0IGJ1dHRvblJlbW92ZSA9IEJ1dHRvbi5jcmVhdGUoXG4gICAgICAnUmVtb3ZlJyxcbiAgICAgIFsncmFjZS1yb3dfX2J1dHRvbicsICdidXR0b25fcmVtb3ZlJywgJ2J1dHRvbl9zbWFsbCcsICdidXR0b25fYmx1ZSddLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBBcGkuZGVsZXRlQ2FyKGlkKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB3aW5uZXJEYXRhID0gYXdhaXQgQXBpLmdldFdpbm5lcihpZCk7XG4gICAgICAgICAgaWYgKHdpbm5lckRhdGEpIHtcbiAgICAgICAgICAgIEFwaS5kZWxldGVXaW5uZXIoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjYXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoYXBwLnBhZ2VOdW1iZXJHYXJhZ2UsIDcpO1xuICAgICAgICBhcHAucmFjZVRhYmxlLnRhYmxlLnJlbW92ZSgpO1xuICAgICAgICBhcHAucmFjZVRhYmxlLnRhYmxlID0gYXBwLnBhZ2VHYXJhZ2UuY3JlYXRlUmFjZVRhYmxlKGFwcCwgY2Fyc0RhdGEuY2Fycyk7XG4gICAgICAgIGFwcC5wYWdlTnVtYmVyR2FyYWdlRWxlbS5hZnRlcihhcHAucmFjZVRhYmxlLnRhYmxlKTtcbiAgICAgICAgYXBwLnBhZ2VHYXJhZ2Uuc2V0Q2Fyc0NvdW50ZXIoYXBwLCBOdW1iZXIoY2Fyc0RhdGEudG90YWxDb3VudCkpO1xuICAgICAgICBhcHAucGFnZUdhcmFnZS5zZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHAsIGNhcnNEYXRhKTtcbiAgICAgICAgaWYgKGFwcC5yYWNlVGFibGUucm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBhcHAucGFnZUdhcmFnZS5jcmVhdFByZXZQYWdlKGFwcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgdG9wQnV0dG9ucy5hcHBlbmQoYnV0dG9uU2VsZWN0KTtcbiAgICB0b3BCdXR0b25zLmFwcGVuZChidXR0b25SZW1vdmUpO1xuICAgIHRvcC5hcHBlbmQodG9wQnV0dG9ucyk7XG5cbiAgICB0b3AuYXBwZW5kKGNhck5hbWUpO1xuICAgIGNvbnRyb2xCdXR0b25zLmFwcGVuZChidXR0b25BKTtcbiAgICBjb250cm9sQnV0dG9ucy5hcHBlbmQoYnV0dG9uQik7XG4gICAgdHJhY2suYXBwZW5kKGNvbnRyb2xCdXR0b25zKTtcbiAgICB0cmFjay5hcHBlbmQoY2FyKTtcbiAgICByb3cuYXBwZW5kKHRvcCk7XG4gICAgcm93LmFwcGVuZCh0cmFjayk7XG5cbiAgICByZXR1cm4gcm93O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGJ1dHRvblNlbGVjdE9uQ2xpY2soXG4gICAgYnV0dG9uU2VsZWN0OiBIVE1MQnV0dG9uRWxlbWVudCxcbiAgICBhcHA6IEFwcCxcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWVFbDogSFRNTEVsZW1lbnQsXG4gICAgc3ZnOiBTVkdFbGVtZW50XG4gICkge1xuICAgIGFwcC5mb3JtVXBkYXRlQ2FyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgaW5wdXRUZXh0ID0gYXBwLmZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignLmlucHV0X3RleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0Q29sb3IgPSBhcHAuZm9ybVVwZGF0ZUNhci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfY29sb3InKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFwcC5mb3JtVXBkYXRlQ2FyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGlucHV0VGV4dC5mb2N1cygpO1xuICAgIGNvbnN0IGNhckRhdGEgPSBhd2FpdCBBcGkuZ2V0Q2FyKGlkKTtcbiAgICBpbnB1dFRleHQudmFsdWUgPSBjYXJEYXRhLm5hbWU7XG4gICAgaW5wdXRDb2xvci52YWx1ZSA9IGNhckRhdGEuY29sb3I7XG4gICAgYXBwLnNlbGVjdGVkQ2FySWQgPSBpZDtcbiAgICBhcHAuc2VsZWN0ZWRDYXJOYW1lID0gbmFtZUVsO1xuICAgIGFwcC5zZWxlY3RlZENhclNWRyA9IHN2ZztcbiAgICBidXR0b25TZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBhcHAucmFjZVRhYmxlLnRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goKGVsZW06IEhUTUxCdXR0b25FbGVtZW50KSA9PiAoZWxlbS5kaXNhYmxlZCA9IHRydWUpKTtcblxuICAgIC8v0L7RgtC80LXQvdGP0LXQvCDQstGL0LTQtdC70LXQvdC40LUg0LzQsNGI0LjQvdGLXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcuZm9ybV91cGRhdGUtY2FyJykgfHwgZXZlbnQudGFyZ2V0ID09PSBidXR0b24pIHtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbGVtOiBIVE1MQnV0dG9uRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbl9yZXNldCcpKSB7XG4gICAgICAgICAgICBlbGVtLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYnV0dG9uU2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGlucHV0VGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dENvbG9yLnZhbHVlID0gJyNmZmZmZmYnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG4gICAgICAgIGFwcC5zZWxlY3RlZENhcklkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWNlUm93O1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9hcHAvYXBwJztcbmltcG9ydCB7IENhciB9IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IFJhY2VSb3cgZnJvbSAnLi4vcmFjZS1yb3cvcmFjZS1yb3cnO1xuXG5jbGFzcyBSYWNlVGFibGUge1xuICByb3dzOiBIVE1MRWxlbWVudFtdO1xuXG4gIHRhYmxlOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvd3MgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUYWJsZShjYXJzOiBDYXJbXSwgYXBwOiBBcHApOiBIVE1MRWxlbWVudCB7XG4gICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGFibGUuY2xhc3NOYW1lID0gJ3JhY2UtdGFibGUnO1xuXG4gICAgY2Fycy5mb3JFYWNoKChjYXIpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IFJhY2VSb3cuY3JlYXRlKGNhci5pZCwgY2FyLm5hbWUsIGNhci5jb2xvciwgYXBwKTtcblxuICAgICAgdGhpcy50YWJsZS5hcHBlbmQocm93KTtcbiAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy50YWJsZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWNlVGFibGU7XG4iLCJpbXBvcnQgJy4vd2lubmVyLXJvdy5zY3NzJztcbmltcG9ydCBDYXJFbCBmcm9tICcuLi9jYXIvY2FyJztcblxuY2xhc3MgV2lubmVyUm93IHtcbiAgc3RhdGljIGNyZWF0ZShyb3dOdW1iZXI6IG51bWJlciwgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCB3aW5zOiBudW1iZXIsIHRpbWU6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3cnO1xuXG4gICAgY29uc3QgbnVtYmVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlckNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF9udW1iZXInO1xuICAgIG51bWJlckNlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHJvd051bWJlcik7XG5cbiAgICBjb25zdCBjYXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX2Nhcic7XG4gICAgY29uc3Qgc3ZnID0gQ2FyRWwuY3JlYXRlKGNvbG9yKTtcbiAgICBjYXJDZWxsLmFwcGVuZChzdmcpO1xuXG4gICAgY29uc3QgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX25hbWUnO1xuICAgIG5hbWVDZWxsLmlubmVySFRNTCA9IG5hbWU7XG5cbiAgICBjb25zdCB3aW5zQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbnNDZWxsLmNsYXNzTmFtZSA9ICd3aW5uZXItcm93X19jZWxsIHdpbm5lci1yb3dfX2NlbGxfd2lucyc7XG4gICAgd2luc0NlbGwuaW5uZXJIVE1MID0gU3RyaW5nKHdpbnMpO1xuXG4gICAgY29uc3QgdGltZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX3RpbWUnO1xuICAgIHRpbWVDZWxsLmlubmVySFRNTCA9IFN0cmluZyh0aW1lKTtcblxuICAgIHJvdy5hcHBlbmQobnVtYmVyQ2VsbCk7XG4gICAgcm93LmFwcGVuZChjYXJDZWxsKTtcbiAgICByb3cuYXBwZW5kKG5hbWVDZWxsKTtcbiAgICByb3cuYXBwZW5kKHdpbnNDZWxsKTtcbiAgICByb3cuYXBwZW5kKHRpbWVDZWxsKTtcblxuICAgIHJldHVybiByb3c7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFdpbm5lclJvdztcbiIsImltcG9ydCBBcGkgZnJvbSAnLi4vLi4vYXBwL2FwaSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL2FwcC9hcHAnO1xuaW1wb3J0ICcuL3dpbm5lci10YWJsZS5zY3NzJztcbmltcG9ydCB7IENhcnNEYXRhLCBXaW5uZXIsIFdpbm5lcnMgfSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmZhY2VzJztcbmltcG9ydCBXaW5uZXJSb3cgZnJvbSAnLi4vd2lubmVycy1yb3cvd2lubmVyLXJvdyc7XG5pbXBvcnQgeyBPcmRlciwgU29ydGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGUnO1xuaW1wb3J0IHsgT3JkZXJUeXBlLCBTb3J0VHlwZXMgfSBmcm9tICcuLi8uLi91dGlscy9lbnVtcyc7XG5cbmNsYXNzIFdpbm5lclRhYmxlIHtcbiAgcm93czogSFRNTEVsZW1lbnRbXTtcblxuICB0YWJsZTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3dzID0gW107XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKGFwcDogQXBwLCBzb3J0PzogU29ydGluZywgb3JkZXI/OiBPcmRlcik6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgICBsZXQgd2lubmVyc09iajogV2lubmVycztcbiAgICBpZiAoc29ydCAmJiBvcmRlcikge1xuICAgICAgd2lubmVyc09iaiA9IGF3YWl0IEFwaS5nZXRXaW5uZXJzKGFwcC5wYWdlTnVtYmVyV2lubmVyLCAxMCwgc29ydCwgb3JkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5uZXJzT2JqID0gYXdhaXQgQXBpLmdldFdpbm5lcnMoYXBwLnBhZ2VOdW1iZXJXaW5uZXIsIDEwKTtcbiAgICB9XG4gICAgY29uc3Qgd2lubmVyczogV2lubmVyW10gPSB3aW5uZXJzT2JqLndpbm5lcnM7XG4gICAgY29uc3QgY2Fyc0RhdGE6IENhcnNEYXRhID0gYXdhaXQgQXBpLmdldENhcnMoKTtcbiAgICBjb25zdCBjYXJzID0gY2Fyc0RhdGEuY2FycztcblxuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnRhYmxlLmNsYXNzTmFtZSA9ICd3aW5uZXJzLXRhYmxlJztcblxuICAgIGNvbnN0IHJvd0hlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVyKGFwcCk7XG4gICAgdGhpcy50YWJsZS5hcHBlbmQocm93SGVhZGVyKTtcbiAgICB0aGlzLnJvd3MucHVzaChyb3dIZWFkZXIpO1xuXG4gICAgd2lubmVycy5mb3JFYWNoKCh3aW5uZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjYXIgPSBjYXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHdpbm5lci5pZCk7XG4gICAgICBjb25zdCBuYW1lID0gY2FyLm5hbWU7XG4gICAgICBjb25zdCBjb2xvciA9IGNhci5jb2xvcjtcbiAgICAgIGNvbnN0IHdpbnMgPSB3aW5uZXIud2lucztcbiAgICAgIGNvbnN0IHRpbWUgPSB3aW5uZXIudGltZTtcbiAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPVxuICAgICAgICBhcHAucGFnZU51bWJlcldpbm5lciA9PT0gMVxuICAgICAgICAgID8gV2lubmVyUm93LmNyZWF0ZShpbmRleCArIDEsIG5hbWUsIGNvbG9yLCB3aW5zLCB0aW1lKVxuICAgICAgICAgIDogV2lubmVyUm93LmNyZWF0ZShpbmRleCArIChhcHAucGFnZU51bWJlcldpbm5lciAtIDEpICogMTAsIG5hbWUsIGNvbG9yLCB3aW5zLCB0aW1lKTtcbiAgICAgIHRoaXMudGFibGUuYXBwZW5kKHJvdyk7XG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoYXBwOiBBcHApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgcm93SGVhZGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0hlYWRlci5jbGFzc0xpc3QuYWRkKCd3aW5uZXItcm93JywgJ3dpbm5lci1yb3dfaGVhZGVyJyk7XG5cbiAgICBjb25zdCBudW1iZXJDZWxsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlckNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF9udW1iZXInO1xuICAgIG51bWJlckNlbGwuaW5uZXJIVE1MID0gJyMnO1xuXG4gICAgY29uc3QgY2FyQ2VsbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJDZWxsLmNsYXNzTmFtZSA9ICd3aW5uZXItcm93X19jZWxsIHdpbm5lci1yb3dfX2NlbGxfY2FyJztcbiAgICBjYXJDZWxsLmlubmVySFRNTCA9ICdDYXInO1xuXG4gICAgY29uc3QgbmFtZUNlbGw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNlbGwuY2xhc3NOYW1lID0gJ3dpbm5lci1yb3dfX2NlbGwgd2lubmVyLXJvd19fY2VsbF9uYW1lJztcbiAgICBuYW1lQ2VsbC5pbm5lckhUTUwgPSAnTmFtZSc7XG5cbiAgICBjb25zdCB3aW5zQ2VsbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5zQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX3dpbnMnO1xuICAgIHdpbnNDZWxsLmlubmVySFRNTCA9ICdXaW5zJztcbiAgICB3aW5zQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuc29ydChldmVudCwgYXBwKSk7XG5cbiAgICBjb25zdCB0aW1lQ2VsbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lQ2VsbC5jbGFzc05hbWUgPSAnd2lubmVyLXJvd19fY2VsbCB3aW5uZXItcm93X19jZWxsX3RpbWUnO1xuICAgIHRpbWVDZWxsLmlubmVySFRNTCA9ICdCZXN0IHRpbWUnO1xuICAgIHRpbWVDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5zb3J0KGV2ZW50LCBhcHApKTtcblxuICAgIHJvd0hlYWRlci5hcHBlbmQobnVtYmVyQ2VsbCk7XG4gICAgcm93SGVhZGVyLmFwcGVuZChjYXJDZWxsKTtcbiAgICByb3dIZWFkZXIuYXBwZW5kKG5hbWVDZWxsKTtcbiAgICByb3dIZWFkZXIuYXBwZW5kKHdpbnNDZWxsKTtcbiAgICByb3dIZWFkZXIuYXBwZW5kKHRpbWVDZWxsKTtcblxuICAgIHJldHVybiByb3dIZWFkZXI7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNvcnQoZXZlbnQ6IEV2ZW50LCBhcHA6IEFwcCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ1dpbnMnKSB7XG4gICAgICBhcHAud2lubmVyc1RhYmxlU29ydCA9IFNvcnRUeXBlcy5XSU5TO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlubmVySFRNTCA9PT0gJ0Jlc3QgdGltZScpIHtcbiAgICAgIGFwcC53aW5uZXJzVGFibGVTb3J0ID0gU29ydFR5cGVzLlRJTUU7XG4gICAgfVxuICAgIGlmIChhcHAud2lubmVyc1RhYmxlT3JkZXIgPT09IE9yZGVyVHlwZS5BU0IpIHtcbiAgICAgIGFwcC53aW5uZXJzVGFibGVPcmRlciA9IE9yZGVyVHlwZS5ERVNDO1xuICAgIH0gZWxzZSBhcHAud2lubmVyc1RhYmxlT3JkZXIgPSBPcmRlclR5cGUuQVNCO1xuICAgIGFwcC5wYWdlV2lubmVycy51cGRhdGVQYWdlKGFwcCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lubmVyVGFibGU7XG4iLCJpbXBvcnQgJy4vZ2FyYWdlLnNjc3MnO1xuaW1wb3J0IEFwaSBmcm9tICcuLi9hcHAvYXBpJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vYXBwL2FwcCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vZm9ybSc7XG5pbXBvcnQgUmFjZVRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmFjZS10YWJsZS50cy9yYWNlLXRhYmxlJztcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBDYXIsIENhcnNEYXRhIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgQ2FyRWwgZnJvbSAnLi4vY29tcG9uZW50cy9jYXIvY2FyJztcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL2Fzc2V0cy9jb2xvcnMnO1xuaW1wb3J0IHsgTUFLRVJTIH0gZnJvbSAnLi4vYXNzZXRzL2NhcnNNYWtlcnMnO1xuXG5jbGFzcyBHYXJhZ2VQYWdlVmlldyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xuICAgIHN1cGVyKGFwcCk7XG5cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IHRoaXMuY3JlYXRlRm9ybShhcHApO1xuICAgIGNvbnN0IHRvb2xCdXR0b25zUm93ID0gdGhpcy5jcmVhdGVUb29sQnV0dG9uc1JvdyhhcHApO1xuICAgIHRoaXMubWFpbkNvbnRlbnQuYXBwZW5kKGZvcm1XcmFwcGVyKTtcbiAgICB0aGlzLm1haW5Db250ZW50LmFwcGVuZCh0b29sQnV0dG9uc1Jvdyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZvcm0oYXBwOiBBcHApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtV3JhcHBlci5jbGFzc05hbWUgPSAnZm9ybS13cmFwcGVyJztcbiAgICAvL2NyZWF0IGVycm9yIG1hc3NlZ2UgZm9yIGNyZWF0ZUNhclxuICAgIGxldCBpc0Vycm9yTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5jcmVhdGVFcnJvck1hc3NlZ2UoKTtcbiAgICBjb25zdCBmb3JtQ3JlYXRlQ2FyID0gRm9ybS5jcmVhdGUoXG4gICAgICBhcHAuc3RhdGUuaW5wdXRDcmVhdGVWYWx1ZSxcbiAgICAgIGFwcC5zdGF0ZS5pbnB1dENyZWF0ZUNvbG9yLFxuICAgICAgJ2NyZWF0ZS1jYXInLFxuICAgICAgJ0NyZWF0ZScsXG4gICAgICBbJ2J1dHRvbl9jcmVhdGUnLCAnYnV0dG9uX2JsdWUnXSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gYXBwLmZvcm1DcmVhdGVDYXIucXVlcnlTZWxlY3RvcignLmlucHV0X3RleHQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dENvbG9yID0gYXBwLmZvcm1DcmVhdGVDYXIucXVlcnlTZWxlY3RvcignLmlucHV0X2NvbG9yJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGlucHV0VGV4dC52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBpbnB1dENvbG9yLnZhbHVlO1xuICAgICAgICBpZiAobmFtZSAhPSAnJykge1xuICAgICAgICAgIGF3YWl0IEFwaS5jcmVhdGVDYXIobmFtZSwgY29sb3IpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2Fyc1RhYmxlKGFwcCk7XG4gICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gJyc7XG4gICAgICAgICAgaW5wdXRDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICBpZiAoaXNFcnJvck1lc3NhZ2UpIGVycm9yTWVzc2FnZUVsLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcC5mb3JtQ3JlYXRlQ2FyLmFwcGVuZChlcnJvck1lc3NhZ2VFbCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlcnJvck1lc3NhZ2VFbC5yZW1vdmUoKSwgNTAwMCk7XG4gICAgICAgICAgaXNFcnJvck1lc3NhZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBhcHAuZm9ybUNyZWF0ZUNhciA9IGZvcm1DcmVhdGVDYXI7XG4gICAgY29uc3QgZm9ybVVwZGF0ZUNhciA9IEZvcm0uY3JlYXRlKFxuICAgICAgYXBwLnN0YXRlLmlucHV0VXBkYXRlVmFsdWUsXG4gICAgICBhcHAuc3RhdGUuaW5wdXRVcGRhdGVDb2xvcixcbiAgICAgICd1cGRhdGUtY2FyJyxcbiAgICAgICdVcGRhdGUnLFxuICAgICAgWydidXR0b25fdXBkYXRlJywgJ2J1dHRvbl9ibHVlJ10sXG4gICAgICBhc3luYyAoKSA9PiB0aGlzLnVwZGF0ZUNhcihhcHAsIGFwcC5zZWxlY3RlZENhcklkKVxuICAgICk7XG4gICAgYXBwLmZvcm1VcGRhdGVDYXIgPSBmb3JtVXBkYXRlQ2FyO1xuICAgIGNvbnN0IGJ1dHRvblVwZGF0ZSA9IGZvcm1VcGRhdGVDYXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgYnV0dG9uVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmQoZm9ybUNyZWF0ZUNhcik7XG4gICAgZm9ybVdyYXBwZXIuYXBwZW5kKGZvcm1VcGRhdGVDYXIpO1xuICAgIHJldHVybiBmb3JtV3JhcHBlcjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXJyb3JNYXNzZWdlKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NOYW1lID0gJ2lucHV0X19lcnJvcic7XG4gICAgZXJyb3JNZXNzYWdlRWwuaW5uZXJIVE1MID0gJ1BsZWFzZSBlbnRlciBhIG5hbWUnO1xuICAgIHJldHVybiBlcnJvck1lc3NhZ2VFbDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVG9vbEJ1dHRvbnNSb3coYXBwOiBBcHApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zV3JhcHBlci5jbGFzc05hbWUgPSAndG9vbC1idXR0b25zJztcblxuICAgIGNvbnN0IGJ1dHRvblJhY2UgPSBCdXR0b24uY3JlYXRlKCdSYWNlJywgWydidXR0b25fcmFjZScsICdidXR0b25fZ3JlZW4nXSwgKCkgPT4gYXBwLnN0YXJ0UmFjZSgpKTtcbiAgICBhcHAuYnV0dG9uUmFjZSA9IGJ1dHRvblJhY2U7XG4gICAgY29uc3QgYnV0dG9uUmVzZXQgPSBCdXR0b24uY3JlYXRlKCdSZXNldCcsIFsnYnV0dG9uX3Jlc2V0JywgJ2J1dHRvbl9ncmVlbiddLCAoKSA9PiB7XG4gICAgICBhcHAucmVzZXRSYWNlKCk7XG4gICAgfSk7XG4gICAgYXBwLmJ1dHRvblJlc2V0ID0gYnV0dG9uUmVzZXQ7XG4gICAgY29uc3QgYnV0dG9uR2VuZXJhdGUgPSBCdXR0b24uY3JlYXRlKCdHZW5lcmF0ZScsIFsnYnV0dG9uX2dlbmVyYXRlJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHRoaXMuZ2VuZXJhdGVDYXJzKGFwcCkpO1xuICAgIGFwcC5idXR0b25HZW5lcmF0ZSA9IGJ1dHRvbkdlbmVyYXRlO1xuICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChidXR0b25SYWNlKTtcbiAgICBidXR0b25zV3JhcHBlci5hcHBlbmQoYnV0dG9uUmVzZXQpO1xuICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChidXR0b25HZW5lcmF0ZSk7XG5cbiAgICByZXR1cm4gYnV0dG9uc1dyYXBwZXI7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUmFjZVRhYmxlKGFwcDogQXBwLCBjYXJzOiBDYXJbXSk6IEhUTUxFbGVtZW50IHtcbiAgICBhcHAucmFjZVRhYmxlID0gbmV3IFJhY2VUYWJsZSgpO1xuICAgIGNvbnN0IHRhYmxlID0gYXBwLnJhY2VUYWJsZS5jcmVhdGVUYWJsZShjYXJzLCBhcHApO1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDYXJzQ291bnRlcihhcHA6IEFwcCwgbnVtOiBudW1iZXIpIHtcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdW50ZXIuY2xhc3NOYW1lID0gJ2NhcnMtY291bnRlcic7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBgR2FyYWdlICgke251bX0pYDtcbiAgICBhcHAuY291bnRlckdhcmFnZSA9IGNvdW50ZXI7XG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQoY291bnRlcik7XG4gIH1cblxuICBwdWJsaWMgc2V0Q2Fyc0NvdW50ZXIoYXBwOiBBcHAsIG51bTogbnVtYmVyKSB7XG4gICAgYXBwLmNvdW50ZXJHYXJhZ2UuaW5uZXJIVE1MID0gYEdhcmFnZSAoJHtudW19KWA7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUGFnZUNvdW50ZXIoYXBwOiBBcHAsIG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgY291bnRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3VudGVyLmNsYXNzTmFtZSA9ICdwYWdlLWNvdW50ZXInO1xuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYFBhZ2UgIyR7bnVtfWA7XG4gICAgYXBwLnBhZ2VOdW1iZXJHYXJhZ2VFbGVtID0gY291bnRlcjtcbiAgICB0aGlzLm1haW5Db250ZW50LmFwcGVuZChjb3VudGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdlQ291bnRlcihhcHA6IEFwcCkge1xuICAgIGFwcC5wYWdlTnVtYmVyR2FyYWdlRWxlbS5pbm5lckhUTUwgPSBgUGFnZSAjJHthcHAucGFnZU51bWJlckdhcmFnZX1gO1xuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwKSB7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2luYXRpb24uY2xhc3NOYW1lID0gJ3BhZ2luYXRpb24nO1xuICAgIGNvbnN0IGJ1dHRvblByZXYgPSBCdXR0b24uY3JlYXRlKCdQcmV2aW91cycsIFsncGFnaW5hdGlvbl9fYnV0dG9uJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRQcmV2UGFnZS5iaW5kKHRoaXMsIGFwcCkoKTtcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25OZXh0ID0gQnV0dG9uLmNyZWF0ZSgnTmV4dCcsIFsncGFnaW5hdGlvbl9fYnV0dG9uJywgJ2J1dHRvbl9ibHVlJ10sICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXROZXh0UGFnZS5iaW5kKHRoaXMsIGFwcCkoKTtcbiAgICB9KTtcbiAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbkdhcmFnZSA9IHsgcHJldjogYnV0dG9uUHJldiwgbmV4dDogYnV0dG9uTmV4dCB9O1xuICAgIHBhZ2luYXRpb24uYXBwZW5kKGJ1dHRvblByZXYpO1xuICAgIHBhZ2luYXRpb24uYXBwZW5kKGJ1dHRvbk5leHQpO1xuICAgIHRoaXMubWFpbkNvbnRlbnQuYXBwZW5kKHBhZ2luYXRpb24pO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwLCBjYXJzOiBDYXJzRGF0YSkge1xuICAgIGlmIChhcHAucGFnZU51bWJlckdhcmFnZSA9PT0gMSkge1xuICAgICAgYXBwLnBhZ2luYXRpb25CdXR0b25HYXJhZ2UucHJldi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uR2FyYWdlLnByZXYuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE1hdGguY2VpbChOdW1iZXIoY2Fycy50b3RhbENvdW50KSAvIDcpID09PSBhcHAucGFnZU51bWJlckdhcmFnZSB8fCBOdW1iZXIoY2Fycy50b3RhbENvdW50KSA9PT0gMCkge1xuICAgICAgYXBwLnBhZ2luYXRpb25CdXR0b25HYXJhZ2UubmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uR2FyYWdlLm5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0TmV4dFBhZ2UoYXBwOiBBcHApIHtcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZSArPSAxO1xuICAgIHRoaXMuc2V0UGFnZUNvdW50ZXIoYXBwKTtcbiAgICB0aGlzLnVwZGF0ZUNhcnNUYWJsZShhcHApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0UHJldlBhZ2UoYXBwOiBBcHApIHtcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZSAtPSAxO1xuICAgIHRoaXMuc2V0UGFnZUNvdW50ZXIoYXBwKTtcbiAgICB0aGlzLnVwZGF0ZUNhcnNUYWJsZShhcHApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVDYXJzVGFibGUoYXBwOiBBcHApIHtcbiAgICBjb25zdCBjYXJzRGF0YSA9IGF3YWl0IEFwaS5nZXRDYXJzKGFwcC5wYWdlTnVtYmVyR2FyYWdlLCA3KTtcbiAgICBhcHAucmFjZVRhYmxlLnRhYmxlLnJlbW92ZSgpO1xuICAgIGFwcC5yYWNlVGFibGUudGFibGUgPSBhcHAucGFnZUdhcmFnZS5jcmVhdGVSYWNlVGFibGUoYXBwLCBjYXJzRGF0YS5jYXJzKTtcbiAgICBhcHAucGFnZU51bWJlckdhcmFnZUVsZW0uYWZ0ZXIoYXBwLnJhY2VUYWJsZS50YWJsZSk7XG4gICAgdGhpcy5zZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHAsIGNhcnNEYXRhKTtcbiAgICB0aGlzLnNldENhcnNDb3VudGVyKGFwcCwgcGFyc2VJbnQoY2Fyc0RhdGEudG90YWxDb3VudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVDYXIoYXBwOiBBcHAsIGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBhcHAuZm9ybVVwZGF0ZUNhci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfdGV4dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRDb2xvciA9IGFwcC5mb3JtVXBkYXRlQ2FyLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9jb2xvcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbmFtZSA9IGlucHV0VGV4dC52YWx1ZTtcbiAgICBjb25zdCBjb2xvciA9IGlucHV0Q29sb3IudmFsdWU7XG4gICAgYXBwLnNlbGVjdGVkQ2FyTmFtZS5pbm5lckhUTUwgPSBuYW1lO1xuICAgIENhckVsLmNoYW5nZUNvbG9yKGNvbG9yLCBhcHAuc2VsZWN0ZWRDYXJTVkcpO1xuICAgIENhckVsLmNoYW5nZU5hbWUobmFtZSwgYXBwLnNlbGVjdGVkQ2FyTmFtZSk7XG4gICAgYXdhaXQgQXBpLnVwZGF0ZUNhcihpZCwgbmFtZSwgY29sb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZW5lcmF0ZUNhcnMoYXBwOiBBcHApIHtcbiAgICBmdW5jdGlvbiBnZXRSYW5kb208VD4oYXJyYXk6IFRbXSk6IG51bWJlciB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgICB9XG4gICAgYXBwLmJ1dHRvbkdlbmVyYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBhcHAuYnV0dG9uUmFjZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgYXBwLmJ1dHRvblJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCBkb3dubG9hZE1hc3NlZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb3dubG9hZE1hc3NlZ2UuY2xhc3NOYW1lID0gJ2Rvd25sb2FkLW1hc3NlZ2UnO1xuICAgIGRvd25sb2FkTWFzc2VnZS5pbm5lckhUTUwgPSAnQ2FycyBhcmUgY3JlYXRlZC4uLic7XG4gICAgYXBwLmJ1dHRvbkdlbmVyYXRlLmFmdGVyKGRvd25sb2FkTWFzc2VnZSk7XG4gICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICBsZXQgY29sb3I6IHN0cmluZztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb2xvciA9IENPTE9SU1tnZXRSYW5kb20oQ09MT1JTKV07XG4gICAgICBjb25zdCBtYWtlciA9IE1BS0VSU1tnZXRSYW5kb20oTUFLRVJTKV07XG4gICAgICBuYW1lID0gYCR7bWFrZXIubWFrZXJ9ICR7bWFrZXIubW9kZWxzW2dldFJhbmRvbShtYWtlci5tb2RlbHMpXX1gO1xuICAgICAgYXdhaXQgQXBpLmNyZWF0ZUNhcihuYW1lLCBjb2xvcik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2Fyc1RhYmxlKGFwcCk7XG5cbiAgICBhcHAuYnV0dG9uR2VuZXJhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBhcHAuYnV0dG9uUmFjZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGFwcC5idXR0b25SZXNldC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvd25sb2FkTWFzc2VnZS5yZW1vdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVNZXNzYWdlQWJvdXRXaW5uZXIobmFtZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXNzYWdlV3JhcHBlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlV3JhcHBlci5jbGFzc05hbWUgPSAnd2lubmVyJztcbiAgICBjb25zdCB3aW5uZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2lubmVyLmNsYXNzTmFtZSA9ICd3aW5uZXJfX3RleHQnO1xuICAgIHdpbm5lci5pbm5lckhUTUwgPSBgV2lubmVyOiAke25hbWV9IFske3RpbWV9c11gO1xuICAgIG1lc3NhZ2VXcmFwcGVyLmFwcGVuZCh3aW5uZXIpO1xuICAgIHJldHVybiBtZXNzYWdlV3JhcHBlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJhZ2VQYWdlVmlldztcbiIsImltcG9ydCAnLi9wYWdlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvYXBwJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2L25hdic7XG5cbmNsYXNzIFBhZ2Uge1xuICBwdWJsaWMgbWFpbkNvbnRlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG4gICAgdGhpcy5tYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgY29uc3QgbmF2ID0gbmV3IE5hdmlnYXRpb24oYXBwKS5yZW5kZXIoKTtcbiAgICB0aGlzLm1haW5Db250ZW50LmFwcGVuZChuYXYpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm1haW5Db250ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckNvbnRlbnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9hcHAvYXBwJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vYXBwL2FwaSc7XG5pbXBvcnQgV2lubmVyVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy93aW5uZXJzLXRhYmxlL3dpbm5lci10YWJsZSc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgV2lubmVyIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbmNsYXNzIFdpbm5lcnNQYWdlVmlldyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgY29uc3Qgd2lubmVyVGFibGUgPSBuZXcgV2lubmVyVGFibGUoKTtcbiAgICBhcHAud2lubmVyc1RhYmxlID0gd2lubmVyVGFibGU7XG4gICAgY29uc3Qgd2lubmVyc0NvdW50ZXcgPSB0aGlzLmNyZWF0ZVdpbm5lcnNDb3VudGVyKGFwcCk7XG4gICAgY29uc3QgbnVtYmVyUGFnZSA9IHRoaXMuY3JlYXRlUGFnZU51bWJlcihhcHAsIGFwcC5wYWdlTnVtYmVyV2lubmVyKTtcbiAgICB0aGlzLm1haW5Db250ZW50LmFwcGVuZCh3aW5uZXJzQ291bnRldyk7XG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQobnVtYmVyUGFnZSk7XG4gICAgdGhpcy5hZGRQYWdpbmF0aW9uQnV0dG9ucyhhcHApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZVBhZ2UoYXBwOiBBcHApIHtcbiAgICBhcHAud2lubmVyc1RhYmxlLnJvd3MuZm9yRWFjaCgocm93KSA9PiByb3cucmVtb3ZlKCkpO1xuICAgIGNvbnN0IHRhYmxlID0gYXdhaXQgYXBwLndpbm5lcnNUYWJsZS5jcmVhdGUoYXBwLCBhcHAud2lubmVyc1RhYmxlU29ydCwgYXBwLndpbm5lcnNUYWJsZU9yZGVyKTtcbiAgICB0aGlzLnNldFdpbm5lcnNDb3VudGVyKGFwcCk7XG4gICAgdGhpcy5zZXRQYWdlTnVtYmVyKGFwcCk7XG4gICAgdGhpcy5tYWluQ29udGVudC5hcHBlbmQodGFibGUpO1xuICAgIGlmIChhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5wcmV2ICYmIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLm5leHQpIHtcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLnByZXYucmVtb3ZlKCk7XG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5uZXh0LnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLm1haW5Db250ZW50LmFwcGVuZCh0aGlzLmFkZFBhZ2luYXRpb25CdXR0b25zKGFwcCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQYWdlTnVtYmVyKGFwcDogQXBwLCBudW06IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdW50ZXIuY2xhc3NOYW1lID0gJ3BhZ2UtY291bnRlcic7XG4gICAgY291bnRlci5pbm5lckhUTUwgPSBgUGFnZSAjJHtudW19YDtcbiAgICBhcHAucGFnZU51bWJlcldpbm5lckVsZW0gPSBjb3VudGVyO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2VOdW1iZXIoYXBwOiBBcHApIHtcbiAgICBhcHAucGFnZU51bWJlcldpbm5lckVsZW0uaW5uZXJIVE1MID0gYFBhZ2UgIyR7YXBwLnBhZ2VOdW1iZXJXaW5uZXJ9YDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVXaW5uZXJzQ291bnRlcihhcHA6IEFwcCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb3VudGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdW50ZXIuY2xhc3NOYW1lID0gJ2NhcnMtY291bnRlcic7XG4gICAgYXBwLmNvdW50ZXJXaW5uZXIgPSBjb3VudGVyO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNldFdpbm5lcnNDb3VudGVyKGFwcDogQXBwKSB7XG4gICAgY29uc3Qgd2lubmVyRGF0YSA9IGF3YWl0IEFwaS5nZXRXaW5uZXJzKCk7XG4gICAgYXBwLmNvdW50ZXJXaW5uZXIuaW5uZXJIVE1MID0gYFdpbm5lcnMoJHt3aW5uZXJEYXRhLndpbm5lcnMubGVuZ3RofSlgO1xuICAgIHRoaXMuc2V0UGFnaW5hdGlvbkJ1dHRvbnMoYXBwLCB3aW5uZXJEYXRhLndpbm5lcnMpO1xuICB9XG5cbiAgcHVibGljIGFkZFBhZ2luYXRpb25CdXR0b25zKGFwcDogQXBwKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBhZ2luYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdpbmF0aW9uLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uJztcbiAgICBjb25zdCBidXR0b25QcmV2ID0gQnV0dG9uLmNyZWF0ZSgnUHJldmlvdXMnLCBbJ3BhZ2luYXRpb25fX2J1dHRvbicsICdidXR0b25fYmx1ZSddLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0UHJldlBhZ2UuYmluZCh0aGlzLCBhcHApKCk7XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IEJ1dHRvbi5jcmVhdGUoJ05leHQnLCBbJ3BhZ2luYXRpb25fX2J1dHRvbicsICdidXR0b25fYmx1ZSddLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0TmV4dFBhZ2UuYmluZCh0aGlzLCBhcHApKCk7XG4gICAgfSk7XG4gICAgYXBwLnBhZ2luYXRpb25CdXR0b25XaW5uZXIgPSB7IHByZXY6IGJ1dHRvblByZXYsIG5leHQ6IGJ1dHRvbk5leHQgfTtcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChidXR0b25QcmV2KTtcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChidXR0b25OZXh0KTtcbiAgICByZXR1cm4gcGFnaW5hdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHA6IEFwcCwgd2lubmVyczogV2lubmVyW10pIHtcbiAgICBpZiAoYXBwLnBhZ2VOdW1iZXJXaW5uZXIgPT09IDEpIHtcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLnByZXYuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHAucGFnaW5hdGlvbkJ1dHRvbldpbm5lci5wcmV2LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChNYXRoLmNlaWwoTnVtYmVyKHdpbm5lcnMubGVuZ3RoKSAvIDEwKSA9PT0gYXBwLnBhZ2VOdW1iZXJXaW5uZXIgfHwgTnVtYmVyKHdpbm5lcnMubGVuZ3RoKSA9PT0gMCkge1xuICAgICAgYXBwLnBhZ2luYXRpb25CdXR0b25XaW5uZXIubmV4dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcC5wYWdpbmF0aW9uQnV0dG9uV2lubmVyLm5leHQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0TmV4dFBhZ2UoYXBwOiBBcHApIHtcbiAgICBhcHAucGFnZU51bWJlcldpbm5lciArPSAxO1xuICAgIGNvbnN0IHdpbm5lckRhdGEgPSBhd2FpdCBBcGkuZ2V0V2lubmVycygpO1xuICAgIGNvbnN0IHdpbm5lcnMgPSB3aW5uZXJEYXRhLndpbm5lcnM7XG4gICAgdGhpcy5zZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHAsIHdpbm5lcnMpO1xuICAgIHRoaXMudXBkYXRlUGFnZShhcHApO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0UHJldlBhZ2UoYXBwOiBBcHApIHtcbiAgICBhcHAucGFnZU51bWJlcldpbm5lciAtPSAxO1xuICAgIGNvbnN0IHdpbm5lckRhdGEgPSBhd2FpdCBBcGkuZ2V0V2lubmVycygpO1xuICAgIGNvbnN0IHdpbm5lcnMgPSB3aW5uZXJEYXRhLndpbm5lcnM7XG4gICAgdGhpcy5zZXRQYWdpbmF0aW9uQnV0dG9ucyhhcHAsIHdpbm5lcnMpO1xuICAgIHRoaXMudXBkYXRlUGFnZShhcHApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbm5lcnNQYWdlVmlldztcbiIsImV4cG9ydCBlbnVtIFNvcnRUeXBlcyB7XG4gIElEID0gJ2lkJyxcbiAgV0lOUyA9ICd3aW5zJyxcbiAgVElNRSA9ICd0aW1lJyxcbn1cblxuZXhwb3J0IGVudW0gT3JkZXJUeXBlIHtcbiAgQVNCID0gJ0FTQycsXG4gIERFU0MgPSAnREVTQycsXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=