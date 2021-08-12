const h1 = document.getElementById('main-title');

h1.textContent = 'New Title';
h1.style.color = 'red';
h1.style.backgroundColor = 'yellow';

const li = document.querySelector('li:last-of-type');

li.textContent = li.textContent + 'new stuff';

const body = document.body;

const listItemElements = document.querySelectorAll('li');

for (const li of listItemElements) {
  console.log(li);
}
