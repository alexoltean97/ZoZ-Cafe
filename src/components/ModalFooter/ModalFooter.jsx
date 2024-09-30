const ModalFooter = ({close}) => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" onClick={close}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </div>
  );
};

export default ModalFooter;
