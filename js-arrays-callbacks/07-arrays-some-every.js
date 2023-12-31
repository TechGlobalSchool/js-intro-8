const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5    -> true
console.log(numbers.some(number => number % 5 === 0)); // true

// check if some elements are even  -> true
// check if some elements are odd   -> true
console.log (numbers.some(number => number % 2 === 0)); // true
console.log (numbers.some(number => number % 2 !== 0)); // true


// check if every element is positive -> false
// check if every element is negative -> false
console.log (numbers.every(number => number > 0)); // false
console.log (numbers.every(number => number < 0)); // false


const cities = ['Rome', 'Kyiv', 'Paris', 'Milan', 'Chicago']; 
// Check if every city has 4 or 5 letters   -> false
console.log(cities.every(city => city.length === 4 || city.length === 5)); // false