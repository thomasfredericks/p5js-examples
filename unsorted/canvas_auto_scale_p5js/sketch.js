/*
Auto scale a 100x100 area to fill the window
*/

var autoScale = new AutoScale(100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

}

function draw() {
  autoScale.apply();


  background(0, 0, 100);
  fill(30, 100, 100);
  rect(0, 0, 100, 100);
  fill(0, 100, 100);
  ellipse(50, 50, 100, 100);

  fill(0, 100, 100);
  ellipse(autoScale.mouseX, autoScale.mouseY, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function AutoScale(targetWidth, targetHeight) {

  this.targetWidth = targetWidth;
  this.targetHeight = targetHeight;
  
  this.apply = function() {
    var aw = windowWidth / this.targetWidth;
    var ah = windowHeight / this.targetHeight;
    translate(windowWidth * 0.5, windowHeight * 0.5);

    var s = min(aw, ah);
    scale(s);
    translate(-targetWidth * 0.5, -targetHeight * 0.5);
    
    
    
    this.mouseX = ((mouseX )  -windowWidth * 0.5)/s + targetWidth * 0.5  ;
   
    this.mouseY = ((mouseY )  -windowHeight * 0.5)/s + targetHeight * 0.5  ;
  }

}