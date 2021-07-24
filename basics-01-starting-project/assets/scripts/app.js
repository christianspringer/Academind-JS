const defaultResult = 0
let currentResult = defaultResult;

function add(num1, num2){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1'`;

