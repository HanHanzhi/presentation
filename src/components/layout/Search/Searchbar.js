import React, { useState } from "react";

import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const { ingredientSearch, ingredientForm, ingredientSubmitBtn, disabled } =
  styles;

const Searchbar = () => {
  const [ingredientText, setIngredientText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Add ingredient item, `ingredientText`, to list
    setIngredientText("");
  };

  return (
    <form className={ingredientForm} onSubmit={(e) => onSubmit(e)}>
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

export default Searchbar;
