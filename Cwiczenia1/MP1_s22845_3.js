function setup(){
    console.log("Hello world");
    createCanvas(800, 600);
    noLoop(); //dla obrazu
    //frameRate(25); //dla animacji
    
}
function draw() {
    //noprotect
    //text("Hello World!", 20,20);
    background(0);
    for(y=0; y<height; y++){
      for(x=0; x<width; x++){
        set(x,y,color(255,0,255));
      }
    }
  updatePixels();
}