// 错误很多
Object.assign({}, obj1, obj2);
const obj2 = [...obj1, ...obj2];
Obj.slice(0);
obj.concat();
const shallowCopy = (obj) => {
  if (typeof obj !== "object") return;
  // let newObj = Object.is(obj) ? {} : [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
