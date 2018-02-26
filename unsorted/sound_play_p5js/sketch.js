
var song;

function preload() {
   song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
   
}

function setup() {
 
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0,0,0);
}



function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(0,0,0);
  } else {
    song.play();
    background(90,100,100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}