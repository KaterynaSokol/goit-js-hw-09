const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let timerId = null;

function onStartBtn() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

function onStopBtn() {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
