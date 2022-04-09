import {
  GET_RECIPES,
  GET_BULK_INFO,
  GET_SAVED_RECIPES,
  SET_LOADING,
  SEARCH_ERROR,
  UPDATE_INGREDIENT_LIST,
} from "../types";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_BULK_INFO:
      return {
        ...state,
        recipesInfo: action.payload,
        isLoading: false,
        searchError: null,
      };
    case GET_SAVED_RECIPES:
      return {
        ...state,
        savedRecipesArr: action.payload,
        isLoading: false,
        searchError: null,
      };
    case UPDATE_INGREDIENT_LIST:
      return {
        ...state,
        ingredientList: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default recipeReducer;
