import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/new-black-logo-paint.png";
import LogoWhite from "../../assets/images/zoz-logo-white-paint.png";


const LogoFooter = () => {
  const { currentTheme } = useTheme();
  const themeLogo = currentTheme === "Light" ? LogoDark : LogoWhite;
  return (
    <div className="logo-footer">
      <img src={themeLogo} alt="logo" width="150" height="58"/>
    </div>
  );
};

export default LogoFooter;