/*******************************
SETUP
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);


}

/*******************************
DRAW
*******************************/
function draw() {

  background(255);

  var xCentre = width * 0.5;


  // RECTANGLE DE DROITE
  if ( mouseX > xCentre ) {
    fill(0);
    rect( width * 0.5 , 0 , width * 0.5 , height);
  } else {
    fill(255);
    rect( width * 0.5 , 0 , width * 0.5 , height);
  }

   // RECTANGLE DE GAUCHE
  if ( mouseX < xCentre ) {
    fill(0);
    rect( 0 , 0 , width * 0.5 , height);
  } else {
    fill(255);
    rect( 0 , 0 , width * 0.5 , height);
  }

  // TEXTE
  fill(127);
  text( "xCentre: "+xCentre , xCentre , 20);

  // AFFICHER LA POSITION DE LA SOURIS A L'ECRAN :
  text( "x: " + mouseX + " y: " + mouseY , mouseX, mouseY );


}

/*****************************
MOUSE PRESSED
*****************************/
function mousePressed() {

}

/*****************************
WINDOW RESIZED
*****************************/
function windowResized() {

}
