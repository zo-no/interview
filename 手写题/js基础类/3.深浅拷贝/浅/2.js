const Arr = {};
// 1
obj1 = Object.assign(Arr);
// 2
obj2 = { ...Arr, ...Arr };
// 3
obj3 = Arr.slice(0);
// 4
obj4 = Arr.concat();
// 5
function shallowCopy(obj) {
  if (!object || typeof object !== "object") return;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
