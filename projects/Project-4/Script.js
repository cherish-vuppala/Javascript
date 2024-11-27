let turn = 0;
const form = document.getElementById("guess-form");
const section = document.getElementById("section-1");
// console.log(form);
let randomNumber = generateRandomNumber();
// console.log(randomNumber);
let input = document.getElementById("guess");
let message = document.getElementById("message");
let submit = document.getElementById("submit-guess");
form.addEventListener("submit", check);

function check(e) {
  e.preventDefault();
  input = document.getElementById("guess");
  // console.log(input);
  const guess = Number(input.value);
  input.value = "";
  if (turn > 9) {
    message.innerText = `Sorry! 10 chances are over`;
    endGame();
  } else if (randomNumber === guess) {
    message.innerText = `Congratulations! you guessed it right`;
    endGame();
  } else if (randomNumber > guess)
    message.innerText += `Your guess ${guess} is too low\n`;
  else message.innerText += `Your guess ${guess} is too high\n`;
  turn++;
}

function endGame() {
  message.innerText += "\nGame over!";
  input.disabled = true;
  submit.disabled = true;
  playAgain();
}

function playAgain() {
  const restart = document.createElement("button");
  restart.innerText = "Play again";
  section.append(restart);
  restart.addEventListener("click", clear);
}

function clear() {
  turn = 0;
  message.innerText = "";
  this.remove();
  submit.disabled = false;
  input.disabled = false;
  input.focus();
  randomNumber = generateRandomNumber();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
