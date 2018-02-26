var sounds = [];


function preload() {
  sounds[0] = loadSound('assets/MoShangSax(0).mp3');
  sounds[1] = loadSound('assets/MoShangSax(1).mp3');
  sounds[2] = loadSound('assets/MoShangSax(2).mp3');
  sounds[3] = loadSound('assets/MoShangSax(3).mp3');
  sounds[4] = loadSound('assets/MoShangSax(4).mp3');
  sounds[5] =  loadSound('assets/MoShangSax(5).mp3');
  sounds[6] = loadSound('assets/MoShangSax(6).mp3');
  sounds[7] = loadSound('assets/MoShangSax(7).mp3');
  sounds[8] = loadSound('assets/MoShangSax(8).mp3');
  sounds[9] = loadSound('assets/MoShangSax(9).mp3');
  sounds[10] = loadSound('assets/MoShangSax(10).mp3');
  sounds[11] = loadSound('assets/MoShangSax(11).mp3');
  sounds[12] = loadSound('assets/MoShangSax(12).mp3');
}

function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  
  // Stop all sounds
  for ( var i = 0 ; i < sounds.length ; i ++ ) {
    sounds[i].stop();
  }
  
  // Play a random sound
  var soundIndex = floor( random(0,sounds.length) );
  sounds[soundIndex].play();

 
}

