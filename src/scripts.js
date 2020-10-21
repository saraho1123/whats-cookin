// -------------TEST_DATA-----------------------
// const prototypeRecipes = sampleRecipes;
// const prototypeUsers = sampleUsers;
// const prototypeIngredients = sampleIngredients;

const recipesData = recipeData;
const ingredientsInfo = ingredientsData;
const usersInfo = usersData;

let userName = document.querySelector('#user-name');
let allRecipesView = document.querySelector('.all-recipes');
let pantryView = document.querySelector('.pantry');
let singleRecipeView = document.querySelector('.single-recipe');
let allPantry = document.querySelector('.ingredients');
let pantryIngredient = document.querySelector('.pantry-ingredients');
let pantryUserName = document.querySelector('#pantry-user-name');
let searchBoxElement = document.querySelector('.search-box');
let filterBoxElement = document.querySelector('.filter-box');
let userChoiceBtnGroup = document.querySelector('.icon-box');
let filterButton = document.querySelector('.filter-button');
let searchButton = document.querySelector('.search-button');
let buttonPantry = document.querySelector('.pantry-button');
let buttonAllRecipes = document.querySelector('.all-recipes-button');

let basketOfIngredients = [];
let allRecipesInfo = [];
let currentUser;
let recipesTags = [];
let recipesTypes = [];

//EVENT LISTENERS
window.addEventListener('load', displayTheUser);
buttonPantry.addEventListener('click', displayPantryView);
buttonAllRecipes.addEventListener('click', () => {
  displayAllRecipesView();
  displayAllRecipes(allRecipesInfo);
})
;
filterButton.addEventListener('click', displayFilteredRecipes);
searchButton.addEventListener('click', displaySearchRecipes);
allRecipesView.addEventListener('click', switchToSingleRecipeView);

let filterBox = {
  userTypes: ['Favorite Recipes', 'Recipe To Cook'],
  ingredients: getAllIngredients(ingredientsInfo)
}
//FUNCTIONS
function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]
}

