class Mold {
  constructor(x, y) {
    // starting location
    this.x = x;
    this.y = y;
    
    // particle radius
    this.r = 1.5;
    
    // sensor distance
    this.sensorDist = 15;
    
    // rotation and sensor angles
    this.rotAngle = 22 + random(3);
    this.sensorAngle = 22 + random(3);
    
    // heading direction
    this.heading = random(360);
    // this.heading = random([36, 108, 180, 252, 324]) + random(35);
    
    // movement factor
    this.speed = 1.5;
    
    // constants
    this.vx = cos(this.heading);
    this.vy = sin(this.heading);
    this.rSensorPos = createVector(0,0); // right sensor
    this.lSensorPos = createVector(0,0); // left sensor
    this.fSensorPos = createVector(0,0); // front sensor
  }
  
  update() {
    this.vx = this.speed*cos(this.heading);
    this.vy = this.speed*sin(this.heading);
    
    this.x = (this.x + this.vx + width) % width;
    this.y = (this.y + this.vy + height) % height;
    
    this.getSensorPos(this.rSensorPos, this.heading+this.sensorAngle);
    this.getSensorPos(this.lSensorPos, this.heading-this.sensorAngle);
    this.getSensorPos(this.fSensorPos, this.heading);
    
    let l, r, f, index;
    
    // calculate pixel index for right sensor
    index = 4*(d*floor(this.rSensorPos.y)) * (d*width) + 4*(d*floor(this.rSensorPos.x));
    r = pixels[index];
    
    // calculate pixel index for left sensor
    index = 4*(d*floor(this.lSensorPos.y)) * (d*width) + 4*(d*floor(this.lSensorPos.x));
    l = pixels[index];
    
    // calculate pixel index for front sensor
    index = 4*(d*floor(this.fSensorPos.y)) * (d*width) + 4*(d*floor(this.fSensorPos.x)); 
    f = pixels[index];
    
    // compare values to decide which direction to *GROW*
    if(f > l && f > r)  // front is best, no change...
      this.heading += 0;
    else if(f < l && f < r) { // front is worst, turn randomly
      if(random(1) < 0.5)
        this.heading -= this.rotAngle;
      else
        this.heading += this.rotAngle;
    }
    else if (r > l) // turn right
      this.heading += this.rotAngle;
    else if (l > r) // turn left
      this.heading -= this.rotAngle;
  }
  
  getSensorPos(sensor, angle) {
    sensor.x = (this.x + this.sensorDist*cos(angle) + width) % width;
    sensor.y = (this.y + this.sensorDist*sin(angle) + height) % height;
  }
  
  display() {
    noStroke();
    fill(255)
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
