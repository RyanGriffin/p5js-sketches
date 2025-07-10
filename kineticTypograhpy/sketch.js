let font;
let points = [];
let r = 5;
let angle = 0;

function preload() {
  font = loadFont("fonts/SankofaDisplay-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  points = font.textToPoints("M A C Y !", 20, 220, 135, {
    sampleFactor:1//,
    //simplifyThreshold:1
    });
  //print(points);
}

function draw() {
  background(220);
  for (let i = 0; i < points.length; i++) { 
    // if(points[i].alpha == 180)
    //   fill(255,0,0);
    // else
    //   fill(0,0,0);
    ellipse(points[i].x + r*sin(angle + i/10), points[i].y, 10, 10);
  }
  angle += 0.25;
}