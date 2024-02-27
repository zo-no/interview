/**
 * @Date        2024/02/26 10:21:29
 * @Author      zono
 * @Description
 * 1. 基础实现一个promise,不管异步
 * 2. 学习加入异步的优化操作
 * */

//1.promise有三种状态
const pending = "PENDING";
const fulfilled = "FULFILLED";
const rejected = "REJECTED";

class Promise {
  constructor(executor) {
    this.status = pending;
    this.value = undefined;
    this.reason = undefined;

    //存放回调
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    //执行成功的情况
    let resolve = (value) => {
      if (this.status === pending) {
        this.status = fulfilled;
        this.value = value;
        //执行存放的回调
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.status === pending) {
        this.status = rejected;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === fulfilled) {
      onFulfilled(this.value);
    }
    if (this.status === rejected) {
      onRejected(this.reason);
    }
    if (this.status === pending) {
      //如果是pending就需要存起来,两个都存，
      // 如果异步函数执行，状态变化，都会执行，由状态决定
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
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
