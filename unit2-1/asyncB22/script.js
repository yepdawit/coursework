/* _______*********__________ */
//first thing we want to interact with our API
// we want to make a request to the server

const recipesContainer = document.querySelector(".recipes-container");
const newRecipeFormContainer = document.querySelector(".new-recipe-form");

// we are gonna use fetch to make a request to the server
// fetch is a function that takes one argument, the url
// fetch returns a promise

// API_URL GOOD IF WRITEN IN CAPITAL LETTERS IT IS A CONSTANT VARIABLE.
const API_URL = "https://fsa-async-await.herokuapp.com/api/demo/recipes";

// fetchAllRecipes();

async function fetchAllRecipes() {
  try {
    //fetch response object from our API
    const response = await fetch(API_URL);
    console.log(response);
    // convert our json response to a js object
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error("there was an error fetching the recipes", error);
  }
}
//fetch a single recipe
async function fetchSingleRecipe(id) {
  try {
    // const response = await fetch(`${API_URL}/${id}`);

    const response = await fetch(`${API_URL}/${id}`);

    const recipe = await response.json();
    return recipe;
  } catch (error) {
    console.error("There was an error /Get recipe", error);
  }
}

//

// fetchAllRecipes();

// create a new recipe
const CreateNewRecipe = async (title, image_url, instructions) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST", // we are telling the server that we are sending json data
      headers: {
        "Content-Type": "application/json", // we are telling the server that we are sending json data
      },
      body: JSON.stringify({ title, image_url, instructions }), //
    });
    const newRecipe = await response.json();
    return newRecipe;
  } catch (error) {
    console.error("There was an error creating a new recipe", error);
  }
};

CreateNewRecipe(
  "steak",
  "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg",
  "slowly cook it"
);

//remove a recipe
const removeRecipe = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const deletedRecipe = await response.json(); // this will let us see the deleted recipe
    return deletedRecipe;
  } catch (error) {
    console.error("There was an error deleting the recipe", error);
  }
};

//lets create a new recipe form

const CreateNewRecipeForm = () => {
  const formHtml = `
    <form class="new-recipe-form">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" />
      <label for="image_url">Image URL</label>
      <input type="text" name="image_url" id="image_url" />
      <label for="instructions">Instructions</label>
      <textarea name="instructions" id="instructions"></textarea>
      <input type="submit" value="Create Recipe" />
    </form>
  `;
  new RecipeFormContainer.innerHTML = formHtml;

  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {event.preventDefault();// this will prevent the page from refreshing

    let recipeData = {
      title: form.title.value,
      image_url: form.image_url.value,
      instructions: form.instructions.value,



};

CreateNewRecipe(recipeData.title, recipeData.image_url, recipeData.instructions);

// fetchAllRecipes();

const recipe = await fetchAllRecipes();
// renderAllRecipes(recipe);

form.title.value = "";
form.image_url.value = "";
form.instructions.value = "";// this will clear the form after we submit it




  });
};

const renderAllRecipes = async () => 
{

  const init = async () => {
    const recipes = await fetchAllRecipes();
    renderAllRecipes(recipes);

    CreateNewRecipeForm();
  
};

// update a recipe
const updateRecipe = () => {};












//-----------------------

// clone repo
/* 
bunch of issues in there
try to fix them to get the code working

const recipeElement = document.createElement("div");
recipeElement.classList.add("recipe-card");
recipeElement.innerHTML = `
  <h2>${recipe.title}</h2>
  <img src="${recipe.image_url}" alt="${recipe.title}" />
  <p>${recipe.instructions}</p>
  <button class="delete-recipe">Delete</button>
`;
recipesContainer.appendChild(recipeElement);
let deleteButton = recipeElement.querySelector(".delete-recipe");
deleteButton.addEventListener("click", async () => {
  await removeRecipe(recipe.id);
  recipeElement.remove();
});



*/

