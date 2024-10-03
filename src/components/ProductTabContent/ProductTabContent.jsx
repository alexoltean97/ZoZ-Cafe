const ProductTabContent = ({ activeTab, product }) => {
  return (
    <div className="tab-content mt-4">
      {activeTab === "description" && (
        <div className="tab-pane active" id="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      )}
      {activeTab === "ingredients" && (
        <div className="tab-pane active" id="ingredients">
          <h3>Ingredients</h3>
          <p>{product.ingredients}</p>
        </div>
      )}
      {activeTab === "extras" && (
        <div className="tab-pane active" id="extras">
          <h3>Extras</h3>
          {product.extrashot && (
            <div className="extra-item">
              <strong>{product.extrashot.name}</strong> -{" "}
              {product.extrashot.description} ({product.extrashot.weight})
            </div>
          )}
          {product.extraMilkOat && (
            <div className="extra-item">
              <strong>{product.extraMilkOat.name}</strong> -{" "}
              {product.extraMilkOat.description} ({product.extraMilkOat.weight})
            </div>
          )}
          {product.extraMilkPeas && (
            <div className="extra-item">
              <strong>{product.extraMilkPeas.name}</strong> -{" "}
              {product.extraMilkPeas.description} (
              {product.extraMilkPeas.weight})
            </div>
          )}
        </div>
      )}
      {activeTab === "alergens" && (
        <div className="tab-pane active" id="alergens">
          <h3>Alergens</h3>
          <p>
            {product.alergens ? product.alergens : "No alergens specified."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductTabContent;
