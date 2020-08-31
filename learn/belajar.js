// membuat Constructor
function person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// menambahkan properti secara langsung menggunakan prototyping
person.prototype.nationality = "Indonesia";

// Menambahkan method
person.prototype.salam = function () {
  return "Hello " + this.firstName + " " + this.lastName;
};

//  membuat 2 contoh
let myFather = new person("Muhamad", "Aziz", 25, "Hitam");
let myMother = new person("Selly", "roxana", 20, "Biru");

// Melihat data
console.log(myFather.firstName);
console.log(myMother.firstName);
console.log(myFather.nationality);
console.log(myFather.salam());
console.log(Object);
console.log(Object.prototype);

// Melihat properti apa saja yang dimiliki oleh string
console.log(String.prototype);

// membuat properti tambahan untuk string
// method untuk mengulang string selama yang kita butuhkan

String.prototype.repeatString = function (n) {
  return this.repeat(n);
};

console.log("ImpactByte".repeatString(5));
