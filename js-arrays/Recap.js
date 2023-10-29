
let str = 'first of first';

str.includes('f'); // true
str.indexOf('f'); // 0
str.lastIndexOf('f'); // 9

str.includes('first'); // true
str.indexOf('first'); // 0
str.lastIndexOf('first'); // 9 

str.includes('abc'); // false
str.indexOf('abc'); // -1
str.lastIndexOf('abc'); // -1 