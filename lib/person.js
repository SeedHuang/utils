"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = function Person() {
  var _this = this;

  _classCallCheck(this, Person);

  _defineProperty(this, "_name", 'SeedHuang');

  _defineProperty(this, "_age", 20);

  _defineProperty(this, "Name", function () {
    return _this._name;
  });

  _defineProperty(this, "Age", function () {
    return _this._age;
  });
};

exports.default = Person;