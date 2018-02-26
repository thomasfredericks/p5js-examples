

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

   xMonstreArray[0] = random(width);
   xMonstreArray[1] = random(width);
   xMonstreArray[2] = random(width);
   xMonstreArray[3] = random(width);
   xMonstreArray[4] = random(width);

   yMonstreArray[0] = random(height);
   yMonstreArray[1] = random(height);
   yMonstreArray[2] = random(height);
   yMonstreArray[3] = random(height);
   yMonstreArray[4] = random(height);

}

/*******************************
ACTUALISER LA SCENE
*******************************/
function draw() {

  background(255);

  xMonstreArray[0] = xMonstreArray[0] + random(-2,2);
  yMonstreArray[0] = yMonstreArray[0] + random(-2,2);
  dessinerMonstre( xMonstreArray[0], yMonstreArray[0] );

  xMonstreArray[1] = xMonstreArray[1] + random(-2,2);
  yMonstreArray[1] = yMonstreArray[1] + random(-2,2);
  dessinerMonstre( xMonstreArray[1], yMonstreArray[1] );

  xMonstreArray[2] = xMonstreArray[2] + random(-2,2);
  yMonstreArray[2] = yMonstreArray[2] + random(-2,2);
  dessinerMonstre( xMonstreArray[2], yMonstreArray[2] );

  xMonstreArray[3] = xMonstreArray[3] + random(-2,2);
  yMonstreArray[3] = yMonstreArray[3] + random(-2,2);
  dessinerMonstre( xMonstreArray[3], yMonstreArray[3] );

  xMonstreArray[3] = xMonstreArray[3] + random(-2,2);
  yMonstreArray[3] = yMonstreArray[3] + random(-2,2);
  dessinerMonstre( xMonstreArray[3], yMonstreArray[3] );


}

/*****************************
CODE A EXECUTER LORSQUE LA FENETRE EST REDIMENSIONNEE
*****************************/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
