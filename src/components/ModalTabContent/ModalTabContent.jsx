import { useTranslation } from "preact-i18next";

const ModalTabContent = () => {
  const { t } = useTranslation();

  return (
    <div className="tab-content p-1" id="nav-tabContent">
      <h3 className="modal-title pb-2 font-weight-bold">{t("welcome")}</h3>
      <h5 class="my-3 font-weight-bold">{t("personalized")}</h5>
      <span>{t("cookieModal")}</span>
    </div>
  );
};

export default ModalTabContent;
