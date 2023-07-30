const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
let total = 0
let currentValue = 0;
let expression = '';

function updateDisplay(text) {
    display.innerText = text;
}

function checkInput(key) {
    if( key == 'c' ) {
        updateDisplay(0);
        total = 0;
        currentValue = 0;
        return;
    }

    if( key == '=' ) {
        try {
            total = eval(`${currentValue}`);
            updateDisplay(total);
            currentValue = total;
        } catch(error) {
            alert('Invalid expression');
        }
        return;
    }

    if( key == 'b' ) {
        currentValue = currentValue.toString().slice(0, -1);
        updateDisplay(currentValue);
        return;
    }

    // if number or .
    if( currentValue == 0 ) {
        currentValue = '';
    }

    if( key == '.' && currentValue.indexOf('.') > -1 ) {
        return;
    }

    currentValue += key;
    updateDisplay(currentValue);
}

buttons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.classList.add('pressed');
        const key = button.dataset.key;
        checkInput(key);
    });
    button.addEventListener('mouseup', function() {
        button.classList.remove('pressed');
    });
});
