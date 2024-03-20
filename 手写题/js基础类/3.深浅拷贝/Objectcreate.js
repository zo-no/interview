function Person(name) {
  this.name = name;
  this.permission = ["user", "salary", "vacation"];
}
Person.prototype.say = function () {
  console.log(`${this.name} 说话了`);
};

function Staff(age) {
  this.age = age;
}
Staff.prototype = new Person("张三");

const zs = new Staff(12);

console.log(Staff);
console.log(zs);

Person.name = 10;
// console.log(zs.age);
console.log(zs.name);

debugger;
