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
            <td>07:30 - 16:30</td>
          </tr>
          <tr>
            <td>{t("tuesday")}</td>
            <td>07:30 - 16:30</td>
          </tr>
          <tr>
            <td>{t("wednesday")}</td>
            <td>07:30 - 16:30</td>
          </tr>
          <tr>
            <td>{t("thursday")}</td>
            <td>07:30 - 16:30</td>
          </tr>
          <tr>
            <td>{t("friday")}</td>
            <td>07:30 - 16:30</td>
          </tr>
          <tr>
            <td>{t("saturday")}</td>
            <td>09:00 - 13:00</td>
          </tr>
          <tr>
            <td>{t("sunday")}</td>
            <td>09:00 - 13:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
