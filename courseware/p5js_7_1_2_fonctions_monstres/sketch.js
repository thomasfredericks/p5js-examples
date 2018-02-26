
/*******************************
LA FONCTION dessinerMonstre
*******************************/
// LA FONCTION PREND DEUX PARAMETRES: x et y
function dessinerMonstre (x,y) {

    // LE CORPS
    fill(0);
    ellipse(x,y,30,30);
    // LES YEUX
    fill(255);
    ellipse(x-8,y-5,10,10);
    ellipse(x+8,y-5,10,10);

}


/*******************************
CONSTRUIRE LA SCENE
*******************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  dessinerMonstre( 100 , 100 );
  dessinerMonstre( 200 , 100 );
}


/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  dessinerMonstre( 100 , 100 );
  dessinerMonstre( 200 , 100 );
}
