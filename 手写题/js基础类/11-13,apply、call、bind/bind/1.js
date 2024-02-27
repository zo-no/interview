Function.prototype.MyBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  let _this = this; // 保存this
  // 编写构造函数
  return function F() {
    // 处理函数使用new的情况
    return _this.apply(
      this instanceof F ? this : context,
      args.concat(...arguments)
    );
  };
};
