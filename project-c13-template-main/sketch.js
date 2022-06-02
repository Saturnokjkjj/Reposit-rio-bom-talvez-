var garden,rabbit;
var gardenImg,rabbitImg;
var points;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  


garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
    var select_sprites = Math.round(random(1,3));
  if (frameCount % 30 == 0){
  if (select_sprites == 1){
  createApples();
  } else if (select_sprites == 2) {
  createOrange();
  } else if (select_sprites == 3){
  createRed();
  }
  }
  
  drawSprites();
}
function createApples(){
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale = 0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
function createOrange(){
  orangeLeave = createSprite(random(50,350),40,10,10)
  orangeLeave.addImage(orangeImg);
  orangeLeave.scale = 0.07;
  orangeLeave.velocityY = 3;
  orangeLeave.lifetime = 150;
}
function createRed(){
redLeave = createSprite(random(50,350),40,10,10)
redLeave.addImage(redImg);
redLeave.scale = 0.07;
redLeave.velocityY = 3;
redLeave.lifetime = 150;
}