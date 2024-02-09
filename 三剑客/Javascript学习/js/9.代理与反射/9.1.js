/*9.1.1 */
// const target = {
//   id: "target",
// };
// const handler = {};

const { ref } = require("vue");

// const proxy = new Proxy(target, handler);

// console.log(proxy.id);
// console.log(target.id);

// proxy.id = "foo";
// console.log(proxy.id);
// console.log(target.id);
// console.log(target.id === proxy.id);
// console.log(target.hasOwnProperty("id"));
// console.log(proxy.hasOwnProperty("id"));

// console.log(target);
// console.log(proxy);
// console.log(target === proxy.target);

// ---------------------------------------------------------------
/*9.1.2 trap*/
// const target = {
//   foo: "bar",
// };
// const handler = {
//   get() {
//     return "handler override";
//   },
// };
// const proxy = new Proxy(target, handler);

// console.log(target.foo);
// console.log(proxy.foo);
// ---------------------------------------------------------------
/*原型问题 */
// const target = {
//   name: 'John'
// };

// const handler = {
//   get(target) {
//     console.log(`Getting property ${prop}`);
//     return Reflect.getPrototypeOf(...arguments)
//   }
// };

// const proxy = new Proxy(target, handler);

// // 原型是通过 Object.create 设置的
// console.log(Object.getPrototypeOf(proxy)); // 输出: {}

// // 被代理对象的原型并不会直接成为代理对象的原型
// console.log(Object.getPrototypeOf(proxy) === Object.getPrototypeOf(target)); // 输出: false
// ---------------------------------------------------------------
// 9.3.3属性验证
const target = {
  onlyNumbersGoHere: 0,
};
const proxy = new Proxy(target, {
  set(target, prop, value) {
    if (typeof value !== "number") {
      return false;
    } else {
      return Reflect.set(...arguments);
    }
  },
});

proxy.onlyNumbersGoHere = 1;
console.log(proxy.onlyNumbersGoHere);
proxy.onlyNumbersGoHere = "2";
console.log(proxy.onlyNumbersGoHere);
debugger;
