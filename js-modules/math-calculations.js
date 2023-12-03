import {MathHelper} from './mathHelper.js';

/*
Generate 3 random numbers bt 1, 10 inclusive and find their sum and product
*/

const r1 = MathHelper.getRandomNumber(1, 10);
const r2 = MathHelper.getRandomNumber(1, 10);
const r3 = MathHelper.getRandomNumber(1, 10);

console.log('The random numbers are =', r1, r2, r3);

console.log('The sum is =', MathHelper.sum(r1, r2, r3));
console.log('The product is =', MathHelper.product(r1, r2, r3));