/*
@Date		:2023/12/08 13:57:46
@Author		:zono
@Description:构造函数的理解
*/

// 1.构造函数对静态语言中类成员的模拟
function Person(name, age) {
  this.name = name;
  this.age = age;
  function say1() {
    // 构造函数内部的一个私有函数，它对外部不可见。每个实例对象都无法直接访问或调用该函数。
    console.log(1);
  }

  this.say2 = function () {
    //直接继承到实例
    console.log(2);
  };
}

Person.prototype.say3 = function () {
  // 也是公有对象会在实例的Prototype中,
  console.log(3);
};

// console.log(Person.prototype.constructor === Person); // true
//1.1 对构造函数创建实例方法和原型中方法的区别
// Person.prototype = () => {
//   console.log();
// };
// let zene = new Person("zene", 20);

console.log(zene);
console.log(Person.prototype);

debugger;
