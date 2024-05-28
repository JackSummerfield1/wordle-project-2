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
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += inputValues[i].value;
    }
    if guess.length < 5 {
        alert('Not enough letters');
        return;
    }
}

// Call the function
drawGrid(6, 5);
