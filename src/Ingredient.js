class Ingredient {
  constructor(id, name, cost) {
    this.id = id,
    this.name = name,
    this.estimatedCostInCents = cost
  }

  calculateIngredientCost(amount) { // Refactor if time! (not used!)
    return this.amount = amount * this.estimatedCostInCents;
  }
}

// module.exports = Ingredient;
