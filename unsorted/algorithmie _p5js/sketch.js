/*
variables
conditions
boucles
*/

function preload() {
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  
  background(200,30,45);
  
   if (mouseIsPressed) { // une condition
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    var x = 0; // une variable temporaire
    while ( x < mouseX ) { // une boucle
      ellipse(x,100,40,40);
      x = x+40;
    }
  }
  
}


