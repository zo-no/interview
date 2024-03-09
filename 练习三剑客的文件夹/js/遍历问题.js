const { off } = require("process");
const { symbolName } = require("typescript");

/*
@Date		:2023/12/10 10:24:13
@Author		:zono
@Description:区别Iterator和for in
https://zhuanlan.zhihu.com/p/640412368
*/
// ---------------------------------------------------------------
// var o1 = { p1: 123 };
// var o2 = Object.create(o1, {
//   p2: { value: "abc", enumerable: true },
// });
// console.log(Object.keys(o2)); //不会遍历继承的属性

// console.log(Reflect.ownKeys(o2)); //也不会遍历继承的属性，包含对象自身的（不含继承的）所有键名。
// ---------------------------------------------------------------
//打印super
const proto = {
  foo1: "hello",
};

const obj = {
  foo2: "world",
  find() {
    return super.foo;
  },
};

// Object.assign(obj, proto);
console.log(obj);
jiego = [1, 2, 3];
console.log(Array);
console.log(jiego[symbolName])
//Iterator
// let arr = ["foo", "bar"];
// console.log(arr[Symbol.iterator]);
// console.log(arr);
// let iter = arr[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next); //没有原型
// console.log(iter.next());
// console.log(iter.next());
debugger;
