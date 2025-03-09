let particles = [];
let spacing = 50; 
let speed = 2;   
let startX = -20; 

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(30);
  
  if (particles.length === 0 || particles[particles.length - 1].x > spacing) {
    particles.push(new Particle(startX));
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    
    if (particles[i].x > width + 20) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x) {
    this.x = x;
    this.y = height / 2; 
  }
  
  update() {
    this.x += speed; 
  }
  
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 10, 10); 
  }
}