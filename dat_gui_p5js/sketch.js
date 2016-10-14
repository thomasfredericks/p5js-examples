var rayon = 40;
var couleur = "#ffae23";
var gui; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gui = new dat.GUI();
  gui.add(this, 'rayon', 5, 300);
  gui.addColor(this, 'couleur');


}

function draw() {
  background(0,0,100);
  fill(couleur);
  ellipse(width*0.5,height*0.5,rayon,rayon);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}