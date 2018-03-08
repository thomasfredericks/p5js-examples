/*******************************
CLASSE RectangleInteractif
*******************************/
class RectangleInteractif {
  constructor(x,y,w,h) {
    this.x = x; // X COIN GAUCHE
    this.y = y; // Y COIN GAUCHE
    this.width = w; // LARGEUR
    this.height = h; // HAUTEUR
    this.on = false; // UNE VARIABLE POUR INDIQUER SI LE RECTANGLE EST COLORE
  }

  // DESSINER LE RECTANGLE
  dessiner() {
    if ( this.on == true ) {
      fill(255,0,0);
    } else {
      fill(255);
    }

    stroke(0);
    rect(this.x,this.y,this.width,this.height);
  }

  // RETOURNER SI LE RECTANGLE CONTIENT LE POINT
  contientLePoint(xPoint,yPoint) {

    if ( xPoint > this.x &&  xPoint < (this.x + this.width) && yPoint > this.y && yPoint < (this.y + this.height) ) {
        return true;
    }

    return false;
  }


}


/*******************************
GLOBAL
*******************************/
let monRectangle;

/*******************************
SETUP
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // x : 100
  // y : 100
  // w : 50
  // h : 50
  monRectangle = new RectangleInteractif(100,100,50,50);

}

/*******************************
DRAW
*******************************/
function draw() {

  background(0);

  // EST-CE QUE LA SOURIS EST AU DESSUS DU RECTANGLE
  if ( monRectangle.contientLePoint(mouseX, mouseY) ) {
    // TRUE : COLORER EN ROUGE
    monRectangle.on = true;
  } else {
    // FALSE : COLORER EN BLANC
    monRectangle.on = false;
  }

  // DESSINER LE RECTANGLE
  monRectangle.dessiner();

  // AFFICHER LA POSITION DE LA SOURIS A L'ECRAN :
  noStroke();
  fill(127);
  text( "x: "+mouseX+" y: "+mouseY , mouseX, mouseY );


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
