var bg,backgroundImg;
var rocket;
var rocketImg;
var planet,planetImg;
var ufo,ufoImg;
var meteor,meteorImg;
var gamestate="play";
var planetGroup;
var meteorGroup;
var ufoGroup;


function preload(){
  backgroundImg=loadImage("background.png");
  rocketImg=loadImage("rocket.png");
  planetImg=loadImage("planet.png");
  ufoImg=loadImage("ufo.png");
  meteorImg=loadImage("meteor.png");
}

function setup(){
  createCanvas(1000,1000);
  
  bg=createSprite(300,300);
  bg.addImage("bg",backgroundImg);
  bg.scale=5;
  bg.velocityY=1;

  rocket=createSprite(500,800,20,20);
  rocket.addImage("rocket",rocketImg);
  rocket.scale=0.5;

meteorGroup=createGroup();
ufoGroup=createGroup();
planetGroup=createGroup();
rocket.setCollider("rectangle",0,0,80,200)
}

function draw(){
 background(0);
 //rocket.debug="true";
 if (gamestate==="play"){

  if (bg.y>300){
    bg.y=0;
    
    }
    if (keyIsDown(RIGHT_ARROW)){
    rocket.x=rocket.x+6;
    }
    if (keyIsDown(LEFT_ARROW)){
      rocket.x=rocket.x-6;
      }
      spawnPlanet();
      spawnUfo();
      spawnMeteor();

      if (rocket.isTouching(planetGroup)||rocket.isTouching(meteorGroup)||rocket.isTouching(ufoGroup)){
gamestate="end";
      }
 }
 if (gamestate==="end"){
bg.velocityY=0;
bg.visible=false;
textSize(60);
text ("Game Over",350,500);
text.depth=bg.depth+1;
 }

  drawSprites();
}

function spawnPlanet (){
  if (frameCount%200===0){
planet=createSprite(random(100,900),50,10,10);
planet.addImage("planets",planetImg);
planet.scale=0.25;
planet.velocityY=3;
planetGroup.add(planet);
  }
}

function spawnUfo (){
  if (frameCount%150===0){
ufo=createSprite(random(100,900),50,10,10);
ufo.addImage("ufo",ufoImg);
ufo.scale=0.25;
ufo.velocityY=5;
ufoGroup.add(ufo);
  }
}

function spawnMeteor (){
  if (frameCount%250===0){
meteor=createSprite(random(100,900),50,10,10);
meteor.addImage("meteor",meteorImg);
meteor.scale=0.25;
meteor.velocityY=6;
meteorGroup.add(meteor);
  }
}

