import { Link } from "preact-router";

const scrollToContent = () => {
  setTimeout(() => {
    const mainContent = document.querySelector(".legal-title");
    if (mainContent) {
      mainContent.scrollIntoView();

      window.scrollBy(0, -1250);
    }
  }, 0);
};

const LegalList = () => {
  return (
    <div className="legal-list mb-3 mb-md-0">
      <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center m-0">
        <li className="mx-md-2 mb-2 mb-md-0">
          <Link
            className="pb-2 main-nav_link"
            href="/cookiespolicy"
            onClick={scrollToContent}
          >
            Cookie Policy
          </Link>
        </li>

        <li className="mx-md-2 mb-2 mb-md-0">
          <Link
            className="pb-2 main-nav_link"
            href="/privacy"
            onClick={scrollToContent}
          >
            Privacy Policy
          </Link>
        </li>

        <li className="mx-md-2 mb-2 mb-md-0">
          <Link
            className="pb-2 main-nav_link"
            href="/terms"
            onClick={scrollToContent}
          >
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalList;
