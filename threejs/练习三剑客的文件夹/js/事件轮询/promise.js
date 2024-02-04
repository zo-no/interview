const { rejects } = require("assert");
const { resolve } = require("path");

/*
@Date		:2023/12/09 14:48:40
@Author		:zono
@Description:promise练习
*/
// let pro = new Promise((resolve, rejects) => {
//   console.log(resolve);
//   console.log(rejects);
//   return 1;
// }).then((data) => {
//   console.log(data);
// });

//有意思的一题
// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// })
//   .then((a) => {
//     console.log(a);
//     new Promise((resolve, reject) => {
//       console.log(3);
//       resolve(4);
//     })
//       .then(() => {
//         console.log(4);
//       })
//       .then((d) => {
//         console.log(6);
//       });
//   })
//   .then((b) => {
//     console.log(5);
//   });

// 邪门起来了家人们
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

debugger;
//还有大坑
