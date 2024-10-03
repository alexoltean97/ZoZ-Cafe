const ModalFooter = ({close}) => {
  return (
    <div className="modal-footer">
 
      <button type="button" className="btn btn-primary" onClick={close}>
        Save changes
      </button>
    </div>
  );
};

export default ModalFooter;
