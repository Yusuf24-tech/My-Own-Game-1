var bgImg,shooter,shooting;

function preload(){
bgImg=loadImage("Assets/bg.jpeg")
shooter=loadImage("Assets/shooter_2.png")
shooting=loadImage("Assets/shooter_3.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
bg= createSprite(windowWidth/2-20,windowHeight/2-20,10,10) 
bg.addImage("bg",bgImg)
bg.scale=1.1;

player= createSprite(windowWidth/2-300,windowHeight/2,50,20)
player.addImage("shooter",shooter)
player.scale=0.4;


}

function draw() {
  background(255,255,255);  
  drawSprites();
if(keyDown(UP_ARROW)) {
player.y=player.y-2;
}
if(keyDown(DOWN_ARROW)) {
  player.y=player.y+2;
  }
  if(keyWentDown("space")){
player.addImage("shooter",shooting)
  }
  else if(keyWentUp("space")){
player.addImage("shooter",shooter)
  }

  spawnEnemies();


}

function spawnEnemies(){
  if(frameCount % 60 === 0){
zombie= createSprite(windowWidth,windowHeight/2,50,20)
zombie.velocityX=-2;
zombie.y= Math. round(random(200,windowHeight-200))
  }
}


