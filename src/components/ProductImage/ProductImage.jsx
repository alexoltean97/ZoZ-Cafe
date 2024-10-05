import placeholder from "../../assets/images/unsplash7.jpg";

const ProductImage = () => {
  return (
    <div className="product-image">
      <img className="img-fluid" src={placeholder} alt="Product Placeholder" />
    </div>
  );
};

export default ProductImage;
