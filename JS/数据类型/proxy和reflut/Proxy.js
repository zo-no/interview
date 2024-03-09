/*
@Date		:2023/12/09 13:53:29
@Author		:zono
@Description:练习proxy
*/
// 元编程
var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);
obj.name = 1;
console.log(obj);
obj2 = new Object();
// 1.原型相同，proxy相当于在实例上修改
// console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2));//true
console.log(Proxy);

debugger;
