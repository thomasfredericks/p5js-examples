
/*******************************
LA CLASSE DU MONSTRE
*******************************/
class Monstre {
  constructor() {
  }

  // LA FONCTION dessiner() PREND DEUX PARAMETRES: x et y
  dessiner(x,y) {
    // LE CORPS
    fill(0);
    ellipse(x,y,30,30);
    // LES YEUX
    fill(255);
    ellipse(x-8,y-5,10,10);
    ellipse(x+8,y-5,10,10);
  }

}

// DECLARER UNE VARIABLE GLOBALE chouchou :
let chouchou;


/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255);

  // ASSIGNER UNE NOUVELLE INSTANCE DE LA CLASSE Monstre
  // A LA VARIABLE chouchou :
  chouchou = new Monstre();

  // EXECUTER LA METHODE (FONCTION DE CLASSE) dessiner()
  // DE LA CLASSE Monstre :
  chouchou.dessiner(random(width),random(height));

}


/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  console.log("LA FENETRE A CHANGE DE TAILLE");
  resizeCanvas(windowWidth, windowHeight);
  chouchou.dessiner(random(width),random(height));
}
