

let xMonstre1 = 100;
let yMonstre1 = 100;
let xMonstre2 = 200;
let yMonstre2 = 100;


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

}

/*******************************
ACTUALISER LA SCENE
*******************************/
function draw() {

  background(255);


  dessinerMonstre( xMonstre1 + random(-2,2) , yMonstre1 + random(-2,2) );

  xMonstre2 = xMonstre2 + random(-2,2);
  yMonstre2 = yMonstre2 + random(-2,2);
  dessinerMonstre( xMonstre2  , yMonstre2 );

}


/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
