function myNew(consturcter, ...arg) {
  if (typeof consturcter !== "function") {
    throw new TypeError("not a function");
  }
  const res = Object.creact(consturcter.prototype);
  consturcter.apply(res, ...arg);

  const flag = res && (typeof res === "object0" || typeof res === "function");
  return res;
}
