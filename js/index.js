"use strict";

function __dom(tag) {
    return document.querySelector(tag);
}

var operation = "";
var displayValue = "0";
var firstOperand = 0;
var secondOperand = 0;
var oldValue = "";

function addToDisplay(value) {
    __dom("#results").innerText = "";
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    __dom("#results").innerText += oldValue + displayValue;
}

function performOperation(op) {
    firstOperand = parseFloat(displayValue);
    operation = op;
    displayValue = "0";
    oldValue = __dom("#results").innerText += op;
    __dom("#results").innerText = oldValue;
}

function calculateResult() {
    secondOperand = parseFloat(displayValue);
    switch (operation) {
        case "+":
            displayValue = firstOperand + secondOperand;
            break;
        case "-":
            displayValue = firstOperand - secondOperand;
            break;
        case "*":
            displayValue = firstOperand * secondOperand;
            break;
        case "/":
            displayValue = firstOperand / secondOperand;
            break;
        case "%":
            displayValue = firstOperand % secondOperand;
            break;
    }
    __dom("#results").innerHTML = `
     <span>= ${oldValue + secondOperand}</span> <strong>${displayValue}</strong>
    `;
    //__dom("#results").innerText = oldValue + secondOperand;
}

function clearResult() {
    displayValue = "0";
    firstOperand = "";
    secondOperand = "";
    oldValue = "";
    __dom("#results").innerText = "";
}
