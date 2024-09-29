import { createContext } from "preact";
import { useState, useContext } from "preact/hooks";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const openModalWithTitle = (title) => {
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalTitle("");
    };

    return(
        <ModalContext.Provider
            value={{
                isModalOpen,
                modalTitle,
                openModalWithTitle,
                closeModal
            }}
        >
            {children}
        </ModalContext.Provider>
    );
 }