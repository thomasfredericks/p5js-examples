var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = createImage(200, 150);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
   img.loadPixels();
  for (i = 0; i < img.width; i++) {
    for (j = 0; j < img.height; j++) {
      img.set(i, j, color(random(256)));
    }
  }
  img.updatePixels();
  image(img, 0, 0,width,height);
  
}