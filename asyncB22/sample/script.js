// we are gonna get all elements bu theier class or id name
// lets name it recipesContainer
const recipesContainer = document.getElementById("recipes-Container");
const newRecipeFormContainer = document.getElementById(
  "new-recipe-form-container"
);

//if we console.log we can see the element
console.log("newRecipesContainer", newRecipeFormContainer);

// we are gonna need our api url to get the data

//api url
const API_URL = "https://fsa-async-await.herokuapp.com/api/recipes";

//lets first get all our recipes
// we are gonna use async await because async await is the best way to get data from an api and we are gonna use fetch to get the data from the api
const fetchAllRecipes = async () => {
  // we are gonna use try catch to catch any error
  try {
    // we are gonna use await to wait for the data to be fetched
    const response = await fetch(API_URL);
    // we are gonna use await to wait for the data to be converted/parsed to json
    const data = await response.json();
    // we are gonna return the data
    return data;
  } catch (error) {
    // we are gonna return the error
    return error;
  }
};

//render - showing everything on the page/ browser window
const renderAllRecipes = (recipesList) => {
  //first check we wanna see if a recipe list exist or not
  // if not we wanna display a message no recipes found
  //lets use an array as an example
  if (!recipesList || recipesList === 0) {
    // we are gonna use innerHTML to display the message
    recipesContainer.innerHTML = `<h3>No Recipes Found</h3>`;
  }
  // we wanna reset it to empty string if we have recipes
  recipesContainer.innerHTML = "";

  // we are gonna use forEach to loop through the recipesList
  recipesList.forEach((recipe) => {
    // we are gonna create a div for each recipe
    const recipeElement = document.createElement("div"); // this will ley us create a div
    // we are gonna add a class to the div
    recipeElement.classList.add("recipe-card");
    //mow we wanna create a whiole bunch of html elements
    // we are gonna use innerHTML to create the html elements
    recipeElement.innerHTML = `
        h3>${recipe.name}</h3>
        img src="${recipe.image}" alt="${recipe.name}" />
        <p>${recipe.description}</p>
        <button class="delete-button" data-id="${recipe.id}">Delete</button>
        <button class="delete-button" data-id="${recipe.id}">See Details</button>
        `;
    // we are gonna append the recipeElement to the recipesContainer
    recipesContainer.appendChild(recipeElement); // this adds the recipeElement to the recipesContainer

    // we are gonna add an event listener to the delete button
    let backButton = recipeElement.querySelector(".back-button");
    backButton.addEventListener("click", async () => {
      const recipes = await fetchAllRecipes();
      renderAllRecipes(recipes);
    });
  });
};

const init = async () => {
  const recipesList = await fetchAllRecipes(); // we are gonna use await to wait for the data to be fetched
  renderAllRecipes(recipesList); //render the recipeList to the page
};
