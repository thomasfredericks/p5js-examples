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

  // ECRIRE DU TEXTE A UNE POSITION X ET Y :
  // text( "text" , x , y );
  text( "Ouvrir la console pour voir les messages du 'log'" , 100 , 100 );

  // IMPRIMER LA POSITION DE LA SOURIS DANS LA CONSOLE :
   console.log( "x: " + mouseX + " y: " + mouseY );

  // AFFICHER LA POSITION DE LA SOURIS A L'ECRAN :
  text( "x: " + mouseX + " y: " + mouseY , mouseX, mouseY );

  // DESSINER UNE LIGNE ENTRE LA POSITION COURANTE DE LA
  // SOURIS ET SA POSITION PRECEDENTE :
  line(mouseX,mouseY,pmouseX,pmouseY);

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
