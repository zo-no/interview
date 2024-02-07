/*
@Date		:2023/12/09 08:15:39
@Author		:zono
@Description:第二次练习
*/
function myInstanceof(object, constructor) {
  /*
	@param:
	object
	constructor
	@Returns:
	boolean
	@Description: 
	1.传入比较的两个值
	2.获取obj原型
	3.比较obj原型和构造函数
	4.若false则继续递归调用
	*/
  obj = Object.getPrototypeOf(object);
  while (obj) {
    if (obj === constructor.prototype) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}

// test
function Person(name) {
  this.name = name;
}

bob = new Person("bob");
console.log(myInstanceof(bob, Person));
