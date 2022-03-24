import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";

import styles from "./IngredientItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const { ingredientItem } = styles;

const IngredientItem = ({ ingredientName }) => {
  const { removeIngredient } = useContext(RecipeContext);
  return (
    <div className={ingredientItem}>
      <button onClick={() => removeIngredient(ingredientName)}>
        <FontAwesomeIcon icon={faX} size={"lg"} color="red" />
      </button>
      {ingredientName}
    </div>
  );
};

export default IngredientItem;
