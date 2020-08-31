Number.prototype.hasOwnProperty = function (n) {
  const object1 = 7;
  return this.isPrima(n);
};

console.log(object1.hasOwnProperty("property1"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
