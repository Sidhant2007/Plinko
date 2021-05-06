var ground, Matter;
var score=0;
var particle;
var gameState="Start";
var count=0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(600,750);
  
  engine = Engine.create();
  world = engine.world;
  for(var k = 0; k <= width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
   for(var j = 40; j <= width; j= j+50){
   plinkos.push(new Plinko(j, 75));
   }
   for(var j = 15; j <= width; j= j+50){
    plinkos.push(new Plinko(j, 125));
    }
    for(var j = 40; j <= width; j= j+50){
      plinkos.push(new Plinko(j, 175));
      }
      for(var j = 15; j <= width; j= j+50){
        plinkos.push(new Plinko(j, 225));
        }

 ground = new Ground(300, 740, 600, 20);


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  fill("white")
  textSize(20)
  text("score:"+score,50,50)
  text("500",30,550)
  text("500",110,550)
  text("200",190,550)
  text("200",270,550)
  text("200",350,550)
  text("100",430,550)
  text("100",510,550)
  text("100",570,550)

  if(particle!=null){
    console.log("particle")
    particle.display()
    if(particle.body.position.y>740){
      if(particle.body.position.x<150){
        score=score+500
        particle=null
        if(count>=5){
          gameState="end"
        }
      }
      else if(particle.body.position.x>151&&particle.body.position.x<380){
        score=score+200
        particle=null
        if(count>=5){
          gameState="end"
        }
      }
      else if(particle.body.position.x>381&&particle.body.position.x<600){
        score=score+100
        particle=null
        if(count>=5){
          gameState="end"
        }
      }
    }
  }


  for(var k = 0; k < divisions.length; k++){
  divisions[k].display()
  }
  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display()
    }
  
  
  

  

  drawSprites();

}

function mousePressed()
{
  console.log(gameState)
  if(gameState!=="end")
  {
    console.log(gameState)
    count=count+1
    particle = new Particle(mouseX,10,10,10);
  }
}