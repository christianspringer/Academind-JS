const task3Element = document.getElementById('task-3');

function alertBasic(){
    alert('hello world');
}

function alertName(name){
    alert(name);
}

alertBasic();
alertName('Christian');

task3Element.addEventListener('click', alertBasic);

function concatinateStrings(a, b, c){
    return `${a} ${b} ${c}`;
}

const concatenatedString = concatinateStrings('alpha', 'beta', 'cappa');

alert(concatenatedString);