function compose(...func) {
  return func.reduce(
    (res, it) => {

      return (...args) => {
        return res(it(...args));
      };//新的res

    },
    (it) => it
  );
}
