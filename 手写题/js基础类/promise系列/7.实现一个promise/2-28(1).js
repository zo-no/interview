/**
 * @Date        2024/02/28 19:43:48
 * @Author      zono
 * @Description 实现then的链式调用:
 * 实现基础的逻辑
 * */

//1.promise有三种状态
const pending = "PENDING";
const fulfilled = "FULFILLED";
const rejected = "REJECTED";

class Promise {
  constructor(executor) {
    _this = this;
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
    if (_this.status === fulfilled) {
      let promise2 = new promise(function (resolve, reject) {
        try {
          let x = onFulfilled(_this.value);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
    }
    if (_this.status === rejected) {
      let promise2 = new promise(function (resolve, reject) {
        try {
          let x = onRejected(_this.value);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
    }

    if (_this.status === pending) {
      let promise2 = new promise(function (resolve, reject) {
        _this.onResolvedCallbacks.push(() => {
          try {
            let x = onFulfilled(_this.value);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
        _this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(_this.value);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    return promise2;
  }
}

//测试代码
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 1000);
}).then(
  (data) => {
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);
