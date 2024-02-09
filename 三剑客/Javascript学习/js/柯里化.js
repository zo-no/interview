/*
@Date		:2023/12/11 17:45:37
@Author		:zono
@Description:用柯里化表现函数式编程
*/

// 看样子这里调库了
const trasnformStringToObj = curry((keys, info) => {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = info[index];
  });
  return obj;
});
const upperCase = (s) => s[0].toUpperCase() + s.slice(1);
const upperCaseInfo = compose(
  trasnformStringToObj(["name", "color"]),
  map(upperCase),
  split("-")
);

const getRes = map(upperCaseInfo);
const res = getRes(["book-red", "pen-black", "leaf-green"]);

