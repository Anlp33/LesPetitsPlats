const arrowBtn = document.querySelectorAll(".arrow");
const container = document.querySelectorAll(".container");
const ingredientInput = document.getElementById("ingrédients_input");
const ingredientList = document.getElementById("list_1");
const appareilList = document.getElementById("list_2");
const ustensilList = document.getElementById("list_3");

const ulIngredientList = document.createElement("ul");
ulIngredientList.id = "list_1";
const ulAppareilList = document.createElement("ul");
ulAppareilList.id = "list_2";
const ulUstensilList = document.createElement("ul");
ulUstensilList.id = "list_3";

container.forEach((container) => {
  const containerId = container.firstElementChild.id;

  if (containerId == "ingrédients") {
    container.appendChild(ulIngredientList);
  }
  if (containerId == "appareils") {
    container.appendChild(ulAppareilList);
  }
  if (containerId == "ustensiles") {
    container.appendChild(ulUstensilList);
  }
});

/**
 * create and display ingredient list in dropbox
 */

function displayIngredientList() {
  let array = [];
  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      array.push(recipe.ingredients[i].ingredient.toLowerCase());
    }
  });
  let uniqueArray = [...new Set(array)];

  uniqueArray
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    .forEach(
      (arr) =>
        (ulIngredientList.innerHTML += `<li class="list_item" selected="false">${arr}</li>`)
    );
}

/**
 * create and display Appareil list in dropbox
 */

function displayAppareilList() {
  let array = [];
  recipes.forEach((recipe) => {
    array.push(recipe.appliance.toLowerCase());
  });
  let uniqueArray = [...new Set(array)];
  uniqueArray
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    .forEach(
      (arr) => (ulAppareilList.innerHTML += `<li class="list_item">${arr}</li>`)
    );
}

/**
 * create and display Ustensiles list in dropbox
 */

function displayUstensilesList() {
  let array = [];
  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ustensils.length; i++) {
      array.push(recipe.ustensils[i].toLowerCase());
    }
  });
  let uniqueArray = [...new Set(array)];
  uniqueArray
    .sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    .forEach(
      (arr) => (ulUstensilList.innerHTML += `<li class="list_item">${arr}</li>`)
    );
}

/**
 * Open/close dropbox
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
