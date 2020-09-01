Number.prototype.isPrima = function (elemen) {
  if (elemen % 2 == 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

console.log(Number.prototype.isPrima(7));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
