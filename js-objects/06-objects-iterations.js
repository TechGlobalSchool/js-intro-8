const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7' 
};

/*
color
year
make
model
*/

console.log(Object.keys(car)); // [ 'color', 'year', 'make', 'model' ]

console.log('\n----------iteration of object keys with for...of loop-----------\n');
for(const key of Object.keys(car)) {
    console.log(key);
}

console.log('\n----------iteration of object keys with forEach() method-----------\n');
Object.keys(car).forEach(key => console.log(key));

console.log('\n----------iteration of object keys with for loop-----------\n');
for(let i = 0; i <= Object.keys(car).length-1; i++) {
    console.log(Object.keys(car)[i]);
}


/*
red
2023
BMW 
X7
*/

console.log('\n----------iteration of object values with for...of loop-----------\n');
const values = Object.values(car);

for(const value of values) {
    console.log(value);
}


console.log('\n----------iteration of object values with forEach() method-----------\n');
values.forEach(value => console.log(value));


console.log('\n----------iteration of object values with for loop-----------\n');
for(let i = 0; i <= values.length-1; i++) {
    console.log(values[i]);
}

/*
  [ 'color', 'red' ]
  [ 'year', 2023 ]
  [ 'make', 'BMW' ]
  [ 'model', 'X7' ]
*/

console.log('\n----------iteration of object entries with for...of loop-----------\n');
for(const entry of Object.entries(car)) {
    console.log(entry);
}

console.log('\n----------iteration of object entries with forEach() method-----------\n');
Object.entries(car).forEach(entry => console.log(entry));


// How to fetch all the keys and values separately, not as an pair array
for(const [key, value] of Object.entries(car)) {
    console.log(`The key is '${key}' and the value is '${value}'.`);
}


/*
Check if any value in the car object is 'red'
Check if any key in the car object is 'engine'
*/

console.log(Object.values(car).indexOf('red') >= 0); // true
console.log(Object.keys(car).indexOf('engine') >= 0); // false

console.log(Object.values(car).includes('red')); // true
console.log(Object.keys(car).includes('engine')); // false