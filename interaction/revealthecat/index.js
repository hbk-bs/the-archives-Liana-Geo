let img;
let pg;
function preload() {
	img = loadImage("https://raw.githubusercontent.com/hbk-bs/the-archives-Liana-Geo/refs/heads/main/assets/images/kittyreveal.png");
}
function setup() {
	createCanvas(300, 200);
	rectMode(CENTER);
	// imageMode(CENTER)
}

function draw() {
	image(img, 0, 0);
	// Get a region of the image.
	let c = get(mouseX - 15, mouseY - 15, 30, 30);
	noStroke;
	fill("black");
	rect(width / 2, height / 2, width, height);
	// Display the region.
	image(c, mouseX - 15, mouseY -15);
}
