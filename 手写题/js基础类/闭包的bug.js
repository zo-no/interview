function parent() {
  let obj = {
    a: 1,
  };
  return function child(key) {
    return obj[key];
  };
}
Object.prototype.c = 123;


Object.defineProperty(Object.prototype, "c", {
  get: function () {
    console.log(this);
    return 321;
  },
});


let getObjValue = parent();
console.log(getObjValue("c"));
debugger;
