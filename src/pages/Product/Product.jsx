import { useEffect, useState } from "preact/hooks";
import products from "../../products/products.json";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import ProductTabContent from "../../components/ProductTabContent/ProductTabContent";
const Product = () => {
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const path = window.location.pathname;
  const id = path.split("/").pop();

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === id);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="container my-4">
      <div className="product-title">
        <h3>{product.title}</h3>
      </div>

      <div className="d-flex">
        <ProductImage />

        <div className="product-info">
          <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProductTabContent activeTab={activeTab} product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
