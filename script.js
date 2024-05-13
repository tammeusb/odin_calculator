const add = function(x,y) {
    return x + y
}

const subtract = function(x,y) {
    return x - y
}

const multiply = function(x,y) {
    return x * y
}

const divide = function(x,y) {
    return x / y
}

//variables for display

let firstNumber = 0;
let secondNumber = 0;
let operator = 0;

const operate = function(x,y,operator) {
    if (operator === '+') return add(x,y)
    if (operator === '-') return subtract(x,y)
    if (operator === '*') return multiply(x,y)
    if (operator === '/') return divide(x,y)
}

const calculatorNumbers = document.querySelector('.numbers');

calculatorNumbers.textContent = "2 + 3";