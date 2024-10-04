import Cookies from "js-cookie";
import { Link } from "preact-router";
const ModalFooter = ({ close }) => {
  const handleConsent = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    close();
  };

  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={handleConsent}
      >
        I Understand
      </button>

      <Link href="/cookies" onClick={close}>Setari cookie</Link>
    </div>
  );
};

export default ModalFooter;
