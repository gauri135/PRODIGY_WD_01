// Select elements
const hoursElement = document.querySelector(".hours");
const secondsElement = document.querySelector(".seconds");
const tensElement = document.querySelector(".tens");
const startButton = document.querySelector(".btn-start");
const stopButton = document.querySelector(".btn-stop");
const resetButton = document.querySelector(".btn-reset");

// Initialize variables
let hours = 0;
let seconds = 0;
let tens = 0;
let interval;

// Function to start the timer
function startTimer() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(runTimer, 10); // 10 milliseconds = 0.01 seconds
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    hours = 0;
    seconds = 0;
    tens = 0;
    updateDisplay();
}

// Function to run the timer
function runTimer() {
    tens++;
    if (tens > 99) { // When tens reach 100, increase seconds and reset tens
        seconds++;
        tens = 0;
    }
    if (seconds > 59) { // When seconds reach 60, increase hours and reset seconds
        hours++;
        seconds = 0;
    }
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    tensElement.textContent = tens < 10 ? "0" + tens : tens;
}

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
