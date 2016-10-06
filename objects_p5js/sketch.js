var chose0;
var chose1;
var chose2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 100);

  chose0 = new UneChose();
  chose0.x = random(0, width);
  chose0.y = random(0, height);
  chose0.color = color(random(0, 360), random(60, 100), random(60, 100));

  chose1 = new UneChose();
  chose1.x = random(0, width);
  chose1.y = random(0, height);
  chose1.color = color(random(0, 360), random(60, 100), random(60, 100));

  chose2 = new UneChose();
  chose2.x = random(0, width);
  chose2.y = random(0, height);
  chose2.color = color(random(0, 360), random(60, 100), random(60, 100));

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 100);
}

function draw() {

  background(0, 0, 100);

  chose0.x = chose0.x + random(-1, 1);
  chose0.y = chose0.y + random(-1, 1);
  fill(chose0.color);
  ellipse(chose0.x, chose0.y, chose0.size, chose0.size);


  chose1.x = chose1.x + random(-1, 1);
  chose1.y = chose1.y + random(-1, 1);
  fill(chose1.color);
  ellipse(chose1.x, chose1.y, chose1.size, chose1.size);

  chose2.x = chose2.x + random(-1, 1);
  chose2.y = chose2.y + random(-1, 1);
  fill(chose2.color);
  ellipse(chose2.x, chose2.y, chose2.size, chose2.size);

}


function UneChose() {

  this.x = 0;
  this.y = 0;
  this.color = green;
  this.size = random(30, 80);

}