const World= Matter.World
const Engine= Matter.Engine
const Bodies= Matter.Bodies
const body= Matter.body
const Constraint= Matter.Constraint

var myengine, myworld;
var ground1;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, 
b11, b12, b13, b14, b15;
var ball1;
var sling;

function setup() {
  createCanvas(1200,600);


  myengine= Engine.create();
  myworld= myengine.world;

  ground1= new ground(450, 490, 900, 20);

b1= new block(800, 450, 40, 40);
b2= new block(800, 400, 40, 40);
b3= new block(800, 350, 40, 40);
b4= new block(800, 300, 40, 40);
b5= new block(800, 250, 40, 40);

b6= new block(700, 450, 40, 40);
b7= new block(700, 400, 40, 40);
b8= new block(700, 350, 40, 40);
b9= new block(700, 300, 40, 40);
b10= new block(700, 250, 40, 40);

b11= new block(600, 450, 40, 40);
b12= new block(600, 400, 40, 40);
b13= new block(600, 350, 40, 40);
b14= new block(600, 300, 40, 40);
b15= new block(600, 250, 40, 40);

ball1= new ball(450, 300, 40);

sling= new string(ball1.body, {x:450, y:250})


  
}

function draw() {
  background(255,0, 0);  
  Engine.update(myengine);


  ground1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  

  sling.display();

  ball1.display();
  
}

function mouseDragged() {

  Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});



}