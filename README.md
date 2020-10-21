# What's Cookin' - Turing Mod 2 Group Project

### [What's Cookin' Pages](https://saraho1123.github.io/whats-cookin/src/index.html)

### [Link To Our Repo](https://github.com/saraho1123/whats-cookin)

### [Link To Our Project Description](https://frontend.turing.io/projects/whats-cookin.html)

---
---

  <img style="width:600px" src="https://user-images.githubusercontent.com/62810592/96782297-d85cd100-13b2-11eb-9cd5-8f2e78fe5f48.png" alt="Sublime's custom image"/>

## Table of Contents

* [Project Overview](#project-overview)
* [Goals](#goals)
* [Technologies And Tools](#technologies-and-tools)
* [Challenges](#challenges)
* [Wins](#wins)
* [ScreenShots and Demos](#screenshots-and-demos)
* [Roadmap](#roadmap)
* [Credits](#credits)

## Project Overview

This project we created a recipe tracking/meal planning application. Our app's functionality included a user being able to: choosing and view their favorite recipes, choosing and viewing recipes to cook, filtering recipes by type, ingredients favorites and recipes to cook, as well as plan what items the user would need to buy (based on what ingredients the recipe calls for and what the user 'has' in their pantry).

## Goals

Our personal goals were to get better at sad path TDD, get a lot more comfortable with the array prototypes, and integrate what we’ve learned about JS so far. This was one of our first projects using TDD and ES6 JavaScript. We also wanted to work together in such a way that we would be willing to work together again!

## Technologies And Tools

* JavaScript (ES6)
* HTML
* CSS
* Adobe XD

## Challenges

Our first big challenge was deciding how many Classes to include. We started with three, increased to six and ended up with five. After getting into our project, we realized that having a way to 'clean up' and organize our data would have been helpful. Although we didn't get to it for this project, it was a big learning opportunity for the future! One thing we wish we had more time for was more TDD. Although we included it, we did not test for edge cases or for 'breaking' our code.

## Wins

We overcame some personal things while tackling this project. Although it definitely slowed us down, we are very proud of the work we were able to accomplish in such a short time!

We also made our app responsive, which was a fun win!

## ScreenShots and Demos

---

### Home view of recipes

---

![scrolling through all recipes](https://media.giphy.com/media/cMgU4VT0iXQytTRrFf/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

All recipes are genereted on load event. To display all recipes from the recipes.js data file we used `forEach` method to loop through the each recipe and created an html element:

```javaScript

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
```

</details>

---

### Single recipe view

---

![screenshot-single-recipe-view-1](https://media.giphy.com/media/CczV0CEcxPfdvJoqyQ/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

A single recipe view dipslay individual recipe with the following information:

* Image
* Total cost of all ingredients
* Ingredients names and the amount
* Directions

All information is easlily pulled by accessing the Recipe instace. Each recipe has the following strcuture:

```javaScript

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id,
    this.image = image,
    this.ingredients = ingredients,
    this.instructions = instructions,
    this.name = name,
    this.tags = tags
  };

```

Knowing the recipe the total cost can be easily calculated using created methods inside the recipe class `calculateTotalCost(basket)` where 'basket' is the array of all the ingredients.

</details>

---

### Pantry view of the user's available ingredients for cooking:

---

![screenshot-pantry-view](https://user-images.githubusercontent.com/62810592/96782337-dabf2b00-13b2-11eb-96ba-6b40197e03ef.png)


<details>
  <summary>**Under the Hood**</summary>

When user clicks on a pantry button, the website takes the user to the pantry where all user's ingredients are displayed showing the names and the available amount.

```javaScript

class Pantry {
  constructor(userId, userPantry) {
    this.id = userId;
    this.pantry = userPantry;
    this.neededIngredients = [];
  }

```

Pantry has several methods that allow to determine the amount of ingredients left after cooking the recipes, however, these methods are not currently available. In the future we are planning to add this feature to our website so the users can see how many ingredients they have left and how many they need to buy in order to cook the chosen recipes.

</details>

---

## Roadmap

* Add a feature to see how many ingredients are left after cooking a recipe
* Ability to have a wallet that shows the amount users would like to spend
* Have an opportunity to create a personal account to store all favorite and ready to cook recipes

## Credits

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />\

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)

<img src="https://avatars0.githubusercontent.com/u/62810592?s=400&u=a28506c68a6b2869116ba071955e03f2f86a9f54&v=4" alt="Sarah Osgood"
 width="150" height="auto" />\

**Sarah Osgood**
[GitHub Profile](https://github.com/saraho1123)
