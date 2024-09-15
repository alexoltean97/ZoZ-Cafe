import { Link } from "preact-router";

const TopFooter = () => {
    return(
        <div className="top-footer d-flex">
        <div className="logo-footer">
          <p>Logo here</p>
        </div>

        <div className="navigation-footer">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="social-media">
            <ul>
                <li>I1</li>
                <li>I2</li>
                <li>I3</li>
            </ul>
        </div>
      </div>
    );
}

export default TopFooter;