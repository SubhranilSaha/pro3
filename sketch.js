var pc, pcImage;
var gamestate = "play"
var zombie1, zombie1Image
var zombie2, zombie2Image
var zombieGrp
var kill = 0
function preload() {
  pcImage = loadImage ("images/player.png")
  zombie1Image = loadImage ("images/zombie1.png")
  zombie2Image = loadImage ("images/zombie2.png")
  zombiebg = loadImage("images/zombiebg.png")
}
function setup() {
  createCanvas(800,400);
zombieGrp = createGroup()
  pc =   createSprite(400, 300, 50, 50);
pc.addImage(pcImage)

pc.setCollider("rectangle", -30, 0, 100, 150);
pc.debug = false;

}

function draw() {
  background(zombiebg); 
  if (gamestate === "play")
  {
  spawnZombie1()
  spawnZombie2()
  
  if (mousePressedOver(zombieGrp)){
    kill=kill+1
    zombieGrp[0].destroy()
  }

  if (zombieGrp.isTouching(pc)){
    gamestate = "end"
    zombieGrp.setVelocityXEach(0)
  
  }
  }
  if (gamestate === "end") {
    textSize(25)
    fill("red")
    text ("Game Over!", 350, 180)
  }
  
  drawSprites();
  textSize (25)
  text ("Number of Zombies KILLED  =  "+kill , 400, 40)
}
function spawnZombie1() {
  if(frameCount%200===0)

  {
    zombie=createSprite(700,300,70,80)
    zombie.setCollider("rectangle", -10, 0, 100, 150);
zombie.debug = false;
    zombie.velocityX=-2
    zombieGrp.add (zombie)
    zombie.addImage(zombie1Image)
  }
}
function spawnZombie2() {
  if(frameCount%250===0)
  {
    zombie=createSprite(0,300,70,80)
    zombie.setCollider("rectangle", 10, 0, 100, 150);
    zombie.debug = false;
    zombie.velocityX=2
    zombie.scale = 0.8
    zombieGrp.add (zombie)
    zombie.addImage(zombie2Image)
  }
}
