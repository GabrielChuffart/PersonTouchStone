let startTime;
let endTime;
let gameTimer; 
let clickTimeout; 
let tabAverage = [];
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
        target.style.top = Math.random() * (maxHeight) + 75+'px';

        startTime = new Date();
    }
}

function recordClick() {
    if(timeLeft <= 0) return;
    endTime = new Date();
    const reactionTime = endTime - startTime;
    document.getElementById('result').innerText = `Time left: ${timeLeft}s`;
    tabAverage.push(reactionTime);
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
    let timeAverage = 0;
    for(let i = 0; i <tabAverage.length; i++) {
        timeAverage += tabAverage[i];
    }
    timeAverage = timeAverage/tabAverage.length;
    timeAverage = Math.round(timeAverage); 
    document.getElementById('result').innerText = 'Game over! Your have a reaction time of ' + timeAverage + ' milliseconds. Click "Start" to play again.';
    document.getElementById('target').style.display = 'none';
}
