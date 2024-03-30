class Target {
  small() {
    throw new Error("This method must be overwritten!");
  }
}

class Adaptee {
  big() {
    console.log("港式的电器插头可用咯~~");
  }
}

class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }
  small() {
    this.adaptee.big();
  }
}

let adaptee = new Adaptee(); //被适配器
let adapter = new Adapter(adaptee); //进行适配
adapter.small();
