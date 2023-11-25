/*
Create a class called as Animal
Create a constructor which takes 'name', 'age', 'color'
Create 2 functions eat(), run()
*/

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    eat() {
        console.log('EAT FUNCTION');
    }
    run() {
        console.log('RUN FUNCTION');
    }
}

const a1 = new Animal('Tiger', 3, 'Orange');
const a2 = new Animal('Sky', 1, 'White');

console.log(a1); // Animal { name: 'Tiger', age: 3, color: 'orange' }
console.log(a1.name); // Tiger
console.log(a2.color); // White

a1.eat(); // EAT FUNCTION
a2.run(); // RUN FUNCTION


/*
Create a class called as Cat and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function play()
*/

class Cat extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color);
        this.breed = breed;
    }
    play() {
        console.log('PLAY FUNCTION');
    }
}

const cat1 = new Cat('Simba', 2, 'Orange', 'Domestic');

console.log(cat1);
console.log(cat1.name);

cat1.play(); // PLAY FUNCTION
cat1.run(); // RUN FUNCTION
cat1.eat(); // EAT FUNCTION

/*
Create a class called as Dog and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function catch()
*/

class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color);
        this.breed = breed;
    }
    catch() {
        console.log('CATCH FUNCTION');
    }
}

const dog1 = new Dog('Spike', 5, 'Black', 'Collie');
const dog2 = new Dog('Clifford', 3, 'Brown', 'German Shephard');

console.log(dog1);
console.log(dog2);

dog1.eat();
dog1.run();
dog1.catch();

dog2.eat();
dog2.run();
dog2.catch();

/*
Create a class called as Husky and inherit all the Dog class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 function protect()
*/

class Husky extends Dog {
    constructor(name, age, color, breed, shed) {
        super(name, age, color, breed);
        this.shed = shed;
    }
    protect() {
        console.log('PROTECT FUNCTION');
    }
}

const husky1 = new Husky('X', 5, 'Brown', 'Husky', 'Y');
husky1.protect(); // PROTECT FUNCTION
husky1.catch(); // CATCH FUNCTION
husky1.eat(); // EAT FUNCTION
husky1.run(); // RUN FUNCTION

