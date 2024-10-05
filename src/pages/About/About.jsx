import { useTranslation } from "preact-i18next";
import placeholder from "../../assets/images/unsplash2.jpg";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="main-about mt-4">
      <div className="container">
        <h2 className="mb-4">{t("about")}</h2>
        <div className="row">
          <div className="col-lg-9">
            <div className="content mb-4">{t("aboutDesc")}</div>
          </div>

          <div class="col-lg-3">
            <div className="images-content">
              <img src={placeholder}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
