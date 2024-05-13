//basic operation functions

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

const operate = function(x,y,operator) {
    if (operator === '+') return add(x,y)
    if (operator === '-') return subtract(x,y)
    if (operator === '*') return multiply(x,y)
    if (operator === '/') return divide(x,y)
}

//variables for display

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

//querySelectors

const calculatorNumbers = document.querySelector('.numbers');
const buttons = document.querySelectorAll('.button');

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {  
        firstNumber = e.target.textContent;
        updateDisplay();
    })
}

const updateDisplay = function() {
    calculatorNumbers.textContent = firstNumber + "" + operator + "" + secondNumber;
}

