
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	box3=new Box(1000,460,200,20);
	box1=new Box(900,415,20,100);
	box2=new Box(1100,415,20,100);

	ground=new Ground(800,480,1600,40);

	paper=new Paper(200,455,50);
  

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  
  ground.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120})
	}


}



