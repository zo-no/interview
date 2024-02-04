/*
@Date		:2023/12/02 21:15:19
@Author		:zono
@Description:一个web component的尝试
有点像vue的组件化开发
*/
class UserCard extends HTMLElement {
  constructor() {
    super(); //super()方法用于调用父类的构造函数。

    // 创建一个 shadow root
    const shadow = this.attachShadow({ mode: "open" });
  }
}
