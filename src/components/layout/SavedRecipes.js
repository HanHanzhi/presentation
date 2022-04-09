import React, { useEffect, useContext } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeCard from "../recipes/RecipeCard";

import styles from "./SavedRecipes.module.css";
const { savedRecipesContainer, savedRecipesTitle, savedRecipesError } = styles;

const SavedRecipes = () => {
  const { getSavedRecipes, savedRecipesArr } = useContext(RecipeContext);
  let savedRecipeIds = JSON.parse(localStorage.getItem("savedRecipes"));
  savedRecipeIds = savedRecipeIds ? savedRecipeIds : [];

  useEffect(() => {
    getSavedRecipes(savedRecipeIds);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={savedRecipesContainer}>
      <p className={savedRecipesTitle}>Saved Recipes</p>
      {savedRecipesArr?.length === 0 ? (
        <p className={savedRecipesError}>No Saved Recipes</p>
      ) : (
        savedRecipesArr?.map((recipe, idx) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            idx={idx}
            isSavedScreen={true}
          />
        ))
      )}
    </div>
  );
};

export default SavedRecipes;
