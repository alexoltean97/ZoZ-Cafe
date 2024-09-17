import Navigation from "../Navigation/Navigation";
import Language from "../Language/Language";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const Header = () => {
  return (
    <header className="main-header sticky-top bg-white">
     
      <div className="container d-flex justify-content-between d-none d-md-flex">
        <Navigation />
        <Language />
      </div>

 
      <div className="container justify-content-between d-md-none pb-1">
        <MobileNavigation />
       
      </div>
    </header>
  );
};

export default Header;
