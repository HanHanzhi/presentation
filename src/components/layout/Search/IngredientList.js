import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";
import IngredientItem from "./IngredientItem";

import styles from "./IngredientList.module.css";

const { ingredientListContainer } = styles;

const IngredientList = () => {
  const { ingredientList } = useContext(RecipeContext);
  return (
    <div className={ingredientListContainer}>
      {ingredientList.map((ingredient) => (
        <IngredientItem key={ingredient} ingredientName={ingredient} />
      ))}
    </div>
  );
};

export default IngredientList;
