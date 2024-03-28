const cells = document.querySelectorAll('.cell');
const startBtn = document.getElementById('start-btn');

let sequence = [];
let userSequence = [];
let currentIndex = 0;

// Function to start the game
function startGame() {
  sequence = [];
  userSequence = [];
  currentIndex = 0;
  generateSequence();
  playSequence();
}

// Function to generate a random sequence
function generateSequence() {
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * cells.length);
    sequence.push(randomIndex);
  }
}

// Function to play the sequence
function playSequence() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= sequence.length) {
      clearInterval(interval);
      return;
    }
    const index = sequence[i];
    cells[index].classList.add('active');
    setTimeout(() => {
      cells[index].classList.remove('active');
    }, 500);
    i++;
  }, 1000);
}

// Function to handle cell clicks
function handleCellClick(index) {
  if (index === sequence[currentIndex]) {
    userSequence.push(index);
    currentIndex++;
    if (userSequence.length === sequence.length) {
      setTimeout(() => {
        alert('Correct sequence! Next round.');
        startGame();
      }, 1000);
    }
  } else {
    alert('Wrong sequence! Game over.');
  }
}

// Event listeners
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    handleCellClick(index);
  });
});

startBtn.addEventListener('click', startGame);