var ground, Matter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  
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

 ground = new Ground(240, 780, 480, 20);


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();

  for(var k = 0; k < divisions.length; k++){
  divisions[k].display()
  }
  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display()
    }
  if(frameCount % 100 === 0){
  particles.push(new Particle(random(width/2-100, width/2+100),5, 10))
  }
  for(var r = 0; r < particles.length; r++){
    particles[r].display()
    }


  drawSprites();
}