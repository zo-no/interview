/**
 * 手写一个new
 * @param {type}
 * @returns
 * */
function _new(Constructor, ...args) {
  // var obj = new Object();
  // obj.__proto__ = Constructor.prototype;
  let obj = Object.create(Constructor.prototype);
  var ret = Constructor.apply(obj, arguments);
  // 如果构造函数返回的是对象则返回构造函数的返回值，否则返回obj
  return typeof ret === "object" ? ret : obj;
}
