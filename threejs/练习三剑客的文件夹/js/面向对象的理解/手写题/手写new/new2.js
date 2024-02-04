function myNew(constructor, ...args) {
  /*
    @param:
    @Returns:
    newObj
    @Description:
    1.创建一个新对象
    2.把构造函数的原型this指向对象
    3.把构造函数执行，把值赋给对象
    4.验证赋值之后的值是否有值且为对象，有就返回赋值的result，否则返回原始object
    */
  // 转移原型
  // 法1
  // newObj = Object.create(constructor.prototype);
  // 法2
  newObj = {};
  Object.setPrototypeOf(newObj, constructor.prototype);

  //赋值
  // 法1基于es5,只用传一个参数
  // args = [].slice.call(arguments)
  // 法2
  var result = constructor.apply(newObj, args);
  return result !== null && typeof result === "object" ? result : newObj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 实例
// let zene = new Person("zene"); //原版
let zono = myNew(Person, "张三", 28);
console.log(zono);
