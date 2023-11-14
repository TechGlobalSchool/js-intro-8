const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers -> [5, 10, 23]
console.log(numbers.filter((number) => number > 0)); // [ 5, 10, 23 ]

// Find all the even numbers -> [ 0, 10, -10]
// Find all the odd numbers -> [ -5, 5, 23]

const evens = numbers.filter((number) => number % 2 === 0);
const odds = numbers.filter((number) => number % 2 !== 0);

console.log(evens); // [ 0, 10, -10 ]
console.log(odds); // [ -5, 5, 23 ]


// Replace all the negative numbers with zero -> [0, 0, 5, 10, 23, 0];

console.log(numbers.map((number) => number < 0 ? 0 : number)); // [ 0, 0, 5, 10, 23, 0 ]



/*
const result = [];

for(const number of numbers) {
    if(number < 0) result.push(0);
    else result.push(number);
}

console.log(result); // [ 0, 0, 5, 10, 23, 0 ]
*/


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]

console.log(fruits.filter(fruit => fruit.toLowerCase()[0] === 'm'));
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')));
console.log(fruits.filter(fruit => fruit.length === 5));
console.log(fruits.filter(fruit => fruit.length !== 5));
console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('a') >= 0 || fruit.toLowerCase().indexOf('e') >= 0));


// Count how many fruits has i  -> 2
// Count how many fruits ends with e  -> 3
console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('i') >= 0).length); // 2
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith('e')).length); // 3

// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length-1])); // [ 'Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn' ]

/*
const result = [];

for(const fruit of fruits) {
    result.push(fruit[0] + fruit[fruit.length-1]);
}

console.log(result);
*/