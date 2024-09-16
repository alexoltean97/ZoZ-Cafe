import { Link } from "preact-router/match";
import i18n from "../../i18n/i18n";
import { useTranslation } from "preact-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="main-navigation p-4">

      <Link
        href="/"
        className="mx-4 pb-1 main-nav_link position-relative"
        activeClassName="active-link"
      >
        {t("home")}
      </Link>

      <Link
        href="/about"
        className="mx-4 pb-1 main-nav_link position-relative"
        activeClassName="active-link"
      >
       {t("about")}
      </Link>
      <Link
        href="/contact"
        className="mx-4 pb-1 main-nav_link position-relative"
        activeClassName="active-link"
      >
         {t("contact")}
      </Link>
    </nav>
  );
};

export default Navigation;
