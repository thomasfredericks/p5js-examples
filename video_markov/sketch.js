var videoA;
var videoB;
var videoC;
var videoD;
var videoE;
var currentVideo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  videoDebut = createVideo(['assets/apparition.ogv']);
  videoB = createVideo(['assets/avance.ogv']);
  videoC = createVideo(['assets/gauche.ogv']);
  videoD = createVideo(['assets/droite.ogv']);
  videoFin = createVideo(['assets/disparition.ogv']);

  videoDebut.hide();
  videoB.hide();
  videoC.hide()
  videoD.hide()
  videoFin.hide()
  
  videoDebut.onended(nextVideo);
  videoB.onended(nextVideo);
  videoC.onended(nextVideo);
  videoD.onended(nextVideo);

  
  currentVideo = videoDebut;
  
  currentVideo.play();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(currentVideo,0,0);
}

function nextVideo() {
  var aleatoire = random(0,100);
  if ( aleatoire < 30) {
    currentVideo = videoB;
  } else if ( aleatoire < 60)  {
    currentVideo = videoC;
  } else if ( aleatoire < 90)  {
    currentVideo = videoD;
  } else {
    currentVideo = videoFin;
  }
  
  currentVideo.play();
}