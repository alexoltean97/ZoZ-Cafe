import { createPortal } from "preact/compat";
import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "preact/hooks";
import ModalFooter from "../ModalFooter/ModalFooter";
const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");
  const { currentTheme } = useTheme();
  console.log(currentTheme);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!modalRoot || !isOpen) return null;

  return createPortal(
    <>
      <div className={`modal-backdrop fade ${isOpen ? "show" : ""}`}></div>

      <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isOpen}
      >
        <div className="modal-dialog" role="document">
          <div
            className={`modal-content ${
              currentTheme === "Dark" ? "dark-modal-content" : ""
            }`}
          >
            <div className="modal-body">{children}</div>
            <ModalFooter close={onClose} />
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
