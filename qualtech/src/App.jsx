import "./App.css";
import Footer from "./Component/Footer";
import Learn from "./Component/Learn";
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
      <Service />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
