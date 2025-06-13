const regex = /office time|office/i;

console.log(regex.test("Office Time"));  // true
console.log(regex.test("office time"));  // true
console.log(regex.test("OFFICE TIME"));  // true
console.log(regex.test("oFfIcE TiMe"));  // true
console.log(regex.test("oFfIcE "));  // true
