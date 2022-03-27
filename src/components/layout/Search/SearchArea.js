import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Spinner from "../Spinner";

import styles from "./SearchArea.module.css";

const { ingredientSearchContainer, searchBtn , notFound } = styles;

const SearchArea = () => {

  const { getRecipes , isLoading, recipes} = useContext(RecipeContext);



  return (
    <div className={ingredientSearchContainer}>
      <IngredientForm />
      <IngredientList />
      <button onClick={getRecipes} className={searchBtn}>
        Search
      </button>

      {recipes?.length === 0 && (<p className={notFound}>No recipes found!</p>)}
      {isLoading && <Spinner />}


    </div>
    
  );
  
};

export default SearchArea;
