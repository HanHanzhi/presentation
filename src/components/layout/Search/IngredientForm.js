import React, { useState } from "react";

import styles from "./SearchArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const { ingredientSearch, ingredientForm, ingredientSubmitBtn, disabled } =
  styles;

const IngredientForm = ({ ingredientList, setIngredientList }) => {
  const [ingredientText, setIngredientText] = useState("");

  const onAddIngredient = (e) => {
    e.preventDefault();
    if (!ingredientList.includes(ingredientText))
      setIngredientList([...ingredientList, ingredientText]);
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
        placeholder="Search ingredients..."
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
