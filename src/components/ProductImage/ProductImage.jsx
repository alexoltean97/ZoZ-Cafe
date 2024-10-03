import placeholder from "../../assets/images/res250.webp";

const ProductImage = () => {
  return (
    <div className="product-image">
      <img className="img-fluid" src={placeholder} alt="Product Placeholder" />
    </div>
  );
};

export default ProductImage;
