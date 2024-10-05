import { Link } from "preact-router";
import { useTranslation } from "preact-i18next";
const NavigationFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="navigation-footer mb-md-0">
      <ul
        style="padding-left: 0;"
        className="list-unstyled d-flex flex-column flex-md-row justify-content-center mb-0"
      >
        <li className="d-inline mx-2">
          <Link className="pb-2 main-nav_link position-relative" href="/">
            {t("home")}
          </Link>
        </li>
        <li className="d-inline mx-2">
          <Link className="pb-2 main-nav_link position-relative" href="/about">
            {t("about")}
          </Link>
        </li>
        <li className="d-inline mx-2">
          <Link
            className="pb-2 main-nav_link position-relative"
            href="/contact"
          >
            {t("contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationFooter;
