Function.prototype.myCall = function (obj, ...arr) {
  if (typeof this !== "function") {
    return;
  }
  obj = obj || window;
  obj.fn = this;
  res = obj.fn(...arg);
  delete obj.fn; //删除对象的一个属性
  return res;
};

Function.prototype.myApply = function (context, params) {
  if (typeof this !== "function") console.error("type error");
  obj = obj || window;
  obj.fn = this;
  res = obj.fn(...params);
  delete context;
};

Function.prototype.myBind = function (context, params) {
  if (typeof this !== "function") console.error("type error");
  obj = obj || window;
  let fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
