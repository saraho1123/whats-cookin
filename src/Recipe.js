class Recipe {
  constructor(id, image, ingridients, instructions, name, tags) {
    this.id = id,
    this.image = image,
    this.ingridients = ingridients,
    this.instructions = instructions,
    this.name = name,
    this.tags = tags
  };

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;