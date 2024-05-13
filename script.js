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
    if (operator === 'x') return multiply(x,y)
    if (operator === '/') return divide(x,y)
    else console.log("error!");
}

//variables for display

let firstNumber = '';
let operator = '';
let secondNumber = '';

//querySelectors

const calculatorNumbers = document.querySelector('.numbers');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear')

//event listeners

const updateDisplay = function() {  
    calculatorNumbers.textContent = firstNumber + "" + operator + "" + secondNumber;
}

for (i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {  
        if (operator === '') firstNumber += e.target.textContent;
        else if (operator !== '') secondNumber += e.target.textContent;
        updateDisplay();
    })
}

for (i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (e) => {
        console.log('click');
        if (firstNumber !== '' && operator === '') operator = e.target.textContent; 
        if (secondNumber !== '') {
            firstNumber = operate(+firstNumber, +secondNumber, operator);
            operator = e.target.textContent;
            secondNumber = '';
        }
        updateDisplay();
    })
}

equalsButton.addEventListener('click', (e) => {
    console.log('click');
    if (secondNumber !== '') {
        firstNumber = operate(+firstNumber, +secondNumber, operator);
        operator = '';
        secondNumber = '';
        updateDisplay();
    }
})

clearButton.addEventListener('click', (e) => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay();
});

//make separate function for number buttons, operator buttons and equals button so that they
//can be enabled and disabled at different times
//begin:
//   'firstNumber' is blank
//    operator and equals buttons are disabled. 
//if 'firstNumber' contains at least one number, enable operator buttons.
//until operator is pressed, keep attaching numbers to 'firstNumber'
//when operator is pressed:
//  convert firstNumber's value into an integer and store it
//  begin attaching numbers to secondNumber's textContent.
//  disable operator and enable equals
//when equals is pressed, convert secondNumber's value into an integer and pass all 
//three to operate()
//clear calculator and send operate() result to new 'firstNumber' value
