import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/logo1.png";
import LogoWhite from "../../assets/images/logo2.png";


const LogoFooter = () => {
  const { currentTheme } = useTheme();
  const themeLogo = currentTheme === "Light" ? LogoDark : LogoWhite;
  return (
    <div className="logo-footer">
      <img src={themeLogo} alt="logo" width="120" height="57.594"/>
    </div>
  );
};

export default LogoFooter;