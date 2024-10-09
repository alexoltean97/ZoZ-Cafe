import { svgIcons } from "./icons";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li className="d-inline mx-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Follow us on Instagram"
          >
            {svgIcons.instagram}
            <span className="visually-hidden">Follow us on Instagram</span>
          </a>
        </li>
        <li className="d-inline mx-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Follow us on Facebook"
          >
            {svgIcons.facebook}
            <span className="visually-hidden">Follow us on Facebook</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
