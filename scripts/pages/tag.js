function closeTag() {
  const classTag = document.querySelectorAll(".classTag");
  classTag.forEach((tag) => {
    tag.addEventListener("click", function () {
      tag.remove();
      div.innerHTML = "";
      ulIngredientList.innerHTML = "";
      ulAppareilList.innerHTML = "";
      ulUstensilList.innerHTML = "";

      //récupérer la liste des tags
      let tagArray = [];
      const currentTag = document.querySelectorAll(".classTag");

      currentTag.forEach((tag) => tagArray.push(tag.innerText));

      //CSS style
      if (currentTag.length === 0) {
        filters.style.top = "250px";
      }

      //faire la recherche principale en fonction de la barre de recherche
      const searchString = document.getElementById("site-search").value;

      if (searchString.length >= 3) {
        recipesArray = recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(searchString.toLowerCase()) ||
            recipe.description
              .toLowerCase()
              .includes(searchString.toLowerCase()) ||
            recipe.ingredients.some((ingredients) =>
              ingredients.ingredient
                .toLowerCase()
                .includes(searchString.toLowerCase())
            )
        );
      } else {
        recipesArray = recipes;
      }

      //faire la recherche avec les tags restants
      tagArray.forEach((tag) => {
        recipesArray = recipesArray.filter((recipe) => {
          return (
            recipe.ingredients
              .map((ingredients) => ingredients.ingredient.toLowerCase())
              .includes(tag) ||
            recipe.appliance.toLowerCase().includes(tag) ||
            recipe.ustensils
              .map((ustensils) => ustensils.toLowerCase())
              .includes(tag)
          );
        });
      });

      //afficher tableau

      recipesDisplay(recipesArray);
      displayList(recipesArray);
    });
  });
}

/**
 * Display tags from item selected in the ingredient list
 * Filter recipes depending on the tag clicked
 * Filter ingredient list
 */

const tag = document.getElementById("tag");

function displayList(recipesArray) {
  ulIngredientList.innerHTML = "";
  displayIngredientList(recipesArray);
  ulAppareilList.innerHTML = "";
  displayAppareilList(recipesArray);
  ulUstensilList.innerHTML = "";
  displayUstensilsList(recipesArray);
  addEventIngredientList();
  addEventAppareilList();
  addEventUstensilsList();
}
const filters = document.getElementById("filters");

function addEventIngredientList() {
  const itemIngredient = document.querySelectorAll(".list_item_Ingredients");

  itemIngredient.forEach((ingredient) => {
    ingredient.addEventListener("click", function (e) {
      filters.style.top = "295px";
      const ingredientSearchBar = document.getElementById("ingrédients_input");
      ingredientSearchBar.value = "";
      itemClicked = e.target.innerHTML;

      tag.innerHTML += `<div class="classTag ingredientColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

      //filter array with recipes including the clicked item
      recipesArray = recipesArray.filter((recipe) =>
        recipe.ingredients
          .map((ingredients) => ingredients.ingredient.toLowerCase())
          .includes(itemClicked)
      );
      div.innerHTML = "";
      recipesDisplay(recipesArray);

      //display ingredient/appareil/ustensile List from recipes that include the itemclicked
      displayList(recipesArray);

      //close tag
      closeTag();
    });
  });
}

/**
 * Display tags from item selected in the appareil list
 */

function addEventAppareilList() {
  const itemAppareil = document.querySelectorAll(".list_item_Appareils");
  itemAppareil.forEach((appareil) => {
    appareil.addEventListener("click", function (e) {
      filters.style.top = "295px";
      const appareilSearchBar = document.getElementById("appareil_input");
      appareilSearchBar.value = "";
      itemClicked = e.target.innerHTML;

      tag.classList.toggle("hide");
      tag.innerHTML += `<div class="classTag appareilColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

      //filter array with recipes including the clicked item
      recipesArray = recipesArray.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(itemClicked)
      );
      div.innerHTML = "";
      recipesDisplay(recipesArray);

      //display ingredient/appareil/ustensile List from recipes that include the itemclicked
      displayList(recipesArray);

      //close tag
      closeTag();
    });
  });
}

/**
 * Display tags from item selected in the ustensils list
 */

function addEventUstensilsList() {
  const itemUstensil = document.querySelectorAll(".list_item_Ustensils");
  itemUstensil.forEach((ustensil) => {
    ustensil.addEventListener("click", function (e) {
      filters.style.top = "295px";
      const ustensilSearchBar = document.getElementById("ustensile_input");
      ustensilSearchBar.value = "";
      itemClicked = e.target.innerHTML;
      tag.classList.toggle("hide");
      tag.innerHTML += `<div class="classTag ustensilColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

      // filter array with recipes including the clicked item
      recipesArray = recipesArray.filter((recipe) =>
        recipe.ustensils
          .map((ustensil) => ustensil.toLowerCase())
          .includes(itemClicked)
      );
      div.innerHTML = "";
      recipesDisplay(recipesArray);

      //display ingredient/appareil/ustensile List from recipes that include the itemclicked
      displayList(recipesArray);

      //close tag
      closeTag();
    });
  });
}

/**
 * Display ingredient searched in the dropbox search bar
 */

function ingredientSearch() {
  const ingredientSearchBar = document.getElementById("ingrédients_input");

  ingredientSearchBar.addEventListener("keyup", function (e) {
    const itemIngredient = document.querySelectorAll(".list_item_Ingredients");
    const searchString = e.target.value;

    itemIngredient.forEach((ingredient) => {
      if (ingredient.innerHTML.toLowerCase().includes(searchString)) {
        ingredient.style.display = "block";
      } else {
        ingredient.style.display = "none";
      }
    });
  });
}

/**
 * Display appareil searched
 */

function appareilSearch() {
  const appareilSearchBar = document.getElementById("appareil_input");

  appareilSearchBar.addEventListener("keyup", function (e) {
    const itemAppareil = document.querySelectorAll(".list_item_Appareils");
    const searchString = e.target.value;

    itemAppareil.forEach((appareil) => {
      if (appareil.innerHTML.toLowerCase().includes(searchString)) {
        appareil.style.display = "block";
      } else {
        appareil.style.display = "none";
      }
    });
  });
}
/**
 * Display ustensil searched
 */

function ustensilSearch() {
  const ustensilSearchBar = document.getElementById("ustensile_input");

  ustensilSearchBar.addEventListener("keyup", function (e) {
    const searchString = e.target.value;
    const itemUstensil = document.querySelectorAll(".list_item_Ustensils");

    itemUstensil.forEach((ustensil) => {
      if (ustensil.innerHTML.toLowerCase().includes(searchString)) {
        ustensil.style.display = "block";
      } else {
        ustensil.style.display = "none";
      }
    });
  });
}
