import { Link } from "preact-router";
import { useTranslation } from "preact-i18next"; 

const SuggestedProducts = ({ suggestedProducts }) => {
  const { t } = useTranslation(); 

  if (suggestedProducts.length === 0) {
    return null;
  }

  return (
    <div className="my-5 container suggested-products">
      <h4 className="mb-4">{t("suggestedProducts")}</h4> 
      <div className="row">
        {suggestedProducts.map((item) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mb-4"
            key={item.id}
          >
            <Link href={`/product/${item.id}`} style="text-decoration:none;">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={`/${item.image}`}
                  alt={item.title}
                />
                <div className="card-body">
               
                  <h5 className="card-title">{t(item.title)}</h5> 
                  <p className="card-text">{t(item.description)}</p>
                  <span className="price font-weight-bold">
                    {item.price} lei / {t("buc")}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
