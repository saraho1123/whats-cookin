class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = new Pantry(id, pantry);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
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


  addRecipesToCook(buttons) {

    return buttons.forEach((cookIcon, i) => {
      let index = i;
      if(cookIcon.checked) {
        console.log(index)
        if (!this.recipesToCook.includes(recipesData[index])) {
          this.recipesToCook.push(recipesData[index])
        };
      } else {
        if (this.recipesToCook.includes(recipesData[index])) {
          let unwantedRecipe = this.recipesToCook.indexOf(recipesData[index])
          this.recipesToCook.splice(unwantedRecipe, 1)
        };
      }
    })
  }

  addFavoriteRecipes(buttons) {

    return buttons.forEach((favIcon, i) => {
      let index = i;
      if(favIcon.checked) {
        console.log(index)
        if (!this.favoriteRecipes.includes(recipesData[index])) {
          this.favoriteRecipes.push(recipesData[index])
        };
      } else {
        if (this.favoriteRecipes.includes(recipesData[index])) {
          let unwantedRecipe = this.favoriteRecipes.indexOf(recipesData[index])
          this.favoriteRecipes.splice(unwantedRecipe, 1)
        };
      }
    })
  }
}

// module.exports = User;
