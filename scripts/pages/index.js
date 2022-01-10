const recipesBoxes = document.getElementById("recipes_boxes");
const search = document.getElementById("site-search");

/**
 * Search bar event
 */

let recipesArray = [];

search.addEventListener("keyup", function (e) {
  const searchString = e.target.value;
  // let recipesFilter = [];

  if (searchString.length >= 3) {
    //code block 1
    // for (let i = 0; i < recipes.length; i++) {
    //   let includesName = recipes[i].name
    //     .toLowerCase()
    //     .includes(searchString.toLowerCase());

    //   let includesDescription = recipes[i].description
    //     .toLowerCase()
    //     .includes(searchString.toLowerCase());

    //   let includesIngredient = recipes[i].ingredients.some((ingredients) =>
    //     ingredients.ingredient
    //       .toLowerCase()
    //       .includes(searchString.toLowerCase())
    //   );

    //   if (
    //     (includesName || includesDescription || includesIngredient) === true
    //   ) {
    //     recipesFilter.push(recipes[i]);
    //   }
    // }

    //code block 2

    recipesArray = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchString.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchString.toLowerCase()) ||
        recipe.ingredients.some((ingredients) =>
          ingredients.ingredient
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )
    );
    div.innerHTML = "";
    recipesDisplay(recipesArray);
  } else {
    div.innerHTML = "";
    recipesDisplay(recipes);
  }
});

/**
 * Display recipes on html
 */
let div = document.createElement("div");
div.id = "boxes";

let recipesDisplay = (recipes) => {
  recipes.forEach((recipe) => {
    let recipesModel = new Recipe(recipe);
    recipesBoxes.appendChild(div);
    div.innerHTML += recipesModel.createHtml();
  });
};

const init = async () => {
  recipesArray = recipes;
  recipesDisplay(recipes);
  displayIngredientList(recipesArray);
  displayAppareilList(recipesArray);
  displayUstensilesList(recipesArray);
  displayTags();
};

init();
