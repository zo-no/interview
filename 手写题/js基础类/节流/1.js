function throttle(func, wait) {
  let context, args;
  let previous = 0; //初始事件

  return function () {
    let now = new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}
