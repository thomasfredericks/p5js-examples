var img;

function preload() {
  img = loadImage('assets/p5js_logo.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(0, 0, 100);
  var x = mouseX - img.width * 0.5;
  var y = mouseY - img.height * 0.5;
  image(img,x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}