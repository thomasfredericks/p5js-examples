
var chose0;
var chose1;
var chose2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 100);
  
  chose0 = new UneChose();
  chose1 = new UneChose();
  chose2 = new UneChose();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 100);
}

function draw() {
   background(0, 0, 100);
   chose0.draw();
   chose1.draw();
   chose2.draw();
}


function UneChose() {

  this.x = random(0,width);
  this.y = random(0,height);
  this.color = color( random(0,360) , random(60,100), random(60,100));
  this.size = random(30, 80);
  
  this.draw = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    fill(this.color);
    ellipse(this.x, this.y, this.size,  this.size);
  }

}