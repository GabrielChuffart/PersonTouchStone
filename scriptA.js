let startTime;
let endTime;
let standby=2500;
let totalRec=0;
let cpt=0;
let timer=60;
let launchgame=0;
let gameTimer;
let clickTimeout; 
let timeLeft = 30;

window.onload = () => {
    document.getElementById('result').innerText = 'Time left: ' + timeLeft + 's';
    startGameTimer();
    resetTarget();
}

function resetTarget() {
    // Place target at a random position on the screen
    document.getElementById("target").style.backgroundColor = "green";
    const target = document.getElementById('target');
    target.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    target.style.top = Math.random() * (window.innerHeight - 100) + 'px';

    // Record start time
    startTime = new Date();
}

function recordClick() {
    launchgame=1;
    document.getElementById("target").style.backgroundColor = "red";
    endTime = new Date();
    const reactionTime = endTime - startTime;
    standby-=350;
    console.log(3500);
    totalRec+=reactionTime
    cpt++;
    // Prepare for the next click
    setTimeout(resetTarget, standby);
}

function startGameTimer() {
    gameTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft -= 1; // Decrease the time left
            document.getElementById('result').innerText = 'Time left: ' + timeLeft + 's';
        } else {
            endGame(); // End the game when the timer hits 0
        }
    }, 1000); // Update every second
}

function endGame() {
    clearInterval(gameTimer); // Stop the game timer
    clearTimeout(clickTimeout); // Prevent the target from moving after the game ends
    document.getElementById('result').innerText = 'Game over! Refresh to play again. Average time : '+totalRec/cpt+'milliseconds';
    document.getElementById('target').style.display = 'none'; // Hide the target
}
 