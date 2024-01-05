import { Link } from "react-router-dom";
import "../scss/_footer.scss";

import FooterLogo from "../assets/shared/desktop/footerLogo.svg";
import Facebook from "../assets/shared/desktop/facebook.svg";
import Youtube from "../assets/shared/desktop/youtube.svg";
import Twitter from "../assets/shared/desktop/twitter.svg";
import Pintrest from "../assets/shared/desktop/pinterest.svg";
import Instagram from "../assets/shared/desktop/instagram.svg";

import Arrow from "../assets/shared/desktop/arrow.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerContainer">
          {/* LOGO, ICONS, AND LINKS */}
          <div className="footerPrimary">
            <div className="footerLogoContainer">
              <img src={FooterLogo} alt="Logo" />
            </div>

            <div className="socialIcons">
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="Facebook" className="socialIcon" />
              </a>
              <a href="https://www.youtube.com/">
                <img src={Youtube} alt="Youtube" className="socialIcon" />
              </a>
              <a href="https://twitter.com/">
                <img src={Twitter} alt="Twitter" className="socialIcon" />
              </a>
              <a href="https://www.pinterest.ca/">
                <img src={Pintrest} alt="Pintrest" className="socialIcon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="Instagram" className="socialIcon" />
              </a>
            </div>

            <ul className="footerLinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* BUTTON AND COPYRIGHT */}
          <div className="footerSecondary">
            <button className="invBtn">
              Get an Invite
              <span className="arrow">
                <img src={Arrow} alt="/" />
              </span>
            </button>

            <p>Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
