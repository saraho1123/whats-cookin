// const chai = require("chai");
// const expect = chai.expect;

// const sampleData = require('../data/test-data');
const prototypeRecipes = sampleRecipes;
// const prototypeIngredients = recipeCards.sampleIngredients;
const prototypeUsers = sampleUsers;
const prototypeIngredients = sampleIngredients;
// const prototypeUser1 = sampleData.sampleUsers[0];
// const prototypeUser2 = sampleData.sampleUsers[1];

// const Basket = require('./Basket');
// const Ingredient = require('./Ingredient');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry')

let userName = document.querySelector('#user-name');
let allRecipesView = document.querySelector('.all-recipes');
let pantryView = document.querySelector('.pantry');
let singleRecipeView = document.querySelector('.single-recipe');
let buttonPantry = document.querySelector('.pantry-button');
let buttonAllRecipes = document.querySelector('.all-recipes-button');
let allPantry = document.querySelector('.ingredients')
let pantryIngredient = document.querySelector('.pantry-ingredients')
let pantryUserName = document.querySelector('#pantry-user-name')


var recipes = [];
var currentUser;

//EVENT LISTENERS
window.addEventListener('load', displayTheUser);
buttonPantry.addEventListener('click', displayPantryView);
buttonAllRecipes.addEventListener('click', displayPantryView);


function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]
}

function displayTheUser() {
  const randomUser = getRandomUser(prototypeUsers);
  currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);
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
  allRecipesView.innerHTML = ''
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
    allRecipesView.innerHTML += miniRecipe;
  } 
}

function displayPantryView() { //refactor if time!
  pantryView.classList.toggle('hidden');
  allRecipesView.classList.toggle('hidden');
  buttonPantry.classList.toggle('hidden');
  buttonAllRecipes.classList.toggle('hidden');
  pantryUserName.innerText = currentUser.name;
  diplayUserPantryIngredients();
}

function diplayUserPantryIngredients() {
  let ingredientNames = currentUser.pantry.getIngredientName(sampleIngredients);
  console.log("give me my ingredients!!")
  allPantry.innerHTML = ''
  for(var i = 0; i < ingredientNames.length; i++) {
    let oneIngredient = ingredientNames[i]
    let miniIndgredientBox =
    `
    <li class="pantry-ingredients">${oneIngredient.name}<br>quantity: ${oneIngredient.amount}</li>
    `
    allPantry.innerHTML += miniIndgredientBox;
  }
}


