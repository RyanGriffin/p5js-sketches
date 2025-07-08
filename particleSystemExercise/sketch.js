let ps = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 255);
  //ps = new System(width/2, height/2);
}

function draw() {
  background(0);
  print(frameRate());
  
  if(random() < 0.75 && (abs(pmouseX - mouseX) > 0 || abs(pmouseY - mouseY) > 0)) {
    ps.push(new System(mouseX, mouseY));
  }
  
  for(let i = ps.length - 1; i >= 0 ; i--) {
    ps[i].update();
    ps[i].display();
    
    if(ps[i].done == true)
      ps.splice(i, 1);
  }
}

function mouseClicked() {
  ps.push(new System(mouseX, mouseY));
}