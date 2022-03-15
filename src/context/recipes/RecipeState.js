import React, { useReducer } from "react";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import { GET_RECIPES } from "../types";

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
