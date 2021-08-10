const startGameBtn = document.getElementById('start-game-btn');

const startGame = function () {
  console.log('game is starting...');
};

// const person = {
//   name: 'Christian',
//   greet: function greet(){
//     console.log('hello');
//   }
// }

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', startGame);
