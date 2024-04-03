let timerInterval;
let millisecondsLeft = 10000; // 10 secondes en millisecondes
let testStarted = false;
let clickCount = 0;

document.getElementById('clickBox').addEventListener('click', startTest);

function startTest() {
  if (!testStarted) {
    document.getElementById('clickBox').addEventListener('click', resultatClick);
    timerInterval = setInterval(updateTimer, 10); // Mettre à jour toutes les 10 millisecondes
    testStarted = true;
    clickCount++;
    updateClickCountDisplay();
  }
}

function resultatClick(){
    clickCount++; // Incrémenter le nombre de clics
    updateClickCountDisplay();
}

function updateClickCountDisplay() {
    let clickCountDisplay = document.getElementById('clickCountDisplay');
    clickCountDisplay.textContent = 'Number of clicks: ' + clickCount;
  }

function updateTimer() {
  let timerDisplay = document.getElementById('timer');
  let seconds = Math.floor(millisecondsLeft / 1000);
  let centiseconds = Math.floor((millisecondsLeft % 1000) / 10); // Obtenir les centièmes de seconde
  timerDisplay.textContent = seconds + '.' + (centiseconds < 10 ? '0' : '') + centiseconds + ' seconds left';
  millisecondsLeft -= 10; // Soustraire 10 millisecondes
  if (millisecondsLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById('clickBox').removeEventListener('click', resultatClick);
    let clickCountDisplay = document.createElement('p');
    clickCountDisplay.textContent = 'Number of clicks: ' + clickCount;
    document.getElementById('container').appendChild(clickCountDisplay);
    //resetTest();
  }
}

function resetTest() {
  millisecondsLeft = 10000; // Réinitialiser le temps à 10 secondes en millisecondes
  testStarted = false;
  document.getElementById('timer').textContent = '';
  document.getElementById('clickBox').style.width = '100px';
  document.getElementById('clickBox').style.height = '100px';
}
