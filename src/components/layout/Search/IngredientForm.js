import React, { useState, useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";
import AutocompleteResults from "./AutocompleteResults";

import styles from "./SearchArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const {
  ingredientSearch,
  ingredientForm,
  ingredientSubmitBtn,
  autocompleteSearch,
  disabled,
} = styles;

const IngredientForm = () => {
  const [ingredientText, setIngredientText] = useState("");
  const { addIngredient, getAutocompleteResults, autocompleteResults } =
    useContext(RecipeContext);

  const onAddIngredient = (e) => {
    e.preventDefault();
    if (ingredientText.trim().length > 0) addIngredient(ingredientText);
    setIngredientText("");
  };

  const onFormChange = (e) => {
    setIngredientText(e.target.value);
    getAutocompleteResults(e.target.value);
  };

  return (
    <>
      <form
        className={ingredientForm}
        onSubmit={(e) => onAddIngredient(e)}
        autoComplete="off"
      >
        <input
          type="text"
          name="ingredient-search"
          className={`${ingredientSearch} ${
            autocompleteResults?.length > 0 ? autocompleteSearch : ""
          }`}
          placeholder="Search ingredients..."
          maxLength="50"
          value={ingredientText}
          onChange={onFormChange}
        />
        <button
          type="submit"
          className={`${ingredientSubmitBtn} ${
            ingredientText.trim().length === 0 ? disabled : ""
          }`}
          disabled={ingredientText.trim().length === 0}
        >
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>
      </form>
      <AutocompleteResults setIngredientText={setIngredientText} />
    </>
  );
};

export default IngredientForm;
