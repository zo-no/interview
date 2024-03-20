// https://juejin.cn/post/6844903698154389517?searchId=20240320201115DC6A8D3F3B9D5E179013
const Observe = (function () {
  //防止消息队列暴露而被篡改，将消息容器设置为私有变量
  let __message = {
    // [type]:[fn1,fn2,...]
  };
  return {
    //注册消息接口
    on: function (type, fn) {
      //如果此消息不存在，创建一个该消息类型
      if (typeof __message[type] === "undefined") {
        // 将执行方法推入该消息对应的执行队列中
        __message[type] = [fn];
      } else {
        //如果此消息存在，直接将执行方法推入该消息对应的执行队列中
        __message[type].push(fn);
      }
    },

    //发布消息接口
    subscribe: function (type, args) {
      //如果该消息没有注册，直接返回
      if (!__message[type]) return;
      //定义消息信息
      let events = {
          type: type, //消息类型
          args: args || {}, //参数
        },
        i = 0, // 循环变量
        len = __message[type].length; // 执行队列长度
      //遍历执行函数
      for (; i < len; i++) {
        //依次执行注册消息对应的方法
        __message[type][i].call(this, events);
      }
    },

    //移除消息接口
    //移除消息接口
    off: function (type, fn) {
      //如果消息执行队列存在
      if (__message[type] instanceof Array) {
        // 从最后一条依次遍历
        let i = __message[type].length - 1;
        for (; i >= 0; i--) {
          //如果存在改执行函数则移除相应的动作
          __message[type][i] === fn && __message[type].splice(i, 1);
        }
      }
    },
  };
})();

//订阅消息
Observe.on("say", function (data) {
  console.log(data.args.text);
});
Observe.on("success", function () {
  console.log("success");
});

//发布消息
Observe.subscribe("say", { text: "hello world" });
Observe.subscribe("success");
