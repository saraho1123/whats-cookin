const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypePantries1 = sampleData.sampleUsers[0];
const prototypePantries2 = sampleData.sampleUsers[1];
// const prototypeIngredients = recipeCards.sampleIngredients;
const Pantry = require('../src/Pantry');

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

  it('should be an instance of Recipe', () => {
    const pantry = new Pantry();
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have an id that matches the users id', () => {
    expect(pantry1.pantry).to.equal(sampleData.sampleUsers[0].pantry);
    expect(pantry2.pantry).to.equal(sampleData.sampleUsers[1].pantry);
  });

  it('should have an ingredient id and an amount', () => {
    expect(pantry1.pantry).to.equal(sampleData.sampleUsers[0].pantry);
    expect(pantry2.pantry).to.equal(sampleData.sampleUsers[1].pantry);
  });


});
