let screen = document.getElementById('screen');
let history = document.getElementById('history');
let calculationHistory = [];
let historyVisible = false;

function appendToScreen(value) {
    if (screen.textContent === '0' && value !== '.') {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

function clearAll() {
    screen.textContent = '0';
}

function deleteLast() {
    if (screen.textContent.length > 1) {
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        screen.textContent = '0';
    }
}

function calculate() {
    try {
        let expression = screen.textContent;
        // Reemplazar × con * para evaluación
        expression = expression.replace(/×/g, '*');
        
        // Validar expresión
        if (!isValidExpression(expression)) {
            screen.textContent = 'Error';
            return;
        }
        
        let result = Function('"use strict"; return (' + expression + ')')();
        
        // Formatear resultado
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(10));
        }
        
        // Guardar en historial
        let historyEntry = expression + ' = ' + result;
        calculationHistory.unshift(historyEntry);
        if (calculationHistory.length > 10) {
            calculationHistory.pop();
        }
        updateHistoryDisplay();
        
        screen.textContent = result;
    } catch (error) {
        screen.textContent = 'Error';
    }
}

function isValidExpression(expr) {
    // Validar que la expresión no contenga caracteres peligrosos
    return /^[0-9+\-*/().%\s]+$/.test(expr) && 
           expr.length > 0 &&
           !expr.includes('**') &&
           !expr.includes('//');
}

function updateHistoryDisplay() {
    if (historyVisible) {
        history.innerHTML = calculationHistory
            .map(item => `<div class="history-item">${item}</div>`)
            .join('');
    }
}

function toggleHistory() {
    historyVisible = !historyVisible;
    history.classList.toggle('show', historyVisible);
    if (historyVisible) {
        updateHistoryDisplay();
    }
}

// Soporte para teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToScreen(key);
    } else if (key === '+' || key === '-') {
        appendToScreen(key);
    } else if (key === '*') {
        appendToScreen('×');
    } else if (key === '/') {
        event.preventDefault();
        appendToScreen('/');
    } else if (key === '(' || key === ')') {
        appendToScreen(key);
    } else if (key === '%') {
        appendToScreen('%');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    }
});

