var car, wall;
var speed, weight; 
var deformation

function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
 
wall= createSprite(1500, 200, 60, 200)
wall.shapeColor= color(80,80,80)

  speed= random(55,90);
  weight= random(400,1500);

  car.velocityX= speed
}

function draw() {
  background(0); 
  
  if(wall.x-car.x<wall.widht/2+ car.width/2){
    deformation=(0.5*weight*speed*speed)/2500
    car.velocityX=0
    if(deformation<100){
      car.shapeColor= "green"
    }
    else if(deformation>100 &&deformation<180){
      car.shapeColor="yellow"}
  else if(deformation>180)
  {car.shapeColor="red"}
    }
  




  drawSprites();
}