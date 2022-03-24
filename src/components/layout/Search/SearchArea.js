import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";
import IngredientForm from "./IngredientForm";

import styles from "./SearchArea.module.css";
import IngredientList from "./IngredientList";

const { ingredientSearchContainer, searchBtn } = styles;

const SearchArea = () => {
  const { getRecipes } = useContext(RecipeContext);

  return (
    <div className={ingredientSearchContainer}>
      <IngredientForm />
      <IngredientList />
      <button onClick={getRecipes} className={searchBtn}>
        Serchh
      </button>
    </div>
  );
};

export default SearchArea;
