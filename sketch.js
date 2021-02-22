var start;
var gameState;
var START = 0;
var PLAY = 1;

function setup(){

  createCanvas(1000,900);

  start = createSprite(500,500,175,50);
  start.shapeColor = "Lime"

  gameState = START;
  
}

function draw(){

//Background Coloring

  background("black"); 

  drawSprites();

//Start State

  if(gameState === START){

    //Title

      textSize(150);
      fill("White");
      text("T-Block",230,300);

    //Start Button

      textSize(50);
      fill("White");
      text("START",420,517.5)

  }

  if(gameState === PLAY){
    
    start.x = 10000;
    start.y = 10000;

  }

  if(mousePressedOver(start)){

    gameState = PLAY;

  }

}

function spawnCubes(){

  

}