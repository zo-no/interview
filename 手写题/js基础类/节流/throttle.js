// 第一版
/**
 * 使用时间戳
 * 区别：会第一时间触发，停止后就立即停下
 * */
// function throttle(func, wait) {
//   let context, args;
//   let previous = 0;//初始时间

//   return function () {
//     let now = +new Date();//当前时间
//     context = this;
//     args = arguments;
//     if (now - previous > wait) {
//       func.apply(context, args);
//       previous = now;
//     }
//   };
// }

/**
 * 使用定时器
 * 区别：会在时间过去后触发
 * */
// function throttle(func, wait) {
//   let context, args, timeout;
//   return function () {
//     context = this;
//     args = arguments;
//     if (!timeout) {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//         timeout = null;
//       }, wait);
//     }
//   };
// }

/**
 * 双剑合璧版：有头又有尾
 * */
// 第三版
// function throttle(func, wait) {
//   var timeout, context, args;
//   var previous = 0;

//   var later = function () {
//     previous = +new Date();
//     timeout = null;
//     func.apply(context, args);
//   };

//   var throttled = function () {
//     var now = +new Date();
//     //下次触发 func 剩余的时间
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;
//     // 如果没有剩余的时间了或者你改了系统时间
//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       func.apply(context, args);
//     } else if (!timeout) {
//       timeout = setTimeout(later, remaining);
//     }
//   };
//   return throttled;
// }

/**
 * 二选一版
 * */
// 第四版
function throttle(func, wait, options) {
    var timeout, context, args;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}

let count = 1;
let container = document.getElementById("container");
let getUserAction = function () {
  container.innerHTML = count++;
};
container.onmousemove = throttle(getUserAction, 2000);
