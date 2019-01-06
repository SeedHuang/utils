export function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj));
};

export function isNotNull (obj) {
  debugger;
  return obj !== null && obj !== undefined;
}

export function isNotEmpty (str) {
  return isNotNull(str) && str !== '';
}
