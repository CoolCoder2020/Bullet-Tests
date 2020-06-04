var wall,bullet,bullet2,bullet3;
var speed,weight,thickness;
var di1,di2,di3,di4;

function setup() {
  createCanvas(1600,400);

thickness = random(22,83);
wall = createSprite(1525,200, thickness, 400);
wall.shapeColor = "white";
speed = random(220,320);
weight = random(30,52);
bullet = createSprite(50,200,50,20);
bullet.velocityX = speed;
bullet.shapeColor = "cyan";
bullet2 = createSprite(50,300,50,20);
bullet2.velocityX = speed;
bullet2.shapeColor = "cyan";
bullet3 = createSprite(50,100,50,20);
bullet3.velocityX = speed;
bullet3.shapeColor = "cyan";
di1 = createSprite(775,250,1500,15);
di1.shapeColor = "white";
di2 = createSprite(775,150,1500,15);
di2.shapeColor = "white";
di3 = createSprite(775,50,1500,15);
di3.shapeColor = "white";
di4 = createSprite(775,350,1500,15);
di4.shapeColor = "white";
}

function draw() {
  background(0); 

  if(wall.x - bullet.x < (bullet.width + wall.width)/1.0){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness;
    if(damage<3.68){
      bullet.shapeColor = "green";
    }
    if(damage<12.43){
      bullet.shapeColor = "green";
  }
  if(damage>12.43){
    bullet.shapeColor = "red";
  }
  }

  if(wall.x - bullet3.x < (bullet3.width + wall.width)/1.0){
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness;
    if(damage<3.68){
      bullet3.shapeColor = "green";
    }
    if(damage<12.43){
      bullet3.shapeColor = "green";
  }
  if(damage>12.43){
    bullet3.shapeColor = "red";
  }
  }

  if(wall.x - bullet2.x < (bullet2.width + wall.width)/1.0){
    bullet2.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness;
    if(damage<3.68){
      bullet2.shapeColor = "green";
    }
    if(damage<12.43){
      bullet2.shapeColor = "green";
  }
  if(damage>12.43){
    bullet2.shapeColor = "red";
  }
  }
 drawSprites();
  }
  



  