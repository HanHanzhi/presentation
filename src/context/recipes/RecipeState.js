import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import { GET_RECIPES, SET_LOADING, SEARCH_ERROR } from "../types";

const RecipeState = (props) => {
  const SPOONACULAR_URI = "https://api.spoonacular.com";
  const QUERY_CONSTANTS = {
    RESPONSE_NUM: 5,
    RANKING: 1, // Maximize used ingredients (1) or minimize missing ingredients (2)
    IGNORE_PANTRY: true,
  };
  const initialState = {
    recipes: [],
    isLoading: false,
    searchError: null,
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Get recipes by ingredient list
  const getRecipes = async (ingredients) => {
    const ingredientsStr = ingredients.join();
    const getRecipeURI = `${SPOONACULAR_URI}/recipes/findByIngredients?ingredients=${ingredientsStr}&number=${QUERY_CONSTANTS.RESPONSE_NUM}&ranking=${QUERY_CONSTANTS.RANKING}&ignorePantry=${QUERY_CONSTANTS.IGNORE_PANTRY}`;

    try {
      setLoading();
      const res = await axios.get(getRecipeURI);
      dispatch({ type: GET_RECIPES, payload: res.data });
    } catch (err) {
      console.error(err.response);
      dispatch({ type: SEARCH_ERROR, payload: err.response });
    }
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        isLoading: state.isLoading,
        searchError: state.searchError,
        getRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
