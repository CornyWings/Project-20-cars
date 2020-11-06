var car, wall;

var speed, weight;

var deformation;




function setup() {
  createCanvas(1200,400);
  

  speed= random(55,90);
  weight= random(400,1500);

  car= createSprite(50,200,50,50);
car.shapeColor=  "blue";
  wall=createSprite(1100,200,20,height/2);

 deformation=0.5 * weight * speed* speed/22500;

  
  
}

function draw() {
  background(80,80,80);  

  
  car.velocityX=speed;

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    
    if(deformation>=180)
    {
      car.shapeColor= "red";
    }

    if(deformation<180 && deformation>=100)
    {
      car.shapeColor= "yellow";
    }
    if(deformation<100)
    {
      car.shapeColor= "green";
    }
  }
  


  drawSprites();


}