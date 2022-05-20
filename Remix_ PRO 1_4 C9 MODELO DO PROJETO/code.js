var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","7e6617fe-23af-4b14-9548-7f943b3df637","427e7255-518a-4ba3-8a6c-acd4359eb322","987deabb-f07f-4050-ae25-52746ac30106","dacc1cbb-3fb6-485f-8c97-12f6750521af","06bd6a1a-76cb-41a0-9d73-5c1cbf44a45b","f47072a9-48e9-4f42-904e-3382e35b5ada"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"UAV09UEn3Hmq7J2s4A4R9J5YjQVckdQF","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"m1eeJCgzeBhvltAYRhiOMLynJn0IQBZf","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"PddDH6oeKfaE0gRIhxm8xn3X9uUBsRfM","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"7e6617fe-23af-4b14-9548-7f943b3df637":{"name":"big floppa ass","sourceUrl":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/7e6617fe-23af-4b14-9548-7f943b3df637.png","frameSize":{"x":240,"y":245},"frameCount":1,"looping":true,"frameDelay":4,"version":"ALp.6WCzSQlROlT_2BRWfXei8dIGj2k4","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":245},"rootRelativePath":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/7e6617fe-23af-4b14-9548-7f943b3df637.png"},"427e7255-518a-4ba3-8a6c-acd4359eb322":{"name":"amogus","sourceUrl":null,"frameSize":{"x":144,"y":191},"frameCount":1,"looping":true,"frameDelay":12,"version":"AjNvo_1u4gc9nMmqhSo6rI2ZHt0kZ12C","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":191},"rootRelativePath":"assets/427e7255-518a-4ba3-8a6c-acd4359eb322.png"},"987deabb-f07f-4050-ae25-52746ac30106":{"name":"floppa1","sourceUrl":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/987deabb-f07f-4050-ae25-52746ac30106.png","frameSize":{"x":320,"y":272},"frameCount":1,"looping":true,"frameDelay":4,"version":"i6dJ8vEoMH5LpNebkMcD5Jw3cGMsMGoA","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":272},"rootRelativePath":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/987deabb-f07f-4050-ae25-52746ac30106.png"},"dacc1cbb-3fb6-485f-8c97-12f6750521af":{"name":"floppa2","sourceUrl":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/dacc1cbb-3fb6-485f-8c97-12f6750521af.png","frameSize":{"x":280,"y":241},"frameCount":1,"looping":true,"frameDelay":4,"version":"Hj3U1qzJE2Ixky2h0VGebz0hTniZAwtY","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":241},"rootRelativePath":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/dacc1cbb-3fb6-485f-8c97-12f6750521af.png"},"06bd6a1a-76cb-41a0-9d73-5c1cbf44a45b":{"name":"dumpling","sourceUrl":null,"frameSize":{"x":289,"y":195},"frameCount":1,"looping":true,"frameDelay":12,"version":"oW4g_7UlbPMUzFdeEJzy3YGzbdhGwLJe","loadedFromSource":true,"saved":true,"sourceSize":{"x":289,"y":195},"rootRelativePath":"assets/06bd6a1a-76cb-41a0-9d73-5c1cbf44a45b.png"},"f47072a9-48e9-4f42-904e-3382e35b5ada":{"name":"floppa3","sourceUrl":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/f47072a9-48e9-4f42-904e-3382e35b5ada.png","frameSize":{"x":250,"y":234},"frameCount":1,"looping":true,"frameDelay":4,"version":"isUiZ.51tEDGfhQBxFiMthoiw364oy1d","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":234},"rootRelativePath":"assets/v3/animations/HKp4DDRSXs6DwOG-U3GthKxa9DjwUDhlfAlUv9lRihQ/f47072a9-48e9-4f42-904e-3382e35b5ada.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Lore: Um Amogus fugiu de sua tripulação, e, liderado por Bingus, invadiu o lar de Floppa com o intuito de ficar imortal, usando a água de amêndoas especial portada por Floppa



var b = createSprite(200,200);
 b.setAnimation("big floppa ass");
b.scale = 1.7;
var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var dumpling = createSprite(200,5,200,10);

dumpling.setAnimation = ("dumpling");

var goal =0;
var death = 0;

hero.setAnimation("amogus");
hero.scale=0.45;
enemy1.setAnimation("floppa1");
enemy1.scale=0.2;
enemy2.setAnimation("floppa2");
enemy2.scale=0.2;
enemy3.setAnimation("floppa3");
enemy3.scale=0.2;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
background("white");

createEdgeSprites();




enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(dumpling)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Objetivos: "+goal,100,50);
  


  
drawSprites();
fill("blue");
  text("Mortes: "+death,300,50);
  text("Objetivos: "+goal,50,50); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
