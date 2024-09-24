import { Router } from "preact-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { currentTheme } = useTheme();

  return (
    <div id={currentTheme}>
      <Header />
      
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
