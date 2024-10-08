const ProductImage = ({ src, alt }) => {
  return (
    <div className="product-image">
      <img className="img-fluid" src={`/${src}`} alt={alt} />
      </div>
  );
};

export default ProductImage;