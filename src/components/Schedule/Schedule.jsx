const Schedule = () => {
  return (
    <div className="schedule my-4 ml-xl-2 ml-lg-2">
      <table className="table table-striped table-bordered table-hover theme-table">
        <thead className="thead-dark">
          <tr>
            <th>Day</th>
            <th>Opening Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>08:00 AM - 05:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>09:00 AM - 03:00 PM</td>
          </tr>
          <tr className="table-danger">
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
