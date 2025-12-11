let counter = document.getElementById("countervalue");
let clickSound = document.getElementById("click-sound");

/* Smooth Animation Counter */
function animateValue(newValue) {
  let current = parseInt(counter.textContent);
  let step = newValue > current ? 1 : -1;

  let interval = setInterval(() => {
    current += step;
    counter.textContent = current;

    if (current === newValue) {
      clearInterval(interval);
    }
  }, 20);
}

/* Increment */
function onIncrement() {
  playSound();
  let newValue = parseInt(counter.textContent) + 1;
  animateValue(newValue);
}

/* Decrement */
function onDecrement() {
  playSound();
  counter.classList.add("shake");

  let newValue = parseInt(counter.textContent) - 1;
  animateValue(newValue);

  setTimeout(() => {
    counter.classList.remove("shake");
  }, 250);
}

/* Reset */
function onReset() {
  playSound();
  animateValue(0);
}

/* Click sound */
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

/* Dark/Light Mode Toggle */
function toggleTheme() {
  document.body.classList.toggle("light");
}
