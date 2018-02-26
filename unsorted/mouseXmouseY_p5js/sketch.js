function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  //background(360, 100, 100);
  noStroke();
  fill(360,80,100,0.2);
  //ellipse(mouseX,mouseY,10,10);
  text("*",mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
