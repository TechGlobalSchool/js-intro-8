console.log(x); // undefined

var x = 10;

/*
-This is HOISTING!
-JS moves declaration of the variables created with var to the top of the file but not the value.
-If you try to retrieve a var value before it's assignment you will get undefined instead of ReferenceError.

var x;

console.log(x); // undefined

x = 10;

*/
console.log(y); // Error - ReferenceError: Cannot access 'y' before initialization
console.log(z); // Error - ReferenceError: Cannot access 'z' before initialization

let y = 11;
const z = 12;

// funcA(); // This is function A
// Regular function declaration - hoisted
function funcA() {
    console.log('This is function A');
}

// funcB(); // Error
// Function Expression - not hoisted
const funcB = function () {
    console.log('This is function B');
}

// funcC(); // Error
// Arrow functions - not hoisted
var funcC = () => {
    console.log('This is function C');
};

// Invoking all the functions - all good
funcA(); // This is function A
funcB(); // This is function B
funcC(); // This is function C