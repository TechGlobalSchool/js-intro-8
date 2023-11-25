// Static properties and functions
// Static properties and functions are accessed with class names 
// They do not belong to object

// All the Math methods that we used were static methods
console.log(Math.max(3, 5)); // 5

// Static property
console.log(Math.PI); // 3.141592653589793....
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


class Computer {
    // non-static - belongs to object
    brand = 'Apple';

    // non-static - belongs to object
    run() {
        console.log('RUN FUNCTION')
    }

    // static - belong to class
    static info = 'SECRET INFO';

    static open() {
        console.log('OPEN FUNCTION');
    }
}

const c1 = new Computer();
console.log(c1.brand); // Apple
c1.run(); // RUN FUNCTION

// c1.open(); // TypeError: c1.open is not a function
Computer.open(); // OPEN FUNCTION

console.log(c1.info); // undefined
console.log(Computer.info); // SECRET INFO



class Person {
    constructor(name, address, gender) { // these are information vary from person to person objects
        this.name = name;
        this.address = address;
        this.gender = gender;
    }

    static hasEyes = true; // This is universal info for all the people, so makes to make static

    walk() {
        console.log(this.name, 'NON-STATIC WALK FUNCTION');
    }

    static breathe() {
        console.log('STATIC BREATHE FUNCTION');
    }
}

const ayca = new Person('Ayca', 'AL', 'Female');
const suzanne = new Person('Suzanne', 'IL', 'Female');
const dylan = new Person('Dylan', 'IA', 'Male');

console.log(ayca.name); // Ayca
ayca.walk();
suzanne.walk();


console.log(Person.hasEyes); // true
Person.breathe();

// Person.walk(); // TypeError: Person.walk is not a function
// ayca.breathe(); // TypeError: ayca.breathe is not a function

