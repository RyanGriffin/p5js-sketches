// WOW, IT'S MY FIRST p5.js PROJECT! YIPPIE!

let c;
let grid = [];
let cols = 10;
let rows = 10;
let loc = 50;

function setup() {
  createCanvas(400, 400);
  let rowSize = height/rows;
  let colSize = width/cols;
  
  for (let i = 0; i<cols; i++) {
    grid[i] = [];
    for (let j = 0; j<rows; j++) {
      grid[i][j] = new Cell(colSize/2+i*colSize, rowSize/2+j*rowSize, rowSize/2, i*loc+j*loc);
    }
  }
}

function draw() {
  print(frameRate());
  background(220);
  for (let i = 0; i<cols; i++) {
    for (let j = 0; j<rows; j++) {
      grid[i][j].update();
      grid[i][j].display();
    }
  }
}