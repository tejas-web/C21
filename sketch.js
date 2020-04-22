var fixedRect, movingRect,box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
box1 = createSprite(600,400,50,50);


box2 = createSprite(600,200,60,90);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1.velocityY = -5;
  box2.velocityY = 6;
}

function draw() {
  background(0,0,0);  

  bounceOff(box1,box2);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

