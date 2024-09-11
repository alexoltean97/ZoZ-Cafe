import { Router } from "preact-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />   
        </Router>
      </div>
    </>
  );
};
export default App;
