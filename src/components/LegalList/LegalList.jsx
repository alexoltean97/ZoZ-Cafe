const LegalList = ({ openModal }) => {
  return (
    <div className="legal-list mb-3 mb-md-0">
      <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center m-0">
        <li className="mx-md-2 mb-2 mb-md-0">
          <a
            className="pb-2 main-nav_link"
            href="#"
            onClick={() => openModal("Cookie Settings")}
          >
            Cookie Settings
          </a>
        </li>

        <li className="mx-md-2 mb-2 mb-md-0">
          <a
            className="pb-2 main-nav_link"
            href="#"
            onClick={() => openModal("Privacy Policy")}
          >
            Privacy Policy
          </a>
        </li>
        <li className="mx-md-2 mb-2 mb-md-0">
          <a
            className="pb-2 main-nav_link"
            href="#"
            onClick={() => openModal("Terms and Conditions")}
          >
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LegalList;
