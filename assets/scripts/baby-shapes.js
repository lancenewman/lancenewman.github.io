// Display instructions only on first visit
const showInstructions = () => {
  const weekMillis = 604800000;

  localStorage.firstVisitTime != Date.now();

  if (Date.now() - weekMillis > localStorage.firstVisitTime) {
    localStorage.firstVisit = "1";
  }

  var firstVisit = localStorage.firstVisit != "1";
  localStorage.firstVisit = "1";

  if (firstVisit) {
    const instructions = document.getElementById("instructions")
    instructions.style.display = "block";
  }
}

const closeInstructions = () => {
  document.getElementById("instructions").style.display = "none";
}

localStorage.firstVisitTime = Date.now();

const canvas = document.getElementById("baby-shapes-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

const domRect = canvas.getBoundingClientRect();

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const drawRandomRect = () => {
  const xScale = canvas.width / domRect.width;
  const yScale = canvas.height / domRect.height;

  const width = randomNumber(1, domRect.width * xScale);
  const height = randomNumber(1, domRect.height * yScale);

  const xPos = randomNumber(0, width);
  const yPos = randomNumber(0, height);
  ctx.fillRect(xPos, yPos, width, height);
}

for(let i = 0; i <= randomNumber(0, 5); i++) {
  drawRandomRect();
}

showInstructions();