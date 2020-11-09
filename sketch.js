const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird1;
var log1,log2,log3,log4;
var ground;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    bird1 = new BIRD(100,100);


    pig1 = new PIG(810,320);
    pig2 = new PIG(810,240);

    log1 = new LOG(810,260,300,PI/2);
    log2 = new LOG(810,180,300,PI/2);
    log3 = new LOG(760,120,150,PI/7);
    log4 = new LOG(870,120,150,-PI/7);

    ground = new Ground(600,height,1200,20);

}

function draw(){
    background("green");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    bird1.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    ground.display();
}