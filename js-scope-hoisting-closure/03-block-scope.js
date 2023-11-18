// Block scope is introduced with ES6

console.log(x); // undefined
console.log(y); // Error - ReferenceError: y is not defined
console.log(z); // Error - ReferenceError: z is not defined

// Block Scope 
{
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}


console.log(x); // 10
console.log(y); // Error - ReferenceError: y is not defined
console.log(z); // Error - ReferenceError: z is not defined