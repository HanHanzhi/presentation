import { GET_RECIPES, SET_LOADING, SEARCH_ERROR } from "../types";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
        searchError: null,
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
      };
    default:
      return state;
  }
};

export default recipeReducer;
