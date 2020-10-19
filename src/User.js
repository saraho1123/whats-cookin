class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = new Pantry(id, pantry);
  }

  cookTheRecipe(recipe) {
    this.pantry.determineAbilityToCook(recipe);
    if(this.pantry.neededIngredients > 0) {
      return "You need to go shopping!";
    } else {
      this.pantry.updatePantryQuantities(recipe);
      return "Enjoy your meal!";
    }
  }
}

module.exports = User;
