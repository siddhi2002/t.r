var ship,ship1
var sea,sea1
function preload(){
ship1=loadanimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea1=loadanimation("sea.png")
}
function preload(){
  createCanvas(600,500);

  //creating sea
  sea=createSprite(600,300);
  sea.addanimation("running",sea1);
  sea.scale=0.5;
  sea.velocityX=-1;

  //creating ship
  ship=createSprite(500,200,20,50);
  ship.addanimation("running",ship1);
  edges=createEdgesprite();

  //adding scale and position
  ship.scale=0.25;
  ship.velocityX=90;
  ship.velocityY=500;
}

function draw (){
  background("blue");
  if(keyDown(enter)){
    ship.velocityX=5;
  }   
if(keyDown("left"));
ship.velocityX=-5;
}
if(keyDown("right"));
ship.velocityX=0;

//code to reset the backgrpund
if(sea.X < 0){
  sea.X = sea.width/2
}
drawsprites()


   

