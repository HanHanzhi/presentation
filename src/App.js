import { useState } from "react";
import RecipeState from "./context/recipes/RecipeState";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import SearchArea from "./components/layout/Search/SearchArea";
import RecipeResults from "./components/recipes/RecipeResults";

import SavedRecipes from "./components/layout/SavedRecipes";

import "./App.css";

const App = () => {
  const [isHomeSelected, setIsHomeSelected] = useState(true);

  return (
    <RecipeState>
      <div className="appContainer">
        <Navbar
          isHomeSelected={isHomeSelected}
          setIsHomeSelected={setIsHomeSelected}
        />
        <Header />
        {isHomeSelected ? (
          <>
            <SearchArea />
            <RecipeResults />
          </>
        ) : (
          <SavedRecipes />
        )}
      </div>
    </RecipeState>
  );
};

export default App;
