const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypeIngredients = sampleData.sampleIngredients;
const Basket = require('../src/Basket');
const Ingredient = require('../src/Ingredient');
const Recipe = require('../src/Recipe');


describe('Basket', () => {
  let recipe1, basket1, allIngredients; // ingredient2, ingredient3, ingredient4;

  beforeEach (() => {
    // this would be done in script.js:
    allIngredients = prototypeIngredients.map(ingredient => {
      return new Ingredient(ingredient.id, ingredient.name, ingredient.estimatedCostInCents)
    });

    basket1 = new Basket(allIngredients);

    recipe1 = new Recipe(
      prototypeRecipes[0].id,
      prototypeRecipes[0].image,
      prototypeRecipes[0].ingredients,
      prototypeRecipes[0].instructions,
      prototypeRecipes[0].name,
      prototypeRecipes[0].tags
    );

  it('should be a function', () => {
    expect(Basket).to.be.a('function');
  });

  it('should have all the ingredients of a given recipe', function => {
    expect(basket).to.equal(recipe1.ingredients)
  })

});