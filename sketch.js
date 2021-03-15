var hr;
var mn;
var sc;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr=hour();
  mn = minute()
  sc=second();
}

function draw() {
  background("black");  
  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
 stroke(255,0,0);
 strokeWeight(7);
  line(400,200,400,50)
  mnAngle = map(mn,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(7);
   line(400,200,650,150)
  scAngle = map(sc,0,60,0,360);
  stroke(0,0,250);
 strokeWeight(7);
  line(400,200,400,600)
  drawSprites();
}