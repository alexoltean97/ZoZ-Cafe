import { useTranslation } from "preact-i18next";

const Schedule = () => {
  const { t } = useTranslation();

  return (
    <div className="schedule my-4 ml-xl-2 ml-lg-2">
      <table className="table table-striped table-bordered table-hover theme-table">
        <thead className="thead-dark">
          <tr>
            <th>{t("day")}</th>
            <th>{t("openingHours")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("monday")}</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>{t("tuesday")}</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>{t("wednesday")}</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>{t("thursday")}</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>{t("friday")}</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>{t("saturday")}</td>
            <td>09:00 AM - 03:00 PM</td>
          </tr>
          <tr className="table-danger">
            <td>{t("sunday")}</td>
            <td>{t("closed")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
