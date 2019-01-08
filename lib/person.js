"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Person {
  constructor() {
    _defineProperty(this, "_name", 'SeedHuang');

    _defineProperty(this, "_age", 20);

    _defineProperty(this, "Name", () => {
      return this._name;
    });

    _defineProperty(this, "Age", () => {
      return this._age;
    });
  }

}

exports.default = Person;