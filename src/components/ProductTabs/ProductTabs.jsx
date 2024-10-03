const ProductTabs = ({ activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-tabs custom-nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "description" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "ingredients" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "extras" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("extras")}
        >
          Extras
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "alergens" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("alergens")}
        >
          Alergens
        </button>
      </li>
    </ul>
  );
};

export default ProductTabs;
