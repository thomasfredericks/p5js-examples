var videoA;

function setup() {
  createCanvas(710, 400);
  colorMode(HSB);

  videoA = createVideo(['assets/uselessMachineA.ogv']);
  videoA.hide(); // hide the html video
  
}

function draw() {
  
  image(videoA,0,0); // draw the video frame to canvas

}

function mouseClicked() {
  videoA.play();
}