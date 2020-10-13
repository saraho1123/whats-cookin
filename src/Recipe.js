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

  calculateTotalRecipeCost() {
    // return the total cost = amount * price
    //need an ingredient class
  }
}

module.exports = Recipe;
