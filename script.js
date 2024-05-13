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

let firstNumber = '';
let operator = '';
let secondNumber = '';

//querySelectors

const calculatorNumbers = document.querySelector('.numbers');
const buttons = document.querySelectorAll('.button');

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {  
        if (operator === '') firstNumber += e.target.textContent;
        else if (operator !== '') secondNumber += e.target.textContent;
        updateDisplay();
    })
}

const updateDisplay = function() {
    calculatorNumbers.textContent = firstNumber + "" + operator + "" + secondNumber;
}

//how to add number to display's "firstNumber"'s textContent?
//if 'operator' is still null, keep attaching numbers to firstNumber's textcontent
//when operator is pressed, convert firstNumber's value into an integer and store it
//after operator has been pressed, only attach numbers to secondNumber's textContent.
//when equals is pressed, convert secondNumber's value into an integer and pass all 
//three to operate()
