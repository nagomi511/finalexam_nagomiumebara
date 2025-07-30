
let count = 0;
const countDisplay = document.getElementById('count');

document.getElementById('increment').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

const colors = ['red', 'blue', 'green', 'purple', 'orange'];
const box = document.getElementById('box');

document.getElementById('change-color').addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
});


const quotes = [
  "Keep pushing forward!",
  "You can do it!",
  "Believe in yourself!",
  "Every day is a new chance!",
  "Never give up!"
];

document.getElementById('show-quote').addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = randomQuote;
});