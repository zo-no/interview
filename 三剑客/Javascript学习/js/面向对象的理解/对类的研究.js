/*
@Date		:2023/12/14 15:13:02
@Author		:zono
@Description:研究类
*/
// ---------------------------------------------------------------
//类和构造函数的对比
class Preson {
  constructor(name) {
    this.name = name;
  }
}

function Preson2(name) {
  this.name = name;
}

zono1 = new Preson("zono1");
zono2 = new Preson2("zono2");
console.log(Preson.prototype);
console.log(Preson2.prototype);
console.log(zono1);
console.log(zono1.constructor === Preson);
console.log(zono2.constructor === Preson2);

console.log(Preson.constructor);
zono3 = new Preson.constructor("zono3");
console.log(zono3);

// ---------------------------------------------------------------
// 类的不同情况
class Parent {
  //会直接被添加到实例上的属性
  //1.实例公有属性（实例成员）
  constructor() {
    this.x = 1;
  }
  num = 2; //与构造函数(constructor)中的this.x = 1一样,它们都是在构造函数中加入this.xxx
  getXXX = () => {
    //类公有方法,因为箭头函数的this指向实例对象，类似于ES5中直接this.xxx= function(){}
    //所以这个方法也是添加到实例上的,是可以枚举，可配置，可重写的，（因为方法具有重用的可能，所以为了性能一般不用）
    console.log(this.x);
  };

  //2.被添加到原型上（原型方法与访问器）
  getX() {
    //也是类公有方法,
    //与构造函数(constructor)中,constructor.prototype.xxx = function(){}
    //但它是给Parent.prototype添加的公共方法，不可枚举，不可配置，不可重写
    // 会被复用避免每次new都创建一个新的方法
    console.log(this.x);
    // console.log("getX");
  }
  // 可以给属性加上访问器

  //3.类私有属性,只能通过类名调用（静态类方法）
  static x0 = 3; //类私有属性,实现原理一个和下面y0相关
  static getX0() {
    //类似于直接在function中写function xxx(){}
    console.log(this.x);

    //4.迭代器方法、生成器方法
    
  } //类私有方法
}
Parent.y0 = 100; //会变成类的静态属性,只能通过类名调用。
Parent.prototype.y = 200; //实例公有属性，但是不会添加到实例上,属性一般不会被复用，所以这种办法很少用。

let p = new Parent();
//模块字符串输出,不能使用单引号和双引号，只能使用反引号
//   console.log(`父原型`, Parent.prototype);
//   console.log(`实例原型`, p.__proto__); //子原型
console.log(`实例`, p);
//   console.log(
//     `父原型和实例原型比较Parent.prototype === p.__proto__`,
//     Parent.prototype === p.__proto__
//   ); //true
//   console.log(Parent.prototype.constructor === Parent);
console.log(Parent.prototype.constructor === p.__proto__.constructor);
q = new p.__proto__.constructor();
o = new Parent();
console.log(o === p); //false,因为q是新的实例,实例之间是不相等的



// ---------------------------------------------------------------
// 类的继承

debugger;
