const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// In the attached code <code>assignment.js</code>, you find a variable
// that holds a random number between 0 and 1. Write code that shows an
// alert (with any message) when that number is greater than 0.7.

if(randomNumber >= 0.7){
  alert('the number is greater than .7')
}

// let continueProcessing = true;
// do {
//   const randomNumber = Math.random();
//   if (randomNumber > 0.7) {
//     alert(`${randomNumber} is greater than .7`);
//     continueProcessing = false;
//   }
// } while (continueProcessing);

// console.log('-------------------');

// Create an array of numbers (any numbers of your choice) and loop through
// the array in two different ways - outputting the numbers inside of the
// loop.

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

console.log('-------------------');

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Adjust one of the loops from the last task such that it actually starts
// at the end (last element) of the array and loops to the first element.

console.log('-------------------');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log('-------------------');

// Create another random number (in a separate constant) and show an alert
// in two different scenarios: Both are greater 0.7 OR at least one of the two is
// NOT greater than 0.2.

// for (let i = 0; i <= 3; i++) {
//   const rand1 = Math.random();
//   for (let j = 0; j <= 3; j++) {
//     const rand2 = Math.random();
//     if(rand2 < .2 || rand1 < .2 ){
//       alert('One of the numbers is less than .2')
//     } else if (rand2 > .7 && rand1 > .7){
//       alert(`Both numbers are greater than .7`);
//     }
//   }
// }

const randomNumber2 = Math.random();

if(randomNumber < .2 || randomNumber2 < .2){
  alert('less than .2')
} else if (randomNumber > .7 && randomNumber2 > .7){
  alert('both numbers are greater than .7');
}
