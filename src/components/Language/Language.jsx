import { useState, useEffect } from "preact/hooks";
import ro from "../../assets/images/ro.png";
import en from "../../assets/images/gb.png";
import { useTranslation } from "preact-i18next";
import i18n from "../../i18n/i18n";
import Cookies from "js-cookie";

const Language = () => {
  const { t } = useTranslation();
  const [subMenu, setActive] = useState(false);

  const [lngImage, setLngImage] = useState(
    Cookies.get("language") === "en" ? en : ro
  );

  const triggerSubMenu = () => {
    setActive(!subMenu);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === "ro") {
      setLngImage(ro);
    } else if (lng === "en") {
      setLngImage(en);
    }

    Cookies.set("language", lng, { expires: 365, path: "/" });

    setActive(false);
  };

  useEffect(() => {
    const savedLanguage = Cookies.get("language") || "ro";
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <>
      <div class="dropdown">
        <button className="language-dropdown p-0" onClick={triggerSubMenu}>
          <img src={lngImage} alt="language flag" />
        </button>
        <ul class={`dropdown-menu ${subMenu ? "d-block" : ""}`}>
          <li>
            <a
              class="dropdown-item"
              onClick={() => changeLanguage("ro")}
              href="#"
            >
              <img src={ro} alt="Romanian flag" />
              <span className="ml-2">{t("romanian")}</span>
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              onClick={() => changeLanguage("en")}
              href="#"
            >
              <img src={en} alt="English flag" />
              <span>{t("english")}</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Language;
