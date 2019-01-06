export function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj));
};

export function isNotNull (obj) {
  return obj !== null || obj !== undefined;
}

export function isNotEmpty (str) {
  return isNotNull(str) && str !== '';
}
