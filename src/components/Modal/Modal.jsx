import { createPortal } from "preact/compat";
import { useEffect } from "preact/hooks";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");

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
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                General Settings
              </h5>
              <button
                type="button"
                className="close"
                onClick={onClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
