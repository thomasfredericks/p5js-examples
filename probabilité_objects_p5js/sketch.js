var chose0;
var chose1;
var chose2;
var chose3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 100);
  
  chose0 = new UneChose();
  chose1 = new UneChose();
  chose2 = new UneChose();
  chose3 = new UneChose();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);
  chose0.x = width/4;
  chose0.y = height/4;
  chose0.draw();
  
  chose1.x = width*3/4;
  chose1.y = height/4;
  chose1.draw();
  
  chose2.x = width/4;
  chose2.y = height*3/4;
  chose2.draw();
  
  chose3.x = width*3/4;
  chose3.y = height*3/4;
  chose3.draw();
}

function UneChose() {

  this.x = random(0, width);
  this.y = random(0, height);
  this.color = color(random(0, 360), random(60, 100), random(60, 100));
  this.size = random(30, 80);
  
  if ( random(0,100) < 75 ) {
    this.quoiDessiner = "cercle";
  } else {
    this.quoiDessiner = "rectangle";
  }

  this.draw = function() {
    
    fill(this.color);
    
    if (this.quoiDessiner == "cercle") {
      ellipse(this.x, this.y, this.size, this.size);
    } else if (this.quoiDessiner == "rectangle") {
      rect(this.x, this.y, this.size, this.size);
    }
  }

}