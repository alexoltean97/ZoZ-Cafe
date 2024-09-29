import { useModal } from "../../context/ModalContext";

const BottomFooter = () => {
  const { openModalWithTitle } = useModal();

  return (
    <>
      <div className="bottom-footer d-flex flex-column flex-md-row justify-content-between py-4">
        <div className="copyright  mb-3 mb-md-0 text-center text-md-start">
          <span>Copyright 14Dev</span>
        </div>

        <div className="legal-list mb-3 mb-md-0">
          <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center m-0">
            <li className="mx-md-2 mb-2 mb-md-0">
              <a
                className="pb-2 main-nav_link"
                href="#"
                onClick={() => openModalWithTitle("Privacy Policy")}
              >
                Privacy Policy
              </a>
            </li>
            <li className="mx-md-2 mb-2 mb-md-0">
              <a
                className="pb-2 main-nav_link"
                href="#"
                onClick={() => openModalWithTitle("Terms and Conditions")}
              >
                Terms and Conditions
              </a>
            </li>
            <li className="mx-md-2 mb-2 mb-md-0">
              <a
                className="pb-2 main-nav_link"
                href="#"
                onClick={() => openModalWithTitle("Cookie Settings")}
              >
                Cookie Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="filler-icon text-center text-md-end">
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;     position: relative; bottom: 5px;"
          >
            <g transform="matrix(1,0,0,1,-1088,-256)">
              <rect
                id="Icons"
                x="0"
                y="0"
                width="1280"
                height="800"
                style="fill:none;"
              />
              <g id="Icons1">
                <g id="Strike"></g>
                <g id="H1"></g>
                <g id="H2"></g>
                <g id="H3"></g>
                <g id="list-ul"></g>
                <g id="hamburger-1"></g>
                <g id="hamburger-2"></g>
                <g id="list-ol"></g>
                <g id="list-task"></g>
                <g id="trash"></g>
                <g id="vertical-menu"></g>
                <g id="horizontal-menu"></g>
                <g id="sidebar-2"></g>
                <g id="Pen"></g>
                <g id="Pen1"></g>
                <g id="clock"></g>
                <g id="external-link"></g>
                <g id="hr"></g>
                <g id="info"></g>
                <g id="warning"></g>
                <g id="plus-circle"></g>
                <g id="minus-circle"></g>
                <g id="vue"></g>
                <g id="cog"></g>
                <g id="logo"></g>
                <g id="radio-check"></g>
                <g id="eye-slash"></g>
                <g id="eye"></g>
                <g id="toggle-off"></g>
                <g id="shredder"></g>
                <g id="spinner--loading--dots-"></g>
                <g id="react"></g>
                <g id="check-selected"></g>
                <g id="turn-off"></g>
                <g id="code-block"></g>
                <g id="user"></g>
                <g id="coffee-bean"></g>
                <g
                  id="coffee-beans"
                  transform="matrix(0.812857,0,0,0.812857,474.123,-0.132909)"
                >
                  <g
                    id="coffee-bean1"
                    transform="matrix(0.785276,0.453379,-0.453379,0.785276,382.475,-256.924)"
                  >
                    <g transform="matrix(1,0,0,1,0,-0.699553)">
                      <path d="M737.049,328.389C738.206,328.093 739.418,328.601 740.019,329.632C740.083,329.683 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.281,358.061 736.606,364.8 737.988,370.192C738.252,371.236 737.868,372.336 737.014,372.991C736.159,373.645 734.997,373.729 734.058,373.203C728.69,370.091 722.027,363.796 722.021,352C722.016,340.504 728.495,330.75 737.049,328.389ZM737.049,332.302C730.104,335.24 726.021,342.847 726.021,352C726.021,359.27 730.203,365.111 734.111,368.315C733.195,363.785 733.062,357.818 735.724,351.274C739.116,342.936 737.912,335.324 737.049,332.302Z" />
                    </g>
                    <g transform="matrix(-1,0,0,-1,1483.03,703.293)">
                      <path d="M736.986,328.407C738.175,328.097 739.426,328.617 740.045,329.679C740.093,329.701 740.106,329.722 740.106,329.722C740.106,329.722 745.206,338.581 739.429,352.782C737.261,358.111 736.594,364.927 738.028,370.344C738.292,371.357 737.928,372.429 737.101,373.072C736.275,373.714 735.146,373.803 734.23,373.297C728.832,370.224 722.027,363.921 722.021,352C722.016,340.532 728.463,330.798 736.986,328.407ZM737.049,332.302C730.104,335.24 726.021,342.847 726.021,352C726.021,359.27 730.203,365.111 734.111,368.315C733.195,363.785 733.062,357.818 735.724,351.274C739.116,342.936 737.912,335.324 737.049,332.302Z" />
                    </g>
                  </g>
                  <g transform="matrix(1.23023,0,0,1.23023,-189.709,-77.6604)">
                    <path
                      d="M792.011,368.377C792.881,368.366 793.638,367.779 793.867,366.94C793.905,366.882 793.915,366.845 793.915,366.845C793.915,366.845 795.856,359.564 789.034,350.557C786.506,347.219 784.744,342.57 784.688,338.477C784.673,337.676 784.184,336.961 783.442,336.657C782.701,336.353 781.85,336.519 781.277,337.079C778.06,340.326 774.552,346.067 776.79,354.434C778.981,362.627 785.464,368.338 792.011,368.377ZM796.55,364C797.325,364.444 797.962,364.63 798.879,364.474C798.492,365.399 797.919,366.083 797.371,366.569C797.121,366.766 796.776,366.793 796.499,366.637C796.221,366.482 796.064,366.174 796.102,365.858C796.127,365.354 796.248,364.755 796.55,364ZM791.246,365.591C785.741,364.824 781.384,360.188 779.638,353.671C778.251,348.495 780.114,343.539 782.285,340.512C782.497,343.912 783.54,348.186 786.684,352.337C790.69,357.626 791.285,363.275 791.246,365.591ZM793.152,352.09C792.882,351.671 792.599,351.266 792.306,350.879C785.483,341.871 787.425,334.591 787.425,334.591C787.425,334.591 787.436,334.55 787.454,334.483C787.683,333.644 788.434,333.052 789.304,333.027C793.183,333.073 797.042,335.08 800,338.416C799.283,339.114 798.632,339.796 798.044,340.471C795.933,337.937 793.195,336.276 790.093,335.844C790.058,337.991 790.567,343.004 793.834,347.938C793.47,349.245 793.252,350.614 793.152,352.09Z"
                      style="fill:rgb(64,64,64);"
                    />
                  </g>
                </g>
                <g id="coffee-bean-filled"></g>
                <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
                  <g id="coffee-beans-filled">
                    <g id="coffee-bean2"></g>
                  </g>
                </g>
                <g id="clipboard"></g>
                <g transform="matrix(1,0,0,1,128.011,1.35415)">
                  <g id="clipboard-paste"></g>
                </g>
                <g id="clipboard-copy"></g>
                <g id="Layer1"></g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
