import { createContext } from "preact";
import { useState, useContext } from "preact/hooks";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [activeTab, setActiveTab] = useState("privacy");

  const getTitleFromTab = (tabName) => {
    switch (tabName) {
      case "cookie":
        return "Cookie Settings";
      case "privacy":
        return "Privacy Policy";
      case "terms":
        return "Terms and Conditions";

      default:
        return "Privacy Policy";
    }
  };

  const getTabFromTitle = (title) => {
    switch (title) {
      case "Cookie Settings":
        return "cookie";
      case "Privacy Policy":
        return "privacy";
      case "Terms and Conditions":
        return "terms";
      case "Cookie Settings":
        return "cookie";
      default:
        return "privacy";
    }
  };

  const openModalWithTitle = (title) => {
    setModalTitle(title);
    setActiveTab(getTabFromTitle(title));
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalTitle,
        activeTab,
        setActiveTab,
        setModalTitle,
        openModalWithTitle,
        closeModal,
        getTitleFromTab,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
