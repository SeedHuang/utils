"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneDeep = cloneDeep;
exports.isNotNull = isNotNull;
exports.isNotEmpty = isNotEmpty;
exports.createAPerson = createAPerson;
var myName = "My Name Seed Huang";

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

;

function isNotNull(obj) {
  console.log("this is not null");
  return obj !== null && obj !== undefined;
}

function isNotEmpty(str) {
  console.log("is not empty");
  return isNotNull(str) && str !== '';
}

function createAPerson(str) {
  console.log("this is create A Person");
  return new Person();
}

cloneDeep({
  a: 1
});