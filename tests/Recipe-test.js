const chai = require("chai");
const expect = chai.expect;

const recipeCards = require('../data/test-data');
const prototypeRecipes = recipeCards.sampleRecipes;
const Recipe = require('../src/Recipe');

//TODO sad path with data types
describe('Recipe', () => {
  let recipe1;

  beforeEach (() => {
    recipe1 = new Recipe(
      prototypeRecipes[0].id,
      prototypeRecipes[0].image,
      prototypeRecipes[0].ingredients,
      prototypeRecipes[0].instructions,
      prototypeRecipes[0].name,
      prototypeRecipes[0].tags
    );
    recipe2 = new Recipe(
      prototypeRecipes[1].id,
      prototypeRecipes[1].image,
      prototypeRecipes[1].ingredients,
      prototypeRecipes[1].instructions,
      prototypeRecipes[1].name,
      prototypeRecipes[1].tags
    );
  });

  it('should be a function', () => {
    const recipe = new Recipe();
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should be an id', () => {
    expect(recipe1.id).to.be.equal(11111);
  });

  it('should be a different id', () => {
    expect(recipe2.id).to.be.equal(22222);
  });

  it('should be an image', () => {
    expect(recipe1.image).to.be.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    expect(recipe2.image).to.be.equal("https://spoonacular.com/recipeImages/678353-556x370.jpg");
  });

  it('should have an array of ingredients', () => {
    expect(recipe1.ingredients).to.be.equal(prototypeRecipes[0].ingredients);
    expect(recipe2.ingredients).to.be.equal(prototypeRecipes[1].ingredients);
  });

  it('should have an array of instructions', () => {
    expect(recipe1.instructions).to.be.equal(prototypeRecipes[0].instructions);
    expect(recipe2.instructions).to.be.equal(prototypeRecipes[1].instructions);
  });

  it('should have a name', () => {
    expect(recipe1.name).to.be.equal(prototypeRecipes[0].name);
    expect(recipe2.name).to.be.equal(prototypeRecipes[1].name);
  });

  it('should have an array of tags', () => {
    expect(recipe1.tags).to.be.equal(prototypeRecipes[0].tags);
    expect(recipe2.tags).to.be.equal(prototypeRecipes[1].tags);
  });

  it('should return instructions', () => {
    expect(recipe1.getInstructions()).to.be.equal(prototypeRecipes[0].instructions);
  });
});
