/**
 * @Date        2024/02/27 14:55:35
 * @Author      zono
 * @Description 实现AJAX请求
 * */

const SERVER_URL = "/server";
// 1.创建对象
let xhr = new XMLHttpRequest();

// 2.创建请求
xhr.open("GET", SERVER_URL, true);

// 3.设置监听函数
xhr.onreadystatechange = function () {
  //请求失败
  if (this.readyState !== 4) return;

  //请求成功时状态码为200
  if (this.status === "200") {
    headle(this.response);
  } else {
    console.error(this.statusText);
  }
};

// 4.设置请求失败监听函数
xhr.onerror = function () {
  console.error(this.statusText);
};

//5.设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");

//6.发送请求
xhr.send(null);
