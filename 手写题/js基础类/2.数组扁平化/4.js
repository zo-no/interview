function flat(nums, depth = 1) {
  if (depth === 0) return nums;
  let res = [];
  for (const n of nums) {
    res = Array.isArray(n) ? res.concat(flat(n, depth - 1)) : [...res, n];
  }
  return res;
}

var arr = [1, [2, [3, [4, 5]]]];

console.log(flat(arr, 4));
