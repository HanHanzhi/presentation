import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";

import styles from "./AutocompleteResults.module.css";

const { autocomplete } = styles;

const AutocompleteResults = ({ setIngredientText }) => {
  const { autocompleteResults, clearAutocomplete } = useContext(RecipeContext);

  const onAutoComplete = (autocompleteText) => {
    setIngredientText(autocompleteText);
    clearAutocomplete();
  };
  return (
    autocompleteResults?.length > 0 && (
      <div>
        {autocompleteResults.map((autocompleteItem) => (
          <div
            className={autocomplete}
            key={autocompleteItem.name}
            onClick={() => onAutoComplete(autocompleteItem.name)}
          >
            {autocompleteItem.name}
          </div>
        ))}
      </div>
    )
  );
};

export default AutocompleteResults;
