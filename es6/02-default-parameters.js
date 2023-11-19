/*
Write a function that takes a string name, and logs 'Hello {name}'

greet('Alex')   -> Hello Alex
greet('Jane')   -> Hello Jane

*/

function greet(name = 'NONAME') {
    console.log(`Hello ${name}`);
}

greet('Alex'); // Hello Alex
greet(); // Hello NONAME


function multiply(num1, num2 = 1) {
    console.log(num1 * num2);
}

multiply(3, 5); // 15
multiply(3); // 3


function sum(num1 = 0, num2 = 0, num3 = 0) {
    console.log(num1 + num2 + num3);
}

sum(1, 2, 3); // 6
sum(3, 5); // 8
sum(1); // 1
sum(); // 0


/*
Write a function that takes 2 arguments
    First argument is a number
    Second argument is a number
    Third argument is a boolean

Function name is addOrSubtract
If the boolean is true, add the given numbers
If the boolean is false, subtract the given numbers
If the boolean is not provided, still add the numbers 

addOrSubtract(2, 3, true)       -> 5
addOrSubtract(10, 4, false)     -> 6
addOrSubtract(7, 8)             -> 15
*/

function addOrSubtract(num1, num2, flag = true) {
    if(flag) console.log(num1 + num2);
    else console.log(num1 - num2);
}

// Ternary and arrow function way
// const addOrSubtract = (num1, num2, flag = true) => flag ? console.log(num1 + num2) : console.log(num1 - num2);

addOrSubtract(2, 3, true); //       -> 5
addOrSubtract(10, 4, false); //     -> 6
addOrSubtract(7, 8); //             -> 15