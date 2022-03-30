import RecipeState from "./context/recipes/RecipeState";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import SearchArea from "./components/layout/Search/SearchArea";
import RecipeResults from "./components/recipes/RecipeResults";

import "./App.css";

const App = () => {
  return (
    <RecipeState>
      <div className="appContainer">
        <Navbar />
        <Header />
        <SearchArea />
        <RecipeResults />
      </div>
    </RecipeState>
  );
};

export default App;
