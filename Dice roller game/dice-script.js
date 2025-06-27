const rollBtn = document.getElementById("rollBtn");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollHistory = document.getElementById("rollHistory");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let lastFiveRolls = [];

function rollDice() {
  const roll1 = Math.floor(Math.random() * 6);
  const roll2 = Math.floor(Math.random() * 6);

  // Animate dice
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  setTimeout(() => {
    dice1.textContent = diceFaces[roll1];
    dice2.textContent = diceFaces[roll2];
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");

    const rollSum = roll1 + 1 + roll2 + 1;
    lastFiveRolls.unshift(rollSum);

    if (lastFiveRolls.length > 5) lastFiveRolls.pop();

    updateHistory();
  }, 500);
}

function updateHistory() {
  rollHistory.innerHTML = "";
  lastFiveRolls.forEach((sum, index) => {
    const li = document.createElement("li");
    li.textContent = `Roll ${index + 1}: ${sum}`;
    rollHistory.appendChild(li);
  });
}

rollBtn.addEventListener("click", rollDice);
