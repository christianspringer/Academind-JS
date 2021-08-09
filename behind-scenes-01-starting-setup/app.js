// let name = 'Christian';

// if (name === 'Christian') {
//   let hobbies = ['sports', 'music'];
//   console.log(hobbies);
// }

// function greet() {
//   let age = 28;
//   let name = 'Leah';
//   console.log(name, age);
// }

// console.log(name);

// greet();

// let sum;

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i >= 2) {
//       break;
//     }
//     console.log(i, j);
//     sum = i + j;
//   }
// }

// console.log('sum', sum);
'use strict';

// let username = 'Christian';

// console.log(username);

function getName(){
  return prompt('Enter your name: ', '');
}

function greet(){
  const username = getName()
  console.log('Hello ' + username);
}

greet();