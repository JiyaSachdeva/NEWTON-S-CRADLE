
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	roof= new Roof (400,40,600,50);

	bob1= new Bob(140,500,60);	
	bob2 = new Bob (260,500,60);
	bob3 = new Bob (380,500,60);
	bob4 = new Bob (500,500,60);
	bob5 = new Bob (620,500,60);

chain = new Chain(bob1.body,{x:140,y:40});
chain2 = new Chain(bob2.body,{x:260,y:40});
chain3 = new Chain(bob3.body,{x:380,y:40});
chain4 = new Chain(bob4.body,{x:500,y:40});
chain5 = new Chain(bob5.body,{x:620,y:40});

	Engine.run(engine);
  
}


function draw() {

  background("skyblue");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
//bob1.body.position.x = mouseX;
//bob1.body.position.y = mouseY;
  drawSprites();


 
}




function keyPressed (){

	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-500 ,y:500});
	}
  }
	


