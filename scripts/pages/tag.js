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
        console.log(tag);
        recipesArray = recipesArray.filter((recipe) => {
          return (
            recipe.ingredients
              .map((ingredients) => ingredients.ingredient.toLowerCase())
              .includes(tag) ||
            recipe.appliance.includes(tag) ||
            recipe.ustensils
              .map((ustensils) => ustensils.toLowerCase())
              .includes(tag)
          );
        });
      });

      //afficher tableau

      recipesDisplay(recipesArray);
      displayIngredientList(recipesArray);
      displayAppareilList(recipesArray);
      displayUstensilsList(recipesArray);
    });
  });
}

/**
 * Display tags from item selected in the ingredient list
 * Filter recipes depending on the tag clicked
 * Filter ingredient list
 */

const tag = document.getElementById("tag");

function addEventIngredientList() {
  const listIngredient = document.getElementById("list_1");
 

  listIngredient.addEventListener("click", function (e) {
    console.log(recipesArray);
    itemClicked = e.target.innerHTML;

    tag.innerHTML += `<div class="classTag ingredientColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

    //filter array with recipes including the clicked item
    recipesArray = recipesArray.filter((recipe) =>
      recipe.ingredients
        .map((ingredients) => ingredients.ingredient.toLowerCase())
        .includes(itemClicked)
    );
    console.log(recipesArray);
    div.innerHTML = "";
    recipesDisplay(recipesArray);

    //display ingredient/appareil/ustensile List from recipes that include the itemclicked
    ulIngredientList.innerHTML = "";
    displayIngredientList(recipesArray);
    ulAppareilList.innerHTML = "";
    displayAppareilList(recipesArray);
    ulUstensilList.innerHTML = "";
    displayUstensilsList(recipesArray);


    //close tag
    closeTag();
  });
}

/**
 * Display tags from item selected in the appareil list
 */

function addEventAppareilList() {
  const listAppareil = document.getElementById("list_2");

  listAppareil.addEventListener("click", function (e) {
    itemClicked = e.target.innerHTML;

    tag.classList.toggle("hide");
    tag.innerHTML += `<div class="classTag appareilColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

    //filter array with recipes including the clicked item
    recipesArray = recipesArray.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(itemClicked)
    );
    console.log(recipesArray);
    div.innerHTML = "";
    recipesDisplay(recipesArray);

    //display ingredient/appareil/ustensile List from recipes that include the itemclicked
    ulIngredientList.innerHTML = "";
    displayIngredientList(recipesArray);
    ulAppareilList.innerHTML = "";
    displayAppareilList(recipesArray);
    ulUstensilList.innerHTML = "";
    displayUstensilsList(recipesArray);

    //close tag
    closeTag();
  });
}

/**
 * Display tags from item selected in the ustensils list
 */

function addEventUstensilsList() {
  const listUstensil = document.getElementById("list_3");

  listUstensil.addEventListener("click", function (e) {
    itemClicked = e.target.innerHTML;

    tag.classList.toggle("hide");
    tag.innerHTML += `<div class="classTag ustensilColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;

    // filter array with recipes including the clicked item
    recipesArray = recipesArray.filter((recipe) =>
      recipe.ustensils
        .map((ustensil) => ustensil.toLowerCase())
        .includes(itemClicked)
    );

    console.log(recipesArray);
    div.innerHTML = "";
    recipesDisplay(recipesArray);

    //display ingredient/appareil/ustensile List from recipes that include the itemclicked
    ulIngredientList.innerHTML = "";
    displayIngredientList(recipesArray);
    ulAppareilList.innerHTML = "";
    displayAppareilList(recipesArray);
    ulUstensilList.innerHTML = "";
    displayUstensilsList(recipesArray);

    //close tag
    closeTag();
  });
}

/**
 * Display ingredient searched in the dropbox search bar
 */

function ingredientSearch() {
  const ingredientSearchBar = document.getElementById("ingrédients_input");

  ingredientSearchBar.addEventListener("keyup", function (e) {
    const searchString = e.target.value;

    if (searchString.length >= 3) {
      ingredientArray = ingredientArray.filter((arr) =>
        arr.includes(searchString.toLowerCase())
      );

      ulIngredientList.innerHTML = "";
      ingredientArray.forEach(
        (array) =>
          (ulIngredientList.innerHTML += `<li class="list_ingredient">${array}</li>`)
      );
      console.log(recipesArray);
      console.log(ingredientArray);
    } else {
      ulIngredientList.innerHTML = "";
      displayIngredientList(recipes);
    }
  });
}

/**
 * Display appareil searched
 */

function appareilSearch() {
  const appareilSearchBar = document.getElementById("appareil_input");

  appareilSearchBar.addEventListener("keyup", function (e) {
    const searchString = e.target.value;
    if (searchString.length >= 3) {
      appareilArray = appareilArray.filter((arr) =>
        arr.includes(searchString.toLowerCase())
      );
      console.log(appareilArray);
      ulAppareilList.innerHTML = "";
      appareilArray.forEach(
        (array) =>
          (ulAppareilList.innerHTML += `<li class="list_appareil">${array}</li>`)
      );
    } else {
      ulAppareilList.innerHTML = "";
      displayAppareilList(recipes);
    }
  });
}
/**
 * Display ustensil searched
 */

function ustensilSearch() {
  const ustensilSearchBar = document.getElementById("ustensile_input");

  ustensilSearchBar.addEventListener("keyup", function (e) {
    const searchString = e.target.value;

    if (searchString.length >= 3) {
      ustensilArray = ustensilArray.filter((arr) =>
        arr.includes(searchString.toLowerCase())
      );

      ulUstensilList.innerHTML = "";
      ustensilArray.forEach(
        (array) =>
          (ulAppareilList.innerHTML += `<li class="list_ustensil">${array}</li>`)
      );
    } else {
      ulUstensilList.innerHTML = "";
      displayUstensilsList(recipes);
    }
  });
}
