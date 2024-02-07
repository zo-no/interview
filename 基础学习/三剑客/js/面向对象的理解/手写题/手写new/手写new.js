/*
@Date		:2023/12/08 18:15:10
@Author		:zono
@Description:手写一个new
*/
function myNew(constructor, ...args) {
  /*
  @Description:
  思路：
  1.创建一个对象
  2.把构造函数的原型绑定到对象上
  3.将构造函数执行，把值赋到对象中
  @param  :
  构造函数
  @Returns  :
  一个对象
  */
  //绑定原型(两种写法)
  let newObj = {};
  Object.setPrototypeOf(newObj, constructor.prototype);

  var obj = Object.create(constructor.prototype);
  //赋值
  var result = constructor.apply(obj, args);

  return typeof result === "object" && result !== null ? result : obj;
}

function _new(
  /* 构造函数 */ constructor
  /* 构造函数参数(因为是直接读输入所以这个形参，可以不写) */
) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return typeof result === "object" && result != null ? result : context;
}
// 两个方法的区别在于第一个方法使用了es6的语法解决参数

function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 实例
// let zene = new Person("zene"); //原版
let zono = myNew(Person, "张三", 28); //月
var actor = _new(Person, "张三", 28); //阮
console.log(zono);
console.log(actor);
debugger;
