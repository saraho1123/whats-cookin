// const Ingredient = require('./src/Ingredient');
const sampleData = require('../data/test-data');
const prototypeIngredients = sampleData.sampleIngredients;

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id,
    this.image = image,
    this.ingredients = ingredients,
    this.instructions = instructions,
    this.name = name,
    this.tags = tags
  };

  getInstructions() {
    return this.instructions;
  }

  getIngredientWithPrices() {
    let ingredientsWithPrice = prototypeIngredients.filter(ingredient => {
     return this.ingredients.find(recipeIngredient => {
       return   recipeIngredient.id === ingredient.id;
     });
    });
    return ingredientsWithPrice;
  }

  calculateTotalCost() {
    let estimatedIngredients = this.getIngredientWithPrices();
    let totalCost = estimatedIngredients.reduce((total, unit, index) => {
      return  total += unit.estimatedCostInCents * this.ingredients[index].quantity.amount;
    }, 0);

    return totalCost;
  }
}

module.exports = Recipe;
