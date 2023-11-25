/*
Create a prototype called as Animal which takes 'name', 'age', 'color'
Create 2 prototype functions eat(), run()
*/
function Animal(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Animal.prototype.eat = function () {
    console.log('EAT FUNCTION');
}

Animal.prototype.run = function () {
    console.log('RUN FUNCTION');
}

const a1 = new Animal('Tiger', 3, 'Orange');
const a2 = new Animal('Sky', 1, 'White');

console.log(a1); // Animal { name: 'Tiger', age: 3, color: 'Orange' }
console.log(a1.name); // Tiger
console.log(a2.color); // White

a1.eat();
a2.eat();
a1.run();
a2.run();

/*
Create a prototype called as Cat and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function play()
*/
function Cat(name, age, color, breed) {
    Animal.call(this, name, age, color); // inheriting properties of the Animal prototype like super() in classes
    this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype); // Inheriting all the Animal functions

Cat.prototype.play = function () {
    console.log('PLAY FUNCTION');
}

const cat1 = new Cat('Simba', 2, 'Orange', 'Domestic');

console.log(cat1); // Cat { name: 'Simba', age: 2, color: 'Orange', breed: 'Domestic' }
console.log(cat1.name); // Simba

cat1.play(); // PLAY FUNCTION
cat1.run(); // RUN FUNCTION
cat1.eat(); // EAT FUNCTION

/*
Create a prototype called as Dog and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function catch()
*/


/*
Create a prototype called as Husky and inherit all the Dog prototype properties and methods which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 prototype function protect()
*/