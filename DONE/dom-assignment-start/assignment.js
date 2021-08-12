const task1 = document.getElementById('task-1');
const task11 = document.querySelector('#task-1');
// console.dir(task1);
// console.dir(task11);
task1.style.backgroundColor = 'black';
task1.style.color = 'white';

const title1 = document.querySelector('title');
title1.textContent = 'Assignment solved';

const docHead = document.head;
const title2 = docHead.querySelector('title');

title2.textContent = 'Yeah Boy';
// const title1 = head.querySelector('title');
// console.dir(title1);

const h1 = document.querySelector('h1');
const h11 = document.getElementsByTagName('h1');

h11[0].textContent = 'WE DID IT!';
console.dir(h1);
