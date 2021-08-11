// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// Re-write the function you find in <code>assignment.js</code> as an arrow
// function.
const USERNAME = 'Christian';
const GREETING = 'Hello';
const sayHello = (userName) => console.log('Hi ' + userName);

sayHello(USERNAME);

const sayHello2 = (greeting, userName) => {
  console.log(`${greeting} ${userName}`);
};

sayHello2(GREETING, USERNAME);

const sayHello3 = () => {
  console.log('Hello hardcoded message');
};

sayHello3();

const sayHello4 = (userName = 'fool of a took!') => {
  return `Hello there ${userName}`;
};

console.log(sayHello4(USERNAME));
console.log('default', sayHello4());

const allStrings = ['one', 'two', 'three'];
const notAllStrings = [1, 'two', 3];

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('all not empty strings');
  },
  'Hello',
  'One',
  'two'
);

checkInput(
  () => {
    console.log('all not empty strings');
  },
  'Hello',
  'One',
  ''
);

// Adjust the arrow function you created as part of task 1 to use three
// different syntaxes: With two arguments (incl. a phrase that replaces "Hi"),
// with no arguments (hard-coded values in function body) and with one returned value (instead of outputting
// text inside of the function directly).

// Add a default argument to the function you created: A fallback value for
// the phrase if no value is provided.

// Add a new function: "checkInput" which takes an unlimited amount of
// arguments (unlimited amount of strings) and executes a callback function
// if NO argument/ string is an empty string.
