var song1;
var song2;

function preload() {
   song1 = loadSound('assets/lucky_dragons_-_power_melody.mp3');
   song2 = loadSound('assets/Damscray_DancingTiger.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
  song1.loop();
  song1.amp(0);
  song2.loop();
  song2.amp(0);
}

function draw() {
  
  background(0,0,0);
  
  var song1X = width/3;
  var song1Y = height/2;
  
  var song2X = width*2/3;
  var song2Y = height/2;
  

  
  var distance1 = dist(mouseX, mouseY, song1X, song1Y);
  var distance2 = dist(mouseX, mouseY, song2X, song2Y);
  
  var amp1 = map(distance1, 0, 100 , 1 , 0);
  amp1 = constrain(amp1,0,1);
  song1.amp(amp1);
  
  var amp2 = map(distance2, 0, 100 , 1 , 0);
  amp2 = constrain(amp2,0,1);
  song2.amp(amp2);
  
  noStroke();
  fill(0,100,100,0.5);
  ellipse(song1X,song1Y,200,200);
  fill(180,100,100,0.5);
  ellipse(song2X,song2Y,200,200);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}