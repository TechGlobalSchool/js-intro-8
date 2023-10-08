/*
Write a function called isEven that takes an argument and return true if the arg is even, false otherwise.

isEven(5)    -> false
isEven(10)   -> true
isEven(23)   -> false
isEven(-5)   -> false
isEven(-2)   -> true
isEven(0)    -> true

x % 2 === 0         -> even
x % 2 !== 0         -> odd

even numbers -> 2, 0, -6, 10, 14, -12
odd numbers -> 1, 3, 5, -3, -1, -11, 13, 19
*/

function isEven (number) {
    return number % 2 === 0; 
}

console.log(isEven(10)); // true
console.log(isEven(5)); // false
console.log(isEven(-2)); // true
console.log(isEven(-7)); // false