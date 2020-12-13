const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var canvas,engine,object,world;
var ball;


function setup() {
canvas = createCanvas(800,400);
engine= Engine.create();
world=engine.world;
var object_options={
    isStatic: true
}
var ball_options ={
  restitution: 1.3
}
object=Bodies.rectangle(400,375,800,50,object_options);
ball=Bodies.circle(100,300,50,ball_options);
World.add(world,object);
World.add(world,ball);
console.log(object);
console.log(object.position.x, "," ,object.position.y)

}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode (CENTER);
  fill (150,75,0)
  rect(object.position.x,object.position.y,800,50);
  fill(0,255,0)
  //rect(400,);
 // fill (255,0,0)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  

}