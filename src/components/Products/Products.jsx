import mata from "../../assets/images/res250.webp";
import products from "../../products/products.json";
const Products = ({ activeCategory }) => {
  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="products">
      <div className="container">
        <span>{activeCategory} Products</span>
        <div className="row product-row">
          {filteredProducts.map((product) => (
            <div class="col-lg-3 col-xs-12 product-col" key={product.id}>
              <picture>
                <source srcset={mata} type="image/webp"></source>
                <img src={product.image} alt={product.title} />
              </picture>
              <h3 className="product-title">{product.title}</h3>
              <span className="product-label">{product.description}</span>
              <span className="price">{product.price} lei /buc</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
