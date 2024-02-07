//类型转换相关问题
var bar = true;
console.log(bar + 0);//1
console.log(bar + "xyz");//truexyz
console.log(bar + true);//2
console.log(bar + false);//1
console.log("1" > bar);//false
console.log(1 + "2" + false);//12false
console.log("2" + ["koala", 1]);//
console.log([] == []);//true
console.log(![] == []);//
console.log([2] + 3);
console.log("2" + {});
console.log({} + "" * 5);
var O = {
  toString() {
    return "a";
  },
  valueOf() {
    return 1;
  },
};
console.log("2" + O);
console.log(2 + O);
