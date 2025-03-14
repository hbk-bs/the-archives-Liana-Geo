
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.speed = random(1, 3);
    this.vel.setMag(this.speed);
    this.target = createVector(width / 2, height / 2); 
  }

  move() {
    let force = p5.Vector.sub(this.target, this.pos);
    force.setMag(0.05);
    this.vel.add(force);
    this.vel.limit(this.speed);
    this.pos.add(this.vel);
    let squareSize = 200;
    let halfSize = squareSize / 2;
    let left = width / 2 - halfSize;
    let right = width / 2 + halfSize;
    let top = height / 2 - halfSize;
    let bottom = height / 2 + halfSize;

    if (this.pos.x > left && this.pos.x < right && this.pos.y > top && this.pos.y < bottom) {
      if (this.pos.x <= left || this.pos.x >= right) {
        this.vel.x *= -1;
      }
      if (this.pos.y <= top || this.pos.y >= bottom) {
        this.vel.y *= -1;
      }
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5);
  }
}

let particles = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(30);

  let squareSize = 200;
  fill("yellow");
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, squareSize, squareSize);

  for (let particle of particles) {
    particle.move();
    particle.display();
  }
}
