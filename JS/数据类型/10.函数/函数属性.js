var a = function () {
  console.log("这是a函数");
};
a.fn = function () {
  return this;
};
console.log(a.fn()); // 这是a函数
debugger;
