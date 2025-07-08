class Mold {
  constructor() {
    // starting location(s)
    // this.x = random(width)
    // this.y = random(height);
    this.x = width/2;
    this.y = height/2;
    
    // radius of particle
    this.r = 1;
    
    // sensor distance
    this.sensorDist = 15;
    
    // rotation and sensor angles
    this.rotAngle = 25;
    this.sensorAngle = 25;
    
    // heading direction
    this.heading = random(360);
    // if(random(1) < 0.1666666666666667)
    //   this.heading += 0;
    // else if(random(1) < 0.2)
    //   this.heading += 60;
    // else if(random(1) < 0.25)
    //   this.heading += 120;
    // else if(random(1) < 0.3333333333333333333333333333)
    //    this.heading += 180;
    // else if(random(1) < 0.5)
    //   this.heading += 240;
    // else
    //   this.heading += 300;
    
    // constants
    this.vx = cos(this.heading);
    this.vy = sin(this.heading);
    this.rSensorPos = createVector(0,0); // right sensor
    this.lSensorPos = createVector(0,0); // left sensor
    this.fSensorPos = createVector(0,0); // front sensor
  }
  
  update() {
    this.vx = 3*cos(this.heading);
    this.vy = 2*sin(this.heading);
    
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

    // print(f,l,r);
    
    // compare values to decide which direction to *GROW*
    if(f > l && f > r)
      this.heading += 0; // front is best, don't adjust heading...
    else if(f < l && f < r) {
      if(random(1) < 0.5)
        this.heading -= this.rotAngle;
      else
        this.heading += this.rotAngle;
    }
    else if (l > r)
      this.heading -= this.rotAngle;
    else if (r > l)
      this.heading += this.rotAngle;
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