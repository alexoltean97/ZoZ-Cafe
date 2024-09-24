import { Link } from "preact-router";

const NavigationFooter = () => {
  return (
    <div className="navigation-footer mb-md-0">
      <ul
        style="padding-left: 0;"
        className="list-unstyled d-flex flex-column flex-md-row justify-content-center mb-0"
      >
        <li className="d-inline mx-2">
          <Link className="pb-2 main-nav_link position-relative" href="/">
            Home
          </Link>
        </li>
        <li className="d-inline mx-2">
          <Link className="pb-2 main-nav_link position-relative" href="/about">
            About
          </Link>
        </li>
        <li className="d-inline mx-2">
          <Link
            className="pb-2 main-nav_link position-relative"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationFooter;
