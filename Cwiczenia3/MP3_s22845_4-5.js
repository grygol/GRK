function setup() {
    createCanvas(512,512);
    background(255);
}
var last_x=-1;
var last_y=-1;
function mouseDragged() {
  if(mouseButton != LEFT) return;
  if(last_x>0) {
    line(last_x,last_y,mouseX,mouseY);
  }
  last_x=mouseX;
  last_y=mouseY;
}
function mouseReleased() {
  last_x=last_y=-1;
  if(mouseButton == RIGHT) {
    loadPixels();
    flood_fill(mouseX,mouseY);
    updatePixels();
} }
function set_pixel(x,y,c) {
    idx=(y*512+x)*4;
    pixels[idx]=c;
    pixels[idx+1]=c;
    pixels[idx+2]=c;
    pixels[idx+3]=255;
}
function get_pixel(x,y) {
 idx=(y*512+x)*4;
 return pixels[idx];
}
//właściwa funkcja do wypełniania
function flood_fill(x,y) {
    // print("flood_fill x= " + x + " y= " + y);
    let stos = [];
    stos.push([x,y]);

    let count = 10000
    while(stos.length > 0) {
        count -= 1;
        let cords = stos.pop();
        let cx = cords[0];
        let cy = cords[1];
        // print("x= " + cx + " , y= " + cy);
        if(cx > 512 || cy > 512) continue;

        let c = get_pixel(cx, cy);
        if(c != 255) continue;

        set_pixel(cx, cy, 200);

        stos.push([cx, cy-1]);
        stos.push([cx, cy+1]);
        stos.push([cx-1, cy]);
        stos.push([cx+1, cy]);

    }


}