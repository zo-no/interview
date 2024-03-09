function th(func, wait) {
  let context, args;
  let previous = 0;
  return function () {
    context = this;
    args = arguments;
    let now = new Date();
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}
