import ro from "../../assets/images/ro.png";
import en from "../../assets/images/gb.png";

const MobileLanguageSwitcher = ({ changeLanguage, isSelected }) => {
  return (
    <div className="image-holder">
      <ul style="padding-left:10px;">
        <li className="d-inline-block mx-2">
          <a
            className="dropdown-item"
            onClick={() => changeLanguage("ro")}
            href="#"
          >
            <img
              className={`rounded-small-flag ${
                isSelected ? "active-lang" : ""
              }`}
              src={ro}
              alt="romanian"
            />
          </a>
        </li>

        <li className="d-inline-block">
          <a
            className="dropdown-item"
            onClick={() => changeLanguage("en")}
            href="#"
          >
            <img
              className={`rounded-small-flag ${
                isSelected ? "" : "active-lang"
              }`}
              src={en}
              alt="english"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileLanguageSwitcher;
