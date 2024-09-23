import { useTheme } from "../../context/ThemeContext";
import LightIcon from "../LightIcon/LightIcon";
import DarkIcon from "../DarkIcon/DarkIcon";
const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useTheme();

  if (currentTheme == "Light") {
    return <LightIcon toggle={toggleTheme} />;
  } else if (currentTheme == "Dark") {
    return <DarkIcon toggle={toggleTheme}/>;
  } 
};

export default ThemeSwitch;
