class Point {
  constructor(x, y, userData) {
    this.x = x;
    this.y = y;
    this.userData = userData;
  }
}

class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  contains(p) {
    if(p.x >= this.x-this.w && p.x <= this.x+this.w && p.y >= this.y-this.h && p.y <= this.y+this.h)
      return true;
    return false;
  }
  
  display() {
    noFill();
    stroke(0);
    rectMode(CENTER);
    rect(this.boundary.x, this.boundary.y, this.boundary.w*2, this.boundary.h*2);
  }
  
  intersect(boundary) {
    let boundaryR = boundary.x + boundary.w;
    let boundaryL = boundary.x - boundary.w;
    let boundaryT = boundary.y - boundary.h;
    let boundaryB = boundary.y + boundary.h;
    
    let rangeR = this.x + this.w;
    let rangeL = this.x - this.w;
    let rangeT = this.y - this.h;
    let rangeB = this.y + this.h;
    
    if(boundaryR >= rangeL && boundaryL <= rangeR && boundaryT <= rangeB && boundaryB >= rangeT)
      return true;
    return false;
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  contains(p) {
    if(dist(this.x, this.y, p.x, p.y) <= this.r)
      return true;
    return false;
  }
  
  intersect(boundary) {
    let closestX = this.x;
    let closestY = this.y;
    
    if(this.x < boundary.x - this.w)
      closestX = this.boundary.x - this.w;
    else if(closestX > boundary.x + this.w)
      closestX = boundary.x + this.w;    
    if(this.y > boundary.y + this.h)
      closestY = boundary.y + this.h;
    else if(closestY < boundary.y - this.h)
      closestY = boundary.y - this.h;
    
    if(dist(this.x, this.y, closestX, closestY) <= this.r)
      return true;
    return false;
  }
}

class QuadTree {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.isDivided = false;
  }
  
  insert(p) {
    if(!this.boundary.contains(p))
      return false;
    if(this.points.length < capacity) {
      this.points.push(p);
      return true;
    }
    else {
      if(!this.isDivided)
        this.subDivide();
      if(this.NE.insert(p))
        return true;
      if(this.NW.insert(p))
        return true;
      if(this.SE.insert(p))
        return true;
      if(this.SW.insert(p))
        return true;
    }
  }
  
  subDivide() {
    let x = this.boundary.x;
    let y = this.boundary.y;
    let w = this.boundary.w;
    let h = this.boundary.h;
    
    let NEBoundary = new Rect(x+w/2, y-h/2, w/2, h/2);
    let NWBoundary = new Rect(x-w/2, y-h/2, w/2, h/2);
    let SEBoundary = new Rect(x+w/2, y+h/2, w/2, h/2);
    let SWBoundary = new Rect(x-w/2, y+h/2, w/2, h/2);
    
    this.NE = new QuadTree(NEBoundary, capacity);
    this.NW = new QuadTree(NWBoundary, capacity);
    this.SE = new QuadTree(SEBoundary, capacity);
    this.SW = new QuadTree(SWBoundary, capacity);
    
    this.isDivided = true;
  }
  
  query(range, found) {
    if(!range.intersect(this.boundary))
      return false;
    else {
      for(let i = 0; i < this.points.length; i++) {
        if(range.contains(this.points[i]))
          found.push(this.points[i]);
        }
      if(this.isDivided) {
        this.NE.query(range, found);
        this.NW.query(range, found);
        this.SE.query(range, found);
        this.SW.query(range, found);
      }
    }
    
    return found;
  }
  
  display() {
    noFill();
    stroke(0);
    rectMode(CENTER);
    rect(this.boundary.x, this.boundary.y, this.boundary.w*2, this.boundary.h*2);
    
    // for(let i = 0; i < this.points.length; i++) {
    //   noStroke();
    //   fill(255,0,0);
    //   ellipse(this.points[i].x, this.points[i].y, 10);
    // }
    
    if(this.isDivided) {
      this.NE.display();
      this.NW.display();
      this.SE.display();
      this.SW.display();
    }
  }
  
  clearQT() {
    this.points = [];
    this.isDivided = false;
  }
}