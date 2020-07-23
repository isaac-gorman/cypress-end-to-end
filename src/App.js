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
    setRecipeList(copyRecipeList);
    console.log("I am the recipesList", recipesList);
    console.log("I am the input", input);
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
      <Route exact path="/">
        <RecipeCard recipes={recipesList} />
      </Route>

      {/* {recipesList.map((recipeObj, index) => {
        return (
          <Route exact path="/">
            <RecipeCard key={index} recipeObj={recipeObj} />
          </Route>
        );
      })} */}

      <Route exact path="/recipe-page/:id">
        <RecipePage key={recipesList.id} recipe={recipesList} />
      </Route>
      {/* {recipesList.map((recipeObj, index) => {
        console.log("I am the recipe list passed to Recipe Page", recipesList);
        return (
          <Route exact path={`/recipe-page/:id`}>
            <RecipePage key={index} recipeObj={recipeObj} />
          </Route>
        );
      })} */}
    </div>
  );
}

// Import {useHistory } from "react-router-dom"
//
