

let xMonstreArray = new Array();
let yMonstreArray = new Array();

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

   for ( let i =0; i < 100; i++ ) {
     xMonstreArray.push( random(width) );
     yMonstreArray.push( random(height) );
   }

}

/*******************************
ACTUALISER LA SCENE
*******************************/
function draw() {

  background(255);

  for ( let i =0; i < xMonstreArray.length ; i++ ) {
    xMonstreArray[i] = xMonstreArray[i] + random(-2,2);
    yMonstreArray[i] = yMonstreArray[i] + random(-2,2);
    dessinerMonstre( xMonstreArray[i] , yMonstreArray[i] );
  }

}

/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
