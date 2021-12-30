const recipesBoxes = document.getElementById("recipes_boxes");
const search = document.getElementById("site-search");

/**
 * Search bar event
 */

search.addEventListener("keyup", function (e) {
  const searchString = e.target.value;

  const recipesFilter = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchString.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchString.toLowerCase()) ||
      recipe.ingredients.forEach((ingredients) =>
        ingredients.ingredient
          .toLowerCase()
          .includes(searchString.toLowerCase())
      )
  );
  div.innerHTML = "";
  recipesDisplay(recipesFilter);

  // if (searchString.length >= 3) {
  //
  // }
});

/**
 * Display photographers on html
 */
let div = document.createElement("div");
div.id = "boxes";

let recipesDisplay = (recipes) => {
  recipes.forEach((recipes) => {
    let recipesModel = new Recipes(recipes);
    recipesBoxes.appendChild(div);
    div.innerHTML += recipesModel.createHtml();
  });
};

const init = async () => {
  recipesDisplay(recipes);
};

init();
