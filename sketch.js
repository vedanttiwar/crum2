//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust1,dust2,dust3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,670,1200,20);
	dust1=new Dustbin(600,660,120,20);
	dust2=new Dustbin(550,630,20,120);
	dust3=new Dustbin(650,630,20,120);
	paper=new Paper(250,630,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  paper.display();
  drawSprites();
 
}



function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:16,y:-16});
}
}