/**
 * @Date        2024/02/23 23:20:52
 * @Author      zono
 * @Description 巨坑：let l, r = 0;和let l,=0 r = 0;的区别
 * */

var minSubArrayLen = function (target, nums) {
  let fast = 0, //bug
    slow = 0;
  let sum = 0;
  let res = Infinity;
  while (slow <= fast && fast <= nums.length) {
    if (sum >= target) {
      res = Math.min(res, fast - slow);
      sum -= nums[slow++];
    } else {
      //加入快指针数值
      sum += nums[fast++];
    }
  }
  return res === Infinity ? 0 : res;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
