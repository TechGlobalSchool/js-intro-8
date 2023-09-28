let _name = 'John';
let $balance = 100;

// Can we start variable names with digits ? NO, but you can use digits anywhere except the first character.

var score1 = 1;
var score11 = 11;

// Can we have specials other than _, $ and other currency signs within the variable name? NO
let age = 25;
let Age = 45; // not preferred
let AGE = 70; // not preferred
let aGe = 53; // not preferred

console.log(age); // 25
console.log(Age); // 45
console.log(AGE); // 70
console.log(aGe); // 53

// Can we have spaces in the variable names? NO, we use camelCase rule for these identifiers
const firstMonthOfTheYear = 'January'; // 
let lastName = 'Doe';
var operatingSystemOfMyMachine = 'MacOS';