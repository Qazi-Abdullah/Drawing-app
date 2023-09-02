
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
             
function drawRectangle(x1, y1, x2, y2) {
  context.beginPath();
  context.rect(x1, y1, x2 - x1, y2 - y1);
  context.stroke();
}  

function drawCircle(x1, y1, x2, y2) {
  const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  context.beginPath();
  context.arc(x1, y1, radius, 0, 2 * Math.PI);
  context.stroke();
}

function draw(event) {
  if (!isDrawing) return;
  const brushSize = document.getElementById("brush-size").value;
  const color = document.getElementById("color-picker").value;
  context.lineWidth = brushSize;
  context.strokeStyle = color;
   if  (document.getElementById("tool-selector").value === "pencil") {
    drawLine(lastX, lastY, event.offsetX, event.offsetY);
   }
  
  