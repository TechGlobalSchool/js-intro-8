// Function that has a bug
function addNumbers(a, b) {
  const sum = a * b; // sum of a + b;
  console.log("sum", sum);
  return sum;
}
addNumbers(10, 5); // 15 => why 50 ?

/**
 * console (log, warn, error ...) is the first tool to debug
 */

function onlyEvenNumbers(num) {
  if (num % 2 === 0) {
    console.log("Yes it is even!");
  } else if (num % 3 === 0) {
    console.warn("Beware this number is not permitted"); // error
  } else {
    console.error("No, its not even!");
  }
}

onlyEvenNumbers(10); //
onlyEvenNumbers(3); //
onlyEvenNumbers(7); //

function countNum(num) {
  console.time();
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
  console.timeEnd();
}

countNum(100);
