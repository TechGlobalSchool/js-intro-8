class Table {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
}


const table1 = new Table('Office', 'Wood', 200);

// Accessing and updating table information without getters and setters
console.log(table1.type); // Office
console.log(table1.material); // Wood
console.log(table1.price); // 200

table1.price = -300;
console.log(table1.price); // 300


class Chair {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        if(price <= 0) throw new Error('PRICE cannot be zero or less!!!');
        else this.price = price;
    }
}

const chair1 = new Chair('Office', 'Wood', 250);

// Accessing and updating table information without getters and setters
console.log(chair1.type); // Office
console.log(chair1.material); // Wood

console.log(chair1.getPrice()); // 250


chair1.setPrice(1);
console.log(chair1.getPrice()); // 1


// PRIVATE FIELDS
class iPhone {
    #brand = 'iPhone'; // private to this class and cannot be used outside
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        if(price <= 0) throw new Error('PRICE cannot be zero or less!!!');
        else this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    // If you do not provide set method for brand, then it becomes read-only information
    // setBrand(brand) {
    //     this.#brand = brand;
    // }
}

const iPhone15 = new iPhone('15', 1000);
// console.log(iPhone15.#brand); // Not allowed
console.log(iPhone15.getBrand()); // iPhone

// iPhone15.#brand = 'Samsung'; // Not allowed