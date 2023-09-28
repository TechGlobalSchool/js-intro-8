let name = 'John'; 
name = 'Alex'; // re-assignment
console.log(name); // Alex 


// using const: usually we const for constant variables which should not changed
const firstMonth = 'January';

// firstMonth = 'August'; // TypeError: Assignment to constant variable.

console.log(firstMonth); // January


// Can we just declare const without value? No, variables using const MUST be initialized in the same line
const pi = 3.14;
// pi = 2; // TypeError: Assignment to constant variable.
console.log(pi); // 3.14