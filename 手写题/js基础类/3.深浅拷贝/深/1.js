// 1.
obj2 = JSON.parse(JSON.stringify(obj1));
// 2.lodash的_.cloneDeep
var _ = require("lodash");
var obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3],
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f); // false
// 3.手写
function deepCopy(obj) {
  if (!object || typeof object !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
