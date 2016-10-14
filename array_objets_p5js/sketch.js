var choses = [ ];

function setup() {
        createCanvas(windowWidth, windowHeight);
        colorMode(HSB);
        background(0, 0, 100);

       for ( var i =0; i < 3; i++ ) {
                choses[i] = new UneChose( ) ;
        }
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        background(0, 0, 100);
}

function draw() {
        background(0, 0, 100);
        
        var nombreDeChoses = choses.length;
        
       for ( var i =0; i < nombreDeChoses ; i++ ) {
                var c = choses[i];
                c.draw();
        }
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

function mouseClicked() {
  
  // Creer une nouvelle chose
  var c = new UneChose();
  // Ajouter la nouvelle chose
  choses.push( c ); 
}