//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, dogImg2
var fedTime, lastFed;
var foodObj;
var Feed, addFood;
var milkImg



function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
  milkImg = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(1000, 400);

  dog = createSprite(820,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.22;
  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);  

  database.ref("FedTime").on("value",function(data){
    fedTime = data.val();
  })


  feed = createButton("Feed the dog");
  feed.position(750,90);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(850,90);
  addFood.mousePressed(addFoods)

  foodObj = new Food();

}


function draw() {  
background("green");
  
  foodObj.display();
  
  textSize(30);
  fill("white")
  if(fedTime>=12){
    text("Last Feed : "+ fedTime%12 +"PM", 380,30);
  }
  

  else if(fedTime===0){
    text("Last Feed : 12 AM",380,30)
  }

  else{
    text("Last Feed :"+fedTime + "AM",380,30)
  }
  
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

function writeStock(x){
  database.ref("/").update({
    Food : x 
  })

}

function addFoods(){
  foodS = foodS+1;
  database.ref("/").update({
    Food : foodS
  })
}

function feedDog(){
  dog.addImage(dogImg2);
  foodObj.deductFoodStock();
  database.ref("/").update({
    Food : foodObj.getFoodStock(),
    FedTime : hour()
  })
}




