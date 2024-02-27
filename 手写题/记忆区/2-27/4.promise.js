/**
 * 手写一个promise
 * @param {type}
 * @returns
 * */

//  三个状态
const pending = "PENDING";
const fulfilled = "FULFILLED";
const rejected = "REJECTED";

class Promise {
  constructor(executer) {
    //存放三种状态
    this.status = pending;
    this.value = undefined;
    this.reason = undefined;

    //存放回调
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    //状态改变函数
    const resolve = (value) => {
      if (this.status === pending) {
        this.status = fulfilled;
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    const rejecte = (reason) => {
      if (this.status === pending) {
        this.status = rejected;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executer(resolve, rejecte);
    } catch (err) {
      rejected(err);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === RESOLVED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === pending) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.value);
      });
    }
  }
}
