
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  monkey=createSprite(50,230,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;



   ground=createSprite(300,260,600,5)
  ground.velocityX=-5;
 

  survivalTime=0;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(255);

  if (ground.x<300){
     ground.x=ground.width/2;
  }
  
  monkey.collide(ground); 
  
if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
}   
    monkey.velocityY=monkey.velocityY+0.8;
  
  food();
  obstacle();
  
  drawSprites();
  stroke("black");
fill("black");
survivalTime= survivalTime + (Math.round(getFrameRate()/60))
text("SurvivalTime:"+survivalTime,250,50)
}


function food(){
  if (World.frameCount % 80 === 0){
     banana = createSprite(300,330,20,20);
     banana.addImage("banana1",bananaImage);
    banana.lifetime=150;
    banana.velocityX=-5;
     banana.y = Math.round(random(200,120))
  banana.scale=0.07;
   foodGroup.add(banana);
  }
  
  
}

function obstacle(){
  if (frameCount % 150 === 0){
    var obstacle=createSprite(300,240,20,20);
    obstacle.addImage(obstacleImage);
  obstacle.lifetime=200;
    obstacle.scale=0.1;
    obstacle.x=Math.round(random(600,600));
    obstacle.velocityX=-5;
    
  }
  
}



