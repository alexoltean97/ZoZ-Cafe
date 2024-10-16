import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/logo1.png";
import LogoWhite from "../../assets/images/logo2.png";

const MobileLogo = () => {
  const { currentTheme } = useTheme();
  const themeLogo = currentTheme === "Light" ? LogoDark : LogoWhite;
  return (
    <div className="mobile-logo">
      <img src={themeLogo} alt="logo" width="120" height="57.594" />
    </div>
  );
};

export default MobileLogo;
