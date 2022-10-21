//canvas setup
var canvasWidth = 800;
var canvasHeight = 600;

//cords setup
var x1 = 400;
var y1 = 50;

var x2 = 200;
var y2 = 500;

var x3 = 600;
var y3 = 500;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    noLoop(); //dla obrazu
    //frameRate(25); //dla animacji
    
}
function draw() {
    //noprotect
    //text("Hello World!", 20,20);
  background(0);
  stroke(255);
  point(x1, y1);
  point(x2, y2);
  point(x3, y3);
  var cx = x1;
  var cy = y1;
  for(i=0; i<3000; i++){
    switch(floor(random(0,3))){
      case 0:
        cx = (cx + x1) / 2;
        cy = (cy + y1) / 2;
        point(cx, cy);
        break;
      case 1:
          cx = (cx + x2) / 2;
          cy = (cy + y2) / 2;
          point(cx, cy);
        break;
      default:
          cx = (cx + x3) / 2;
          cy = (cy + y3) / 2;
          point(cx, cy);
        break;
          
    }
    
  }

  updatePixels();
}