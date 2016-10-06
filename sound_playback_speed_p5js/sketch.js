
var song;

function preload() {
  // Load a sound file
  song = loadSound('assets/Damscray_DancingTiger.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
  
  colorMode(HSB);
}

function draw() {
  
  var h = map(mouseX,0,width,0,60);
  var b = 0;
  
 if ( mouseIsPressed ) {
   var amp = map(mouseY,0,height,0,1);
   song.amp(amp);
   b = map(mouseY,0,height,0,100);
   song.pan( map(mouseX,0,width,-1,1) );
 } else {
   song.amp(0);
 }

 background(h,100,b);
  
  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  var speed = map(mouseX, 0 , width, 10, 100);
 
  song.rate(speed);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
