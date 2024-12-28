
let count = 0;

const countDisplay = document.getElementById('display');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    countDisplay.value = count;
}

function increment() {
    count += 1;
    updateDisplay();
}

function decrement() {
    if(count>0)
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
