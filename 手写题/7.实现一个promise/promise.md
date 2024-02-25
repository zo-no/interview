# Promise/A+

promise基础使用中发现
- promise是一个对象，其中有三种状态：pending、fulfilled、rejected
- 构建prromise对象时，需要传入一个executor函数
- executor函数调用会改变状态，并再成功时调用resolve，失败时调用reject
- promise状态不可逆

于是它的基本特征就是：
1. 有三种状态：pending、fulfilled、rejected[`Promise/A+ 2.1 规范`]
2. 构建时传入一个executor函数
3. executor函数接受两个参数：resolve、reject

> 理解:executor就是构建的一个新函数

4. 默认状态是pending
5. 有一个value保存成功的值[`Promise/A+ 1.3 规范`]
6. 有一个reason保存失败的原因[`Promise/A+ 1.5 规范`]
7. 状态不可逆
8. 有一个then方法，接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected[`Promise/A+ 2.2 规范`]
9.  如果 promise 成功，调用 onFulfilled, 并将成功的value传入
10. 如果 promise 失败，调用 onRejected, 并将失败的reason传入
11. 如果抛出异常，就把异常传入下一个then的onRejected

---
勾勒一下
```javascript
// 1. 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {//2. 构建时传入一个executor函数
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    } 

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}
```
如此基本功能实现

如果出现异步的情况，我们需要在then方法中进行处理，将成功和失败的回调存储起来，等待执行
```javascript
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}
```
这样就可以实现基本的promise了