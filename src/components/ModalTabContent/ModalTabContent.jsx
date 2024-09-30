const ModalTabContent = ({ title, active }) => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <h3 className="modal-title">{title}</h3>

      <div
        className={`tab-pane fade ${active === "privacy" ? "show active" : ""}`}
        id="nav-privacy"
        role="tabpanel"
        aria-labelledby="nav-privacy-tab"
      >
        Privacy Policy Content goes here...
      </div>

      <div
        className={`tab-pane fade ${active === "terms" ? "show active" : ""}`}
        id="nav-terms"
        role="tabpanel"
        aria-labelledby="nav-terms-tab"
      >
        Terms and Conditions Content goes here...
      </div>

      <div
        className={`tab-pane fade ${active === "cookie" ? "show active" : ""}`}
        id="nav-cookie"
        role="tabpanel"
        aria-labelledby="nav-cookie-tab"
      >
        Cookie Settings Content goes here...
      </div>
    </div>
  );
};

export default ModalTabContent;
