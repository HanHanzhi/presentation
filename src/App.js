import RecipeState from "./context/recipes/RecipeState";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Searchbar from "./components/layout/Search/Searchbar";

import "./App.css";

const App = () => {
  return (
    <RecipeState>
      <div className="appContainer">
        <Navbar />
        <Header />
        <Searchbar />
      </div>
    </RecipeState>
  );
};

export default App;
