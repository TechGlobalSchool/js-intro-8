const numbers = [5, 10, 100];

// sum of the numbers                   -> 115
console.log(numbers.reduce((sum, curr) => sum + curr, 0)); // 115

// count the numbers divisible by 10    -> 2
// count the even numbers               -> 2
console.log(numbers.reduce((count10, curr) => curr % 10 === 0 ? count10 + 1 : count10, 0)); // 2
console.log(numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, 0));

// find the max number                  -> 100
// find the min number                  -> 5
console.log(numbers.reduce((max, curr) => Math.max(max, curr), -Infinity)); // 100
console.log(numbers.reduce((min, curr) => Math.min(min, curr), Infinity)); // 5



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3


// TODO we will solve this on Saturday morning ;)