import "./App.css";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Searchbar from "./components/layout/Search/Searchbar";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Header />
      <Searchbar />
    </div>
  );
};

export default App;
