let num1 = 5, num2 = 10.5;

console.log(num1); // 5
console.log(num2); // 10.5

console.log(num1 + num2); // 15.5
console.log(num1 * num2); // 52.5
console.log(num1 - num2); // -5.5

// + operator is used both for addition and concatenation
let a = 2, b = 5, c = "10", d = "20";

console.log(a + b); // 7
console.log(c + d); // '1020'
console.log(a + d); // '220'

console.log(d / b); // 4
console.log(c * a); // 20

console.log(c - b); // 5
console.log('The result is = ' + c - b); // NaN - Not a Number

// NaN - Not a Number
console.log(NaN); // NaN
console.log(typeof NaN); // number