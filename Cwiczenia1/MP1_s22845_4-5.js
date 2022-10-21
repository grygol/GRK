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
    // background(0);
    // for(y=0; y<height; y++){
    //   for(x=0; x<width; x++){
    //     var blue = (x+y) / (canvasWidth + canvasHeight) * 256;

    //     var xHalf = x - (canvasWidth / 2);
    //     var yHalf = y - (canvasHeight / 2);
    //     var d = sqrt(xHalf*xHalf + yHalf*yHalf);
    //     //console.log(c);
    //     set(x,y,color(255-d, d, blue));
    //   }
    // }
    sky();
    grass();
    flowers();
    house();
    updatePixels();
}

function sky(){
  for(y=0; y< (height*0.6); y++){
    for(x=0; x < (width); x++){
      set(x, y, color(0,0,200));
    }
  }
}

function grass(){
  for(y=height*0.6; y< (height); y++){
    for(x=0; x < (width); x++){
      set(x, y, color(0,200,0));
    }
  }
}

function flowers(){
  for(i = 0; i < 1000; i++){
    var x = floor(random(0, width));
    var y = floor(random(height*0.6, height));
    console.log(x + ", " + y);
    set(x,y, color(floor(random(0,255),floor(random(0,255),floor(random(0,255))))))
  }
}

function house(){
  for(y=height*0.3; y< height*0.6; y++){
    for(x=width*0.2; x < width*0.8; x++){
      set(x, y, color(139,69,19));
    }
  }
}

function roof(){
  
}

/*

 for(y=0; y<height; y++){
    for(x=0; x < (width*0.8); x++){

    }
  }

*/