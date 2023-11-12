const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name to the console
names.forEach(x => console.log(x));


// Output first letter of each name
names.forEach(name => console.log(name[0]));


// Output each name uppercased
names.forEach(name => console.log(name.toUpperCase()));


// Output names that starts with J -> John and Jane
names.forEach((name) => {
    if(name[0] === 'J') console.log(name);
});


// Count how many names has 4 letters -> 3
let count4 = 0;

names.forEach((name) => name.length === 4 ? count4++ : count4);

console.log(count4); // 3

// reduce() method will fit this question better, we will learn it later


const numbers = [5, 10, 3, 0, -2];

// Print each number
numbers.forEach(x => console.log(x));

// Print each number multiplied by 5
numbers.forEach(x => console.log(x * 5));


// Print true for even numbers and false for odd numbers -> false, true, false, true, true 
numbers.forEach(number => console.log(number % 2 === 0)); 


// Create a new array that multiplies each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
const newArr = [];

numbers.forEach(number => newArr.push(number * 3));

console.log(newArr);

// map() method will fit this question better, we will learn it later


// Create a new array that stores even numbers -> [ 10, 0, -2 ]
const evenNumbers = [];

numbers.forEach((number) => {
    if(number % 2 === 0) evenNumbers.push(number);
});

console.log(evenNumbers);

// filter() method will fit this question better, we will learn it later