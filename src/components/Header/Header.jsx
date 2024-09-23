import Navigation from "../Navigation/Navigation";
import Language from "../Language/Language";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  return (
    <header className="main-header sticky-top">
      <div className="container d-flex justify-content-between d-none d-md-flex">

        <Navigation />

        <div className="d-flex align-items-center ml-auto">
          <ThemeSwitch />
          <Language />
        </div>
      </div>


      <div className="container justify-content-between d-md-none pb-1">
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
