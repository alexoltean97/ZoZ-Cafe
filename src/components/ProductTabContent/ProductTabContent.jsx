import { useTranslation } from "preact-i18next";

const ProductTabContent = ({ activeTab, product }) => {
  const { t } = useTranslation();

  return (
    <div className="tab-content mt-4">
      {activeTab === "description" && (
        <div className="tab-pane active" id="description">
          <p>{ t(product.weight)}</p>
        </div>
      )}
      {activeTab === "ingredients" && (
        <div className="tab-pane active" id="ingredients">
          <p>{t(product.ingredients)}</p>
        </div>
      )}
      {activeTab === "extras" && (
        <div className="tab-pane active" id="extras">
          {!product.extrashot &&
          !product.extraMilkOat &&
          !product.extraMilkPeas ? (
            <div>{t("noExtras")}</div>
          ) : (
            <>
              {product.extrashot && (
                <div className="extra-item">
                  <strong>{product.extrashot.name}</strong> -{" "}
                  {product.extrashot.description} ({product.extrashot.weight})
                </div>
              )}
              {product.extraMilkOat && (
                <div className="extra-item">
                  <strong>{t(product.extraMilkOat.name)}</strong> -{" "}
                  {t(product.extraMilkOat.description)} (
                  {product.extraMilkOat.weight})
                </div>
              )}
              {product.extraMilkPeas && (
                <div className="extra-item">
                  <strong>{t(product.extraMilkPeas.name)}</strong> -{" "}
                  {t(product.extraMilkPeas.description)} (
                  {product.extraMilkPeas.weight})
                </div>
              )}
            </>
          )}
        </div>
      )}
      {activeTab === "alergens" && (
        <div className="tab-pane active" id="alergens">
          {product.alergens && product.alergens.length > 0 ? (
            <p>{product.alergens}</p>
          ) : (
            <p>{t("noAlergens")}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductTabContent;
