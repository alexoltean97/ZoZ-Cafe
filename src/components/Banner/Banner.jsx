import backgroud from "../../assets/images/unsplash9.jpg";
const Banner = () => {
  return (
    <div className="intro">
      <div className="container position-relative">
        <div className="banner position-relative">
        <picture>
          <source srcset={backgroud} type="image/webp" />
          <img src={backgroud} fit="cover" alt="food background" height="436" />
          </picture>
          
        </div>
        <div className="intro-content position-absolute">
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
