import "./App.css";
import Learn from "./Component/Learn";
import Service from "./Component/Service";

import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import "./Styles/Learn.css";
import "./Styles/Service.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Learn />
      <Service />
    </>
  );
}

export default App;
