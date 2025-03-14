let catImages = [];
let currentImage = 0;

function preload() {
  catImages[0] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpetnnormal.jpg'); 
  catImages[1] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpettummy.jpg'); 
  catImages[2] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpetnose.jpg');
  catImages[3] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpethead.jpg'); 
  catImages[4] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpetbutt.jpg'); 
  catImages[5] = loadImage('https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/e1b9839ff7fb5cc53b31517b6db7d2dd771b00bf/assets/images/catpetback.jpg'); 
}

function setup() {
  createCanvas(200, 166); 
}

function draw() {
  background(255);
  image(catImages[currentImage], 0, 0, width, height); 
}

function mousePressed() {
  if (isInsideBauch(mouseX, mouseY)) {
    currentImage = 1;
  } else if (isInsideGesicht(mouseX, mouseY)) {
    currentImage = 2;
  } else if (isInsideStirn(mouseX, mouseY)) {
    currentImage = 3; 
  } else if (isInsideSchwanz(mouseX, mouseY)) {
    currentImage = 4; 
  } else if (isInsideRuecken(mouseX, mouseY)) {
    currentImage = 5; 
  } else {
    currentImage = 0; 
  }
}

function isInsideBauch(x, y) {
  return x > 60 && x < 140 && y > 100 && y < 140;
}

function isInsideGesicht(x, y) {
  return x > 100 && x < 200 && y > 45 && y < 60; 
}

function isInsideStirn(x, y) {
  return x > 120 && x < 200 && y > 10 && y < 40;
}

function isInsideSchwanz(x, y) {
  return x > 30 && x < 60 && y > 100 && y < 120; 
}

function isInsideRuecken(x, y) {
  return x > 40 && x < 100 && y > 60 && y < 100; 
}