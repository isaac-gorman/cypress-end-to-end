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
  console.log("I am the value of none: ", recipes.none);

  // const { imageURL, recipeName, cookingTime, ingredients } = recipe;

  const allergyValues = () => {
    if (recipes.none === true) {
      return "None";
    }
  };
  return (
    <div>
      <div>
        <img src={recipes.imageURL} alt="" />
        <div>
          <h1>{recipes.recipeName}</h1>
          <p>Estimated Prep Time: {recipes.cookingTime}</p>
          {/* {Object.values(recipes)} */}
          {/* {recipes.map()}
          <p>Allergies: </p> */}
          {/* <p>Allergies: {recipes.none}</p> */}
          <p>Allergies: {allergyValues()}</p>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <p>{recipes.ingredients}</p>
      </div>
    </div>
  );
}
