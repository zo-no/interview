let timer = null;
const printContent = (str) => {
  console.log(str);
};
const main = () => {
  printContent("红灯");

  clearInterval(timer);
  timer = setInterval(() => {
    printContent("红灯");
  }, 1000);

  setTimeout(() => {
    printContent("黄灯");
    clearInterval(timer);
    timer = setInterval(() => {
      printContent("黄灯");
    }, 1000);

    setTimeout(() => {
      printContent("绿灯");
      clearInterval(timer);
      timer = setInterval(() => {
        printContent("绿灯");
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        main();
      }, 3000);
    }, 2000);
  }, 5000);
};
main();
