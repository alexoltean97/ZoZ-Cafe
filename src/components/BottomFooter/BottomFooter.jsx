const BottomFooter = () => {
  return (
    <>
      <div className="bottom-footer d-flex flex-column flex-md-row justify-content-between py-4">
        <div className="copyright  mb-3 mb-md-0 text-center text-md-start">
          <span>Copyright 14Dev</span>
        </div>

        <div className="legal-list mb-3 mb-md-0">
          <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center m-0">
            <li className="mx-md-2 mb-2 mb-md-0">
              <a className="pb-2 main-nav_link" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="mx-md-2 mb-2 mb-md-0">
              <a className="pb-2 main-nav_link" href="#">
                Terms and Conditions
              </a>
            </li>
            <li className="mx-md-2 mb-2 mb-md-0">
              <a className="pb-2 main-nav_link" href="#">
                Cookie Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center text-md-end">
          <p>placeholder</p>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
