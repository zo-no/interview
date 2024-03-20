function foo() {
  console.log(a);
}

function bar() {
  let a = 3;
  foo();
}

var a = 2;
bar();
