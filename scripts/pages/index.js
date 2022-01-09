const recipesBoxes = document.getElementById("recipes_boxes");
const search = document.getElementById("site-search");
const arrowBtn = document.querySelectorAll(".arrow");
const container = document.querySelectorAll(".container");
const ingredientInput = document.getElementById("ingrédients_input");
const ingredientList = document.getElementById("list_1");
const appareilList = document.getElementById("list_2");
const ustensilList = document.getElementById("list_3");

/**
 * Search bar event
 */

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

    const recipesFilter = recipes.filter(
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
    recipesDisplay(recipesFilter);
  } else {
    div.innerHTML = "";
    recipesDisplay(recipes);
  }
});

/**
 * create and display ingredient list in dropbox
 */
let ulIngredientList = document.createElement("ul");
ulIngredientList.id = "list_1";

container.forEach((container) => {
  const containerId = container.firstElementChild.id;

  if (containerId == "ingrédients") {
    container.appendChild(ulIngredientList);
  }
});

const array = [];

recipes.forEach((recipe) => {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    array.push(recipe.ingredients[i].ingredient.toLowerCase());
  }
});
let uniqueArray = [...new Set(array)];

uniqueArray.forEach(
  (arr) =>
    (ulIngredientList.innerHTML += `<li class="list_item" selected="false">${arr}</li>`)
);

/**
 * create and display Appareil list in dropbox
 */
let ulAppareilList = document.createElement("ul");
ulAppareilList.id = "list_2";

container.forEach((container) => {
  const containerId = container.firstElementChild.id;

  if (containerId == "appareils") {
    container.appendChild(ulAppareilList);
  }
});

const array2 = [];

recipes.forEach((recipe) => {
  array2.push(recipe.appliance.toLowerCase());
});

let uniqueArrayAppareil = [...new Set(array2)];

uniqueArrayAppareil.forEach(
  (arr) => (ulAppareilList.innerHTML += `<li class="list_item">${arr}</li>`)
);

/**
 * create and display Ustensiles list in dropbox
 */

let ulUstensilList = document.createElement("ul");
ulUstensilList.id = "list_3";

container.forEach((container) => {
  const containerId = container.firstElementChild.id;

  if (containerId == "ustensiles") {
    container.appendChild(ulUstensilList);
  }
});

const array3 = [];

recipes.forEach((recipe) => {
  for (let i = 0; i < recipe.ustensils.length; i++) {
    array3.push(recipe.ustensils[i].toLowerCase());
  }
});

let uniqueArrayUstensils = [...new Set(array3)];

uniqueArrayUstensils.forEach(
  (arr) => (ulUstensilList.innerHTML += `<li class="list_item">${arr}</li>`)
);

/**
 * Arrow button event
 */

arrowBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const clickedBtn = button.getAttribute("clicked");
    button.setAttribute("clicked", "true");
    const buttonId = button.parentElement.firstElementChild.id;

    if (clickedBtn == "false") {
      if (buttonId === "ingrédients_input") {
        // ingredientInput.setAttribute("value", "Rechercher un ingrédient");
        ulIngredientList.classList.add("active");
        ulIngredientList.style.display = "flex";
        button.setAttribute("clicked", "true");
      }
      if (buttonId === "appareil_input") {
        ulAppareilList.style.display = "flex";
        ulAppareilList.classList.add("active");
        button.setAttribute("clicked", "true");
      }
      if (buttonId === "ustensile_input") {
        ulUstensilList.style.display = "flex";
        ulUstensilList.classList.add("active");
        button.setAttribute("clicked", "true");
      }
    } else if (clickedBtn == "true") {
      ulIngredientList.style.display = "none";
      ingredientInput.setAttribute("value", "Ingredients");
      ulAppareilList.style.display = "none";
      ulUstensilList.style.display = "none";
      button.setAttribute("clicked", "false");
    }
  });
});

/**
 * Display keyword from item selected in the list
 */

const listItem = document.querySelectorAll(".list_item");
const divKeyword = document.getElementById("div_keyword");
const keyword = document.getElementById("keyword");

listItem.forEach((item) => {
  item.addEventListener("click", function () {
    const itemClicked = item.innerHTML;
    divKeyword.classList.toggle("hide");
    keyword.innerHTML = itemClicked;

    const parentList = item.attributes[0].ownerElement.parentElement.id;

    if (parentList == "list_1") {
      divKeyword.style.background = "rgb(50 130 247)";
    }
    if (parentList == "list_2") {
      divKeyword.style.background = "#68d9a4";
    } else if (parentList == "list_3") {
      divKeyword.style.background = "#ed6454";
    }
  });
});

//close button

const closeButton = document.getElementById("close");

closeButton.addEventListener("click", function () {
  divKeyword.classList.toggle("hide");
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
  recipesDisplay(recipes);
};

init();
