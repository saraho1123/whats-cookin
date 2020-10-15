const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypeIngredients = sampleData.sampleIngredients;

const Ingredient = require('../src/Ingredient');

describe('Ingredient', () => {
  let ingredient1, ingredient2;

  beforeEach (() => {
    ingredient1 = new Ingredient(
      prototypeIngredients[0].id,
      prototypeIngredients[0].name,
      prototypeIngredients[0].estimatedCostInCents,
    );

    ingredient2 = new Ingredient(
      prototypeIngredients[1].id,
      prototypeIngredients[1].name,
      prototypeIngredients[1].estimatedCostInCents,
    );
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', () => {
    const ingredient = new Ingredient();
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient1.id).to.be.equal(prototypeIngredients[0].id);
    expect(ingredient2.id).to.be.equal(prototypeIngredients[1].id);
  });

  it('should have a name', () => {
    expect(ingredient1.name).to.be.equal(prototypeIngredients[0].name);
    expect(ingredient2.name).to.be.equal(prototypeIngredients[1].name);
  });

  it('should be a estimated cost', () => {
    expect(ingredient1.estimatedCostInCents).to.be.equal(prototypeIngredients[0].estimatedCostInCents);
    expect(ingredient2.estimatedCostInCents).to.be.equal(prototypeIngredients[1].estimatedCostInCents);
  });
});

//TODO sad path with data types
