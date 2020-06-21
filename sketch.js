var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, height/2);
  car = createSprite(50,200,50,50);
}

function draw() {
  background(0);  
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22500
    if(deformation>180){
      car.shapeColor = "white"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor =" green"
    }
    if(deformation<100){
      car.shapeColor = "red";
    }
  }
if(
  wall.x - car.x < wall.height/2 + car.height/2 
  && car.x - wall.x < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2
  && car.y - wall.y < wall.height/2 + car.height/2){
    
  car.velocityX = 0;
}
  
  drawSprites();
}