let bricks = [];
let cols, rows, size = 15, offset = 2;

function setup() {
  createCanvas(750, 750);
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;
  for(let i = 0; i < cols; i++) {
    bricks[i] = [];
    for(let j = 0; j < rows; j++) {
      bricks[i][j] = new Brick(size/2 + i*size, size/2 + j*size);
    }
  }
  rectMode(CENTER);
}

function draw() {
  background(0);
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      bricks[i][j].display(15, offset);
    }
  }
}