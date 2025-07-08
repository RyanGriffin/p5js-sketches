class Cell {
  constructor(x0, y0, r, angle) {
    this.r = r;
    this.angle = angle;
    this.x0 = x0;
    this.y0 = y0;
  }
  
  update() { // updates location of the circle
    this.x = this.r * cos(this.angle);
    this.y = this.r * sin(this.angle);
    this.angle += 0.03;
  }
  
  display() { // displays circle on screen
    //ellipse(this.x0, this.y0, this.r*2, this.r*2);
    //line(this.x0, this.y0, this.x0 + this.x, this.y0 + this.y);
    fill(0);
    ellipse(this.x0 + this.x, this.y0 + this.y, 5, 5);
  }
}