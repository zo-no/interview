function quickSort(arr, left, right) {
  if (left < right) {
    let i = left, //左指针
      j = right, //右指针
      temp = arr[left]; //基准值
    console.log(temp + " " + arr);
    //当左指针小于右指针时
    while (i < j) {
      //从右向左找第一个小于基准值的数
      while (i < j && arr[j] >= temp) {
        j--;
      }
      arr[i] = arr[j]; //将找到的数放到左边
      //从左向右找第一个大于基准值的数
      while (i < j && arr[i] <= temp) {
        i++;
      }
      arr[j] = arr[i]; //将找到的数放到右边
    }
    arr[i] = temp; //将基准值放到中间
    //递归调用

    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
  return arr;
}

let arr = [2, 3, 1, 4, 8, 7, 9, 6];
quickSort(arr, 0, 7);
console.log(arr);
