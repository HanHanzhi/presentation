import React, { useContext, useState } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";
import IngredientForm from "./IngredientForm";

import styles from "./SearchArea.module.css";
import IngredientList from "./IngredientList";

const { ingredientSearchContainer, searchBtn } = styles;

const SearchArea = () => {
  const [ingredientList, setIngredientList] = useState([]);

  const recipeContext = useContext(RecipeContext);
  const { getRecipes } = recipeContext;

  const onSearch = () => {
    getRecipes(ingredientList);
  };

  return (
    <div className={ingredientSearchContainer}>
      <IngredientForm
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
      <IngredientList
        ingredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
      <button onClick={onSearch} className={searchBtn}>
        Search
      </button>
    </div>
  );
};

export default SearchArea;
