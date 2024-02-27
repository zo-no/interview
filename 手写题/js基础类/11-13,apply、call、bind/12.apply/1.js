/**
 * @Date        2024/02/25 14:38:57
 * @Author      zono
 * @Description 写法和call类似，只是参数不同
 * */
Function.prototype.MyApply = function (context, params) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  context = context || window; // 如果没有传入context，则默认为window
  context.fn = this; // this指向调用call的函数

  let result = context.fn(...params); // 执行函数
  delete context.fn; // 删除fn属性
  return result;
};
