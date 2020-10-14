var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,40);
  fixedRect=createSprite(300,200,50,20);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  console.log(movingRect.x-fixedRect.x) 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}