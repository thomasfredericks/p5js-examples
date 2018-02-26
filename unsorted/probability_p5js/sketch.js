var quoiDessiner = "cercle";
var c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 100);
  
  c = color(random(360),random(60,100),random(60,100));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);
  fill(c);
  if ( quoiDessiner == "cercle") {
    ellipse(width/2,height/2,50,50);
  } else if ( quoiDessiner == "rectangle" ) {
    rect(width/2,height/2,100,100);
  }
}

function mouseClicked() {
  
  c = color(random(360),random(60,100),random(60,100));
  
  var aleatoire = random(0,100);
  
  if ( aleatoire > 50 ) {
    quoiDessiner = "cercle";
  } else {
    quoiDessiner = "rectangle";
  }
}
