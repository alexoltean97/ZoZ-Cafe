const ProductTabContent = ({ activeTab, product }) => {
  return (
    <div className="tab-content mt-4">
      {activeTab === "description" && (
        <div className="tab-pane active" id="description">
          <p>{product.description}</p>
        </div>
      )}
      {activeTab === "ingredients" && (
        <div className="tab-pane active" id="ingredients">
          <p>{product.ingredients}</p>
        </div>
      )}
      {activeTab === "extras" && (
        <div className="tab-pane active" id="extras">
          {!product.extrashot &&
          !product.extraMilkOat &&
          !product.extraMilkPeas ? (
            <div>No extras are available for this product</div>
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
                  <strong>{product.extraMilkOat.name}</strong> -{" "}
                  {product.extraMilkOat.description} (
                  {product.extraMilkOat.weight})
                </div>
              )}
              {product.extraMilkPeas && (
                <div className="extra-item">
                  <strong>{product.extraMilkPeas.name}</strong> -{" "}
                  {product.extraMilkPeas.description} (
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
            <p>No allergens specified.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductTabContent;
