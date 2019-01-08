"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;
exports.isNotNull = isNotNull;
exports.isNotEmpty = isNotEmpty;
exports.createAPerson = createAPerson;
const myName = "My Name Seed Huang";

function deepClone(obj) {
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

function ThisA() {
  alert(myName);
}

ThisA();