/*
Create different variables to store below information

address = 'Chicago, IL'
age = 25
isWeatherNiceToday = true
price = 10.25

Print all the variables above with proper messages
Find and output all the variables types using typeof
*/

let address = 'Chicago, IL', age = 25, isWeatherNiceToday = true, price = 10.25;

console.log('The address is = ' + address);
console.log('The age is = ' + age);
console.log('The weather is nice = ' + isWeatherNiceToday);
console.log('The price is = ' + price);

console.log(typeof address); // string
console.log(typeof age); // number
console.log(typeof isWeatherNiceToday); // boolean
console.log(typeof price); // number


// TRICKY QUESTIONS
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof 25); // number
console.log(typeof 'null'); // string
console.log(typeof '1234'); // string
console.log(typeof 'undefined'); // string


// BE CAREFUL
let name = 'Max';

console.log('The name is = ' + name); // hard-coded and not dynamic

console.log(typeof name);