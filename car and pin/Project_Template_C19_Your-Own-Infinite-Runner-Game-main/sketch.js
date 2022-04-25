function preload(){

}

function setup() {
 
}

function draw() {
 
}






var path, treasure, pin, car;
var pathImg, treasureImg, pinImg, carImg;

var gameState =1
var PLAY = 1
var END = 0

function preload(){
    console.log("enter preload method.")
    pathImg = loadImage("path.jpg");
    treasureImg = loadImage("treasurebox.png");
    pinImg = loadImage("pin.webp");
    carImg = loadImage("car.png");
    endImg =loadAnimation("gameover.png");
    console.log("exit preload method.")

}

function setup() {
    console.log("enter setup method.")

    createCanvas(window,window);
    createCanvas(width,height);             
    createCanvas(500,350);

    //to move background
    
    path=createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY = 4;

    car = createSprite(width/2,height-20,20,20);
    car.addAnimation("carmoving",carImg);
    car.scale=0.20;
    console.log("exit setup method.")
}
    
//treasureG=new group();

function draw() {
    console.log("enter draw method.")
    if(gameState===PLAY){
        background(0);

        car.x = World.mouseX;
        edges= createEdgeSprites();
        car.collide(edges);

       treasure();
       pin();

       //if (treasure.isTouching(car)) {
        //treasure.destroyEach();
        //treasure=treasure + 1;

    } else {
    if(pin.isTouching(car)) {
      gameState=END;
        
      car.addAnimation("carmoving",endImg);
      car.x=width/2;
     car.y=height/2;
          car.scale=0.6;
        
      //  treasureG.destroyEach();
        pin.destroyEach();
  
        treasure.setVelocityYEach(0);
        pin.setVelocityYEach(0);
        console.log("exit draw method.")
    }
}
console.log("enter draw method.")
treasure();
pin();
 drawSprites();
 console.log("exit draw method.")
}
function treasure() {
    console.log("enter draw method.")
    if (World.frameCount % 200 == 0) {
    var treasure = createSprite(Math.round(random(50, width-50),40, 10, 10));
    treasure.addImage(treasureImg);
    treasure.scale=0.06;
    treasure.velocityY = 5;
    treasure.lifetime = 200;
    //treasureG.add(treasure);
    console.log("exit draw method.")
    } 
  }

  function pin(){
    console.log("enter draw method.")
    if (World.frameCount % 530 == 0) {
    var pin = createSprite(Math.round(random(50, width-50),40, 10, 10));
    pin.addImage(pinImg);
    pin.scale=0.01;
    pin.velocityY = 4;
    pin.lifetime = 200;
    pinG.add(pin);
    console.log("exit draw method.")
    }
  }