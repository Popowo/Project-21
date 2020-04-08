var sun,earth,jupiter,mars,venus,neptune,saturn,uranus,mercury;

function setup() {
  createCanvas(800,400);
  
  sun = createSprite(400,200,80,80);
  sun.shapeColor = "Yellow";
  
  earth = createSprite(380,69,25,25);
  earth.shapeColor = "green";

  jupiter  = createSprite(450,113,30,30);
  jupiter.shapeColor = "orange";

  mars = createSprite(715,175,35,35);
  mars.shapeColor = "blue";

  venus = createSprite(270,213,25,35);
  venus.shapeColor = "red";

  neptune = createSprite(634,266,25,30);
  neptune.shapeColor = "black";

  saturn = createSprite(175,299,40,25);
  saturn.shapeColor = "brown";

  saturn = createSprite(538,343,25,40);
  saturn.shapeColor = "purple";
  
  mercury = createSprite(79,375,31,27);
  mercury.shapeColor = "violet";
}

function draw() {
  background(255,255,255); 
  
  if(World.frameCount%50 === 0){

    sun.width = sun.width+10;
    sun.height = sun.height+10;
  }
  
 
  
  if(isTouching(sun,earth)){
    earth.destroy();
  }
  if(isTouching(sun,jupiter)){
    jupiter.destroy();
  }
  if(isTouching(sun,mars)){
    mars.destroy();
  }
  if(isTouching(sun,venus)){
    venus.destroy();
  }
  if(isTouching(sun,venus)){
    venus.destroy();
  }
  if(isTouching(sun,neptune)){
    neptune.destroy();
  }
  if(isTouching(sun,saturn)){
    saturn.destroy();
  }
  if(isTouching(sun,mercury)){
    mercury.destroy();
  }

  drawSprites();
}