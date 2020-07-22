import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
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
      <header>
        <ul>
          <Link to="/">My Recipes</Link>
          <Link to="/form">+ Add Recipe</Link>
        </ul>
      </header>
      <h1>Recipe App</h1>
      <Route path="/form">
        <Form submit={submit} />
      </Route>

      {recipesList.map((recipeObj, index) => {
        return (
          <Route exact path="/">
            <RecipeCard key={index} recipeObj={recipeObj} />
          </Route>
        );
      })}
      {recipesList.map((recipeObj, index) => {
        return (
          <Route exact path={`/recipe-page/:id`}>
            <RecipePage key={index} recipeObj={recipeObj} />
          </Route>
        );
      })}
    </div>
  );
}
