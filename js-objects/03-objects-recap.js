/*
Create a car object with below information
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'

    Output the object 
*/

const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};

console.log(car); // { color: 'red', year: 2023, make: 'BMW', mdoel: 'X7' }

/*
First, update color to be black
Then, output all the values to the console.
    black
    2023
    BMW
    X7
*/

car.color = 'black';

for(const key in car) {
    console.log(car[key]);
}

// console.log(car.color);
// console.log(car.year);
// console.log(car.make);
// console.log(car.model);

// console.log(car['color']);
// console.log(car['year']);
// console.log(car['make']);
// console.log(car['model']);