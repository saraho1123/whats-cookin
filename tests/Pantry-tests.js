const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypePantries1 = sampleData.sampleUsers[0];
const prototypePantries2 = sampleData.sampleUsers[1];
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

  it('should add needed recipe ingredients if they are not in the pantry', () => {
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

  it('should add needed recipe ingredients if they are not in the pantry', () => {
    const recipe1 = new Recipe(
      prototypeRecipe.id, 
      prototypeRecipe.image, 
      prototypeRecipe.ingredients, 
      prototypeRecipe.instructions, 
      prototypeRecipe.name, 
      prototypeRecipe.tags);
    
    pantry1.determineAbilityToCook(recipe1)

    expect(pantry1.neededIngredients[0].amount).to.equal(0.5);
  });


});
