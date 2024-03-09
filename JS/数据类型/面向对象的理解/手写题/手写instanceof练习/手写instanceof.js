/*
@Date		:2023/12/08 18:13:44
@Author		:zono
@Description:手写一个instanceof
*/

//首先要回顾getPrototypeOf(),很像算法题

function myinstanceof(obj, proto) {
  let object = Object.getPrototypeOf(obj);
  while (object) {
    if (object === proto.prototype) {
      return true;
    }
    object = Object.getPrototypeOf(object);
  }
  return false;
}

function Person(name) {
  this.name = name;
}

let bob = new Person("bob");
// console.log(bob instanceof Person); //原生检测
// console.log(bob);
// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(bob));
console.log(myinstanceof(bob, Person));

function Point() {
  this.join = 0;
}
console.log(myinstanceof(bob, Point));
