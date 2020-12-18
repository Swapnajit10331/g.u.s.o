var fixedRect,movingRect



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(650, 200, 30, 100);
}

function draw() {
  
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor= "white";
  fixedRect.shapeColor="white"
}
if (movingRect.x/2 - fixedRect.x/2 < fixedRect.width/4 + movingRect.width/4
  && fixedRect.x/2 - movingRect.x/2 < fixedRect.width/4 + movingRect.width/4
  && movingRect.y/2 - fixedRect.y/2 < fixedRect.height/4 + movingRect.height/4
  && fixedRect.y/2 - movingRect.y/2 < fixedRect.height/4 + movingRect.height/4) {
movingRect.shapeColor = "yellow";
fixedRect.shapeColor = "yellow";
} 
else{
  movingRect.shapeColor= "white";
  fixedRect.shapeColor="white"
}
if (movingRect.x/4 - fixedRect.x/4 < fixedRect.width/8 + movingRect.width/8
  && fixedRect.x/4 - movingRect.x/4 < fixedRect.width/8 + movingRect.width/8
  && movingRect.y/4 - fixedRect.y/4< fixedRect.height/8 + movingRect.height/8
  && fixedRect.y/4 - movingRect.y/4 < fixedRect.height/8 + movingRect.height/8) {
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
else{
  movingRect.shapeColor= "white";
  fixedRect.shapeColor="white"
}

  
  drawSprites();
}