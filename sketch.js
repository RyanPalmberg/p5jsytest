/*
Gurkirat Saini
gssaini
Rats

Instructions: Simply move the mouse across the screen like a slider and enjoy. 

Music: https://www.youtube.com/watch?v=vdVnnMOTe3Q
*/
var rectLocation;
function preload() {
  rat = loadImage('assets/rat.png');
  mixtape = loadSound('assets/mixtape.mp3');
  bg = loadImage('assets/darats.png');
  cheese = loadImage('assets/cheese.png');
}

function setup() {
  createCanvas(600, 400);
  // imageMode(CENTER);
  mixtape.loop();
  ratAmp = new p5.Amplitude();
  rectLocation = createVector(width/2,height/2);
}

function draw() {
  
  var target = createVector(mouseX,mouseY);
  var distance = target.dist(rectLocation);
  var mappedDistance = map(distance, 100, 0, 1.5, 0.5);
  target.sub(rectLocation);
  target.normalize();
  target.mult(mappedDistance);
  rectLocation.add(target);
  
  background(bg);
  //mouseX controls volume
  // let volume = map(mouseX, 0, width, 0, 1);
  let volume = map(distance, 0, width, 1, 0);
  volume = constrain(volume, 0, 1);
  mixtape.amp(volume);
  // controls the rat in relation to the mouse
  let ratWidth = 60;
  // let ratHeight = ratAmp.getLevel() * height + ratWidth*2/3;
  let ratHeight = ratAmp.getLevel() * ratWidth * 15;
  
  image(cheese, mouseX, mouseY, 80, 80)
  translate(rectLocation.x, rectLocation.y);
  // image(rat, mouseX-ratWidth/2, height/2-ratHeight/2, ratWidth, ratHeight);
  image(rat, 0, 0, ratWidth, ratHeight);
  
  

  
  // rect(rectLocation.x, rectLocation.y, 10,10);
  // image(rat, rectLocation.x * mouseX-ratWidth/2, rectLocation.y * height/2-ratHeight/2, ratWidth, ratHeight);
  
}