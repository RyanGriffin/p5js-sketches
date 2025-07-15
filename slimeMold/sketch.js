let molds = [];
let d;
let num = 35000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  d = pixelDensity();
  
  let spawns = []; // potential colony spawns
  let spacing = width/6;  // spacing between spawns
  let jitter = 250; // randomizes spawns

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      let jx = random(-jitter, jitter);
      let jy = random(-jitter, jitter);
      spawns.push(createVector(x+jx, y+jy));
    }
  }

  for(let i = 0; i < num; i++) {
    let spawn = spawns[i % spawns.length]
    molds[i] = new Mold(spawn.x, spawn.y);
  }
}

function draw() {
  background(0, 10);
  
  loadPixels();
  
  for(let i = 0; i < num; i++) {
    molds[i].update();
    molds[i].display();
  }
}
