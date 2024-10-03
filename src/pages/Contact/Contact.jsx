import Schedule from "../../components/Schedule/Schedule";
import Map from "../../components/Map/Map";
const Contact = () => {
  return (
    <div className="visit-us mt-4">
      <div className="container">
        <h2>Treci pe la noi!</h2>
        <p>Treceti si vizitati pe la cele mai smechere locatii din Arad</p>

        <div className="row">
          <div className="col-lg-8 col-sm-12 col-xs-12">
            <Schedule />
          </div>

          <div className="col-lg-4 col-sm-12 col-xs-12">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
