//
const obj = JSON.parse(JSON.stringify(obj));
// lodash
// deepCopy
function deepCopy(obj) {
  if (typeof obj === "object" || !obj) return;
  let newObj = {};
  for (let key in obj) {
    if(obj.hasOwn)
    newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
  }
  return newObj;
}
