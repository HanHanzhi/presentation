import RecipeState from "./context/recipes/RecipeState";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import SearchArea from "./components/layout/Search/SearchArea";

import "./App.css";

const App = () => {
  return (
    <RecipeState>
      <div className="appContainer">
        <Navbar />
        <Header />
        <SearchArea />
      </div>
    </RecipeState>
  );
};

export default App;
