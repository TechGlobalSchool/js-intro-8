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


/*
Write a function called isNegative that takes an argument and returns true if the arg is negative, and false otherwise.

isNegative(5)   -> false
isNegative(0)   -> false
isNegative(-7)   -> true
isNegative(15)   -> false
isNegative(123)   -> false

Positive numbers are the numbers greater than zero
Negative numbers are the numbers less than zero
Zero is not a negative or a positive number, it is neutral

Positive: number > 0
Negative: number < 0
Neutral: number === 0
*/
console.log(isNegative(5)); // false
console.log(isNegative(63)); // false
console.log(isNegative(0)); // false
console.log(isNegative(-1)); // true

function isNegative(arg) {
    return arg < 0;
}

/*
Write a functions called getFirstChar that takes an argument and returns the first character from the argument

getFirstChar("Hello")       -> "H"
getFirstChar("12345")       -> "1"
getFirstChar("")            -> undefined
getFirstChar("   ")         -> " "

'Hello' -> 'H'
arg     -> arg[0]
*/

function getFirstChar(str) {
    return str[0];
}

let word1 = 'Hello', word2 = 'TechGlobal';

console.log(getFirstChar(word1)); // 'H'
console.log(getFirstChar(word2)); // 'T'
console.log(getFirstChar('JavaScript')); // 'J'
console.log(getFirstChar('')); // undefined
console.log(getFirstChar('    ')); // ' '


/*
Write a functions called getFirstLastChar that takes an argument and returns the first and last 
characters from the argument

getFirstLastChar("Hello")       -> "Ho"
getFirstLastChar("12345")       -> "15"
getFirstLastChar("")            -> NaN
getFirstLastChar("   ")         -> "  "
getFirstLastChar("a")           -> "aa"

'Hello' -> 'H' + 'o' -> 'Ho'
str     -> str[0] + str[str.length-1] 
*/

function getFirstLastChar(str) {
    // return str[0] + str[str.length-1];
    return str.at(0) + str.at(-1);
}

console.log(getFirstLastChar('Hello')); // 'Ho'
console.log(getFirstLastChar('')); // NaN
console.log(getFirstLastChar('x')); // 'xx'


/*
Write a function called average5 that takes 5 arguments and returns their average

average5(1, 2, 3, 4, 5)     -> 3
average5(3, 7, 10, 5, 5)     -> 6
*/

function average5(a1, a2, a3, a4, a5) {
    return (a1 + a2 + a3 + a4 + a5) / 5;
}

console.log(average5(1, 2, 3, 4, 5)); // 3
console.log(average5(3, 7, 10, 5, 5)); // 6