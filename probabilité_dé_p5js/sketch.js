var valeur = 1;
var h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  h =  random(0,360);
  background(h, 100, 100);
  textSize(64);
  textAlign(CENTER,CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(h, 100, 100);
}

function draw() {
  background(h, 100, 100);
  text(valeur,width/2,height/2);
}

function mouseClicked() {
  
  h = random(0,360);
  
  var aleatoire = random(0,60);
  
  if ( aleatoire < 10 ) {
    valeur = 1;
  } else if ( aleatoire < 20 )  {
    valeur = 2;
  } else if ( aleatoire < 30 )  {
    valeur = 3;
  } else if ( aleatoire < 40 )  {
    valeur = 4;
  } else if ( aleatoire < 50 )  {
    valeur = 5;
  } else {
    valeur = 6;
  }
}
