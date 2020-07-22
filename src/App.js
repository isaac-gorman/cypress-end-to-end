import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import RecipeCard from "./components/Form/RecipeCard";
import RecipePage from "./components/Form/RecipePage";

export default function App() {
  const [recipesList, setRecipeList] = useState([]);

  const submit = (input) => {
    const copyRecipeList = [...recipesList];
    copyRecipeList.push(input);
    return setRecipeList(copyRecipeList);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <Form submit={submit} />
      {recipesList.map((recipeObj, index) => {
        return <RecipeCard key={index} recipeObj={recipeObj} />;
      })}
      {recipesList.map((recipeObj, index) => {
        return <RecipePage key={index} recipeObj={recipeObj} />;
      })}
    </div>
  );
}
