const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = valus => {
      if (this.state = PENDING) {
        this.state = FULFILLED
        this.value = value
        this.resolveCallbacks.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if (this.state = PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

    
  }
}