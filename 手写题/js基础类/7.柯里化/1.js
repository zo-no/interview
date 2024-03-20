function add(a) {
  function sum(b) {
    // 使用闭包
    a = b ? a + b : a; // 累加
    return sum;
  }
  sum.toString = function () {
    // 只在最后一次调用
    return a;
  };
  return sum; // 返回一个函数
}

add(1); // 1
add(1)(2); // 3
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10

// 升级写法
function add() {
  // 1 把所有参数转换成数组
  let args = Array.prototype.slice.call(arguments);
  // 2 再次调用add函数，传递合并当前与之前的参数
  let fn = function () {
    let arg_fn = Array.prototype.slice.call(arguments);
    return add.apply(null, args.concat(arg_fn));
  };
  // 3 最后默认调用，返回合并的值
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b;
    });
  };
  return fn;
}

// ES6写法
function add() {
  let args = [...arguments];
  let fn = function () {
    return add.apply(null, args.concat([...arguments]));
  };
  fn.toString = () => args.reduce((a, b) => a + b);
  return fn;
}
