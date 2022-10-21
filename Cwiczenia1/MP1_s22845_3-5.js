var canvasWidth = 800;
var canvasHeight = 600;
function setup(){
    createCanvas(canvasWidth, canvasHeight);
    noLoop(); //dla obrazu
    //frameRate(25); //dla animacji
    
}
function draw() {
    //noprotect
    //text("Hello World!", 20,20);
    background(0);
    for(y=0; y<height; y++){
      for(x=0; x<width; x++){
        var c = (x / canvasWidth) * 256;
        //console.log(c);
        set(x,y,color(c));
      }
    }
  updatePixels();
}