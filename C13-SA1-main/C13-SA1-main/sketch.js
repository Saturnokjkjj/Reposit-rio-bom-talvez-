var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloud_image



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloud_image = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  background(180);
  
  console.log(trex.y)
  
  
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  trex.collide(invisibleGround);
  
 
  spawnClouds()
  
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
if (frameCount % 60 ===0){
 cloud=createSprite(600,100,40,10);
 cloud.velocityX=-3;
 cloud.addImage(cloud_image);
 cloud.scale = 0.9
cloud.y = Math.round(random(10,130));
}
}
