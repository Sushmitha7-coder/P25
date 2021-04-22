
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground=new Ground(600,650)
	


 	/*boxPosition=width/2-1
 	boxY=610;

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);*/

	
	paper=new Paper(100,200,70);

	g1=new Dustbin(700,height-160,20,150);
	g2=new Dustbin(1000,height-160,20,150);
	g3=new Dustbin(850,height-80,300,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  g1.display();
  g2.display();
  g3.display();

  drawSprites();
 
}


function keyPressed() {
	//write code here
	
	  
	   if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	  }
	  

}

