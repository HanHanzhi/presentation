import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";

import styles from "./AutocompleteResults.module.css";

const { autocomplete } = styles;

const AutocompleteResults = ({ setIngredientText }) => {
  const { autocompleteResults, clearAutocomplete, addIngredient } =
    useContext(RecipeContext);

  const onAutocomplete = (ingredientText) => {
    setIngredientText("");
    addIngredient(ingredientText);
    clearAutocomplete();
  };

  return (
    autocompleteResults?.length > 0 && (
      <div>
        {autocompleteResults.map((autocompleteItem) => (
          <div
            className={autocomplete}
            key={autocompleteItem.name}
            onClick={() => onAutocomplete(autocompleteItem.name)}
          >
            {autocompleteItem.name}
          </div>
        ))}
      </div>
    )
  );
};

export default AutocompleteResults;
