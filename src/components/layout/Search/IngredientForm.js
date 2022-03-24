import React, { useState, useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";

import styles from "./SearchArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const { ingredientSearch, ingredientForm, ingredientSubmitBtn, disabled } =
  styles;

const IngredientForm = () => {
  const [ingredientText, setIngredientText] = useState("");
  const { addIngredient } = useContext(RecipeContext);

  const onAddIngredient = (e) => {
    e.preventDefault();
    addIngredient(ingredientText);
    setIngredientText("");
  };

  return (
    <form
      className={ingredientForm}
      onSubmit={(e) => onAddIngredient(e)}
      autoComplete="off"
    >
      <input
        type="text"
        name="ingredient-search"
        className={ingredientSearch}
        placeholder="Search ingraedeients..."
        value={ingredientText}
        onChange={(e) => setIngredientText(e.target.value)}
      />
      <button
        type="submit"
        className={`${ingredientSubmitBtn} ${
          ingredientText === "" ? disabled : ""
        }`}
        disabled={ingredientText === ""}
      >
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
    </form>
  );
};

export default IngredientForm;
