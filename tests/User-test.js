const chai = require("chai");
const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypeUser1 = sampleData.sampleUsers[0];
const prototypeUser2 = sampleData.sampleUsers[1];
const User = require('../src/User');

//TODO sad path with data types
describe('User', () => {
  let user1;
  let user2;

  beforeEach (() => {
    user1 = new User(prototypeUser1.name, prototypeUser1.id, prototypeUser1.pantry);
    user2 = new User(prototypeUser2.name, prototypeUser2.id, prototypeUser2.pantry);
  });

  it('should be a function', () => {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', () => {
    expect(user1.name).to.equal(sampleData.sampleUsers[0].name);
    expect(user2.name).to.equal(sampleData.sampleUsers[1].name);
  });

  it('should have an id /*that matches the pantry id*/', () => {
    expect(user1.id).to.equal(sampleData.sampleUsers[0].id);
    expect(user2.id).to.equal(sampleData.sampleUsers[1].id);
  });

  // should we instantiate the pantry class in this class?
  // I don't know that we need a pantry in here. I just put it for 'in-case'


});