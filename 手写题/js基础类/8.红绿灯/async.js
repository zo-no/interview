let timer = null;
const printContent = (str) => {
  console.log(str);
};
//封装一个promise
const sleep = (time, light) => {
  return new Promise((resolve) => {
    printContent(light);//打印当前灯
    clearInterval(timer);//清除计时
    timer = setInterval(() => {
      printContent(light);
    }, 1000);//设置计时
    setTimeout(resolve, time);//
  });
};

const main = async () => {
  while (true) {
    await sleep(5000, '红灯')
    await sleep(2000, '黄灯')
    await sleep(3000, '绿灯')
    clearInterval(timer)
  }
}

main()
