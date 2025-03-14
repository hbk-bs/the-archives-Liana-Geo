
let x = 0;
let y = 0;
let radius = 50;
let speed = 1;

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y = height/2;
  x = -radius;
  strokeWeight(0.5);
  fill("orange");
}

function draw() {
background(0,20);
circle(x,y,radius);
speed=speed*=1.01;
x+=speed;
console.log
x = x + 4
if(x>width+radius){
  x = -radius;
  speed=1;
}
}
