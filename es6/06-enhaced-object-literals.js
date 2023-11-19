const batch = '8';
const program = 'Software Engineer in Test';

// Before ES6
const student1 = {
    fName: 'John Doe',
    batch: batch,
    program: program
};

console.log(student1); // { fName: 'John Doe', batch: '8', program: 'Software Engineer in Test' }

// After ES6 - enhancements
const student2 = {
    fName: 'Jane Doe',
    batch,
    program
};

console.log(student2); // { fName: 'Jane Doe', batch: '8', program: 'Software Engineer in Test' }