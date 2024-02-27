//可以直接利用arr.flat(depth)实现

/**
 * 递归法
 * */
//模拟数据
let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //若数据是数组，则递归调用flatten
      //使用concat连接数组
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten(arr));
// flatten(arr);

/**
 * reduce法，本质上是递归法的优化
 * */
function flatten2(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten2(cur) : cur);
  }, []);
}

console.log(flatten2(arr));

/**
 * 拓展运算符法
 * arr.some()判断数组中是否有数组
 * some() 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。
 * */
function flatten3(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

/**
 * toString法
 * */
function flatten4(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => +item);
}

console.log(flatten3(arr));

/**
 * ES6的flat方法
 * */
console.log(arr.flat(Infinity));
