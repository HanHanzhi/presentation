import React from "react";
import IngredientItem from "./IngredientItem";

import styles from "./IngredientList.module.css";

const { ingredientListContainer } = styles;

const IngredientList = ({ ingredientList, setIngredientList }) => {
  return (
    <div className={ingredientListContainer}>
      {ingredientList.map((ingredient) => (
        <IngredientItem
          key={ingredient}
          ingredientName={ingredient}
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
        />
      ))}
    </div>
  );
};

export default IngredientList;
