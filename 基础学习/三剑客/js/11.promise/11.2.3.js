// const myPromise = new Promise((resolve, reject) => {
//   // 异步操作，可能成功也可能失败
//   const success = false; // 仅作示例，实际情况可能更复杂


//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// // 注册解决和拒绝时的回调函数
// myPromise.then(
//   // 按顺序分别为解决和拒绝时的回调函数
//   (onRejectReason) => {
//     console.log("Rejected:", onRejectReason);
//     // 执行失败拒绝时的操作
//   },
//   (onResolveResult) => {
//     console.log("Resolved:", onResolveResult);
//     console.log(); //打印then的所有参数
//     // 执行成功解决时的操作
//   }
// );

//11.2.3
//promise.then执行onResolve和onReject是根据上一个promise的状态来决定的，
// 而不是上一个promise的then的onResolve和onReject
// const originalPromise = new Promise((resolve, reject) => {
//   // 异步操作，可能成功也可能失败
//   const success = true; // 仅作示例，实际情况可能更复杂

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// const secondPromise = originalPromise.then(
//   (onResolveResult) => {
//     console.log("Resolved:", onResolveResult);
//     // 执行成功解决时的操作，并返回一个新的 Promise
//     return error("321"); // 返回的数据将成为下一个 then 中 onResolve 的参数
//   },
//   (onRejectReason) => {
//     console.log("Rejected:", onRejectReason);
//     // 执行失败拒绝时的操作，并返回一个新的 Promise
//     return "New rejection data"; // 返回的数据将成为下一个 then 中 onResolve 的参数
//   }
// );

// secondPromise.then(
//   (onResolveResult) => {
//     console.log("10", secondPromise);
//   },
//   (onRejectReason) => {
//     console.log(secondPromise);
//   }
// );

// ---------------------------------------------------------------
/*11.2.4 */
//通用合成函数
function add(x) {
  return x + 2;
}
function square(z) {
  return z * z;
}
function double(y) {
  return y * 2;
}

function compose(...funcs) {
  let i = 0;
  return (x) =>
    funcs.reduce(
      (promise, f) => promise.then(f),
      Promise.resolve(x)
    )
}

let f = compose(add, square, double);
f(5).then((result) => console.log(result));
