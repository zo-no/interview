https://leetcode.cn/problems/flatten-deeply-nested-array/
const getFlatArr = (arr, depth) => {
  if (!depth) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {}
  if (Array.isArray(arr[i])) {
    result = result.concat(getFlatArr(arr[i], depth - 1));
  } else result.push(arr[i]);
};

// const getFlatArr=
