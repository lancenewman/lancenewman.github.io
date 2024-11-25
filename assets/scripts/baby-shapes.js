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

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const drawRandomRect = () => {
  const xScale = canvas.width / domRect.width;
  const yScale = canvas.height / domRect.height;

  const width = randomInteger(1, domRect.width * xScale);
  const height = randomInteger(1, domRect.height * yScale);

  const xPos = randomInteger(0, width);
  const yPos = randomInteger(0, height);

  const horizontalCenter = (xPos + width) / 2;
  const verticalCenter = (yPos + height) / 2;

  // Randomly rotates the shape around it's center before drawing
  ctx.translate(horizontalCenter, verticalCenter);
  ctx.rotate((randomInteger(0, 180) * Math.PI) / 180)
  ctx.translate(-horizontalCenter, -verticalCenter);

  ctx.fillRect(xPos, yPos, width, height);
}

for(let i = 0; i <= randomInteger(0, 7); i++) {
  drawRandomRect();
}

showInstructions();