/**
 * @Date        2024/02/26 14:34:48
 * @Author      zono
 * @Description 
 * */
/**
* 优化typeof,让其返回更准确的结果}
* typeof:只能判断值类型(还得除了null),其他的都是object、function,null返回object
* instanceof:用instanceof判断对象类型，又有太多if判断
* 所以用：Object.prototype.toString.call()
* - 解释：Object.prototype.toString.call():返回[object xxx]，xxx就是类型
* - 因为array等构造函数有重写toString方法，于是用call调用Object的toString方法
*
* 这里用到了一些数据操作api：
* - call:改变this指向
* - split:分割字符串
* - join:合并字符串
* - toLowerCase:转换为小写
* */
function getType(value) {
  //如果是null,直接返回null
  if (value === null) {
    return value+""
  }
  //如果是undefined,直接返回undefined
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),//返回[object xxx]
      type = valueClass.split("")[1].split("");//返回xxx
    type.pop();//去掉最后的]
    return type.join(""), toLowerCase();//返回xxx,并且转换为小写
  }
}

