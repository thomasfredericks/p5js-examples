ééé OUPS FUCKED UP THIS CODE!!!

var videoA;
var videoB;

function setup() {
  createCanvas(710, 400);
  colorMode(HSB);

  videoA = createVideo(['assets/uselessMachineA.ogv']);
  videoB = createVideo(['assets/uselessMachineB.ogv']);

  videoA.hide();
  videoB.hide();
  
  
}

function draw() {
  background(150);
  image(fingers,10,10); // draw the video frame to canvas

}