class PubSub {
  constructor() {
    // 事件中心
    // 存储格式: warTask: [], routeTask: []
    // 每种事件(任务)下存放其订阅者的回调函数
    this.events = {};
  }
  // 订阅方法
  subscribe(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(cb);
  }
  // 发布方法
  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((cb) => cb(...args));
    }
  }
  // 取消订阅方法
  unsubscribe(type, cb) {
    if (this.events[type]) {
      const cbIndex = this.events[type].findIndex((e) => e === cb);
      if (cbIndex != -1) {
        this.events[type].splice(cbIndex, 1);
      }
    }
    if (this.events[type].length === 0) {
      delete this.events[type];
    }
  }
  unsubscribeAll(type) {
    if (this.events[type]) {
      delete this.events[type];
    }
  }
}

// 创建一个中介公司
let pubsub = new PubSub();

// 弟子一订阅战斗任务
pubsub.subscribe("warTask", function (taskInfo) {
  console.log("宗门殿发布战斗任务，任务信息:" + taskInfo);
});
// 弟子一订阅战斗任务
pubsub.subscribe("routeTask", function (taskInfo) {
  console.log("宗门殿发布日常任务，任务信息:" + taskInfo);
});
// 弟子三订阅全类型任务
pubsub.subscribe("allTask", function (taskInfo) {
  console.log("宗门殿发布五星任务，任务信息:" + taskInfo);
});

// 发布战斗任务
pubsub.publish("warTask", "猎杀时刻");
pubsub.publish("allTask", "猎杀时刻");

// 发布日常任务
pubsub.publish("routeTask", "种树浇水");
pubsub.publish("allTask", "种树浇水");
