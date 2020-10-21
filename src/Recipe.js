class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id,
    this.image = image,
    this.ingredients = ingredients,
    this.instructions = instructions,
    this.name = name,
    this.tags = tags
  };

  getIngredientWithPrices(basket) {
    let ingredientsWithPrices = basket.filter(ingredient => {
          return this.ingredients.find(recipeIngredient => recipeIngredient.id === ingredient.id)
        });
    return ingredientsWithPrices;
  }

  calculateTotalCost(basket) {
    let estimatedIngredients = this.getIngredientWithPrices(basket);
    let totalCost = estimatedIngredients.reduce((total, unit, index) => {
      return  total += unit.estimatedCostInCents * this.ingredients[index].quantity.amount;
    }, 0);
    return totalCost;
  }
}

// module.exports = Recipe;
