import { useTranslation } from "preact-i18next";

const ProductTabs = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  return (
    <ul className="nav nav-tabs custom-nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "description" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("description")}
        >
          {t("description")}
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "ingredients" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("ingredients")}
        >
          {t("ingredients")}
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "extras" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("extras")}
        >
          {t("extras")}
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${activeTab === "alergens" ? "active" : ""}`}
          type="button"
          role="tab"
          onClick={() => setActiveTab("alergens")}
        >
          {t("alergens")}
        </button>
      </li>
    </ul>
  );
};

export default ProductTabs;
