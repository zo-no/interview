/**
 * @Date        2024/02/28 19:43:48
 * @Author      zono
 * @Description 实现then的链式调用:
 * 解决各种情况下promise的问题
 * 1.加入了then输入类型的判断
 * 2.加入了异步逻辑
 * 3.加入了resolvePromise函数
 *
 * resolvePromise:
 * 1.判断promise2和x是否相等，如果相等，返回一个类型错误
 * 2.判断x的类型，分为promise和普通值
 * 3.当x为promise时，递归调用resolvePromise，直到x为普通值
 * */

//1.promise有三种状态
const pending = "PENDING";
const fulfilled = "FULFILLED";
const rejected = "REJECTED";

/**
 * @description 处理then返回的promise的状态
 * @param {MyPromise} promise2 新的promise
 * @param {any} x 返回的值
 * @param {function} reject
 * @param {function} resolve
 * */
const resolvePromise = (promise2, x, resolve, reject) => {
  //如果promise2和x相等，说明循环调用，那么返回一个类型错误
  if (promise2 === x) {
    return reject(new TypeError("循环调用了 MyPromise #<MyPromise>"));
  }
  let called; //防止多次调用
  //判断x的类型
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      //x为promise时，调用then方法不会报错
      let then = x.then; //保存x的then方法
      if (typeof then === "function") {
        //用call把两个函数作为onFulfilled和onRejected传入
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); //递归调用
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    //x为普通值时
    resolve(x);
  }
};
class MyPromise {
  constructor(executor) {
    const _this = this;
    _this.status = pending;
    _this.value = undefined;
    _this.reason = undefined;

    //存放回调
    _this.onResolvedCallbacks = [];
    _this.onRejectedCallbacks = [];

    //执行成功的情况
    let resolve = (value) => {
      if (_this.status === pending) {
        _this.status = fulfilled;
        _this.value = value;
        //执行存放的回调
        _this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (_this.status === pending) {
        _this.status = rejected;
        _this.reason = reason;
        _this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    //判断传入the的内容是否为函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    let _this = this;
    let promise2 = new MyPromise((resolve, reject) => {
      if (_this.status === fulfilled) {
        setTimeout(() => {
          try {
            let x = onFulfilled(_this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (_this.status === rejected) {
        setTimeout(() => {
          try {
            let x = onRejected(_this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (_this.status === pending) {
        _this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(_this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        _this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(_this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return promise2;
  }
}

MyPromise.deferred = () => {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
module.exports = MyPromise;
//测试代码：promises-aplus-tests ./myPromise.js
