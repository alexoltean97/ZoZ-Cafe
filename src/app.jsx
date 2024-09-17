import { Router } from "preact-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.css";

const App = () => {
  return (
    <>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />   
        </Router>
        <Footer />
    </>
  );
};
export default App;
// npm install i18next react-i18next