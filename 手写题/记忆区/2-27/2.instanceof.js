function myInstanceof(left, right) {
  //获取查找原型
  const prototype = right.prototype;
  let proto = Object.getPrototypeOf(left);

  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
