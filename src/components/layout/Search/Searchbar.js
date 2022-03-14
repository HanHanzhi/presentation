import React, { useState } from "react";

import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import IngredientList from "./IngredientList";

const {
  ingredientSearchContainer,
  ingredientSearch,
  ingredientForm,
  ingredientSubmitBtn,
  disabled,
} = styles;

const Searchbar = () => {
  const [ingredientText, setIngredientText] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!ingredientList.includes(ingredientText))
      setIngredientList([...ingredientList, ingredientText]);
    setIngredientText("");
  };

  return (
    <div className={ingredientSearchContainer}>
      <form
        className={ingredientForm}
        onSubmit={(e) => onSubmit(e)}
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
      <IngredientList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
    </div>
  );
};

export default Searchbar;
