/*
break;
	break is used to terminate the loop.
continue;
	continue is used to skip only current iteration if a specified condition occurs and 	continues with the next iteration in the loop.
*/

let num1 = 5, num2 = 17;

for(let i = num1; i <= num2; i++) {
    console.log(i);
}

// skip the odd numbers, print the evens only
for(let i = num1; i <= num2; i++) {
    if(i % 2 === 0) console.log(i);
}


for(let i = num1; i <= num2; i++) {
    if(i % 2 !== 0) continue;
    else console.log(i);
}

// Print all the numbers from 3 to 12 inclusive but 5 and 7 ->  3 4 6 8 9 10 11 12
for(let i = 3; i <= 12; i++) {
    if(i === 5 || i === 7) continue;
    else console.log(i);
}

for(let i = 3; i <= 12; i++) {
    if(i !== 5 && i !== 7) console.log(i);
}

// Gemerate a new random number 5 to 15 until you got 10 

while(true) {
    let random = Math.floor(Math.random() * 11) + 5;
    console.log(random);
    if(random === 10) break;
}

const numbers = [2, 5, 10, 14, 21, 28, 7];
let firstDivisible7;

// Find the first element that is divisible by 7
for(const num of numbers) {
    if(num % 7 === 0) {
        firstDivisible7 = num;
        break;
    }
}

console.log(firstDivisible7);

