
let particles = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 10; i++) {
    let radius = random(10, 20);
    let x = random(radius, width - radius);
    let y = random(radius, height - radius);
    let vx = random(-2, 2);
    let vy = random(-2, 2);
    particles.push(new Particle(x, y, radius, vx, vy));
  }
}

function draw() {
  background(0);


  for (let particle of particles) {
    particle.move();
    particle.checkEdges();
    particle.display();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      particles[i].checkCollision(particles[j]);
    }
  }
}

class Particle {
  constructor(x, y, radius, vx, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  checkEdges() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.vx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.vy *= -1;
    }
  }

  display() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }

  checkCollision(other) {
    let dx = this.x - other.x;
    let dy = this.y - other.y;
    let distance = sqrt(dx * dx + dy * dy);

    if (distance < this.radius + other.radius) {
      let tempVx = this.vx;
      let tempVy = this.vy;
      this.vx = other.vx;
      this.vy = other.vy;
      other.vx = tempVx;
      other.vy = tempVy;
    }
  }
}