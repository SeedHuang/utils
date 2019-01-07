"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;
exports.isNotNull = isNotNull;
exports.isNotEmpty = isNotEmpty;

var _Person = _interopRequireDefault(require("./Person"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

;

function isNotNull(obj) {
  debugger;
  return obj !== null && obj !== undefined;
}

function isNotEmpty(str) {
  return isNotNull(str) && str !== '';
}