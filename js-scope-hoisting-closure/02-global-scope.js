// Global Scope was introduced before ES6
// Globally declared variables
var x = 10;
let y = 11;
const z = 12;

// Global access is allowed
console.log(x); // 10
console.log(y); // 11
console.log(z); // 12

// Block access is allowed
{
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}


// Function access is allowed - IIFE
(function () {
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
})();