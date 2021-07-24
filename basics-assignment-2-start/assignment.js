const task3Element = document.getElementById('task-3');

function alertBasic(){
    alert('hello world');
}

function alertName(name){
    alert(name);
}

alertBasic();
alertName();

task3Element.addEventListener('click', alertBasic);

function concatinateStrings(a, b, c){
    return a + b + c;
}

alert(concatinateStrings('alpha', 'beta', 'cappa'));