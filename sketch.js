const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var object;
var ground;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

var object_options={isStatic:false,restitution:1.5,density:2}

  object=Bodies.circle(200,100,20,object_options);
  World.add(myworld,object);

console.log(object.position.y)
 var ground_options={isStatic:true}
  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(myworld,ground);

}

function draw() {
  background(0);  
  Engine.update(myengine);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}