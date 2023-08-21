let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendOperator(operator) {
    currentInput += operator;
    updateResult();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function clearInput() {
    currentInput = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}

