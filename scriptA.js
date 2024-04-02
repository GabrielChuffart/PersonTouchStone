let startTime;
let endTime;
let gameTimer; 
let clickTimeout; 
let timeLeft; // Initialize without setting a value here
const initialTime = 30; // Initial countdown duration in seconds

window.onload = () => {
    resetGame();
}

function resetGame() {
    document.getElementById('target').style.display = 'none'; // Hide target initially
    document.getElementById('result').innerText = "Press 'Start' to begin!";
    timeLeft = initialTime; // Reset time left to initial value
    clearTimeout(gameTimer);
    clearTimeout(clickTimeout);
}

function startGame() {
    timeLeft = initialTime; // Reset or set the time left to the initial time
    document.getElementById('result').innerText = 'Time left: ' + timeLeft + 's';
    document.getElementById('target').style.display = 'flex'; // Show target
    startGameTimer();
    resetTarget();
}

function resetTarget() {
    if(timeLeft > 0) {
        const target = document.getElementById('target');
        const maxWidth = window.innerWidth - target.offsetWidth;
        const maxHeight = window.innerHeight - target.offsetHeight;

        target.style.left = Math.random() * maxWidth + 'px';
        target.style.top = Math.random() * maxHeight + 'px';

        startTime = new Date();
    }
}

function recordClick() {
    if(timeLeft <= 0) return;

    endTime = new Date();
    const reactionTime = endTime - startTime;
    document.getElementById('result').innerText = `Your reaction time is ${reactionTime} milliseconds. Time left: ${timeLeft}s`;

    clearTimeout(clickTimeout);
    clickTimeout = setTimeout(resetTarget, 200);
}

function startGameTimer() {
    clearInterval(gameTimer); // Clear any existing timer
    gameTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft -= 1;
            document.getElementById('result').innerText = 'Time left: ' + timeLeft + 's';
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameTimer);
    clearTimeout(clickTimeout);
    document.getElementById('result').innerText = 'Game over! Click "Start" to play again.';
    document.getElementById('target').style.display = 'none';
}
