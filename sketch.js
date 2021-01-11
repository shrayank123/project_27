
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	box1 = new Box(400,200,400,30);
	bob1 = new Ball(400,400,30);
	bob2 = new Ball(450,400,30);
	bob3 = new Ball(500,400,30);
	bob4 = new Ball(350,400,30);
	bob5 = new Ball(300,400,30);
	rope1 = new Rope(bob1.body, box1.body, 0, 0);
	rope2 = new Rope(bob2.body, box1.body,50,0);
	rope3 = new Rope(bob3.body, box1.body,100, 0);
    rope4 = new Rope(bob4.body, box1.body, -50, 0);
    rope5 = new Rope(bob5.body, box1.body, -100, 0);
}


function draw() {
	
  rectMode(CENTER);
  background(255, 204, 0);
  


  box1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob3.body, bob5.body.position,{x:75,y:-75});
	 }
   }


