import { useTranslation } from "preact-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "preact-router/match";
import LogoDark from "../../assets/images/new-black-logo-paint.png";
import LogoWhite from "../../assets/images/zoz-logo-white-paint.png";
import { svgIcons } from "./icons";
const Navigation = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const themeLogo = currentTheme === "Light" ? LogoDark : LogoWhite;

  return (
    <nav className="main-navigation py-4">
      <img src={themeLogo} alt="logo" width="150" height="58"/>
 
      <Link
        href="/"
        className="mx-4 pb-2 pb-1 main-nav_link position-relative"
        activeClassName="active-link"
      >
        {svgIcons.home}
        {t("home")}
      </Link>

      <Link
        href="/about"
        className="mx-4 pb-2 main-nav_link position-relative"
        activeClassName="active-link"
      >
        {svgIcons.info}
        {t("about")}
      </Link>
      <Link
        href="/contact"
        className="mx-4 pb-2 main-nav_link position-relative"
        activeClassName="active-link"
      >
        {svgIcons.phone}
        {t("contact")}
      </Link>
    </nav>
  );
};

export default Navigation;
