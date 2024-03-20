function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    //每次把最小提前
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    console.log(i + arr);
  }
  return arr;
}

let arr = [2, 3, 1, 4, 8, 7, 9, 6];
console.log(selectionSort(arr));
