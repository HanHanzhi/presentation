import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";

import styles from "./IngredientText.module.css";

const { modalIngredientItem, alternateIngredient, tooltip, tooltipText } =
  styles;

const IngredientText = ({ ingredientID, children }) => {
  const { getAlternateIngredient, alternateIngredients } =
    useContext(RecipeContext);

  const [doesAlternateExist, setDoesAlternateExist] = useState(
    ingredientID in alternateIngredients
  );

  useEffect(() => {
    if (ingredientID) getAlternateIngredient(ingredientID);
    setDoesAlternateExist(ingredientID in alternateIngredients);
  }, [getAlternateIngredient, ingredientID, alternateIngredients]);

  return (
    <div className={doesAlternateExist ? tooltip : ""}>
      <li className={modalIngredientItem}>
        <p className={doesAlternateExist ? `${alternateIngredient}` : ""}>
          {children}
        </p>
        {doesAlternateExist && (
          <p className={tooltipText}>{alternateIngredients[ingredientID]}</p>
        )}
      </li>
    </div>
  );
};

export default IngredientText;
