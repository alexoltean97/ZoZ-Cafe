import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import { useTranslation } from "preact-i18next";
import i18n from "../../i18n/i18n";
import MobileLogo from "../MobileLogo/MobileLogo";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import MobileLanguageSwitcher from "../MobileLanguageSwitcher/MobileLanguageSwitcher";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { svgIcons } from "./icons";
const MobileNavigation = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const setActiveLanguage = () => {
    setIsSelected(!isSelected);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(false);
  };

  return (
    <>
      <div className="mobile-menu py-2 d-flex justify-content-between align-items-center w-100">
        <MobileLogo />
        <BurgerMenuIcon isOpen={isOpen} openMenu={openMenu} />
      </div>

      <nav className={`mobile-navigation ${!isOpen ? "d-block" : "d-none"}`}>
        <ul className="p-0">
          <li className="text-left list-none mobile-list mb-2 p-2">
            <Link
              href="/"
              className="mx-4 pb-1 mobile_main-nav_link"
              activeClassName="mobile-active-link"
              style="margin-left: 5px !important;"
            >
              {t("home")}
              {svgIcons.home}
            </Link>
          </li>

          <li className="text-left list-none mobile-list mb-2 p-2">
            <Link
              href="/about"
              className="mx-4 pb-1 mobile_main-nav_link"
              activeClassName="mobile-active-link"
              style="margin-left: 5px !important;"
            >
              {t("about")}
              {svgIcons.info}
            </Link>
          </li>

          <li className="text-left list-none mobile-list mb-2 p-2">
            <Link
              href="/contact"
              className="mx-4 pb-1 mobile_main-nav_link"
              activeClassName="mobile-active-link"
              style="margin-left: 5px !important;"
            >
              {t("contact")}
              {svgIcons.phone}
            </Link>
          </li>

          <li className="list-group-item text-left mobile-list mb-2 p-2">
            <div>
              <span className="font-weight-bold d-flex">
                {t("chooseLang")}
                <MobileLanguageSwitcher
                  changeLanguage={changeLanguage}
                  isSelected={isSelected}
                />
              </span>
            </div>
          </li>

          <li className="list-group-item text-left mobile-list mobile-list-theme mb-2 p-2">
            <div>
              <span className="font-weight-bold d-flex">
                {t("chooseTheme")} <ThemeSwitch />
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
