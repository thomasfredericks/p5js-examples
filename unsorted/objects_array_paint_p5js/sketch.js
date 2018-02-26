var particleArray = [];
var h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0,0,100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0,0,100);
}

function draw() {
  
  
   h = h + 1;
   if ( h > 360 ) h = 0;
   
   if (mouseIsPressed){
  
    var particle = new WanderingParticle();
    particle.x = mouseX;
    particle.y = mouseY;
    particle.color = color(h,random(60,90),random(60,90));
    particleArray.push(particle);
    
  
}
   
   for (var particle of particleArray ) {
     particle.update();
     particle.draw();
   }
}


function WanderingParticle() {

    this.alive = true;
    this.radius = random( 5, 40 );
    this.wander = random( 0.5, 2 );
    this.drag = random( 0.9, 0.99 );
    this.radians = random( -PI, PI );
    this.color = color(0,0,100);

    this.x = 0;
    this.y = 0;

    this.force = random( 2,  8 );
    this.directionX = cos(this.radians) * this.force;
    this.directionY = sin(this.radians) * this.force;

    this.update = function() {

        this.x = this.x  + this.directionX;
        this.y = this.y  + this.directionY;

        this.directionX = this.directionX * this.drag;
        this.directionY = this.directionY * this.drag;

        this.radians = this.radians + random( -0.5, 0.5 ) * this.wander;
        this.directionX = this.directionX + Math.sin( this.radians ) * 0.1;
        this.directionY = this.directionY + Math.cos( this.radians ) * 0.1;

        this.radius = this.radius * 0.96;
        this.alive = this.radius > 0.5;
        
     }

     this.draw = function() {

        noStroke();
        fill(this.color);
        ellipse( this.x, this.y, this.radius, this.radius);
        

     }
    
}

