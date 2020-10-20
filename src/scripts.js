// const chai = require("chai");
// const expect = chai.expect;

// const sampleData = require('../data/test-data');
const prototypeRecipes = sampleRecipes;
// const prototypeIngredients = recipeCards.sampleIngredients;
const prototypeUsers = sampleUsers;
const prototypeIngredients = sampleIngredients;
const recipesData = recipeData;
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
let allPantry = document.querySelector('.ingredients');
let pantryIngredient = document.querySelector('.pantry-ingredients');
let pantryUserName = document.querySelector('#pantry-user-name');
let userChoiceBtnGroup = document.querySelector('.icon-box');
let filterBoxElement = document.querySelector('.filter-box');
let filterButton = document.querySelector('.filter-button')

let basketOfIngredients = [];

let recipes = [];
let currentUser;
let recipesTags = [];
let recipesTypes = [];

let filterBox = {
  tags: getAllRecipesTags(recipesData),
  userTypes: ['Favorite Recipes', 'Recipe To Cook']
}

//EVENT LISTENERS
window.addEventListener('load', displayTheUser);
buttonPantry.addEventListener('click', displayPantryView);
buttonAllRecipes.addEventListener('click', displayPantryView);
filterButton.addEventListener('click', displayFilteredRecipes);

function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]
}

function displayTheUser() {
  const randomUser = getRandomUser(prototypeUsers);
  currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);
  userName.innerText = currentUser.name;
  createRecipeBox();
  displayAllRecipes(recipes);
  createIngredientCart();
  getTagOptions();
}

function getAllRecipesTags(recipes) {
  return recipes.reduce((acc, recipe) => {
    const tags = recipe.tags.forEach(tag => {
      if(!acc.includes(tag)) {
        acc.push(tag);
      }

    })
    return acc;
  }, [])
}

function getSelectValue(values) {
  filterBox.userTypes.forEach(keyItem => {
    if(filterBoxElement.value === keyItem) {
      console.log(filterBoxElement.value)
    }
  })
}

function createIngredientCart() {
  return prototypeIngredients.map(ingredient => {
    basketOfIngredients.push(new Ingredient(
      ingredient.id,
      ingredient.name,
      ingredient.estimatedCostInCents,
    ));
  });
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

function displayAllRecipes(choosenRecipes) {
  allRecipesView.innerHTML = ''
  choosenRecipes.forEach(recipe => {
    let miniRecipe =
    `
    <section class = "recipe-card">
          <div class="icon-box">
            <label>
              <input type="checkbox" name="recipe-buttons" id="chef-${recipe.id}" class="chef-radio-button">
              <img id="chef-icon-disabled" class="chef-icon" src="../images/chef.png" alt="chef icon unchosen">
              <img id="chef-icon-enabled" class="chef-icon hidden" src="../images/chef-solid.png" alt="chef icon chosen">
            </label>
            <label>
              <input type="checkbox" name="recipe-buttons" id="heart-${recipe.id}" class="heart-radio-button">
              <img id="heart-icon-enabled" class="heart-icon hidden" src="../images/favorite.svg" alt="heart icon chosen">
              <img id="heart-icon-disabled" class="heart-icon" src="../images/favorite_border.svg" alt="heart icon unchosen">              </label>
          </div>
          <img class="recipe-card-img" src="${recipe.image}" alt="recipe image">
          <h2>${recipe.name}</h2>
        </section>
    `
    allRecipesView.innerHTML += miniRecipe;
  });
  addSwitchIconToRecipe();
}

function addSwitchIconToRecipe() {
  let userChoiceBtnGroup = document.querySelectorAll('div.icon-box');
  allRecipesView.addEventListener('click', switchCheckboxBtnImg);
}

function switchCheckboxBtnImg() {
  let checkButtonToCook = document.querySelectorAll('.chef-radio-button');
  let checkButtonToFav = document.querySelectorAll('.heart-radio-button');
  let favoriteImgDisabled = document.querySelectorAll('#heart-icon-disabled');
  let favoriteImgEnabled = document.querySelectorAll('#heart-icon-enabled');
  let chefImgEnabled = document.querySelectorAll('#chef-icon-enabled');
  let chefImgDisabled = document.querySelectorAll('#chef-icon-disabled');

  checkButtonToCook.forEach((cookIcon, i) => {
    (cookIcon.checked) ? (chefImgEnabled[i].classList.remove("hidden"), chefImgDisabled[i].classList.add("hidden"))
    :(chefImgEnabled[i].classList.add("hidden"),chefImgDisabled[i].classList.remove("hidden"));
  });

  checkButtonToFav.forEach((likeIcon, i) => {
    (likeIcon.checked) ? (favoriteImgEnabled[i].classList.remove("hidden"), favoriteImgDisabled[i].classList.add("hidden"))
    :(favoriteImgEnabled[i].classList.add("hidden"),favoriteImgDisabled[i].classList.remove("hidden"));
  });
  currentUser.addRecipesToCook(checkButtonToCook);
  currentUser.addFavoriteRecipes(checkButtonToFav);
};

function displayPantryView() { //refactor if time!
  pantryView.classList.toggle('hidden');
  allRecipesView.classList.toggle('hidden');
  buttonPantry.classList.toggle('hidden');
  buttonAllRecipes.classList.toggle('hidden');
  pantryUserName.innerText = currentUser.name;
  diplayUserPantryIngredients();
}

function getTagOptions() {
  let tags = filterBox.tags.concat(filterBox.userTypes);
  filterBoxElement.innerHTML = '';
  tags.forEach(tag => {
    let miniTag =
    `
    <option value="${tag}">${tag}</option>
    `
    filterBoxElement.innerHTML += miniTag;
  });
}

function displayFilteredRecipes() {
  let tags = filterBox.tags.concat(filterBox.userTypes);
  let userChoice = document.querySelector(".filter-box").value;

  if(tags.includes(userChoice)) {
    let filteredRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(userChoice)
    })
    displayAllRecipes(filteredRecipes);
  }
  if(userChoice === filterBox.userTypes[0]) {
    displayAllRecipes(currentUser.favoriteRecipes);
  }
  if(userChoice === filterBox.userTypes[1]) {
    displayAllRecipes(currentUser.recipesToCook);
  }
}

function diplayUserPantryIngredients() {
  let ingredientNames = currentUser.pantry.getIngredientName(sampleIngredients);
  allPantry.innerHTML = '';
  ingredientNames.forEach(ingredientName => {
    let miniIndgredientBox =
    `
    <li class="pantry-ingredients">${ingredientName.name}<br>quantity: ${ingredientName.amount}</li>
    `
    allPantry.innerHTML += miniIndgredientBox;
  });
}
