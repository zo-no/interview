/**
 * 1.新建一个对象
 * 2.将新对象的__proto__指向构造函数的prototype//由于__proto__是非标准属性，所以可以使用Object.create()方法实现1.2步
 * 3.将构造函数的this指向新对象
 * 4.返回新对象
 * @param {Function} constructor
 * @param  {...any} args
 * */
function myNew(constructor, ...args) {
  //可有可无
  // if (typeof constructor !== "function") {
  //   throw new Error("constructor must be a function");
  // }

  const obj = Object.create(constructor.prototype);
  obj.apply(constructor, ...args);
  return obj;
}
