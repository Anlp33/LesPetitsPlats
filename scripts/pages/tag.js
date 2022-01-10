/**
 * Display tags from item selected in the list
 */

function displayTags() {
    const listItem = document.querySelectorAll(".list_item");
    const tag = document.getElementById("tag");
    console.log(listItem)

    listItem.forEach((item) => {
        console.log(item);
        item.addEventListener("click", function () {
            const itemClicked = item.innerHTML;
            console.log(itemClicked);

            tag.classList.toggle("hide");
            tag.innerHTML += `<div class="classTag ingredientColor">${itemClicked}<i class="far fa-times-circle"></i></div>`;


            //close tag
            const classTag = document.querySelectorAll(".classTag");

            classTag.forEach((tag) => {
                tag.addEventListener("click", function () {
                    tag.classList.toggle("hide");
                });
            });

      
            // recipesArray = recipesArray.filter(
            //   (recipe) =>
            //     recipe.ingredients
            //       .map((ingredients) => ingredients.ingredient.toLowerCase())
            //       .includes(itemClicked)
            //   );
            //   console.log(recipesArray);
        });
    });
};   
