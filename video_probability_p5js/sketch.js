var videoA;
var videoB;
var currentVideo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  videoA = createVideo(['assets/uselessMachineA.ogv']);
  videoB = createVideo(['assets/uselessMachineB.ogv']);

  videoA.hide();
  videoB.hide();
  
  currentVideo = videoA;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(currentVideo,0,0);
}

function mouseClicked() {
  var aleatoire = random(0,100);
  if ( aleatoire < 75) {
    currentVideo = videoA;
  } else {
    currentVideo = videoB;
  }
  currentVideo.play();
}