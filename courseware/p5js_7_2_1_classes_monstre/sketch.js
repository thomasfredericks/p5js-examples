
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


/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // CREER UNE INSTANCE DE LA CLASSE Monstre :
  let chouchou = new Monstre();

  // EXECUTER LA METHODE (FONCTION DE CLASSE) dessiner()
  // DE LA CLASSE Monstre :
  chouchou.dessiner(100,100);

  // A LA FIN DE setup(), chouchou EST DETRUIT
  // PARCE QUE chouchou EST DEFINI LOCALEMENT

}


/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
