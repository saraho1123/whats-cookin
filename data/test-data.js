//recipes
const sampleRecipes = [{

    "id": 11111,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 1,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 2,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 3,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 4,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      },
    ],
    "instructions": [
      {
        "instruction": "Mix all ingredients.",
        "number": 1
      },
      {
        "instruction": "Cook it.",
        "number": 2
      },
    ],
    "name": "A bowl of Amazingness",
    "tags": [
      "antipasti",
      "starter",
    ]
  },
  {
    "id": 22222,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "id": 5,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 6,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Cut everything.",
        "number": 1
      },
      {
        "instruction": "Mix in a bowl.",
        "number": 2
      },
    ],
    "name": "Salad",
    "tags": [
      "antipasti",
      "starter",
    ]
  }
];

module.exports = {
  sampleRecipes
}
