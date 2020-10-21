class Pantry {
  constructor(userId, userPantry) {
    this.id = userId;
    this.pantry = userPantry;
    this.neededIngredients = [];
  }

  getPantryIds() {
    return this.pantry.map(ingredient => {
      return ingredient.ingredient;
    })
  }

  getIngredientName(ingredients) {
    return this.pantry.map(pantryIngredient => {
      let rightId = ingredients.filter(ingredient => {
        return pantryIngredient.ingredient === ingredient.id;
      })
      return {
        name: rightId[0].name,
        amount: pantryIngredient.amount
      };
    });
  }

  getIngredientsWithQuantity() {
    return this.pantry.reduce((acc, ingredient) => {
      acc[ingredient.ingredient] = ingredient.amount
      return acc
    }, {})
  }

  determineAbilityToCook(recipe) {
    let pantryIds = this.getPantryIds();// Refactor if time!
    let ingredientsWithQuantity = this.getIngredientsWithQuantity();// Refactor if time!

    this.neededIngredients = recipe.ingredients
      .filter(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0; // Refactor if time!
        return (!pantryIds.includes(ingredient.id) || ingredient.quantity.amount > pantryQuantity)
      })
      .map(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0;// Refactor if time!
        return { name: ingredient.id, amount: ingredient.quantity.amount - pantryQuantity };
      })
  }

  updatePantryQuantities(recipe) {// Refactor if time!
    let pantryIds = this.getPantryIds();
    let ingredientsWithQuantity = this.getIngredientsWithQuantity();
    this.pantry = recipe.ingredients
      .filter(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0;
        return (pantryIds.includes(ingredient.id) || ingredient.quantity.amount <= pantryQuantity)
      })
      .map(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0;
        return { ingredient: ingredient.id, amount: pantryQuantity - ingredient.quantity.amount };
      });
  }
}

// module.exports = Pantry;
