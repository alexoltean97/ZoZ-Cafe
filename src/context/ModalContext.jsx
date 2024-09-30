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
      case "privacy":
        return "Privacy Policy";
      case "terms":
        return "Terms and Conditions";
      case "cookie":
        return "Cookie Settings";
      default:
        return "Privacy Policy";
    }
  };

  const openModalWithTitle = (title) => {
    setModalTitle(title);
    setActiveTab(getTabFromTitle(title));
    setIsModalOpen(true);
  };

  const getTabFromTitle = (title) => {
    switch (title) {
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
