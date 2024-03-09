/*
@Date		:2023/12/08 00:43:34
@Author		:zono
@Description:这是一个原生继承练习
https://juejin.cn/post/6844903696111763470
*/
//原型链继承
// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };

// function SubType() {
//   this.subproperty = false;
// }

// // 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
// SubType.prototype = new SuperType();

// // console.log(SubType.prototype);
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// }; //这里表现了,原型链继承的缺点,虽然我是想给SubType添加一个方法,但是SuperType的实例也会有这个方法

// var instance = new SubType();
// // console.log(instance); // true

//2. 构造函数继承
// function SuperType2() {
//   this.colors = ["red", "blue", "green"];
// }

// function SubType2() {
//   // 继承了SuperType
//   this.value = 1;
//   SuperType2.call(this);
// }
// var instance1 = new SubType2();
// console.log(instance1); // "red,blue,green"

//只能继承父类的实例属性和方法，不能继承原型属性/方法
//无法实现复用，每个子类都有父类实例函数的副本，影响性能

//3. 组合继承,原型链继承和构造函数继承的组合
// 组合继承
// function NOO() { }
// console.log(NOO.prototype);
// // zono = new NOO();
// // console.log(zono);
// // zono.consctructor = NOO;
// function NOO2() {}
// NOO2.prototype = new NOO();
// NOO2.prototype.constructor = NOO2;
// console.log(NOO2.prototype);
// console.log(NOO2.prototype === NOO.prototype);

//寄生组合继承
function NOO() {}
console.log(NOO.prototype);
function NOO2() {}

function inheritPrototype(subType, superType) {
  //就是把原型对象赋值给子类的原型对象，减少了一次调用父类构造函数
  // NOO2.prototype = new NOO();//这里会调用一次父类构造函数,修改后就无需调用了
  // NOO2.prototype.constructor = NOO2;
  const prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

inheritPrototype(NOO2, NOO);

console.log(NOO2.prototype);
console.log(NOO2.prototype === NOO.prototype);

debugger;
