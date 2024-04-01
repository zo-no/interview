function compose(...func) {
  return func.reduce(
    (res, it) => {
      return (...arg) => res(it(...arg));
    },
    (it) => it
  );
}
