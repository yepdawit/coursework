/* _______*********__________ */
//first thing we want to interact with our API
// we want to make a request to the server

const recipesContainer = document.querySelector(".recipes-container");
const newRecipeFormContainer = document.querySelector(".new-recipe-form");

// we are gonna use fetch to make a request to the server
// fetch is a function that takes one argument, the url
// fetch returns a promise
const API_URL = "https://fsa-async-await.herokuapp.com/api/demo/recipes";

async function fetchAllRecipes() {
  try {
    const response = await fetch(API_URL);
    console.log(response);
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

    const response = await fetch(`${API_URL}/${id}`, { mode: "no-cors" });

    const recipe = await response.json();
    return recipe;
  } catch (error) {
    console.error("there was an error fetching the recipe", error);
  }
}

fetchSingleRecipe();
