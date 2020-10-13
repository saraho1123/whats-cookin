class  Ingredient{
  constructor(id = 0, name = 'unknown', estimatedCostInCents = 0) {
    this.id = id,
    this.name = name,
    this.estimatedCostInCents = estimatedCostInCents
  }
}

module.exports = Ingredient;
