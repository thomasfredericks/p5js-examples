
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


let chouchou1;

let chouchou2;

/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  chouchou1 = new Monstre( random(width) , random(height) );

  chouchou2 = new Monstre( random(width) , random(height) );

}


function draw() {
  background(255);

  chouchou1.giguer();

  chouchou2.giguer();

  console.log( chouchou1.x , chouchou1.y , chouchou2.x, chouchou2.y );

  chouchou1.dessiner();

  chouchou2.dessiner();
}

/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
