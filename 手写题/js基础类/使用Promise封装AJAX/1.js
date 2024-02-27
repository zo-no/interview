/**
 * @Date        2024/02/27 15:10:59
 * @Author      zono
 * @Description promise封装
 * */
function getJSON(url) {
  //1.创建一个promise对象
  let promise = new Promise((resolve, rejected) => {
    let xhr = new XMLHttpRequest();
    //2.新建一个http请求
    xhr.open("GET", url, true);
    //3.设置状态监听函数
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;

      if (this.status === "200") {
        //请求成功改变promise状态
        resolve(this.response);
      } else {
        rejected(new Error(this.statusText));
      }
    };

    //设置错误监听函数
    xhr.onerror = function () {
      rejected(new Error(this.statusText));
    };
    //设置请求头
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(null);
  });
  return promise;
}
