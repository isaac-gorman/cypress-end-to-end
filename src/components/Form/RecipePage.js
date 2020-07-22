import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecipePage(props) {
  const [recipe, setRecipe] = useState();

  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`http://localhost:3000//recipe-page/${id}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const { imageURL, recipeName, cookingTime, ingredients } = recipe;
  return (
    <div>
      <div>
        <img src={imageURL} alt="" />
        <div>
          <h1>{recipeName}</h1>
          <p>Estimated Prep Time: {cookingTime}</p>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <p>{ingredients}</p>
      </div>
    </div>
  );
}
