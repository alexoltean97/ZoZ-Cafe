import { svgIcons } from "./icons";
const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li className="d-inline mx-2">
          <a href="#">{svgIcons.instagram}</a>
        </li>
        <li className="d-inline">
          <a href="#">{svgIcons.facebook}</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
