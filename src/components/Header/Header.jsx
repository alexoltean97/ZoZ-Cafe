import { useState } from 'preact/hooks';
import Navigation from "../Navigation/Navigation";
import Language from "../Language/Language";
const Navbar = () => {

  return (
    <header className="main-header sticky-top bg-white d-flex justify-content-between">
      <Navigation />
      <Language />
    </header>
  );
};

export default Navbar;
