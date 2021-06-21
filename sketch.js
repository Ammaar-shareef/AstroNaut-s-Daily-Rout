var astro;
var bg,bgI;
var sleep,eat,brush,gym,eat,drink,move,bath;
var leftEdge,rightEdge,topEdge,bottomEdge;

var top_wall;
var bottom_wall;
var left_wall;
var right_wall;

function preload() {
 bgI = loadImage("iss.png");
 sleep = loadAnimation("sleep.png");
 brush = loadAnimation("brush.png");
 gym = loadAnimation("gym1.png","gym2.png");
 eat = loadAnimation("eat1.png","eat2.png");
 drink = loadAnimation("drink1.png","drink2.png");
 move = loadAnimation("move.png","move1.png");
 bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(400, 200, 50, 50);
  bg.addImage("bg",bgI);
  bg.scale = 0.4;
  
  astro = createSprite(400, 200, 50, 50);
  astro.addAnimation("astro",sleep);
  astro.scale = 0.1;
  astro.velocityY = -0.07;
  astro.velocityX = 0.07;
  
}


function draw() {
  background(255,255,255); 

if(keyDown(UP_ARROW)){
  astro.addAnimation("astroB",brush);
  astro.changeAnimation("astroB");
  astro.y = 200;
  astro.x = 400;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown(DOWN_ARROW)){
  astro.addAnimation("astroG",gym);
  astro.changeAnimation("astroG");
  astro.y = 200;
  astro.x = 400;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown(RIGHT_ARROW)){
  astro.addAnimation("astroBath",bath);
  astro.changeAnimation("astroBath");
  astro.y = 200;
  astro.x = 400;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown(LEFT_ARROW)){
  astro.addAnimation("astroE",eat);
  astro.changeAnimation("astroE");
  astro.y = 200;
  astro.x = 400;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown("m")){
  astro.y = 200;
  astro.x = 400;
  astro.velocityX = 0.1;
  astro.velocityY = -0.1;
}

  drawSprites();

  textSize(20);
  fill("white");
  text("Instructions:",30,50);
  textSize(15);
  fill("white");
  text("Up Arrow = brushing",30,70);
  text("Down Arrow = Gymming",30,90);
  text("Left Arrow = Eating",30,110);
  text("Right Arrow = Bathing",30,130);
  text("m key = moving",30,150);
}