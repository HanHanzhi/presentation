import React, { useContext } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeCard from "./RecipeCard";
import Spinner from "../layout/Spinner";

import styles from "./RecipeResults.module.css";

const { recipesContainer } = styles;

const RecipeResults = () => {
  const { recipes, isLoading } = useContext(RecipeContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className={recipesContainer}>
      {recipes &&
        recipes.map((recipe, idx) => (
          <RecipeCard key={recipe.id} recipe={recipe} idx={idx} />
        ))}
    </div>
  );
};

export default RecipeResults;
