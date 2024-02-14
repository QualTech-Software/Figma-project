import "./App.css";
import Client from "./Component/Client";
import Feedback from "./Component/Feedback";
import Learn from "./Component/Learn";
import Project from "./Component/Project";
import RequestForm from "./Component/RequestForm";
import Technology from "./Component/Technology";
import Footer from "./Component/Footer";
import Service from "./Component/Service";
import Stories from "./Component/Stories";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

import "./Styles/Learn.css";
import "./Styles/Service.css";
import "./Styles/Stories.css";
import "./Styles/Footer.css";

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
      <Service />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
