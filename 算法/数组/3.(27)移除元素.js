// var removeElement = function (nums, val) {
//   let fast,
//     slow = 0;
//   let newlist = [];
//   while (fast < nums.lengh) {
//     console.log(123);
//     if (nums[fast] === val) {
//       fast++;
//     } else {
//       newlist[slow].push(nums[fast]);
//       slow++;
//       fast++;
//     }
//   }
//   return newlist;
// };
var removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

console.log(removeElement([3, 2, 2, 3]), 3);
// debugger;
