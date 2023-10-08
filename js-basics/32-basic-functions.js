/*
Write a function called isPositive that takes an argument and returns true if the arg is positive, and false otherwise.

isPositive(5)   -> true
isPositive(0)   -> false
isPositive(-7)   -> false
isPositive(15)   -> true
isPositive(123)   -> true

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral

Positive: number > 0
Negative: number < 0
Neutral: number === 0
*/

function isPositive(arg) {
    return arg > 0;
}

console.log(isPositive(5)); // true
console.log(isPositive(17)); // true
console.log(isPositive(150)); // true
console.log(isPositive(0)); // false
console.log(isPositive(-15)); // false