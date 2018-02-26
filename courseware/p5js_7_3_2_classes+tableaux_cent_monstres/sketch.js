
/*******************************
LA CLASSE DU MONSTRE
*******************************/
class Monstre {
  // LE constructor() PREND DEUX PARAMETRES: x et y
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  dessiner() {
      // LE CORPS
    fill(0);
    ellipse(this.x,this.y,30,30);
    // LES YEUX
    fill(255);
    ellipse(this.x-8,this.y-5,10,10);
    ellipse(this.x+8,this.y-5,10,10);
  }

  giguer() {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }

}

// CREER UNE VARIABLE GLOBALE
// QUI CONTIENDRA UN TABLEAU (Array) :
let monstreArray;


/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  monstreArray = new Array();

   for ( let i =0; i < 100 ; i = i+1 ) {
     monstreArray.push( new Monstre( random(width) , random(height) ) );
   }

}


function draw() {
  background(255);

  for ( let i = 0; i < monstreArray.length; i++ ) {
    let monstre = monstreArray[i];
    monstre.giguer();
    monstre.dessiner();
  }

}

/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
