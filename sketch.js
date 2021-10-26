
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
engine = Engine.create ()
world = engine.world 
groundOptions = {
  isStatic: true
}
ground = Bodies.rectangle (200,350,400,20, groundOptions)
World.add (world,ground)
console.log (ground)
ballOptions = {
  restitution: 1 
}
ball = Bodies.circle (200,50,20, ballOptions)
World.add (world,ball)
wedge = Bodies.rectangle (350,200,200,10, groundOptions)
World.add (world,wedge)

ball2 = Bodies.circle (380,35,20, ballOptions)
World.add (world,ball2)
}

function draw() 
{
  background(51);
 Engine.update (engine)
 rectMode (CENTER)
 rect (ground.position.x, ground.position.y, 400, 20 )
 ellipseMode (RADIUS) 
 ellipse  (ball.position.x, ball.position.y, 20,20 )
 rect (wedge.position.x, wedge.position.y, 200, 10)
 ellipse (ball2.position.x, ball2.position.y, 20,20)
}

