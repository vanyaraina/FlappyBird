var ground, background, coin_gold, coin_grey, flappyBird_flying, flappyBird_stable, gameOver, getready, instruction, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, pause, play, scoreBoard, start, title;
var groundImg, backgroundImg, coin_goldImg, coin_greyImg, flappyBird_flyingImg, flappyBird_stableImg, gameOverImg, getreadyImg, instructionImg, obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img, pauseImg, playImg, scoreBoardImg, startImg, titleImg;

var START = 1;
var PLAY = 2;
var END = 0;
var gameState = START;

var score = 0;

var restart;



function preload(){

groundImg = loadAnimation("ground.png");
backgroundImg = loadAnimation("Background.png");

coin_goldImg = loadAnimation("coin_gold.png");
coin_greyImg = loadAnimation("coin_grey.png");

flappyBird_flying = loadAnimation("flappyBird_stable.png", "flappyBird_flying.png");
flappyBird_stableImg = loadAnimation("flappyBird_stable.png");

gameOverImg = loadAnimation("gameOver.png");

getreadyImg = loadAnimation("getready.png");
instructionImg = loadAnimation("instruction.png");

obstacle1Img = loadAnimation("obstacle1.png");
obstacle2Img = loadAnimation("obstacle2.png");
obstacle3Img = loadAnimation("obstacle3.png");
obstacle4Img = loadAnimation("obstacle4.png");
obstacle5Img = loadAnimation("obstacle5.png");
obstacle6Img = loadAnimation("obstacle6.png");

pauseImg = loadAnimation("pause.png");
playImg = loadAnimation("play.png");

scoreBoardImg = loadAnimation("scoreBoard.png");

startImg = loadAnimation("start.png");
titleImg = loadAnimation("title.png");
}


function setup(){
createCanvas(windowWidth, windowHeight);

ground = createSprite(width/2, height, width, 2);
ground.addImage(groundImg);
ground.x = width/2
ground.velocityX = -(6 + 3/100);

flappyBird_flying = createSprite(width/2, height-20, 20, 20);
flappyBird_flying.addAnimation("BirdFlying", flappyBird_flying);
flappyBird_flying.setCollider('circle',0,0,350);
flappyBird_flying.debug = false;

gameOver = createSprite(width/2,height/2- 50);
gameOver.addImage(gameOverImg);

gameOver.visible = false;

getready = createSprite(width/2,height/2- 50);
getready.addImage(getreadyImg);

getready.visible = true;

obstaclesGroup = new Group();

score = 0;
}

function draw(){

    background(backgroundImg);
    textSize(20);
    fill("black")
    text("Score: "+ score,30,50);

    if(gameState===START){
        

    }
}