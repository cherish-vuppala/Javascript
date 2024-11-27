let turn = 0;
const form = document.getElementById("guess-form");
const section = document.getElementById("section-1");
// console.log(form);
const randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);
let input = document.getElementById("guess");
let message = document.getElementById("message");
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
  playAgain();
}

function playAgain() {
  const restart = document.createElement("button");
  restart.innerText = "Play again";
  restart.addEventListener("click", clear);
  section.append(restart);
}

function clear() {
  message.innerText = "";
  input.value = "";
  turn = 0;
}
