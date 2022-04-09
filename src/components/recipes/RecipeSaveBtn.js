import React, { useState } from "react";

import styles from "./RecipeSaveBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const { recipeBtn, unsavedRecipeBtn, savedRecipeBtn } = styles;

const RecipeSaveBtn = ({ recipe }) => {
  const isRecipeInStorage = JSON.parse(
    localStorage.getItem("savedRecipes")
  )?.includes(recipe.id);
  const [isRecipeSaved, setIsRecipeSaved] = useState(isRecipeInStorage);

  const onRecipeSaveToggle = () => {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    savedRecipes = savedRecipes ? savedRecipes : [];

    if (!isRecipeSaved) {
      savedRecipes.push(recipe.id);
    } else {
      savedRecipes = savedRecipes.filter((recipeId) => recipeId !== recipe.id);
    }
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    setIsRecipeSaved(!isRecipeSaved);
  };

  return (
    <button
      id="ignore-modal"
      className={`${recipeBtn} ${
        !isRecipeSaved ? unsavedRecipeBtn : savedRecipeBtn
      }`}
      onClick={onRecipeSaveToggle}
    >
      {isRecipeSaved ? (
        <FontAwesomeIcon id="ignore-modal" icon={faStarSolid} />
      ) : (
        <FontAwesomeIcon id="ignore-modal" icon={faStar} />
      )}
    </button>
  );
};

export default RecipeSaveBtn;
