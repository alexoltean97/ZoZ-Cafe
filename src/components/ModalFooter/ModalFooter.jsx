import Cookies from "js-cookie";
import { Link } from "preact-router";
const ModalFooter = ({ close }) => {
  const handleConsent = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    close();
  };

  return (
    <div className="modal-footer">
      <div>
        <button
          type="button"
          className="btn btn-primary w-50 d-block mx-auto font-weight-bold"
          onClick={handleConsent}
        >
          I Understand
        </button>
      </div>
      <div className="cookie-settings text-center mt-3 font-weight-bold">
        <Link href="/cookies" onClick={close}>
          Setari cookie
        </Link>
      </div>
    </div>
  );
};

export default ModalFooter;
