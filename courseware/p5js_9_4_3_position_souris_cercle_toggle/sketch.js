/*******************************
CLASSE CertcleInteractif
*******************************/
class CertcleInteractif {
  constructor(x,y,d) {
    this.x = x; // X CENTRE
    this.y = y; // Y CENTRE
    this.d = d; // DIAMETRE
    this.r = d/2; // RAYON = DIAMETRE / 2
    this.on = false; // UNE VARIABLE POUR INDIQUER SI L'LE CERCLE EST COLORE
  }

  // DESSINER LE CERCLE
  dessiner() {

    if ( this.on ) fill(255,0,0);
    else fill(255);

    stroke(0);
    ellipse(this.x,this.y,this.d);
  }

  // RETOURNER SI LE CERCLE CONTIENT LE POINT
  contientLePoint(xPoint,yPoint) {

    let distance = sqrt( pow(xPoint - this.x,2) + pow(yPoint - this.y,2)  );

    if ( distance < this.r ) {
        return true;
    }

    return false;
  }


}


/*******************************
GLOBAL
*******************************/
let monCercle;
let clicFade = 0;

/*******************************
SETUP
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // x : 100
  // y : 100
  // r : 50
  monCercle = new CertcleInteractif(100,100,50);

}

/*******************************
DRAW
*******************************/
function draw() {

 if ( monCercle.on )  background(255);
 else  background(0);


  // DESSINER LE CERCLE
  monCercle.dessiner();

  // DESSINER UNE LIGNE ENTRE LA SOURIS ET LE CENTRE DU CERCLE :
  stroke(127);
  noFill();
  line(mouseX,mouseY,monCercle.x,monCercle.y);

  // AFFICHER LA POSITION DE LA SOURIS A L'ECRAN :
  noStroke();
  fill(127);
  let distance = sqrt( pow(mouseX - monCercle.x,2) + pow(mouseY - monCercle.y,2)  );
  text( "x: "+mouseX+" y: "+mouseY+" distance: "+int(distance) , mouseX, mouseY );

}

/*****************************
MOUSE PRESSED
*****************************/
function mousePressed() {

  // EST-CE QUE LA SOURIS EST AU DESSUS DU CERCLE
  if ( monCercle.contientLePoint(mouseX, mouseY) ) {
    // TRUE : ALTERNER L'ETAT
    monCercle.on = !(monCercle.on);
  }


}

/*****************************
WINDOW RESIZED
*****************************/
function windowResized() {

}
