
let particles = [];
let numParticles = 200;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < numParticles; i++) {
    let angle = random(TWO_PI);
    let radius = random(width * 0.5, width * 0.8);
    particles.push(new Particle(radius * cos(angle), radius * sin(angle)));
  }
}

function draw() {
  background(20);
  translate(width / 2, height / 2);

  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = atan2(y, x);
    this.radius = dist(0, 0, x, y);
    this.speed = random(0.5, 1.5);
    this.size = random(5, 10);
  }

  update() {
    this.radius -= this.speed;
    this.angle += 0.01;
    this.pos.x = this.radius * cos(this.angle);
    this.pos.y = this.radius * sin(this.angle);

    if (this.radius < 10) {
      this.radius = random(width * 0.5, width * 0.8);
      this.angle = random(TWO_PI);
    }
  }

  show() {
    noStroke();
    fill(255, 150);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

