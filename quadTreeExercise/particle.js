class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.vx = random(-2,2);
    this.vy = random(-2,2);
    
    this.collided = false;
  }
  
  display() {
    noStroke();
    if(this.collided)
      fill(0,255,0);
    else
      fill(0);
    ellipse(this.x, this.y, this.r*2);
  }
  
  checkEdges() {
    if(this.x > width || this.x < 0)
      this.vx *= -1;
    if(this.y > height || this.y < 0)
      this.vy *= -1;
  }
  
  update() {
    this.checkEdges();
    this.x += this.vx;
    this.y += this.vy;
  }
  
  collides(p) {
    if(dist(p.x, p.y, this.x, this.y) <= this.r + p.r)
      return true;
    return false;
  }
}