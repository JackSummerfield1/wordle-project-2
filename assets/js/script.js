// Global variables
let words = [
  "Apple",
  "Bread",
  "Chair",
  "Dream",
  "Eagle",
  "Frogs",
  "Grape",
  "House",
  "Igloo",
  "Jelly",
  "Knife",
  "Lemon",
  "Mango",
  "Nurse",
  "Ocean",
  "Plant",
  "Quiet",
  "River",
  "Stone",
  "Table",
  "Uncle",
  "Voice",
  "Water",
  "Xenon",
  "Youth",
]; // List of words to guess

/**
 * Creates a grid with parameters rows and cols, which can be
 * changed.
 */
function drawGrid(rows, cols) {
  let gameBoard = document.getElementById("game-board");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.className = "tile";
      input.maxLength = 1; // Ensures input value is only 1 character long
      input.addEventListener("input", function () {
        this.value = this.value.toUpperCase();
      }); // Ensures all input characters are capitalised
      gameBoard.appendChild(input);
    }
  }
}

function checkGuess() {
    let gameBoard = document.getElementById('game-board');
    let inputValues = gameBoard.children;
    let userGuess = '';
    let correctAnswer = randomWord();
    let isCorrect = userGuess === correctAnswer[0];

    for (let i = 0; i < 5; i++) {
        userGuess += inputValues[i].value;
    }
    
    if (guess.length < 5) {
        alert('Not enough letters');
        return;
    }
}

// Call the function
drawGrid(6, 5);

/**
 * Automatically moves to next input when letter is entered
 * and goes back to previous value when backspace is entered
 */
function moveToNext() {
  let inputs = document.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (inputs[i].value.length === 1 && i < inputs.length - 1) {
        inputs[i + 1].focus();
      }
    })
    inputs[i].addEventListener('keydown', function(event) {
      if (event.key === 'Backspace' && inputs[i].value === '' && i > 0) {
        inputs[i - 1].focus();
      }
    })
  }
}

moveToNext();

function randomWord() {
  let ranIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[ranIndex];
}
randomWord();
