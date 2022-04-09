import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import {
  GET_RECIPES,
  GET_BULK_INFO,
  GET_SAVED_RECIPES,
  SET_LOADING,
  SEARCH_ERROR,
  UPDATE_INGREDIENT_LIST,
} from "../types";

const RecipeState = (props) => {
  const SPOONACULAR_URI = "https://api.spoonacular.com";
  const QUERY_CONSTANTS = {
    API_KEY: "a7dd53920d654051aea0cf45bf40c70f",
    RESPONSE_NUM: 5,
    RANKING: 1, // Maximize used ingredients (1) or minimize missing ingredients (2)
    IGNORE_PANTRY: false,
    INCLUDE_NUTRITION: false, // Include nutrition data to the recipe information
  };
  const initialState = {
    recipes: null,
    recipesInfo: null,
    savedRecipesArr: null,
    ingredientList: [],
    isLoading: false,
    searchError: null,
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Get recipes by ingredient list
  const getRecipes = async () => {
    const ingredientsStr = state.ingredientList.join();
    const getRecipeURI = `${SPOONACULAR_URI}/recipes/findByIngredients?apiKey=${QUERY_CONSTANTS.API_KEY}&ingredients=${ingredientsStr}&number=${QUERY_CONSTANTS.RESPONSE_NUM}&ranking=${QUERY_CONSTANTS.RANKING}&ignorePantry=${QUERY_CONSTANTS.IGNORE_PANTRY}`;

    try {
      setLoading();
      const res = await axios.get(getRecipeURI);
      dispatch({ type: GET_RECIPES, payload: res.data });

      const recipeIdsStr = res.data.map((recipe) => recipe.id).join();
      const getBulkURI = `${SPOONACULAR_URI}/recipes/informationBulk?apiKey=${QUERY_CONSTANTS.API_KEY}&ids=${recipeIdsStr}&includeNutrition=${QUERY_CONSTANTS.INCLUDE_NUTRITION}`;

      const resBulk = await axios.get(getBulkURI);
      dispatch({ type: GET_BULK_INFO, payload: resBulk.data });
    } catch (err) {
      console.error(err.response);
      dispatch({ type: SEARCH_ERROR, payload: err.response.data.message });
    }
  };

  // Add to ingredient list
  const addIngredient = (ingredient) => {
    if (!state.ingredientList.includes(ingredient))
      dispatch({
        type: UPDATE_INGREDIENT_LIST,
        payload: [...state.ingredientList, ingredient],
      });
  };

  // Remove from ingredient list
  const removeIngredient = (deletedIngredient) => {
    const newIngredientList = state.ingredientList.filter(
      (currIngredient) => currIngredient !== deletedIngredient
    );
    dispatch({ type: UPDATE_INGREDIENT_LIST, payload: newIngredientList });
  };

  const getSavedRecipes = async (savedRecipeIds) => {
    const recipeIdsStr = savedRecipeIds.join();
    const getBulkURI = `${SPOONACULAR_URI}/recipes/informationBulk?apiKey=${QUERY_CONSTANTS.API_KEY}&ids=${recipeIdsStr}&includeNutrition=${QUERY_CONSTANTS.INCLUDE_NUTRITION}`;
    try {
      setLoading();
      const res = await axios.get(getBulkURI);
      dispatch({ type: GET_SAVED_RECIPES, payload: res.data });
    } catch (err) {
      console.error(err.response);
      dispatch({ type: SEARCH_ERROR, payload: err.response.data.message });
    }
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        recipesInfo: state.recipesInfo,
        savedRecipesArr: state.savedRecipesArr,
        ingredientList: state.ingredientList,
        isLoading: state.isLoading,
        searchError: state.searchError,
        getRecipes,
        getSavedRecipes,
        addIngredient,
        removeIngredient,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
