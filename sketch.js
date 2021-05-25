var knife;

var carrot, carrotGroup, carrotImg;
var broccoli, broccoliGroup, broccoliImg;
var cucumber, cucumberGroup, cucumberImg;
//var zucchini, zucchiniGroup, zucchiniImg;
var lettuce, lettuceGroup, lettuceImg;
var ginger, gingerGroup, gingerImg;
var coriander, corianderGroup, corianderImg;
var basil, basilGroup, basilImg;
var squash, squashGroup, squashImg;

function preload(){
  carrotImg = loadImage("images/carrot1.png")
  broccoliImg = loadImage("images/broccoli1.png")
  cucumberImg = loadImage("images/cucumber1.png")
  //zucchiniImg = loadImage("images/zucchini1.png")
  lettuce = loadImage("images/lettuce1.png")
  ginger = loadImage("images/ginger1.png")
  corianderImg = loadImage("images/coriander1.PNG")
  basilImg = loadImage("images/basil1.png")
  squashImg = loadImage("images/squash1.png")
}

function setup(){
  createCanvas(1500, 700);

  knife = createSprite(50, 50, 50, 50);
  knife.shapeColor = "blue";
}

function draw(){
  background("black");

  knife.x = mouseX;
  knife.y = mouseY;

  carrotGroup = new Group();
  broccoliGroup = new Group();
  cucumberGroup = new Group();
  //zucchiniGroup = new Group();
  lettuceGroup = new Group();
  gingerGroup = new Group();
  corianderGroup = new Group();
  basilGroup = new Group();
  squashGroup = new Group();

  if (carrotGroup.isTouching(knife)){
    carrotGroup.destroyEach();
  }

  if (broccoliGroup.isTouching(knife)){
    broccoliGroup.destroyEach();
  }

  if (cucumberGroup.isTouching(knife)){
    cucumberGroup.destroyEach();
  }

  //if (zucchiniGroup.isTouching(knife)){
    //zucchiniGroup.destroyEach();
  //}

  if (lettuceGroup.isTouching(knife)){
    lettuceGroup.destroyEach();
  }

  if (gingerGroup.isTouching(knife)){
    gingerGroup.destroyEach();
  }

  if (corianderGroup.isTouching(knife)){
    corianderGroup.destroyEach();
  }

  if (basilGroup.isTouching(knife)){
    basilGroup.destroyEach();
  }

  if (squashGroup.isTouching(knife)){
    squashGroup.destroyEach();
  }
  

  spawnCarrot();
  spawnBroccoli();
  spawnCucumber();
  //spawnZucchini();
  spawnLettuce();
  spawnGinger();
  spawnCoriander();
  spawnBasil();
  spawnSquash();

  drawSprites();
}

function spawnCarrot(){
 if (frameCount % 50 === 0){
    carrot = createSprite(1500, Math.round(random(50, 650)), 50, 50);
    carrot.addImage("carrot", carrotImg);
    carrot.scale = 0.375
    carrot.velocityX = -10;
    carrotGroup.add(carrot)

 }
}

function spawnBroccoli(){
  if (frameCount % 59 === 0){
     broccoli = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     broccoli.addImage("broccoli", broccoliImg);
     broccoli.scale = 0.375
     broccoli.velocityX = -12;
     broccoliGroup.add(broccoli);
 
  }
 }

 function spawnCucumber(){
  if (frameCount % 68 === 0){
     cucumber = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     cucumber.addImage("cucumber", cucumberImg);
     cucumber.scale = 0.375
     cucumber.velocityX = -12;
     cucumberGroup.add(cucumber);
 
  }
 }
/*
 function spawnZucchini(){
  if (frameCount % 72 === 0){
     zucchini= createSprite(1500, Math.round(random(50, 650)), 50, 50);
     zucchini.addImage("zucchini", zucchiniImg);
     zucchini.scale = 0.375
     zucchini.velocityX = -12;
     zucchiniGroup.add(zucchini);
 
  }
 }
 */

 function spawnLettuce(){
  if (frameCount % 78 === 0){
     lettuce = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     lettuce.addImage("lettuce", lettuceImg);
     lettuce.scale = 0.375
     lettuce.velocityX = -12;
     broccoliGroup.add(broccoli);
 
  }
 }

 function spawnGinger(){
  if (frameCount % 87 === 0){
     ginger = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     ginger.addImage("ginger", gingerImg);
     ginger.scale = 0.375
     ginger.velocityX = -12;
     gingerGroup.add(ginger);
 
  }
 }

 function spawnCoriander(){
  if (frameCount % 94 === 0){
     coriander = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     coriander.addImage("coriander", corianderImg);
     coriander.scale = 0.375
     coriander.velocityX = -12;
     corianderGroup.add(coriander);
 
  }
 }

 function spawnBasil(){
  if (frameCount % 98 === 0){
     basil = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     basil.addImage("basil", basilImg);
     basil.scale = 0.375
     basil.velocityX = -12;
     basilGroup.add(basil);
 
  }
 }

 function spawnSquash(){
  if (frameCount % 105 === 0){
     squash = createSprite(1500, Math.round(random(50, 650)), 50, 50);
     squash.addImage("squash", squashImg);
     squash.scale = 0.375
     squash.velocityX = -12;
     squashGroup.add(squash);
 
  }
 }

// --> switch case (8 vegetables)