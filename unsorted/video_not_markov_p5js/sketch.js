var videoA;
var videoB;
var videoC;
var videoD;
var videoE;
var currentVideo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  videoA = createVideo(['assets/apparition.ogv']);
  videoB = createVideo(['assets/avance.ogv']);
  videoC = createVideo(['assets/disparition.ogv']);
  videoD = createVideo(['assets/droite.ogv']);
  videoE = createVideo(['assets/gauche.ogv']);

  videoA.hide();
  videoB.hide();
  videoC.hide()
  videoD.hide()
  videoE.hide()
  
  videoA.onended(nextVideo);
  videoB.onended(nextVideo);
  videoC.onended(nextVideo);
  videoD.onended(nextVideo);
  videoE.onended(nextVideo);
  
  currentVideo = videoA;
  
  currentVideo.play();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(currentVideo,0,0);
}

function nextVideo() {
  var aleatoire = random(0,50);
  if ( aleatoire < 10) {
    currentVideo = videoA;
  } else if ( aleatoire < 20)  {
    currentVideo = videoB;
  } else if ( aleatoire < 30)  {
    currentVideo = videoC;
  } else if ( aleatoire < 40)  {
    currentVideo = videoD;
  } else {
    currentVideo = videoE
  }
  
  currentVideo.play();
}