// 实现一个组合函数，可以组合所有函数
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

function compose(...fn) {
  return fn.reduce(
    (result, it) => {
      return (...args) => {
        return result(it(...args));
      };
    },
    (it) => it //无值则返回本身
  );
}
