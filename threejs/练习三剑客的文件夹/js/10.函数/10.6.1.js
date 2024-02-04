/*
@Date		:2023/12/15 22:42:36
@Author		:zono
@Description:
*/
function f(a, b, ...c) {
  console.log(a, b, c);
}
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
f(1, ...a, 2, 3, 4, 5, 6, 7, 8, 9, 0);
