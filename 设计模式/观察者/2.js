// https://www.bookstack.cn/read/es6-3rd/spilt.3.docs-reflect.md

// 订阅函数
const queuedObservers = new Set();
// 加入订阅
const observe = (fn) => queuedObservers.add(fn);
// 被观察的proxy
const observable = (obj) =>
  new Proxy(obj, {
    set: (target, key, value, receiver) => {
      const result = Reflect.set(target, key, value, receiver);
      queuedObservers.forEach((observer) => observer());
      return result;
    },
  });

observe(function print() {
  console.log(`${person.name}, ${person.age}`);
});

//调用
const person = observable({
  name: "张三",
  age: 20,
});

person.name = "李四";
// 输出
// 李四, 20
