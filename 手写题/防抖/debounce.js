/**
 * @Date        2024/02/23 17:55:57
 * @Author      zono
 * @Description 防抖练习一次
 * */
let count = 1;
let container = document.getElementById("container");
let setUseAction = debounce(getUserAction, 2000, true);

container.onmousemove = setUseAction;

let button = document.getElementById("button");
button.addEventListener("click", function () {
  setUseAction.cancel();
});

function getUserAction() {
  container.innerHTML = count++;
}

function debounce(func, wait, immediate) {
  let timeout,
    result = null;
  var debounced = function () {
    let context = this;
    let arg = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      if (!timeout) result = func.apply(this, context); //若没有计时器就执行一次
      timeout = setTimeout(function func() {
        timeout = null;
      }, wait); //每次触发就新建一个计时器
    } else {
      //等待wait秒后执行
      timeout = setTimeout(function () {
        result = func.apply(context, arg);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
