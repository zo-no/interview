var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    // 保证nums2
    [nums1, nums2] = [nums2, nums1];
  }
  const nums1Set = new Set(nums1);
  const resSet = new Set();
  //循环
  for (const n of nums2) {
    nums1Set.has(num) && resSet.add(num);
  }

  return [...resSet];
};
