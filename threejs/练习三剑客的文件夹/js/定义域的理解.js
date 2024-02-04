// //变量提升
//www.cnblogs.com/jiangweichen88/p/10508905.html
// 在JS的预编译期，声明式函数将会先被提取出来，然后才按顺序执行js代码
// 变量未定义之前使用，会返回undefined。
// function a() {
//   var b = 1;
//   c = 2;
//   let d = 3;
// }
// a();
// console.log(c); //2
// // console.log(b); // b is not defined
// console.log(d); //d is not defined
var b = 10;
function b() {
  b = 20;
  console.log(b); //输出函数
}
console.log(b());

(function b() {
  b = 20;
  console.log(b); //输出函数
})();
