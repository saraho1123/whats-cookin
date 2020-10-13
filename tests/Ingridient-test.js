const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypeIngridients = sampleData.sampleIngridients;

const Ingridient = require('../src/Ingridient');

describe('Ingridient', () => {
  let ingridient1, ingridient2;

  beforeEach (() => {
    ingridient1 = new Ingridient(
      prototypeIngridients[0].id,
      prototypeIngridients[0].name,
      prototypeIngridients[0].estimatedCostInCents,
    );

    ingridient2 = new Ingridient(
      prototypeIngridients[1].id,
      prototypeIngridients[1].name,
      prototypeIngridients[1].estimatedCostInCents,
    );
  });

  it('should be a function', () => {
    expect(Ingridient).to.be.a('function');
  });

  it('should be an instance of Ingridient', () => {
    const ingridient = new Ingridient();
    expect(ingridient).to.be.an.instanceof(Ingridient);
  });

  it('should be an id', () => {
    expect(ingridient1.id).to.be.equal(prototypeIngridients[0].id);
    expect(ingridient2.id).to.be.equal(prototypeIngridients[1].id);
  });

  it('should be a name', () => {
    expect(ingridient1.name).to.be.equal(prototypeIngridients[0].name);
    expect(ingridient2.name).to.be.equal(prototypeIngridients[1].name);
  });

  it('should be a estimated cost', () => {
    expect(ingridient1.estimatedCostInCents).to.be.equal(prototypeIngridients[0].estimatedCostInCents);
    expect(ingridient2.estimatedCostInCents).to.be.equal(prototypeIngridients[1].estimatedCostInCents);
  });
});

//TODO sad path with data types
