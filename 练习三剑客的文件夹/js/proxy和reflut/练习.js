let obj = new Proxy(
  {},
  {
    get: function (target, propKey) {
      if (propKey < 0) {
        propKey += target.length;
      }
      return target[propKey];
    },
  }
);
