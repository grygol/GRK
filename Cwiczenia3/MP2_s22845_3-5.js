function setup(){
  console.log("Hello world");
  createCanvas(512, 512);
  background(255);

  
}

var x0=-1;
var y0=-1;
var x1=-1;
var y1=-1;

function mousePressed() {
x0 = mouseX;
y0 = mouseY;
}

function mouseDragged() {
x1 = mouseX;
y1 = mouseY;
background(255);
noStroke();
fill('red');
ellipse(x0-3, y0-3, 6);
fill('green');
ellipse(x1-3, y1-3, 6);
}

function mouseReleased() {
background(255);
loadPixels();
for(var i=0; i<512; i++){
  x0=i;
  y0=i;
  x1=512;
  y1=512;

  draw_line();
  updatePixels();
}

}

function set_pixel(x,y,c) {
idx=(y * 512 + x) * 4;
pixels[idx]= c<0 ? c : 0;
pixels[idx+1]=0
pixels[idx+2]= 0;
pixels[idx+3]=255;
}

function draw_line() {
var dx = x1 - x0;
var dy = y1 - y0;
var dx = 512;
var dy = 512;
var a = dy / dx;
var b = y0 - a * x0;

if(x1<x0){
var tmp = x0;
x0 = x1;
x1 = tmp;
}

for(var x=x0; x<x1; x++){
  var y = Math.round(a * x + b);
  var d = ((dy/dx) * (x - x0)) - (y - y0);
  set_pixel(x,y,d);
}

}