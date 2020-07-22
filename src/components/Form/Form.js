import React, { useState } from "react";
import { Link } from "react-router-dom";
// Use uuid

export default function Form(props) {
  const defaultState = {
    recipeName: "",
    cookingTime: "",
    mealType: "",
    imageURL: "",
    ingredients: "",
    id: "",
  };

  const [formState, setFormState] = useState(defaultState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    props.submit(formState);
    setFormState(defaultState);
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Add a Recipe +</h2>
        <label className="reg-label" htmlFor="recipeName">
          Name Of Recipe
          <br />
          <input
            type="text"
            name="recipeName"
            value={formState.recipeName}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <br />
        <label className="reg-label" htmlFor="cookingTime">
          Estimated Cooking Time?
          <br />
          <select
            name="cookingTime"
            value={formState.cookingTime}
            onChange={(e) => handleChange(e)}
          >
            <option value="">--Select--</option>
            <option value="30mins">30 mins</option>
            <option value="45mins">45 mins</option>
            <option value="60mins">60 mins</option>
          </select>
        </label>

        <br />
        <br />

        {/* <label className="allergies-title">Allergies</label>
        <div className="allergies-wrapper">
          <div>
            <input type="checkbox" name="nuts" />
            <label htmlFor="nuts">Nuts</label>
          </div>
          <div>
            <input type="checkbox" name="shell-fish" />
            <label htmlFor="shell-fish">Shell Fish</label>
          </div>

          <div>
            <input type="checkbox" name="eggs" />
            <label htmlFor="eggs">Eggs</label>
          </div>

          <div>
            <input type="checkbox" name="soy" />
            <label htmlFor="soy">Soy</label>
          </div>

          <div>
            <input type="checkbox" name="milk" />
            <label htmlFor="milk">Milk</label>
          </div>

          <div>
            <input type="checkbox" name="wheat" />
            <label htmlFor="wheat">Wheat</label>
          </div>
        </div> */}
        <br />
        <br />
        <label className="reg-label" htmlFor="mealType">
          What type of meal is this?
          <br />
          <select
            name="mealType"
            value={formState.mealType}
            onChange={(e) => handleChange(e)}
          >
            <option value="">--Select--</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snack">Snack</option>
          </select>
        </label>
        <br />
        <br />
        <br />
        <br />
        <label className="reg-label" htmlFor="imageURL">
          Image of Meal
          <br />
          <input
            type="text"
            name="imageURL"
            value={formState.imageURL}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <br />
        <br />
        <br />
        <label className="reg-label" htmlFor="ingredients">
          Ingredients
          <br />
          <textarea
            name="ingredients"
            value={formState.ingredients}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <br />
        {/* useHistory.push() */}
        {/* <Link to="/"> */}
        <button>Create!</button>
        {/* </Link> */}

        <br />
        <br />
      </form>
    </div>
  );
}
