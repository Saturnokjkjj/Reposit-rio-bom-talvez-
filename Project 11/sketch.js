
function preload(){
  shipping = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_waves = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200,400,400);
  ship = createSprite(200,200,50,50);
  ship.addAnimation ("shipping",shipping);
  sea.addAnimation("waves",sea_waves);
  sea.scale = 0.24;
  ship.scale = 0.2;
  sea.velocityX = -0.5;
  
}
function draw() {
  background("lightBlue");
    drawSprites();
    if (sea.x < 0){
    sea.x = 400;
    }


  }

