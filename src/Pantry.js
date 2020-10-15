// const sampleData1 = require('../data/test-data');
// const prototypeRecipe = sampleData1.sampleRecipes;
// const Recipe = require('./Recipe');
// const recipe = new Recipe(
//   prototypeRecipe.id, 
//   prototypeRecipe.image, 
//   prototypeRecipe.ingredients, 
//   prototypeRecipe.instructions, 
//   prototypeRecipe.name, 
//   prototypeRecipe.tags);

class Pantry {
  constructor(userId, userPantry) {
    this.id = userId;
    this.pantry = userPantry;
    this.neededIngredients = [];
  }

  determineAbilityToCook(recipe) {
    recipe.ingredients.reduce((acc, ingredient) => {
      if (!this.neededIngredients) {
        this.neededIngredients = [];
      }
      this.pantry.forEach(pantryIngredient => {
        // pantry.includes(recipe.id)
        if (ingredient.id !== pantryIngredient.ingredient) {
          console.log(ingredient.id)
          console.log(pantryIngredient.ingredient)
          return this.neededIngredients.push({name: ingredient.id});
          // let amountDifference = ingredient.quantity.amount - userIngredient.amount;
          // if (amountDifference > 0) {
          //   acc.push({name: ingredient.id, amount: amountDifference});
          // } 
        // } else {
        //   acc.push({name: ingredient.id, amount: ingredient.amount})
        }
      })
      return acc;
      }, []);
    };
 

    // what? 2 arrays of objects: recipe.ingredient array && pantry.ingredient
    // want? amounts from each in order to match them
    // methods? reduce and forEach
    // how? reduce for recipe.ingedient.amounts and forEach for pantry.ingredient.amount

    // match recipe.ingredient.id to pantry.ingredient.id
    // if ingredient id doesn't exist >> addIngredientsToShoppingList() 
    // if matches THEN

    // subtract recipe.ingredient.amount - pantry.ingredient.amount 
    // if positive >> addIngredientsToShoppingList() 
    // else updatePantryQuantities()

    addIngredientsToShoppingList()  {

  }

  updatePantryQuantities() {

  }
};

module.exports = Pantry;
