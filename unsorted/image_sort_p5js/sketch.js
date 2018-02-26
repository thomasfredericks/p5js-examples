DOES NOT WORK


var sourceImg;
var modifiedImg;

function preload() {
  sourceImg = loadImage('assets/landscape-mountains-nature-lake.jpg');
  modifiedImg = loadImage('assets/landscape-mountains-nature-lake.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(modifiedImg, 0, 0,width,height);
}

function mouseClicked() {
  sourceImg.loadPixels();
  
  modifiedImg.loadPixels();
  for (i = 0; i < modifiedImg.width; i++) {
    for (j = 0; j < modifiedImg.height; j++) {
      modifiedImg.set(i, j, sourceImg.get(random(0,sourceImg.width),random(0,sourceImg.height)));
    }
  }
  modifiedImg.updatePixels();
}