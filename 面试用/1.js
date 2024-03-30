const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split(" ");
    let inputI = parseInt(tokens[0]);
    let res = []; //记录结果
    for (let i = 0; i < inputI; i++) {
      //每次循环比较一次
      let nowList = [...list];
      nowList[i] *= nowList[i]; //这一个数的平方
      res.push(Math.max(nowList));
    }
    console.log(res);
  }
})();
