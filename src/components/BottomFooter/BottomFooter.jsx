import { useModal } from "../../context/ModalContext";
import { svgIcons } from "./icons";
import LegalList from "../LegalList/LegalList";
const BottomFooter = () => {
  const { openModalWithTitle } = useModal();

  return (
    <>
      <div className="bottom-footer d-flex flex-column flex-md-row justify-content-between py-4">
        <div className="copyright  mb-3 mb-md-0 text-center text-md-start">
          <span>Copyright 14Dev</span>
        </div>

        <LegalList openModal={openModalWithTitle} />

        <div className="filler-icon text-center text-md-end">
          {svgIcons.bean}
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
