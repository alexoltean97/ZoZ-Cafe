import placeholder from "../../assets/images/unsplash7.webp";

const ProductImage = () => {
  return (
    <div className="product-image">
      <img className="img-fluid" src={placeholder} alt="Product Placeholder" />
    </div>
  );
};

export default ProductImage;
