class  Ingredient {
  constructor(id, name, cost) {
    this.id = id,
    this.name = name,
    this.estimatedCostInCents = cost
  }

  calculateIngredientCost(amount) {
    return this.amount = amount * this.estimatedCostInCents;
  }
}

// module.exports = Ingredient;

//make a use of ingredient method
