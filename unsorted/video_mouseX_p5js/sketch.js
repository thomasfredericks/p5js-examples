var fingers;
var fingersReady=false;

function preload() {
   
}

function setup() {
  createCanvas(710, 400);
  // specify multiple formats for different browsers
  fingers = createVideo([ 'assets/fingers.webm'], function() {fingersReady=true} );

  fingers.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  
  //fingers.loop(); // set the video to loop and start playing

  colorMode(HSB);
}



function draw() {
  background(150);
  
  
  
  if ( fingersReady && mouseIsPressed ) {
    
    var duration = fingers.duration();
    
    var time = map( mouseX , 0 , width , 0 , duration );
  
       println(time);
  
    fingers.time(time);
  }
  
  image(fingers,10,10); // draw the video frame to canvas

}