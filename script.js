let display = document.getElementById('display');
let memory = 0;

function insert(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText = '0';
}

function clearEntry() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.innerText = 'Erro';
    }
}

function scientificFunction(func) {
    let value = parseFloat(display.innerText);
    switch (func) {
        case 'sin':
            display.innerText = Math.sin(value).toFixed(4);
            break;
        case 'tan':
            display.innerText = Math.tan(value).toFixed(4);
            break;
        case 'cos':
            display.innerText = Math.cos(value).toFixed(4);
            break;
        case 'sqrt':
            display.innerText = Math.sqrt(value).toFixed(4);
            break;
        case 'log':
            display.innerText = Math.log10(value).toFixed(4);
            break;
        case 'ln':
            display.innerText = Math.log(value).toFixed(4);
            break;
        case 'pow':
            let exponent = prompt('Digite o valor de y:');
            display.innerText = Math.pow(value, exponent).toFixed(4);
            break;
        case 'x!':
            display.innerText = factorial(value);
            break;
        case '1/x':
            display.innerText = (1 / value).toFixed(4);
            break;
    }
}

function toggleSign() {
    display.innerText = parseFloat(display.innerText) * -1;
}

function memoryFunction(action) {
    let currentValue = parseFloat(display.innerText);
    switch (action) {
        case 'M+':
            memory += currentValue;
            break;
        case 'M-':
            memory -= currentValue;
            break;
        case 'MC':
            memory = 0;
            break;
        case 'MR':
            display.innerText = memory;
            break;
    }
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}