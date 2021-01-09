var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var score;
var END =0;
var PLAY =1;
var gameState = PLAY;
var pinkCG,pinkCGImage;
var redCG,redCGImage;
var yellowCG,yelloCGImage;
var gameover,gameoverImage
var restart,restartImage

var CycleBellSound

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  CycleBellSound = loadImage("bell.mp3");
  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  score = 0;
  
  
    pinkCG = createGroup();
  redCG = createGroup();
  yellowCG = createGroup();
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  distance = distance + Math.round(getFrameRate()/60);
  
  if (gameState===PLAY){
    
      
  if(keyDown("space")&& CycleBellSound.y >= 100) {
        CycleBellSound.velocityY = -12;
        bellSound.play();
    }
    
  
   mainCyclist.y = World.mouseY;
    
     path.velocityX = -(4 + 3* score/150);
     
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
    
  
  }
    
 }
   spawnredcyclists();
   spawnpinkcyclists();
  spawnyellowcyclists();

  var select_oppPlayer = Math.round(random(1,3));
  
  if(World.frameCount% 150==0){
    if(select_oppPlayer ==0){
    pinkcyclists();
    }else{
      redcyclists();
    }
  }
  
}


function reset(){
  gameState=PLAY;
  gameover.visible=false;
  restart.visible=false;
  player.visible=true;
  score=0;
  
  
  
}


function spawnredcyclists(){
if(frameCount%600===0){
 player2=createSprite(100,-100,30,30);
   
    player2.scale=0.4;
    player2.velocityY=5;
  player2.addAnimation("mainPlayer2.png");
    player2.x=Math.round(random(50,250),10,10);
     player2.lifetime=300;
    pinkCG.add(player2);
   }
  }


function spawnyellowcyclists(){
if(frameCount%600===0){
 player3=createSprite(100,-100,30,30);
   
    player3.scale=0.4;
    player3.velocityY=5;
  player3.addAnimation("mainPlayer3.png");
    player3.x=Math.round(random(50,250),10,10);
     player3.lifetime=300;
    pinkCG.add(player3);
   }
  }



function spawnpinkcyclists(){
if(frameCount%600===0){
 player1=createSprite(100,-100,30,30);
   
    player1.scale=0.4;
    player1.velocityY=5;
  player1.addAnimation("mainPlayer1.png");
    player1.x=Math.round(random(50,250),10,10);
     player1.lifetime=300;
    pinkCG.add(player1);
   }
  }