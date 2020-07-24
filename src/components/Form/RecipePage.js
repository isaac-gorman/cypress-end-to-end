import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

export default function RecipePage({ recipe }) {
  // const [recipe, setRecipe] = useState();

  const params = useParams();
  console.log("I am params", params);
  console.log("I am params id", params.id);

  const recipes = recipe.find((item) => item.id == params.id);
  console.log("I am params recipe", recipe);
  console.log("I am params Recipes", recipes);

  // const { imageURL, recipeName, cookingTime, ingredients } = recipe;
  return (
    <div>
      <div>
        <img src={recipes.imageURL} alt="" />
        <div>
          <h1>{recipes.recipeName}</h1>
          <p>Estimated Prep Time: {recipes.cookingTime}</p>
          <p>Allergies: {recipes.allergies}</p>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <p>{recipes.ingredients}</p>
      </div>
    </div>
  );
}
