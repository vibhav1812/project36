class Food{
    constructor(){
        this.foodStock = null;
        this.lastFed = null;


    }

    getFoodStock(){
    //reads the foodStock
        return this.foodStock;
    }


    updateFoodStock(food){
    //helps add more food
        this.foodStock = food;
    }


    deductFoodStock(){
    //if foodStock is more than 0 then only we can deduct a bottle
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
        }   
    }

    display(){
        var x,y;
        x=80
        y=100
        imageMode(CENTER)
        image(milkImg,720,220,70,70)

        if(this.foodStock!=0){
            console.log(this.foodStock)
            for(var i=0; i<this.foodStock;i++){
                if(i%10===0){
                    x= 80;
                    y=y+50;
                }
                image(milkImg,x,y,50,50);
                x=x+30
            }
        }
    }
}