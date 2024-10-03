import { Router } from "preact-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ModalProvider, useModal } from "./context/ModalContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import CookieSettings from "./pages/CookieSettings/CookieSettings";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ModalBody from "./components/ModalBody/ModalBody";
import "./app.css";

const AppContent = () => {
  const { currentTheme } = useTheme();
  const { isModalOpen, closeModal } = useModal();

  return (
    <div id={currentTheme} className="page-container">
      <Header />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody />
      </Modal>
      <main className="content">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <Privacy path="/privacy" />
          <Terms path="/terms" />
          <Product path="/product/:id" />
          <CookieSettings path="/cookies" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
