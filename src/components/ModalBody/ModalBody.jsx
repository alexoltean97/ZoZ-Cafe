import { useModal } from "../../context/ModalContext";
import ModalNavigation from "../ModalNavigation/ModalNavigation";
import ModalTabContent from "../ModalTabContent/ModalTabContent";
const ModalBody = () => {
  const {
    activeTab,
    setActiveTab,
    modalTitle,
    setModalTitle,
    getTitleFromTab,
  } = useModal();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setModalTitle(getTitleFromTab(tabName));
  };

  return (
    <>
      <ModalNavigation active={activeTab} handleTab={handleTabChange} />
      <ModalTabContent active={activeTab} title={modalTitle} />
    </>
  );
};

export default ModalBody;
