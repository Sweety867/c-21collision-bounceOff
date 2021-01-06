var fixedRect, movingRect;
var wall ,car;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
   car=createSprite(200,200,40,30);
   car.shapeColor="blue";
   car.velocityX=4;
   wall=createSprite(800,200,40,100);
   wall.shapeColor="pink"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,wall))
  {

    textSize(20)
    text("touched",500,200);

   car.shapeColor="pink"
    car.velocityX=0;
  }

 BounceOff(car,wall);
  drawSprites();
}
