// const chai = require("chai");
// const expect = chai.expect;

const sampleData = require('../data/test-data');
const prototypeRecipes = recipeCards.sampleRecipes;
const prototypeIngredients = recipeCards.sampleIngredients;
const prototypeUsers = sampleData.sampleUsers;
const prototypeUser1 = sampleData.sampleUsers[0];
const prototypeUser2 = sampleData.sampleUsers[1];

const Basket = require('./Basket');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');
const User = require('./User');
const Pantry = require('./Pantry')

let userName = document.querySelector("#user-name");

//EVENT LISTENERS
window.addEventListener('load', displayTheUser);

function getRandomUser(users) {
  var randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]
}

function displayTheUser() {
  const randomUser = getRandomUser(prototypeUsers);
  const currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);
  userName.innerText = currentUser.name;
}


// console.log('Hello world');
console.log('Hello world');
