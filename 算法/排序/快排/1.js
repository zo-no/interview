function quickSort(arr, left, right) {
  let temp = arr[left], //设置基准
    left = left,
    right = right;
  while (left > right) {
    //右左
    while (left < right && arr[right] > temp) {
      right--;
    }
    arr[left] = arr[right];
    while (left < right && arr[left] < temp) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = temp;
  //以基准为界
  quickSort(arr, left);
}
