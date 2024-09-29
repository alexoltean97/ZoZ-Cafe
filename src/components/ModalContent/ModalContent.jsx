import { h } from 'preact';
import { useState } from 'preact/hooks';

const ModalContent = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Navigation for Tabs */}
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-item nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabChange("home")}
            id="nav-home-tab"
            role="tab"
            aria-controls="nav-home"
            aria-selected={activeTab === "home"}
          >
            Home
          </button>
          <button
            className={`nav-item nav-link ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => handleTabChange("profile")}
            id="nav-profile-tab"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={activeTab === "profile"}
          >
            Profile
          </button>
          <button
            className={`nav-item nav-link ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => handleTabChange("contact")}
            id="nav-contact-tab"
            role="tab"
            aria-controls="nav-contact"
            aria-selected={activeTab === "contact"}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Tab Content */}
      <div className="tab-content" id="nav-tabContent">
        {/* Home Tab */}
        <div
          className={`tab-pane fade ${activeTab === "home" ? "show active" : ""}`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          Content 1 - Home
        </div>

        {/* Profile Tab */}
        <div
          className={`tab-pane fade ${activeTab === "profile" ? "show active" : ""}`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          Content 2 - Profile
        </div>

        {/* Contact Tab */}
        <div
          className={`tab-pane fade ${activeTab === "contact" ? "show active" : ""}`}
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          Content 3 - Contact
        </div>
      </div>
    </>
  );
};

export default ModalContent;
