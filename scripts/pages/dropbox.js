const arrowBtn = document.querySelectorAll(".arrow");
const container = document.querySelectorAll(".container");
const ingredientInput = document.getElementById("ingrédients_input");
const appareilInput = document.getElementById("appareil_input");
const ustensileInput = document.getElementById("ustensile_input");

const ulIngredientList = document.createElement("ul");
ulIngredientList.id = "list_ingredient";
const ulAppareilList = document.createElement("ul");
ulAppareilList.id = "list_appareil";
const ulUstensilList = document.createElement("ul");
ulUstensilList.id = "list_ustensil";

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

let ingredientArray = [];

function displayIngredientList(recipes) {
  let array = [];
  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      array.push(recipe.ingredients[i].ingredient.toLowerCase());
    }
  });

  ingredientArray = [...new Set(array)]; //this will remove duplicates
  ingredientArray
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
      (ingredient) =>
        (ulIngredientList.innerHTML += `<li class="list_item_Ingredients">${ingredient}</li>`)
    );
}

/**
 * create and display Appareil list in dropbox
 */
let appareilArray = [];

function displayAppareilList(recipes) {
  let array = [];
  recipes.forEach((recipe) => {
    array.push(recipe.appliance.toLowerCase());
  });
  appareilArray = [...new Set(array)]; //this will remove duplicates
  appareilArray
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
      (appareil) =>
        (ulAppareilList.innerHTML += `<li class="list_item_Appareils">${appareil}</li>`)
    );
}

// /**
//  * create and display Ustensiles list in dropbox
//  */

let ustensilArray = [];
function displayUstensilsList(recipes) {
  let array = [];
  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ustensils.length; i++) {
      array.push(recipe.ustensils[i].toLowerCase());
    }
  });
  ustensilArray = [...new Set(array)]; //this will remove duplicates

  ustensilArray
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
      (ustensil) =>
        (ulUstensilList.innerHTML += `<li class="list_item_Ustensils">${ustensil}</li>`)
    );
}

/**
 * Open/close dropbox
 */

const ingredientBtn = document.getElementById("ingredientBtn");
const appareilBtn = document.getElementById("appareilBtn");
const ustensilBtn = document.getElementById("ustensilBtn");

ingredientBtn.addEventListener("click", function () {
  if (ingredientBtn.value == "false") {
    ingredientInput.setAttribute("placeholder", "Recherche un ingrédient");
    ingredientInput.classList.add("originColor");
    ulIngredientList.classList.add("active");
    ulIngredientList.style.display = "flex";
    ingredientBtn.setAttribute("value", "true");
  } else {
    ingredientInput.setAttribute("placeholder", "Ingredients");
    ingredientInput.classList.replace("originColor", "white");
    ulIngredientList.style.display = "none";
    ingredientBtn.setAttribute("value", "false");
  }
});

appareilBtn.addEventListener("click", function () {
  if (appareilBtn.value == "false") {
    appareilInput.setAttribute("placeholder", "Recherche un appareil");
    appareilInput.classList.add("originColor");
    ulAppareilList.style.display = "flex";
    ulAppareilList.classList.add("active");
    appareilBtn.setAttribute("value", "true");
  } else {
    appareilInput.setAttribute("placeholder", "Appareil");
    appareilInput.classList.replace("originColor", "white");
    ulAppareilList.style.display = "none";
    appareilBtn.setAttribute("value", "false");
  }
});

ustensilBtn.addEventListener("click", function () {
  if (ustensilBtn.value == "false") {
    ustensileInput.setAttribute("placeholder", "Rechercher un ustensile");
    ustensileInput.classList.add("originColor");
    ulUstensilList.style.display = "flex";
    ulUstensilList.classList.add("active");
    ustensilBtn.setAttribute("value", "true");
  } else {
    ustensileInput.setAttribute("placeholder", "Ustensiles");
    ustensileInput.classList.replace("originColor", "white");
    ulUstensilList.style.display = "none";
    ustensilBtn.setAttribute("value", "false");
  }
});
