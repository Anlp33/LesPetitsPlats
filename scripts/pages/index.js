const recipesBoxes = document.getElementById("recipes_boxes");
const search = document.getElementById("site-search");
let recipesArray = [];

/**
 * Search bar event
 */

search.addEventListener("keyup", function (e) {
  const searchString = e.target.value;

  if (searchString.length >= 3) {
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

    const errorMessage = document.getElementById("error_message");

    if (document.querySelectorAll(".box").length === 0) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }

    // display ingredient/appareil/ustensil List from recipes that include the search string
    ulIngredientList.innerHTML = "";
    ulAppareilList.innerHTML = "";
    ulUstensilList.innerHTML = "";
    displayList(recipesArray);
  } else {
    div.innerHTML = "";
    recipesDisplay(recipes);
    ulIngredientList.innerHTML = "";
    ulAppareilList.innerHTML = "";
    ulUstensilList.innerHTML = "";
    displayList(recipes);
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
  displayIngredientList(recipes);
  displayAppareilList(recipes);
  displayUstensilsList(recipes);
  addEventIngredientList();
  addEventAppareilList();
  addEventUstensilsList();
  ingredientSearch();
  appareilSearch();
  ustensilSearch();
};

init();
