import React from "react";

import styles from "./IngredientItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const { ingredientItem } = styles;

const IngredientItem = ({
  ingredientName,
  ingredientList,
  setIngredientList,
}) => {
  return (
    <div className={ingredientItem}>
      <button
        onClick={() =>
          setIngredientList(
            ingredientList.filter((ingredient) => ingredient !== ingredientName)
          )
        }
      >
        <FontAwesomeIcon icon={faX} size={"lg"} color="red" />
      </button>
      {ingredientName}
    </div>
  );
};

export default IngredientItem;
