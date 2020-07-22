import React from "react";

export default function Form() {
  return (
    <div className="form-wrapper">
      <form className="form" action="">
        <h2>Add a Recipe +</h2>
        <label className="reg-label" htmlFor="recipe-name">
          Name Of Recipe
          <br />
          <input type="text" name="recipe-name" />
        </label>
        <br />
        <br />
        <label className="reg-label" htmlFor="time">
          Estimated Cooking Time?
          <br />
          <select>
            <option value="">--Select--</option>
            <option value="">30 mins</option>
            <option value="">45 mins</option>
            <option value="">60 mins</option>
          </select>
        </label>

        <br />
        <br />

        <label className="allergies-title">Allergies</label>
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
        </div>
        <br />
        <br />
        <label className="reg-label" htmlFor="time">
          What type of meal is this?
          <br />
          <select>
            <option value="">--Select--</option>
            <option value="">Breakfast</option>
            <option value="">Lunch</option>
            <option value="">Dinner</option>
          </select>
        </label>
        <br />
        <br />
        <br />
        <br />
        <label className="reg-label" htmlFor="time">
          Image of Meal
          <br />
          <input type="text" name="time" />
        </label>
        <br />
        <br />
        <br />
        <br />
        <label className="reg-label" htmlFor="time">
          Ingredients
          <br />
          <textarea name="ingredients" />
        </label>
        <br />
        <br />
      </form>
    </div>
  );
}
