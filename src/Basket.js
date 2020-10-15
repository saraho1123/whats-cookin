class Basket {
  constructor(ingredients) {
    this.ingredients = ingredients
  }
}

module.exports = Basket;

//create an array of these ingreadient data objects 
//we will create this array new Basket([ingredient, ingredient1....]) 
// in a recipe file new Recipe(basket)
//we filter/reduce through this Basket instance to 
//pull only ingredients that belong to this recipe//