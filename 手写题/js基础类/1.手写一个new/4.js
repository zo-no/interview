// juejin.cn/post/6844903956859060231?searchId=20240320120823581B901448AD0E169F01
function myNew(func, ...arg) {
  //判断是否为对象
  if (typeof func !== "function") {
    return new TypeError("not a function");
  }
  //创建一个对象并绑定原型
  let obj = Object.create(func.prototype);
  //通过apply传入值、参数、返回值
  let res = func.apply(obj, ...arg);
  //判断这个返回值，若是object||function就返回对象，否则就创建对象
  const flag =
    result && (typeof res === "object" || typeof result === "function");
  return flag ? res : obj;
}
