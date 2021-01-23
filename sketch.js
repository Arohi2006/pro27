
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,500,10);
	
	bob1 = new Bob(300,110,50,50);
	bob2 = new Bob(350,210,50,50);
	bob3 = new Bob(400,310,50,50);
	bob4 = new Bob(450,410,50,50);
	bob5 = new Bob(500,510,50,50);
	rope1 = new Rope(ground.body, bob1.body,-100,0);
	rope2 = new Rope(ground.body, bob2.body,-100,0);
	rope3 = new Rope(ground.body, bob3.body,-100,0);
	rope4 = new Rope(ground.body, bob4.body,-100,0);
	rope5 = new Rope(ground.body, bob5.body,-100,0);
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
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
 
}



