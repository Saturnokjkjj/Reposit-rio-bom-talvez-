var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
 
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
 
  bow.y = World.mouseY;

  if (keyDown("space")) {
    createArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
  case 1:
  redBalloon();
  break;
  case 2:
  blueBalloon();
  break;
  case 3:
  greenBalloon();
  break;
  case 4:
  pinkBalloon();
  break;
  }}
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -9;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var balloon = createSprite(-10,Math.round(random(30, 370)), 10, 10);
  balloon.addImage(red_balloonImage);
  balloon.velocityX = 3;
  balloon.lifetime = 150;
  balloon.scale = 0.1;
}

function blueBalloon() {
  var balloon = createSprite(-10,Math.round(random(30, 370)), 10, 10);
  balloon.addImage(blue_balloonImage)
  balloon.velocityX = 3;
  balloon.lifetime = 150;
  balloon.scale = 0.1;
}

function greenBalloon() {
  var balloon = createSprite(-10,Math.round(random(30, 370)), 10, 10);
  balloon.addImage(green_balloonImage);
  balloon.velocityX = 3;
  balloon.lifetime = 150;
  balloon.scale = 0.1;
}

function pinkBalloon() {
  var balloon = createSprite(-10,Math.round(random(30, 370)), 10, 10);
  balloon.addImage(pink_balloonImage);
  balloon.velocityX = 3;
  balloon.lifetime = 150;
  balloon.scale = 0.1;
}
