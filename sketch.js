
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1, box2, box3;
var paper;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    paper = createSprite(200, 680, 10, 10);
	paper.shapeColor = "purple";

	paper = Matter.Bodies.circle(200, 680, 10, 10);
	World.add(world, paper);

    Box1 = createSprite(603, 660, 250, 30);
	Box1.shapeColor = "white";

	Box2 = createSprite(490, 595, 25, 100);
	Box2.shapeColor = "white";

	Box3 = createSprite(715, 595, 25, 100);
	Box3.shapeColor = "white";
	
    Box1 = Bodies.rectangle(width/2, 660, width, 30, {isStatic:true});
	World.add(world, Box1);

	Box2 = Bodies.rectangle(width/2, 595, width, 100, {isStatic:true});
	World.add(world, Box2);

	Box3 = Bodies.rectangle(width/2, 595, width, 25, {isStatic:true});
	World.add(world, Box3);

    ground = createSprite(400, 680, 900, 10);
	ground.shapeColor = "yellow";

	ground = Bodies.rectangle(400, 680, 900, 10);
	World.add(world, ground);	

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
}

function KeyPressed() {
if(keyDown === UP_ARROW) {
	Matter.body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
}
}