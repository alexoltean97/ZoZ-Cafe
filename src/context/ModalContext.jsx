import { createContext } from "preact";
import { useState, useContext, useEffect } from "preact/hooks";
import Cookies from "js-cookie";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsModalOpen(true); 
    }
  }, []);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); 
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
