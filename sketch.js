var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;

function setup() 
{
  createCanvas(400, 400);
  box1=new Box(200,200,20,20,2,0);
  box2=new Box(200,200,20,20,2,2);
  box3=new Box(200,200,20,20,0,2);
  box4=new Box(200,200,20,20,-2,2);
  box5=new Box(200,200,20,20,-2,0);
  box6=new Box(200,200,20,20,-2,-2);
  box7=new Box(200,200,20,20,0,-2);
  box8=new Box(200,200,20,20,2,-2);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box2.show();
  box2.move();
  box3.show();
  box3.move();
  box4.show();
  box4.move();
  box5.show();
  box5.move();
  box6.show();
  box6.move();
  box7.show();
  box7.move();
  box8.show();
  box8.move();
}

