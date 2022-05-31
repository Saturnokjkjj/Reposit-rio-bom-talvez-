var path,boy, leftBoundary,rightBoundary;
var pathImg,boy_running;


function preload(){
  pathImg = loadImage("path.png");
  boy_running = loadAnimation("Jake1.png","Jake2.png"," Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200,400,400);
path.addImage(pathImg);
path.scale=1.2;

boy = createSprite(200,100,50,50);
boy.addAnimation(boy_running);
boy.scale=0.08;

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary = createSprite(400,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  if(path.y > 400 ){
    path.y = path.height/2;
  }
  
  drawSprites();
}
