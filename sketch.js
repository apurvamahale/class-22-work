const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;

var engine, world, object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);
 
  var object_options ={
    restitution: 1.0
  }
  object = Bodies.circle(200,100,50,object_options);
  World.add(world,object);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  circle(object.position.x,object.position.y,50);
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}