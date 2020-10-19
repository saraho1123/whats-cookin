// const chai = require("chai");
// const expect = chai.expect;

// const sampleData = require('../data/test-data');
const prototypeRecipes = sampleRecipes;
// const prototypeIngredients = recipeCards.sampleIngredients;
const prototypeUsers = sampleUsers;
// const prototypeUser1 = sampleData.sampleUsers[0];
// const prototypeUser2 = sampleData.sampleUsers[1];

// const Basket = require('./Basket');
// const Ingredient = require('./Ingredient');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry')

let userName = document.querySelector("#user-name");
let allRecipes = document.querySelector(".all-recipes");

var recipes = [];

//EVENT LISTENERS
window.addEventListener('load', displayTheUser);

function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]
}

function displayTheUser() {
  const randomUser = getRandomUser(prototypeUsers);
  const currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);
  userName.innerText = currentUser.name;
  createRecipeBox();
  displayAllRecipes();
}

function createRecipeBox() {
  prototypeRecipes.forEach(recipe => {
    recipes.push(new Recipe(
      recipe.id, 
      recipe.image, 
      recipe.ingredients, 
      recipe.instructions, 
      recipe.name, 
      recipe.tags))
  })
}

function displayAllRecipes() {
  console.log("give me my recipes!!")
  allRecipes.innerHTML = ''
  for(var i = 0; i < recipes.length; i++) {
    let oneRecipe = recipes[i]
    let miniRecipe =
    `
    <section class = "recipe-card">
          <div class="icon-box">
            <img class="chef-icon" "chef-icon" src="../images/chef.png" alt="chef icon unchosen">
            <img class="chef-icon hidden" src="../images/chef-solid.png" alt="chef icon chosen">
            <img class="heart-icon hidden" src="../images/favorite.svg" alt="heart icon chosen">
            <img class="heart-icon" "heart-icon" src="../images/favorite_border.svg" alt="heart icon unchosen">
          </div>
          <img class="recipe-card-img" src="${oneRecipe.image}" alt="recipe image">
          <h2>${oneRecipe.name}</h2>
        </section>
    `
    allRecipes.innerHTML += miniRecipe;
  }

  
}



