function myCreate(obj) {
  const F = () => {};
  F.prototype = obj;
  return new F();
}
