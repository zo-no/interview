/**
 * @Date        2024/02/04 21:51:10
 * @Author      zono
 * @Description 手写一个new
 * */
const myNew = function (constructor, ...args) {
  // 把原有的构造函数的原型绑定到一个新对象上
  const obj = Object.create(constructor.prototype);
  // 
  var result = constructor.apply(obj, args);
  return (typeof result==='object'&&result!==null)?result:obj
}

