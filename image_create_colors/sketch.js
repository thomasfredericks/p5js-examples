var img;

function setup() {
        createCanvas(windowWidth, windowHeight);
        img = createImage(100, 100);

}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
}

function draw() {
        img.loadPixels();
        for (i = 0; i < img.width; i++) {
                for (j = 0; j < img.height; j++) {
                  var r = sin(i*0.01+millis()*0.001)*cos(j*0.01)*127+126;
                  var g = sin(i*0.1+millis()*0.003)*cos(j*0.05)*127+126;
                  var b = sin(i*0.03+millis()*0.002)*cos(j*0.005)*127+126;
                        img.set(i, j, color(r,g,b)   );
                }
        }
        img.updatePixels();
        image(img, 0, 0,width,height);

}