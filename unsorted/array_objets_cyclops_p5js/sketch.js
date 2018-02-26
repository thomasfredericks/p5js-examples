var cyclopes = [ ];  


function setup() {
        createCanvas(windowWidth, windowHeight);
        colorMode(HSB);
        

        // AJOUTER 30 CYCLOPES AU DEMARRAGE
        for ( var i =0; i < 30; i++ ) {
                cyclopes[i] = new Cyclope(random(width), random(height)) ;
        }
        
        
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 
}

function draw() {
        background(255);

        // ITERER A TRAVERS CHAQUE ITEM DE L'ArrayList ET EXECUTER actualiser() ET dessiner()
        // SUR CHAQUE OBJET Explosion QUI S'Y TROUVE :
        for ( var i =0; i < cyclopes.length; i++ ) {
                var c = cyclopes[i];
                c.actualiser();
                c.wraparound();
                c.dessiner();
        }
}

function Cyclope(  xInitial,  yInitial ) {

        this.x = xInitial;
        this.y = yInitial;
       this.vitesseY = random(-1.0 , 1.0);
        this.vitesseX = random(-1.0 , 1.0);
        this.rayon = 8;

      
        this.actualiser = function() {
                this.x = this.x + this.vitesseX;
                this.y = this.y + this.vitesseY;
        }

        this.wraparound= function()  {
                if ( this.x > width ) this.x = 0;
                else if ( this.x < 0 ) this.x = width;

                if ( this.y > height ) this.y = 0;
                else if ( this.y < 0 ) this.y = height;
        }

        this.dessiner= function() {


                var radians = this.trouverRadians(this.vitesseX, this.vitesseY);
                var diametre = this.rayon * 2;

                push();
                translate(this.x,this.y);
                rotate(radians);
                ellipse(0,0,diametre,diametre);
                translate(this.rayon*0.5,0);
                ellipse(0,0,this.rayon*0.5,this.rayon*0.5);

                pop();

        }


        this.trouverRadians = function(deltaX, deltaY) {
                return atan2(deltaY, deltaX);

        }

}