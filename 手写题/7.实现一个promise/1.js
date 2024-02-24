/**
 * @Date        2024/02/24 17:43:52
 * @Author      zono
 * @Description 实现一个promise
 * */

// 1. promise是一个类，接收一个函数作为参数，这个函数有两个参数，resolve和reject
// 2. promise有三个状态，pending，fulfilled，rejected
// 3. promise的状态一旦改变就不能再变
// 4. promise有一个then方法，接收两个参数，onFulfilled和onRejected
// 5. then方法返回一个新的promise

//状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  //构造函数
  constructor(executor) {
    var _this = this; //保存this
    this.status = PENDING; //初始状态

    this.value = undefined; //成功的值
    this.reason = undefined; //失败的原因

    this.onFulfilledCallbacks = []; //成功回调
    this.onRejectedCallbacks = []; //失败回调

    //状态改变为成功，并执行成功回调
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());//执行成功回调
      }
    };

    //状态改变为失败，执行失败回调
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    //执行executor,也就是传入的函数
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  //then方法
  then(onFulfilled, onRejected) {
    //如果成功就执行onFulfilled
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    //反之执行onRejected
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    //如果是pending状态，就将回调存起来,等状态改变后再执行
    if (this.status === PENDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
