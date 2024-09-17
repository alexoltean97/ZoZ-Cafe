import mata from "../../assets/images/res250.webp";
const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <span>All Products</span>
        <div className="row product-row">
          <div class="col-lg-3 col-xs-12 product-col">
            <picture>
              <source srcset={mata} type="image/webp"></source>
              <img src={mata} alt="Description of image" />
            </picture>
            <h3>Our Coffe</h3>
            <span className="product-label">
              Regiune Altitudine Varietate procesare
            </span>
            <span className="price">70 lei /buc</span>
          </div>

          <div class="col-lg-3 col-xs-12 product-col">
            <picture>
              <source srcset={mata} type="image/webp"></source>
              <img src={mata} alt="Description of image" />
            </picture>
            <h3>Our Coffe</h3>
            <span className="product-label">
              Regiune Altitudine Varietate procesare
            </span>
            <span className="price">70 lei /buc</span>
          </div>

          <div class="col-lg-3 col-xs-12 product-col">
            <picture>
              <source srcset={mata} type="image/webp"></source>
              <img src={mata} alt="Description of image" />
            </picture>
            <h3>Our Coffe</h3>
            <span className="product-label">
              Regiune Altitudine Varietate procesare
            </span>
            <span className="price">70 lei /buc</span>
          </div>

          <div class="col-lg-3 col-xs-12 product-col">
            <picture>
              <source srcset={mata} type="image/webp"></source>
              <img src={mata} alt="Description of image" />
            </picture>
            <h3>Our Coffe</h3>
            <span className="product-label">
              Regiune Altitudine Varietate procesare
            </span>
            <span className="price">70 lei /buc</span>
          </div>

          <div class="col-lg-3 col-xs-12 product-col">
            <picture>
              <source srcset={mata} type="image/webp"></source>
              <img src={mata} alt="Description of image" />
            </picture>
            <h3>Our Coffe</h3>
            <span className="product-label">
              Regiune Altitudine Varietate procesare
            </span>
            <span className="price">70 lei /buc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
