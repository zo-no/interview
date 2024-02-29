/**
 * @description 大数相加
 * @param {type}
 * @returns
 * */
function sumBigNumber(a, b) {
  let res = "";
  let temp = 0; //是否有进位

  //把a和b变成数组
  //www.bookstack.cn/read/javascript-tutorial/docs-stdlib-string.md#99rxkr
  a = a.split("");
  b = b.split("");

  //取最大长度
  while (a.length || b.length || temp) {
    //~~按位非运算符，两个波浪线表示取整
    temp += ~~a.pop() + ~~b.pop(); //取数组最后一位相加
    res = (temp % 10) + res; //取余数
    temp = temp > 9; //是否有进位
  }
  return res.replace(/^0+/, ""); //去掉前面的0
}

/**
 * @description 大数相乘
 * @param {type}
 * @returns
 * */
function multiplyBigNumber(a, b) {
  //判断输入是不是数字
  if (isNaN(a) || isNaN(b)) {
    return "请输入数字";
  }
  // 转换成字符串
  a = a.toString();
  b = b.toString();
  let len1 = num1.length,
    len2 = num2.length;
  let pos = [];

  for (let j = len2 - 1; j >= 0; j--) {
    for (let i = len1 - 1; i >= 0; i--) {
      let index1 = i + j,
        index2 = i + j + 1;
      let sum = (pos[index2] || 0) + num1[i] * num2[j];
      pos[index1] = Math.floor(sum / 10) + (pos[index1] || 0); //进位
      pos[index2] = sum % 10; //当前位
    }
  }

  let res = pos.join("").replace(/^0+/, "");
  return res;
}
