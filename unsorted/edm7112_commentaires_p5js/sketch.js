/*
CE SKETCH EST UN EXEMPLE DE BASE POUR EDM7112
LE DOSSIER DEVRAIT CONTENIR LES LOGITHEQUES SUIVANTES
- p5.js : http://p5js.org/reference/
- p5.sound.js : http://p5js.org/reference/#/libraries/p5.sound
- p5.dom.js : http://p5js.org/reference/#/libraries/p5.dom
*/

// METTRE DANS preload() TOUT CE QUI DOIT ETRE CHARGE AVANT QUE LE SKETCH DEMARRE
function preload() {
  
}

// METTRE DANS setup() TOUT CE QUI DOIT ETRE EXECUTE AU DEMARRAGE DU SKETCH
function setup() {
  // createCanvas(windowWidth, windowHeight) CREE UNE SURFACE DE DESSIN QUI 
  // REMPLIT LA FENETRE
  createCanvas(windowWidth, windowHeight);
  //  colorMode(HSB, 100) CHANGE LE MODE D'ECTRITURE DES COULEURS AU MODE 
  // HSB : color(Hue,Saturation,Brightness)
  // Hue : 0 A 360
  // Saturation : 0 A 100
  // Brightness : 0 A 100
  colorMode(HSB);
}

// CETTE FONCTION REDIMENSIONNE LA SURFACE DE DESSIN POUR QU'ELLE REMPLISSE
// LA FENETRE SI LA FENETRE CHANGE DE TAILLE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// METTRE DANS draw() TOUT CE QUI DOIT ETRE DESSINE
function draw() {
  // background(Hue,Saturation,Brightness) REMPLIT LA SURFACE DE DESSIN D'UNE COULEUR
  background(360, 100, 100);
  // text( "texte" , position horizontale, position verticale) PERMET DE DESSINER DU TEXTE
  text("EDM7112",width/2,height/2);
}