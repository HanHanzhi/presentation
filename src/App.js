import "./App.css";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
