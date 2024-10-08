import { useTranslation } from "preact-i18next";
import backgroud from "../../assets/images/unsplash9.webp";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="intro">
      <div className="container position-relative">
        <div className="banner position-relative">
          <picture>
            <source srcset={backgroud} type="image/webp" />
            <img
              src={backgroud}
              fit="cover"
              alt="food background"
              height="436"
            />
          </picture>
        </div>
        <div className="intro-content position-absolute">
          <h1>{t("main_title")}</h1>
          <p>{t("main_intro")}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
