class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.05);
    
    this.life = 255;
    this.hueVal = 0; 
    this.done = false;
  }
  
  update() {
    this.finish();
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.life -= 2;
    if(this.hueVal > 255)
      this.hueVal = 0;
    this.hueVal++;
  }
  
  display() {
    noStroke();
    fill(this.hueVal, 255, this.life);
    ellipse(this.pos.x, this.pos.y, 2, 2);
  }
  
  finish() {
    if(this.life <= 0)
      this.done = true;
    else
      this.done = false;
  }
}