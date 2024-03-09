function fd(func, wait) {
  let context, arg, timeout;
  return function () {
    context = this;
    args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
