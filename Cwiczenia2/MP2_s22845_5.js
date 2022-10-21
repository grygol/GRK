function preload(){
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png")
}

function setup(){
    console.log("Hello world5");
    createCanvas(256, 256);
    img.filter('gray');

    var histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();
    var sum = 0;
    for(x=0; x<img.width; x++){
      for(y=0;y<img.height;y++){
        pos = 4 * (y * img.width + x)
        var p = img.pixels[pos]
        histogram[p] += 1;
      }
    }

    background(255);
    stroke(0);

    max = Math.max(...histogram);
    console.log("MAX: " + max);
    console.log("SUM: " + sum);


    for(i=0; i<histogram.length; i++) {
      value = ((histogram[i] / max * 10) * 256);
      line(i, 256, i, (256-value));
    }

}