function displayTheUser() {
  const randomUser = getRandomUser(usersInfo);
  currentUser = new User(randomUser.name, randomUser.id, randomUser.pantry);
  userName.innerText = currentUser.name;
  createRecipeBox();
  displayAllRecipes(allRecipesInfo);
  createIngredientCart();
  getTagOptions();
  getSearchOptions();
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

function getAllIngredients(ingredients) {
  return ingredients.map(ingredient => {
    return ingredient.name;
  })
}

function getIngredientsId(ingredientName) {
  let pickedIngredient = ingredientsInfo.find(ingredient => {
    return ingredient.name === ingredientName;
  })
  return pickedIngredient.id;
}

function getIngredientsName(ingredientId) {
  let pickedIngredient = ingredientsInfo.find(ingredient => {
    return ingredient.id === ingredientId;
  })
  return pickedIngredient.name;
}

function displaySearchRecipes() {
  let userChoice = document.querySelector(".search-box").value;
  let ingredientId = getIngredientsId(userChoice);

  let searchedBox = allRecipesInfo.reduce((acc, recipe) => {
    recipe.ingredients.forEach(ingredient => {
      console.log(ingredient)
      if(ingredient.id === ingredientId) {
        acc.push(recipe)
      }
    })
    return acc;
  }, [])
  displayAllRecipes(searchedBox);
}

function createIngredientCart() {
  return ingredientsInfo.map(ingredient => {
    basketOfIngredients.push(new Ingredient(
      ingredient.id,
      ingredient.name,
      ingredient.estimatedCostInCents,
    ));
  });
}

function createRecipeBox() {
  recipesData.forEach(recipe => {
    allRecipesInfo.push(new Recipe(
      recipe.id,
      recipe.image,
      recipe.ingredients,
      recipe.instructions,
      recipe.name,
      recipe.tags))
  })
  filterBox.tags = getAllRecipesTags(allRecipesInfo);
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
          <h2 id=${recipe.id}>${recipe.name}</h2>
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

function displayPantryView() { // Refactor if time!
  pantryView.classList.remove('hidden');
  singleRecipeView.classList.add('hidden');
  allRecipesView.classList.add('hidden');
  buttonPantry.classList.add('hidden');
  buttonAllRecipes.classList.remove('hidden');
  pantryUserName.innerText = currentUser.name;
  filterButton.classList.add('hidden');
  searchButton.classList.add('hidden');
  diplayUserPantryIngredients();
}

function displaySingleRecipeView(recipe) {
  singleRecipeView.classList.remove('hidden');
  buttonAllRecipes.classList.remove('hidden');
  pantryView.classList.add('hidden');
  allRecipesView.classList.add('hidden');
  filterButton.classList.add('hidden');
  searchButton.classList.add('hidden');
  displaySingleRecipe(recipe);
}

function displayAllRecipesView() {
  pantryView.classList.add('hidden');
  singleRecipeView.classList.add('hidden');
  allRecipesView.classList.remove('hidden');
  buttonPantry.classList.remove('hidden');
  buttonAllRecipes.classList.add('hidden');
  filterButton.classList.remove('hidden');
  searchButton.classList.remove('hidden');
}

function getTagOptions() {
  let tags = filterBox.tags;
  let filterBoxInfo = tags.concat(filterBox.userTypes);
  filterBoxElement.innerHTML = '';
  filterBoxInfo.forEach(tag => {
    let miniTag =
    `
    <option value="${tag}">${tag}</option>
    `
    filterBoxElement.innerHTML += miniTag;
  });
}

function getSearchOptions() {
  let ingredientsToSearch = filterBox.ingredients;
  searchBoxElement.innerHTML = '';
  ingredientsToSearch.forEach(ingredient => {
    let miniIngredient =
    `
    <option value="${ingredient}">${ingredient}</option>
    `
    searchBoxElement.innerHTML += miniIngredient;
  });
}

function displayFilteredRecipes() {
  let tags = filterBox.tags.concat(filterBox.userTypes);
  let userChoice = document.querySelector(".filter-box").value;

  if(tags.includes(userChoice)) {
    let filteredRecipes = allRecipesInfo.filter(recipe => {
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

function displaySingleRecipe(recipe) { // Refactor if time!
  let recipeTitle = document.querySelector(".recipe-title");
  let recipeImage = document.querySelector(".single-recipe-img");
  let recipeIngredientsList = document.querySelector("#list-of-ingredients");
  let recipeDirectionsList = document.querySelector("#recipe-directions");
  let recipeCost = document.querySelector("#recipe-price");

  recipeIngredientsList.innerHTML = "";
  recipeDirectionsList.innerHTML = "";

  recipeTitle.innerText = recipe.name;
  recipeImage.src = recipe.image;
  recipeCost.innerText = `$${recipe.calculateTotalCost(basketOfIngredients)}`;
  recipe.ingredients.forEach(ingredient => {
    let recipeIngredientName = getIngredientsName(ingredient.id)
    let miniRecipeIngredient =
    `<li>
      <span class="recipe-page-list-font">${recipeIngredientName}</span>
      <span class="recipe-page-list-font"> ${ingredient.quantity.amount}</span>
    </li>
    `
    recipeIngredientsList.innerHTML += miniRecipeIngredient;
  })

  recipe.instructions.forEach(direction => {
    let recipeDirectionsName = direction.instruction;
    let miniRecipeDirection =

    `<li>${recipeDirectionsName}</li>`

    recipeDirectionsList.innerHTML += miniRecipeDirection;
  })
}

function switchToSingleRecipeView() {
  // if(event.target.id) {
    let clickedRecipe = allRecipesInfo.find(recipe => {
      return recipe.id == event.target.id;
    })
    if(clickedRecipe) {
      displaySingleRecipeView(clickedRecipe);
    }
}


function diplayUserPantryIngredients() {
  let ingredientNames = currentUser.pantry.getIngredientName(basketOfIngredients);
  allPantry.innerHTML = '';
  ingredientNames.forEach(ingredientName => {
    let miniIndgredientBox =
    `
    <li class="pantry-ingredients">${ingredientName.name}<br>quantity: ${ingredientName.amount}</li>
    `
    allPantry.innerHTML += miniIndgredientBox;
  });
}
