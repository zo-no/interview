function max(nums) {
  // 记录峰值个数
  let list = [];
  // 若只有一个值
  if (nums.length === 1) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    // 1.大于前一个后一个
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      list.push(i);
    }
    if (i + 1 === nums.length - 1) {
      if (nums[i] < nums[i + 1]) {
        list.push(i + 1);
        break;
      }
    }
  }
  return list;
}
