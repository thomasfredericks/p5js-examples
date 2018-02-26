/*
CE SKETCH EST UN EXEMPLE DE BASE POUR EDM7112
LE DOSSIER DEVRAIT CONTENIR LES LOGITHÈQUES SUIVANTES
- p5.js : http://p5js.org/reference/
- p5.sound.js : http://p5js.org/reference/#/libraries/p5.sound
- p5.dom.js : http://p5js.org/reference/#/libraries/p5.dom
*/

var previousMouseX = 0;
var previousMouseY = 0;

var osc;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
    osc = new p5.SinOsc(); // set frequency and type
    osc.amp(0);
    osc.start();
}

function draw() {
  
  noStroke();
  fill(0,100,100,0.01);
  rect(0,0,width,height);
  
  if ( mouseIsPressed ) {
    
    var freq = map(mouseX,0,width,100,1000);
    osc.freq(freq);
    var amp = map(mouseY,0,height,1,0);
    osc.amp(amp,0.1);
    
    stroke(0,0,0);
    
    
    line(mouseX,mouseY,previousMouseX,previousMouseY);
    
  } else {
    osc.amp(0,0.1);
  }
  
 previousMouseX = mouseX;
 previousMouseY = mouseY;
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
