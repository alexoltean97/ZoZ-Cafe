import { useTranslation } from "preact-i18next";
import Schedule from "../../components/Schedule/Schedule";
import Map from "../../components/Map/Map";
const Contact = () => {
  const {t} = useTranslation();

  return (
    <div className="visit-us mt-4">
      <div className="container">
        <h2>{t("visitTitle")}</h2>
        <p>{t("visitDesc")}</p>

        <div className="row">
          <div className="col-lg-8 col-sm-12 col-xs-12">
            <Schedule />
          </div>

          <div className="col-lg-4 col-sm-12 col-xs-12">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
