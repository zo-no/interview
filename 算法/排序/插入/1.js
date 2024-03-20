function insertSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i,
      temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
      //每次找到temp的位置
    }
    arr[j] = temp;
  }

  return arr;
}

let arr = [2, 3, 1, 4, 8, 7, 9, 6];
console.log(insertSort(arr));
