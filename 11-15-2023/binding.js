// 'this' keyword

console.log(this); // {}
// Note: you might get different values
// For example
// on client side code you might get: Window object => https://developer.mozilla.org/en-US/docs/Web/API/Window
// on server side code you might get: global object => https://stackoverflow.com/a/52193294

// 'this' in objects

// Implicit binding  ----------------------------
let person = {
  name: "Alex",
  greet: function () {
    console.log(`Hi, ${this.name}`);
  },
};

person.greet(); // 'this' is referring to person object

// Explicit binding  ----------------------------
function greet() {
  console.log(this); // global object => person2
  console.log(`Hi, ${this.name}`); // Hi, undefined => Hi, John
}
let person2 = {
  name: "John",
};

// Goal is to attach greet function to person2 object
// Thus, changing the context of this from 'global object' to 'person2'

// CALL -------------------------------------
greet.call(person2);

// Example to .call

// const student = {
//   name: "Alex",
//   welcome() {
//     console.log(`Welcome, ${this.name}`);
//   },
// };
// const teacher = {
//   name: "Hasan",
//   welcome() {
//     console.log(`Welcome, ${this.name}`);
//   },
// };
// const client = {
//   name: "Joe",
//   welcome() {
//     console.log(`Welcome, ${this.name}`);
//   },
// };
// student.welcome()
// teacher.welcome();
// client.welcome();

const student = {
  name: "Alex",
};
const teacher = {
  name: "Hasan",
};
const client = {
  name: "Joe",
};

function welcome() {
  console.log(`Welcome, ${this.name}`);
}

welcome.call(student);
welcome.call(teacher);
welcome.call(client);

// Passing argument to .call

const jane = { age: 20 };

function sayHi(name) {
  console.log(`Hi, ${name}. And your age is: ${this.age}`);
}

sayHi.call(jane, "Jane");

// No need to pass object
function sayHi2(name) {
  console.log(`Hi, ${name}`);
}

sayHi2.call(null, "Jane2");

// APPLY -------------------------------------
// Without argument .call and .apply works the same

const user = { name: "Alex" };

function welcomeUser() {
  console.log(`Welcome, ${this.name}`);
}

// welcomeUser.call(user);
welcomeUser.apply(user);

// With argument .apply takes an array

function welcomeUser(name, city, state, zipCode) {
  console.log(
    `Welcome, ${name} and your location is ${city}, ${state} and ${zipCode}`
  );
}

welcomeUser.call(null, "Alex", "Chicago", "IL", 60000);
const user1 = ["Jane", "LA", "CA", 10000];
welcomeUser.apply(null, user1);

// BIND -----------------------------
// Similar to .call and .apply
// only difference is it return a function
// that you can use or call later

const user2 = {
  name: "Alan",
  age: 20,
  hobbies: ["running", "reading", "hiking"],
  greet() {
    // console.log(this); //  user2
    // console.log(`Hi, ${this.name}`);
    this.hobbies.forEach(
      function (hobby, idx) {
        console.log(`${this.name}'s hobbies are: ${idx + 1} ${hobby}`);
      }.bind(this) // bind function to user2
    );
  },
};

user2.greet();
// 1. user2
// 2. Object [global] 3 times

// Regular functions have its own 'this'
// Then i want change the context of 'this' inside regular function to 'this' of user2

// Arrow functions doesn't have its own 'this'
const user3 = {
  name: "Alan",
  age: 20,
  hobbies: ["running", "reading", "hiking"],
  greet() {
    // console.log(this); //  user2
    // console.log(`Hi, ${this.name}`);
    this.hobbies.forEach((hobby, idx) => {
      console.log(`${this.name}'s hobbies are: ${idx + 1} ${hobby}`);
    });
  },
};

user3.greet();

/*

someFunction.call(obj, 'arg1', 'arg2', 'arg3');
someFunction.apply(obj, ['arg1', 'arg2', 'arg3']);

const args = ['arg1', 'arg2', 'arg3'];

someFunction.call(obj, args); // error
someFunction.call(obj, ...args); // valid
// someFunction.apply(obj, args); // valid
*/

console.log(["arg1", "arg2", "arg3"]);
console.log(...["arg1", "arg2", "arg3"]);