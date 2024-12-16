let bigParticle; 
let smallParticle; 
let angle = 0; 
let orbitRadius = 50; 
let speed = 2; 

function setup() {
  createCanvas(800, 400);
  bigParticle = new Particle(50, height / 2, 30); 
  smallParticle = new Satellite(bigParticle, orbitRadius, 10); 
}

function draw() {
  background(30);
  
  
  bigParticle.update();
  bigParticle.show();
  
  smallParticle.update();
  smallParticle.show();
}

class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  update() {
    this.x += speed; 
    if (this.x - this.size / 2 > width) {
      this.x = -this.size / 2;
    }
  }
  
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}

class Satellite {
  constructor(centerParticle, orbitRadius, size) {
    this.centerParticle = centerParticle;
    this.orbitRadius = orbitRadius;
    this.size = size;
    this.angle = 0; 
  }
  
  update() {
    this.angle += 0.05; 
  }
  
  show() {
    let x = this.centerParticle.x + cos(this.angle) * this.orbitRadius;
    let y = this.centerParticle.y + sin(this.angle) * this.orbitRadius;
    
    fill(150, 200, 255);
    noStroke();
    ellipse(x, y, this.size);
  }
}