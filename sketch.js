
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670, width, 20)
	paper = new Paper(100, 200, 70);
	d1 = new Dustbin(600, 1000, 300,320)
	//r1 = new Dustbin(600, 650, 80, 280);
	//r2 = new Dustbin(650, 620, 280, 80);
	//r3 = new Dustbin(550, 620, 280, 80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d1.display();
 // r2.display();
  //r1.display();
  //r3.display();
  paper.display();
  ground.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 1400, y: 3000});
	}
}

