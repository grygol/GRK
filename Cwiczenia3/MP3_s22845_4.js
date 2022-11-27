function setup(){
  console.log("Hello world");
  createCanvas(512, 512);
  background(255);  
}

let x0=-1;
let y0=-1;
let x1=-1;
let y1=-1;

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
draw_line();
updatePixels();
}

function set_pixel(x,y,c) {
console.log("setting");
idx=(y * 512 + x) * 4;
pixels[idx]=c;
pixels[idx+1]=c;
pixels[idx+2]=c;
pixels[idx+3]=255;
}

function draw_line() {
let dx = x1 - x0;
let dy = y1 - y0;
let a = dy / dx;
let b = y0 - a * x0;

let dp = 2 * dy - dx;
let deq = 2 * dy;
let dinc = 2 * dy - 2 * dx;

let d = dp;
let y = y0;


// console.log("a: " + a);

// if(x1<x0){
// let tmp = x0;
// x0 = x1;
// x1 = tmp;
// }

for(x=x0; x<=x1; x++){
  set_pixel(x,y,d);
  if (d < 0) {
    d += deq;
  } else {
    d += dinc;
    y += 1;
  }

}

}