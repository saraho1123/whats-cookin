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
        if (!this.recipesToCook.includes(recipes[index])) {
          this.recipesToCook.push(recipes[index])
        };
      } else {
        if (this.recipesToCook.includes(recipes[index])) {
          let unwantedRecipe = this.recipesToCook.indexOf(recipes[index])
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
        if (!this.favoriteRecipes.includes(recipes[index])) {
          this.favoriteRecipes.push(recipes[index])
        };
      } else {
        if (this.favoriteRecipes.includes(recipes[index])) {
          let unwantedRecipe = this.favoriteRecipes.indexOf(recipes[index])
          this.favoriteRecipes.splice(unwantedRecipe, 1)
        };
      }
    })
  }
}

// module.exports = User;
