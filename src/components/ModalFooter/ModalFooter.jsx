import Cookies from "js-cookie";

const ModalFooter = ({ close }) => {
  const handleConsent = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); 
    close(); 
  };

  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" onClick={handleConsent}>
        I Understand
      </button>
    </div>
  );
};

export default ModalFooter;
