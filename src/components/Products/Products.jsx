import { useTranslation } from "preact-i18next";
import placeholder from "../../assets/images/res250.webp";
import products from "../../products/products.json";
const Products = ({ activeCategory }) => {
  const { t } = useTranslation();

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((product) => product.category === activeCategory);
  return (
    <div className="products my-4">
      <div className="container">
        <h3 className="mb-4">Products</h3>
        <div className="row product-row">
          <h4 className="mb-3">Produsele sunt disponsibile doar in magazin!</h4>

          {filteredProducts.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mb-5 px-3"
              key={product.id}
            >
              <div className="card h-100 d-flex flex-column">
                <img
                  className="card-img-top"
                  src={placeholder}
                  alt={product.title}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-weight-bold">
                    {product.title}
                  </h5>
                  <p className="card-text flex-grow-1">
                    {t(product.description)}
                  </p>
                  <span className="price font-weight-bold">
                    {product.price} lei /buc
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
