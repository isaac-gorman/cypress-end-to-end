import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  return (
    <Link to="/recipe-page">
      {" "}
      <div>
        <h1>{props.recipeObj.mealType}</h1>
        <div>
          <img
            style={{ width: "40%" }}
            src={props.recipeObj.imageURL}
            alt={props.recipeObj.recipeName}
          />
          <p>{props.recipeObj.recipeName}</p>
          <p>{props.recipeObj.cookingTime}</p>
        </div>
      </div>
    </Link>
  );
}
