function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {

  background(360, 0, 50);

  stroke(260, 0, 0);
  // point(x,y);
  point(10, 10);

  stroke(260, 100, 100);
  // line(x1,y1,x2,y2)
  line(20, 10, 40, 75);

  noStroke();

  fill(132, 100, 100);
  // triangle(x1,y1,x2,y2,x3,y3);
  triangle(60, 18, 60, 140, 81, 140);

  fill(0, 100, 100);
  // rect(x du coin,y du coin,largeur,hauteur);
  rect(100, 81, 63, 63);

  fill(32, 100, 100);
  // quad(x1,y1,x2,y2,x3,y3,x4,y4);
  quad(189, 18, 216, 40, 216, 260, 180, 200);

  fill(300, 100, 100);
  // ellipse(x du centre,y du centre,largeur,hauteur);
  ellipse(260, 144, 72, 72);

  fill(256, 100, 100);
  // arc(x du centre,y du centre,largeur,hauteur,debut de l'arc en radians,fin de l'arc en radians);
  arc(360, 144, 40, 40, PI, TWO_PI);

  fill(360, 0, 0);
  // text( quoi ecrire, x , y);
  text("bla bla", 400, 150);

  noFill();

  stroke(40, 100, 100);
  // bezier(x1,y1,x2,y2,x3,y3,x4,y4)
  bezier(585, 20, 510, 10, 590, 90, 515, 80);

   noStroke();

  fill(132, 40, 70);
  beginShape();
  vertex(630, 20);
  vertex(645, 30);
  vertex(685, 75);
  vertex(630, 175);
  vertex(620, 55);
  vertex(610, 35);
  endShape(CLOSE);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}