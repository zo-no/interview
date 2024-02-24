function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left),
    target = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === target) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
