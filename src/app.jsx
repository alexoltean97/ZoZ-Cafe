import { Router } from "preact-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ModalProvider, useModal } from "./context/ModalContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";
import "./app.css";
const AppContent = () => {
  const { currentTheme } = useTheme();
  const { isModalOpen, modalTitle, closeModal } = useModal();

  return (
    <div id={currentTheme} className="page-container">
      <Header />
      {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
      <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle={modalTitle}>
        <ModalContent />
      </Modal>
      <main className="content">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
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
