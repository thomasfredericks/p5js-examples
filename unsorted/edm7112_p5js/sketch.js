/*
CE SKETCH EST UN EXEMPLE DE BASE POUR EDM7112
LE DOSSIER DEVRAIT CONTENIR LES LOGITHÈQUES SUIVANTES
- p5.js : http://p5js.org/reference/
- p5.sound.js : http://p5js.org/reference/#/libraries/p5.sound
- p5.dom.js : http://p5js.org/reference/#/libraries/p5.dom
*/

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(360, 100, 0);
  
  rect(0,0,120,90);
  
  var xMapped = map( mouseX , 0, width, 0 , 120);
  var yMapped = map( mouseY , 0 , height, 0, 90);
  
  ellipse(xMapped,yMapped,5,5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
