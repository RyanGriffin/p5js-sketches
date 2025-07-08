let cols, rows, spacing = 20, scl = 0.1;
let size = [];

function setup() {
  createCanvas(750, 750);
  rectMode(CENTER);
  cols = width/spacing;
  rows = height/spacing;
}

function draw() {
  background(0);
  
  for(let i = 0; i < cols; i++) {
    size[i] = [];
    for(let j = 0; j < rows; j++)
      size[i][j] = scl*(dist(mouseX, mouseY, spacing/2 + i*spacing, spacing/2 + j*spacing));
  }
  
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      noStroke();
      rect(spacing/2 + i*spacing, spacing/2 + j*spacing, size[i][j], size[i][j]);
    }
  }
}