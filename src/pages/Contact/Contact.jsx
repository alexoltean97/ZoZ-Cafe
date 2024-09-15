import { h } from "preact";
import unsplash1 from "../../assets/unsplash/unsplash1.jpg";
import unsplash2 from "../../assets/unsplash/unsplash2.jpg";
import unsplash5 from "../../assets/unsplash/unsplash5.jpg";
const Contact = () => {
  return (
    <div>
      <h2>Treci pe la noi!</h2>
      <p>Treceti si vizitati pe la cele mai smechere locatii din Arad</p>

      <div className="image-grid d-flex">
        <div className="main-image position-relative">
          <img style="max-width:900px" src={unsplash5} alt="unsplash4" />
          <div className="content-main-image position-absolute" style="bottom:0;     transform: translate(50%, 0);">
            <h5>Va asteptam</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.9538148182023!2d21.313817876732216!3d46.17157508596392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47459901ef70ec97%3A0x63f0063e78dc4518!2sBarfly%20Venue!5e0!3m2!1sen!2sro!4v1726403534511!5m2!1sen!2sro"
              width="400"
              height="150"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="secondary-images">
          <img style="max-width:400px" src={unsplash1} alt="unsplash4" />
          <img style="max-width:400px" src={unsplash2} alt="unsplash4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
