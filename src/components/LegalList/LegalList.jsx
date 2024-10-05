import { Link } from "preact-router";
const LegalList = ({ openModal }) => {
  return (
    <div className="legal-list mb-3 mb-md-0">
      <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center m-0">
        <li className="mx-md-2 mb-2 mb-md-0">
          {/* <a
            className="pb-2 main-nav_link"
            href="#"
            onClick={() => openModal()}
          >
            Cookie Settings
          </a> */}
          <Link className="pb-2 main-nav_link" href="/cookiespolicy">
           Cookie Policy
          </Link>
        </li>

        <li className="mx-md-2 mb-2 mb-md-0">
          <Link className="pb-2 main-nav_link" href="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li className="mx-md-2 mb-2 mb-md-0">
          <Link className="pb-2 main-nav_link" href="/terms">
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalList;
