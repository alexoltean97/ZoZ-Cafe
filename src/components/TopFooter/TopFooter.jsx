import LogoFooter from "../LogoFooter/LogoFooter";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import SocialMedia from "../SocialMedia/SocialMedia";
const TopFooter = () => {
  return (
    <div className="top-footer d-flex flex-column flex-md-row justify-content-between py-4 border-bottom">
      <LogoFooter />
      <NavigationFooter />
      <SocialMedia />
    </div>
  );
};

export default TopFooter;
