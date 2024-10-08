import { useTranslation } from "preact-i18next";
import { Link } from "preact-router";
import placeholder from "../../assets/images/unsplash7.webp";
import products from "../../products/products.json";
import unsplash7 from "../../assets/images/unsplash7.webp";


const Products = ({ activeCategory }) => {
  const { t } = useTranslation();

  
  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((product) => product.category === activeCategory);
  return (
    <div className="products my-4">
      <div className="container">
        <h3 className="mb-4">{t("product")}</h3>
        <div className="row product-row">
          <h4 className="mb-3">{t("productNotice")}</h4>

          {filteredProducts.map((product) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mb-5 px-3"
              key={product.id}
            >
              <Link
                style="cursor:pointer; text-decoration:none;"
                href={`product/${product.id}`}
              >
                <div className="card h-100 d-flex flex-column">
                  <img
                    className="card-img-top"
                    src={`/images/${item.image}`} 
                    alt={product.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-weight-bold">
                      {t(product.title)}
                    </h5>
                    <p className="card-text flex-grow-1">{t(product.weight)}</p>
                    <span className="price font-weight-bold">
                      {product.price} lei / {t("buc")}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
