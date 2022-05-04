var play = 1;
var end = 0;
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var ghostJump
var gameState = play;
var gameState = end;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  ghostJump = loadImage("ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  // create ghost sprite

  ghost = createSprite(200,500,50,60);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.3;

  


  doorGroup = new Group();
  climbersGroup = new Group();
  invisGroup = new Group();


  
}

function spawnObstacles(){

  if(frameCount % 120 == 0){

  door = createSprite(300,300,10,20);
  door.addImage("door", doorImg);

  doorGroup.add(door);

  climber = createSprite(300,370,10,20);
  climber.addImage("climber", climberImg);

  climbersGroup.add(climber);

  invis = createSprite(300,371,10,20);
  invis.visible = false;
  invisGroup.add(invis);

  door.x = Math.round(random (100,300));
  climber.x = door.x;
  invis.x = climber.x;
  door.velocityY = 3;
  climber.velocityY = 3;
  invis.velocityY = 3;

  //assign lifetime
   door.lifetime = 180;
   climber.lifetime = 180;

  }

  
  



  
}
function draw() {
  background(200);


   if(gamestate = play){

    spookySound.start;
   
    if(tower.y > 400){
      tower.y = 300
    } 

    ghost.x = World.mouseX;

   }
  
 
    
    

    if(invisGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      doorGroup.destroy();
     climbersGroup.destroy();
      gameState = "end";
    }

    if(gameState = end){
     
     tower.velocityY = 0;
      
    }

  

  spawnObstacles();
  drawSprites();
}
