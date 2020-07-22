import React from "react";

export default function RecipePage(props) {
  return (
    <div>
      <div>
        <img src={props.recipeObj.imageURL} alt="" />
        <div>
          <h1>{props.recipeObj.recipeName}</h1>
          <p>Estimated Prep Time: {props.recipeObj.cookingTime}</p>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <p>{props.recipeObj.ingredients}</p>
      </div>
    </div>
  );
}
