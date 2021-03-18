var ship,shipImage,sea,seaImage
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaImage=loadImage("sea.png")
}

function setup(){
   createCanvas(400,400);
 
  sea=createSprite(400,200)
  sea.addImage("sea",seaImage)
  sea.velocityX=-2
  ship=createSprite(200,250,10,10)
 ship.addAnimation("ship",shipImage) 
  ship.scale=0.3
}

function draw() {
  background("blue");
  //Text("umesh's boat",50,50)
drawSprites ()
}