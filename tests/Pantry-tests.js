const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypePantries1 = sampleData.sampleUsers[0];
const prototypePantries2 = sampleData.sampleUsers[1];
const prototypeIngredients = sampleData.sampleIngredients;
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const prototypeRecipe = sampleData.sampleRecipes[0];



//TODO sad path with data types
describe('Pantry', () => {
  let pantry1;
  let pantry2;

  beforeEach (() => {
    pantry1 = new Pantry(prototypePantries1.id, prototypePantries1.pantry);
    pantry2 = new Pantry(prototypePantries2.id, prototypePantries2.pantry);
  });

  it('should be a function', () => {
    const pantry = new Pantry();
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    const pantry = new Pantry();
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have an id that matches the users id', () => {
    expect(pantry1.id).to.equal(sampleData.sampleUsers[0].id);
    expect(pantry2.id).to.equal(sampleData.sampleUsers[1].id);
  });

  it('should have an ingredient id and an amount', () => {
    expect(pantry1.pantry).to.equal(sampleData.sampleUsers[0].pantry);
    expect(pantry2.pantry).to.equal(sampleData.sampleUsers[1].pantry);
  });

  it('should add needed recipe ingredients ids if they are not in the pantry', () => {
    const recipe1 = new Recipe(
      prototypeRecipe.id,
      prototypeRecipe.image,
      prototypeRecipe.ingredients,
      prototypeRecipe.instructions,
      prototypeRecipe.name,
      prototypeRecipe.tags);

    pantry1.determineAbilityToCook(recipe1)

    expect(pantry1.neededIngredients[0].name).to.equal(4);
  });

  it('should add needed recipe ingredients amounts if they are not in the pantry', () => {
    const recipe1 = new Recipe(
      prototypeRecipe.id,
      prototypeRecipe.image,
      prototypeRecipe.ingredients,
      prototypeRecipe.instructions,
      prototypeRecipe.name,
      prototypeRecipe.tags);

      console.log(pantry1.pantry)
      console.log(pantry1.neededIngredients)
    pantry1.determineAbilityToCook(recipe1)
    console.log(pantry1.pantry)
    console.log(pantry1.neededIngredients)
    expect(pantry1.neededIngredients[0].amount).to.equal(0.5);
  });

  it('should update pantry amounts if there enough ingredients to cook the recipe', () => {
    const recipe1 = new Recipe(
      prototypeRecipe.id,
      prototypeRecipe.image,
      prototypeRecipe.ingredients,
      prototypeRecipe.instructions,
      prototypeRecipe.name,
      prototypeRecipe.tags);
      // console.log(pantry1.pantry)
    pantry1.updatePantryQuantities(recipe1)
    // console.log(pantry1.pantry)
    expect(pantry1.pantry[0].amount).to.equal(2.5);
  });

  it('should create an array of pantry objects that includes the name of the ingredient', () => {
    expect(pantry1.getIngredientName(prototypeIngredients)).to.deep.equal([
      {
        "name": 'pumpkin',
        "amount": 4
      },
      {
        "name": 'eggnog',
        "amount": 3
      },
      {
        "name": 'cinnamon',
        "amount": 2
      }
    ])
  })

});
