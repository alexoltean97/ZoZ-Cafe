import unsplash5 from "../../assets/unsplash/unsplash5.jpg";

const Banner = () => {
  return (
    <div className="intro">
      <div className="container position-relative">
        <div className="banner">
          <img
            src={unsplash5}
            fit="cover"
            alt="food background"
            width="1240px"
            height="436px"
          ></img>
        </div>
        <div className="intro-content position-absolute w-100">
          <h1>Lorem Ipsum Dolor sit Amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu neque
            viverra nunc hendrerit tristique ut id nisi. Nulla quis tempor
            ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
