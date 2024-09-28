import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import { useTranslation } from "preact-i18next";
import i18n from "../../i18n/i18n";
import MobileLogo from "../MobileLogo/MobileLogo";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import MobileLanguageSwitcher from "../MobileLanguageSwitcher/MobileLanguageSwitcher";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-home position-relative icon-menu"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-info position-relative icon-menu"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-phone position-relative icon-menu"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </Link>
          </li>

          <li className="list-group-item text-left mobile-list mb-2 p-2">
            <div>
              <span className="font-weight-bold d-flex">
                Choose a Language:
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
                Choose a Theme: <ThemeSwitch />
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
