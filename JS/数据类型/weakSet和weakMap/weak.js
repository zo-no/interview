let set = new Set(),
  key = { 1: 1 };
set.add(key);
console.log(set.size); //1
//移除原始引用
key = null;
console.log(key);
console.log(set.size); //1
key = [...set][0]; //取回原始引用
console.log(key);

console.log("-".repeat(10));
let wset = new WeakSet()
wset.add(key)
console.log(wset); //1
key = null
console.log(wset); //1