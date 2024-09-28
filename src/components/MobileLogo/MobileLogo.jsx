import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/new-black-logo-paint.png";
import LogoWhite from "../../assets/images/zoz-logo-white-paint.png";

const MobileLogo = () => {
  const { currentTheme } = useTheme();
  const themeLogo = currentTheme === "Light" ? LogoDark : LogoWhite;
  return (
    <div className="mobile-logo">
      <img src={themeLogo} alt="logo" />
    </div>
  );
};

export default MobileLogo;
