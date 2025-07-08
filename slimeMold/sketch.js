let molds = [];
let d, num = 25000;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  d = pixelDensity();
  
  for(let i = 0; i < num; i++)
    molds[i] = new Mold();
}

function draw() {
  print(frameRate());
  background(0, 5);
  
  loadPixels();
  
  for(let i = 0; i < num; i++) {
    molds[i].update();
    molds[i].display();
  }
  
  // updatePixels();
}