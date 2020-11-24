
var fixedRect;
var movingRect;
var Cat,Catim;

function preload() {
Catim = loadImage("cat2.png")




}
function setup() {
  createCanvas(800,400);

  fixedRect= createSprite(500, 200, 100, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  
  movingRect = createSprite(150,200,50,100);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
 Cat = createSprite(300,100,40,40);
 Cat.addImage(Catim)
 Cat.shapeColor = "grey"
}

function draw() {
  background("lightBlue");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  
console.log(fixedRect.y- movingRect.y);

if (IsTouching(movingRect,Cat)) {
console.log("good job")


}

else {
  console.log("go to the rectangle")
}




  drawSprites();
} 
  function IsTouching(Object1,Object2) {

    if(Object1.x- Object2.x < Object1.width/2 + Object2.width/2 &&
      Object2.x - Object1.x < Object1.width/2 + Object2.width/2 && 
      Object1.y- Object2.y < Object1.height/2 + Object2.height/2 &&
      Object2.y- Object1.y < Object1.height/2 + Object2.height/2 
      
      ){
    
      return true;
      
    }
    else{
      return false;
    
    }

  }
  
  