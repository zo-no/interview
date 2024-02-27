/**
 * @Date        2024/02/26 14:42:07
 * @Author      zono
 * @Description
 * */
//1
const newObj1 = object.assign({}, obj1, obj2);
//2
const newObj2 = { ...obj1, ...obj2 };
//3
const newObj3 = arr.slice(0);
//4
const newObj4 = arr.concat();
//5
function shallowCopy(obj) {
  if (typeof obj !== "object") return; //不是对象直接返回
  let res = Array.isArray(obj) ? [] : {}; //判断是数组还是对象
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    } //判断是自身属性
  }
  return res;
}
