class Pantry {
  constructor(userId, userPantry) {
    this.id = userId;
    this.pantry = userPantry;
    this.neededIngredients = null;
  }
};

module.exports = Pantry;
