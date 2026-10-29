class ChefCook {
  name: string;

  constructor(cookerName: string) {
    this.name = cookerName;
  }

  cookfood(foodName: string) {
    return {name: foodName, tasty: true };
  }
}

const alexChefCooker = new ChefCook("Alex");

// console.log(alexChefCooker); 
// console.log(alexChefCooker.cookfood("Eggs")); 

//?======================================================================================================================================================

class Buttler {
    public name: string; 
    private chef: ChefCook;

    constructor(buttlerName: string, chefObj: ChefCook) {
        this.name = buttlerName;
        this.chef = chefObj; 
    }

    bringFood(order: string) {
        const food = this.chef.cookfood(order); 

        return {...food, drink: "Orange Juice"}
    }
}

const freddyButtler = new Buttler("Freddy", alexChefCooker); 

// console.log(freddyButtler); 
// console.log(freddyButtler.bringFood("Pizza")); 


//!==================================================================================================================================================

class Queen {
    constructor(
        public name: string,
        private buttler: Buttler,
    ) {
        this.name = name; 
        this.buttler = buttler; 
    }

    breakfast(queenOrder: string){
        return this.buttler.bringFood(queenOrder);
    }
}

const elizabethQueen = new Queen("Elizabeth", freddyButtler);
console.log(elizabethQueen);
console.log(elizabethQueen.breakfast("Pizza"));