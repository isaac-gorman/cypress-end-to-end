import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  return (
    <div>
      {props.recipes.map((crrV) => {
        return (
          <div>
            <RecipeDetails key={crrV.id} recipe={crrV} linkId={crrV.id} />
          </div>
        );
      })}
    </div>
  );

  function RecipeDetails({ recipe }) {
    const { mealType, imageURL, recipeName, cookingTime } = recipe;
    return (
      <Link to={`recipe-page/${recipe.id}`}>
        {" "}
        <div>
          <h1>{mealType}</h1>
          <div>
            <img style={{ width: "40%" }} src={imageURL} alt={recipeName} />
            <p>{recipeName}</p>
            <p>{cookingTime}</p>
          </div>
        </div>
      </Link>
    );
  }

  // return (
  //   <Link to="/recipe-page">
  //     {" "}
  //     <div>
  //       <h1>{props.recipeObj.mealType}</h1>
  //       <div>
  //         <img
  //           style={{ width: "40%" }}
  //           src={props.recipeObj.imageURL}
  //           alt={props.recipeObj.recipeName}
  //         />
  //         <p>{props.recipeObj.recipeName}</p>
  //         <p>{props.recipeObj.cookingTime}</p>
  //       </div>
  //     </div>
  //   </Link>
  // );
}
