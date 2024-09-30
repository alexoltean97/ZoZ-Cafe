const ModalHeader = ({close}) => {
  return (
    <div className="modal-header justify-content-between">
      <h5 className="modal-title" id="exampleModalLabel">
        General Settings
      </h5>
      <button
        type="button"
        className="close"
        onClick={close}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ModalHeader;
