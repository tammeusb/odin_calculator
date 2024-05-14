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
    if (y === 0) return false
    else return x / y
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
const clearButton = document.querySelector('.clear');
const backButton = document.querySelector('.backspace');
const decimalButton = document.querySelector('.decimal');

//event listeners

const updateDisplay = function() {  
    calculatorNumbers.textContent = firstNumber + "" + operator + "" + secondNumber;
}

const clearDisplay = function() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
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
        if (secondNumber !== '' && operate(+firstNumber, +secondNumber, operator) !== false) {
            firstNumber = Math.round((operate(+firstNumber, +secondNumber, operator)) * 10000) / 10000;
            operator = e.target.textContent;
            secondNumber = '';  
        }
        if (secondNumber !== '' && operate(+firstNumber, +secondNumber, operator) === false) {
            clearDisplay(); 
            updateDisplay();
            alert("You know you can't do that!")
        }
        if (firstNumber === '' && e.target.textContent === '-') firstNumber = e.target.textContent;
        updateDisplay();
    })
}

equalsButton.addEventListener('click', (e) => {
    console.log('click');
    if (secondNumber !== '' && operate(+firstNumber, +secondNumber, operator) !== false) {
        firstNumber = Math.round((operate(+firstNumber, +secondNumber, operator)) * 10000) / 10000;
        operator = '';
        secondNumber = '';
        updateDisplay();
    } 
    if (secondNumber !== '' && operate(+firstNumber, +secondNumber, operator) === false) {
        clearDisplay();
        updateDisplay();
        alert("You know you can't do that!")
    }
})

clearButton.addEventListener('click', (e) => {
    clearDisplay();
    updateDisplay();
});

function isValidDivide(operator, secondNumber) {
    if (operator === '/' && secondNumber === '0') return false
    else return true
}

//BUG: backButton returns NaN if firstNumber or secondNumber
//begin with '-'. Forced NaN to convert to '-'.

backButton.addEventListener('click', (e) => {
    console.log("click");
    if (secondNumber === '' && operator === '' && firstNumber !== '')
        firstNumber = +firstNumber.toString().slice(0,-1);  
    if (secondNumber === '' && operator !== '')
        operator = '';
    if (secondNumber !== '')
        secondNumber = +secondNumber.toString().slice(0,-1);
    if (isNaN(firstNumber)) firstNumber = '-';
    if (isNaN(secondNumber)) secondNumber = '-';
    if (firstNumber === 0) clearDisplay();
    if (secondNumber === 0) secondNumber = '';  
    updateDisplay();
})

decimalButton.addEventListener('click', (e) => {
    console.log('click');
    if (operator === '' && !checkDecimal(firstNumber)) firstNumber += e.target.textContent;
    else if (operator !== '' && !checkDecimal(secondNumber)) secondNumber += e.target.textContent;
    updateDisplay();    
})

function checkDecimal(number) {
    return number.toString().split('').includes('.');
}

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
