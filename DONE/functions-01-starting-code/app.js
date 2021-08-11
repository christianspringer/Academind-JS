const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} OR ${SCISSORS} `,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice, we chose ${DEFAULT_USER_CHOICE} for you.`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const pChoice = getPlayerChoice(); //might be undefined
  const cChoice = getComputerChoice();
  let winner;
  if (pChoice) {
    winner = getWinner(cChoice, pChoice);
  } else {
    winner = getWinner(cChoice);
  }
  let message = `You picked ${
    pChoice || DEFAULT_USER_CHOICE
  } and the computer picked ${cChoice} resulting in a `;
  if (winner === RESULT_DRAW) {
    message += 'draw :/';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'win! :)';
  } else {
    message += 'loss :(';
  }
  alert(message);
  gameIsRunning = false;
});

//not game related rest operator example
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const number of numbers) {
    if (operation === ADD) {
      sum += validateNumber(number);
    } else {
      sum -= number;
    }
  }
  resultHandler(sum), 'the result after addition is ';
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let difference = 0;
//   for (const number of numbers) {
//     difference -= number;
//   }
//   resultHandler(difference);
// };

const showResult = (messageText, result) => {
  alert(`${messageText} ${result}`);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is '),
  ADD,
  5,
  4,
  11,
  69,
  1
);

combine(
  showResult.bind(this, 'The result after adding all numbers is '),
  ADD,
  12,
  24,
  64
);

combine(
  showResult.bind(this, 'The result after subtracting is '),
  SUBTRACT,
  5,
  3,
  1,
  9
);
