// Next construct form validation...
// [x] - Import yup to construct the validation schema
// [x] - Create the yup validation schema and define each requirement
// [x] - Create a function that excutes to check user inputs against the validation schema. Use:
// [x] - -  e.presist()
// [x] - -  .reach() to reach into the formSchema, and pass it the values of each name attribute of the form inputs.
// [x] - Disable the button till all the requirments of the validation schema are meet.
// [] - use useEffect to preform a side effect to undisable the submit button once the users input passes the validation schema. To do this I must synchronize with formStates values.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import * as yup from "yup";

export default function Form(props) {
  const defaultState = {
    recipeName: "",
    cookingTime: "",
    allergies: "",
    mealType: "",
    imageURL: "",
    ingredients: "",
    id: uuid(),
  };

  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    recipeName: yup
      .string()
      .min(4, "Please provide a name for your recipe")
      .required("Please provide a name for your recipe"),
    cookingTime: yup.string(),
    allergies: yup.string(),
    mealType: yup.string(),
    imageURL: yup
      .string()
      .min(10, "Please provide an image URL of your recipe")
      .required("Please provide an image URL of your recipe"),
    ingredients: yup
      .string()
      .min(15, "Please provide ingredients for your recipe")
      .required("Please provide ingredients for your recipe"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setButtonDisabled(!valid));
  }, [formSchema, formState]);

  function validateChange(e) {
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    validateChange(e);
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
            data-cy="recipeName"
            type="text"
            name="recipeName"
            value={formState.recipeName}
            onChange={(e) => handleChange(e)}
          />
          {errors.recipeName.length > 0 ? (
            <p style={{ color: "red", fontSize: ".55em" }}>
              {errors.recipeName}
            </p>
          ) : null}
        </label>
        <br />
        <br />
        <label className="reg-label" htmlFor="cookingTime">
          Estimated Cooking Time?
          <br />
          <select
            data-cy="cookingTime"
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

        <label className="allergies-title">Allergies</label>
        <div className="allergies-wrapper">
          <div>
            <input
              data-cy="nuts"
              type="checkbox"
              name="nuts"
              value={formState.allergies}
            />
            <label htmlFor="nuts">Nuts</label>
          </div>
          <div>
            <input
              data-cy="shell-fish"
              type="checkbox"
              name="shell-fish"
              value={formState.allergies}
            />
            <label htmlFor="shell-fish">Shell Fish</label>
          </div>

          <div>
            <input
              data-cy="eggs"
              type="checkbox"
              name="eggs"
              value={formState.allergies}
            />
            <label htmlFor="eggs">Eggs</label>
          </div>

          <div>
            <input
              data-cy="soy"
              type="checkbox"
              name="soy"
              value={formState.allergies}
            />
            <label htmlFor="soy">Soy</label>
          </div>

          <div>
            <input
              data-cy="soy"
              type="checkbox"
              name="milk"
              value={formState.allergies}
            />
            <label htmlFor="milk">Milk</label>
          </div>

          <div>
            <input
              data-cy="wheat"
              type="checkbox"
              name="wheat"
              value={formState.allergies}
            />
            <label htmlFor="wheat">Wheat</label>
          </div>
        </div>
        <br />
        <br />
        <label className="reg-label" htmlFor="mealType">
          What type of meal is this?
          <br />
          <select
            data-cy="mealType"
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
            data-cy="imageURL"
            type="text"
            name="imageURL"
            value={formState.imageURL}
            onChange={(e) => handleChange(e)}
          />
          {errors.imageURL.length > 0 ? (
            <p style={{ color: "red", fontSize: ".55em" }}>{errors.imageURL}</p>
          ) : null}
        </label>
        <br />
        <br />
        <br />
        <br />
        <label className="reg-label" htmlFor="ingredients">
          Ingredients
          <br />
          <textarea
            data-cy="ingredients"
            name="ingredients"
            value={formState.ingredients}
            onChange={(e) => handleChange(e)}
          />
          {errors.ingredients.length > 0 ? (
            <p style={{ color: "red", fontSize: ".55em" }}>
              {errors.ingredients}
            </p>
          ) : null}
        </label>
        <br />
        <br />
        {/* useHistory.push() */}
        {/* <Link to="/"> */}
        <button data-cy="create" disabled={buttonDisabled}>
          Create!
        </button>
        {/* </Link> */}

        <br />
        <br />
      </form>
    </div>
  );
}
