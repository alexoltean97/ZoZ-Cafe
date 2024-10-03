const ModalNavigation = ({ active, handleTab }) => {
  return (
    <nav>
      <div className="nav nav-tabs pb-3" id="nav-tab" role="tablist">
      <button
          className={`nav-item nav-link ${active === "cookie" ? "active" : ""}`}
          onClick={() => handleTab("cookie")}
          id="nav-cookie-tab"
          role="tab"
          aria-controls="nav-cookie"
          aria-selected={active === "cookie"}
        >
          Cookie Settings
        </button>
        
        <button
          className={`nav-item nav-link ${
            active === "privacy" ? "active" : ""
          }`}
          onClick={() => handleTab("privacy")}
          id="nav-privacy-tab"
          role="tab"
          aria-controls="nav-privacy"
          aria-selected={active === "privacy"}
        >
          Privacy Policy
        </button>
        <button
          className={`nav-item nav-link ${active === "terms" ? "active" : ""}`}
          onClick={() => handleTab("terms")}
          id="nav-terms-tab"
          role="tab"
          aria-controls="nav-terms"
          aria-selected={active === "terms"}
        >
          Terms and Conditions
        </button>

      </div>
    </nav>
  );
};

export default ModalNavigation;
