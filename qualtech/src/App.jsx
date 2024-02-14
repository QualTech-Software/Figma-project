import "./App.css";
import Client from "./Component/Client";
import Feedback from "./Component/Feedback";
import Learn from "./Component/Learn";
import Project from "./Component/Project";
import RequestForm from "./Component/RequestForm";
import Technology from "./Component/Technology";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

import "./Styles/Learn.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Learn />
      <Project />
      <Technology />
      <Client />
      <Feedback />
      <RequestForm />
    </>
  );
}

export default App;
