var helicopterIMG, helicopterSprite, packageSprite,packageIMG,block1,block2,block3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    block1 = new Block(510,560,20,200)      
	block2 = new Block(400,650,200,20)
	block3 = new Block(290,560,20,200)                                       

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  block1.display()
  block2.display()
  block3.display()
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 if(keyDown(RIGHT_ARROW)){ 
	helicopterSprite.x = helicopterSprite.x +15
	if(packageSprite.y===200){
		Matter.Body.translate(packageBody,{x:15,y:0})
	}
	
 }
 if(keyDown(LEFT_ARROW)){ 
	helicopterSprite.x = helicopterSprite.x -15
	if(packageSprite.y===200){
	Matter.Body.translate(packageBody,{x:-15,y:0})
	}	
 }
 if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false)
  }
}