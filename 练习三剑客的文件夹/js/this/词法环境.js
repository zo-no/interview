// https://juejin.cn/post/6844903741607378958
//情况一
// function foo() {
//   console.log(a);
// }

// function bar() {
//   var a = 3;
//   foo();
// }

// var a = 2;
// bar();//2
// 情况二
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();
