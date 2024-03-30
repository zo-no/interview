// postCSS应该就是这个思想
function on(type, fn) {
  // 对于支持dom2级事件处理程序
  if (document.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    // 对于IE9一下的ie浏览器
    dom.attachEvent("on" + type, fn);
  } else {
    dom["on" + type] = fn;
  }
}
