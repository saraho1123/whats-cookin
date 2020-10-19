// const Recipe = require('./Recipe');

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

  getIngredientsWithQuantity() {
    return this.pantry.reduce((acc, ingredient) => {
      acc[ingredient.ingredient] = ingredient.amount
      return acc
    }, {})
  }

  determineAbilityToCook(recipe) {
    let pantryIds = this.getPantryIds();//refactor?
    let ingredientsWithQuantity = this.getIngredientsWithQuantity();//refactor?

    this.neededIngredients = recipe.ingredients
      .filter(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0; //refactor?
        return (!pantryIds.includes(ingredient.id) || ingredient.quantity.amount > pantryQuantity)
      })
      .map(ingredient => {
        const pantryQuantity = ingredientsWithQuantity[ingredient.id] || 0;//refactor?
        return { name: ingredient.id, amount: ingredient.quantity.amount - pantryQuantity };
      })
  };

  // determineAbilityToCook(recipe) {
  //   let pantryIds = this.getPantryIds(); //ids
  //   let ingredientsWithQuantity = this.getIngredientsWithQuantity(); //pantry ingredients
  //   this.neededIngredients = recipe.ingredients.reduce((acc, ingredient) => {
  //     const pantryQuantity = ingredientsWithQuantity[ingedient.id] || 0;
  //     if (!pantryIds.includes(ingredient.id) || ingredient.quantity.amount > pantryQuantity) {
  //       acc.push({ name: ingredient.id, amount: ingredient.quantity.amount - pantryQuantity});
  //     }
  //   }
  // //
  // //   return acc;
  // // }, [])
  // // };

  //   addIngredientsToShoppingList()  {
  //
  // }

  updatePantryQuantities(recipe) {
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
  };

};

// module.exports = Pantry;
