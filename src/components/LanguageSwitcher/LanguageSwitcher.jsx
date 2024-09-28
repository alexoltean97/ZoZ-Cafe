import ro from "../../assets/images/ro.png";
import en from "../../assets/images/gb.png";

const LanguageSwitcher = ({ changeLanguage, isSelected }) => {
  return (
    <div className="image-holder d-flex mt-3">
      <a
        className="dropdown-item"
        onClick={() => changeLanguage("ro")}
        href="#"
      >
        <img
          className={`rounded-small-flag ${isSelected ? "active-lang" : ""}`}
          src={ro}
          alt="romanian"
        />
      </a>

      <a
        className="dropdown-item"
        onClick={() => changeLanguage("en")}
        href="#"
      >
        <img
          className={`rounded-small-flag ${isSelected ? "" : "active-lang"}`}
          src={en}
          alt="english"
        />
      </a>
    </div>
  );
};

export default LanguageSwitcher;
