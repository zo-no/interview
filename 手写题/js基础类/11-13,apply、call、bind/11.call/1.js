Function.prototype.MyCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  obj = obj || window; // 如果没有传入context，则默认为window
  obj.fn = this; // this指向调用call的函数

  //若只传入一个参数（该参数包含context）
  // let args = [...arguments].slice(1); // 获取参数,并去除第一个this参数
  
  let result = obj.fn(...args); // 执行函数
  delete obj.fn; // 删除fn属性
  return result;
};
