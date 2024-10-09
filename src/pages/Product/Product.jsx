import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "preact-i18next";
import products from "../../products/products.json";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import ProductTabContent from "../../components/ProductTabContent/ProductTabContent";
import SuggestedProducts from "../../components/SuggestedProducts/SuggestedProducts";

const Product = () => {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const path = window.location.pathname;
  const id = path.split("/").pop();

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setCategory(selectedProduct.category);
    }
  }, [id]);

  if (!product) {
    return <div className="product-not-found">{t("missingProduct")}</div>;
  }

  const suggestedProducts = products
    .filter((item) => item.category === category && item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="container my-4">
        <div className="product-title">
          <h2 className="mb-3">{t(product.title)}</h2>
          <h5 className="mb-4">{t("availableProduct")}</h5>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-12 col-12 order-2 order-lg-1">
            <ProductImage src={product.image} alt={product.title} />
          </div>

          <div className="col-lg-9 col-sm-12 col-12 order-1 order-lg-2">
            <div className="product-info">
              <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <ProductTabContent activeTab={activeTab} product={product} />
            </div>
          </div>
        </div>
      </div>

      <SuggestedProducts suggestedProducts={suggestedProducts} />
    </>
  );
};

export default Product;
