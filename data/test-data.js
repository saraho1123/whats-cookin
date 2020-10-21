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
      "dinner",
      "starter",
    ]
  }
];

const sampleIngredients = [{
    "id": 1,
    "name": "pumpkin",
    "estimatedCostInCents": 142
  },
  {
    "id": 2,
    "name": "egg nog",
    "estimatedCostInCents": 582
  },
  {
    "id": 3,
    "name": "cinnamon",
    "estimatedCostInCents": 472
  },
  {
    "id": 4,
    "name": "nutmeg",
    "estimatedCostInCents": 582
  },
  {
    "id": 5,
    "name": "fall leaves",
    "estimatedCostInCents": 472
  },
  {
    "id": 6,
    "name": "apple cider",
    "estimatedCostInCents": 472
  }
];

let sampleUsers = [
  {
    "name": "Witch",
    "id": 10,
    "pantry": [
      {
        "ingredient": 1,
        "amount": 4
      },
      {
        "ingredient": 2,
        "amount": 3
      },
      {
        "ingredient": 3,
        "amount": 2
      },
    ]
  },
  {
    "name": "Scare Crow",
    "id": 11,
    "pantry": [
      {
        "ingredient": 4,
        "amount": 6
      },
      {
        "ingredient": 5,
        "amount": 10
      },
      {
        "ingredient": 6,
        "amount": 7
      },
    ]
  }
];


// module.exports = {
//  sampleRecipes,
//  sampleIngredients,
//  sampleUsers
//  }
