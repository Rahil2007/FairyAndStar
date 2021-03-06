var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();
	
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,25,{restitution:0.5, isStatic:true})
	World.add(world,starBody);


	Engine.run(engine);

}


function draw() {
	background(bgImg)
	
	star = createSprite(starBody.position.x,starBody.position.y);
	star.addImage(starImg);
	star.scale = 0.2;
	star.lifetime=1
	
	

  if(starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
	star.lifetime=-1
  }

  drawSprites();

  console.log(starBody.position.y)
}

function keyPressed() {
	//write code here
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10
	}

	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10
	}

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}	
}