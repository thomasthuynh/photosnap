import "../scss/_betaInvite.scss";

import InviteBgLg from "../assets/shared/desktop/bg-beta.jpg";
import InviteBgMd from "../assets/shared/tablet/bg-beta.jpg";
import InviteBgSm from "../assets/shared/mobile/bg-beta.jpg";

import Arrow from "../assets/shared/desktop/arrow.svg";

const BetaInvite = () => {
  return (
    <div className="betaInvite">
      <div className="betaImgContainer">
        <picture>
          <source media="(min-width: 1280px)" srcSet={InviteBgLg} />
          <source media="(min-width: 768px)" srcSet={InviteBgMd} />
          <img src={InviteBgSm} alt="/" />
        </picture>
      </div>

      <div className="betaTextContainer">
        <div className="wrapper">
          <div className="betaText">
          <div className="gradient"></div>
            <h1>We're in beta. Get your invite today!</h1>
            <button className="invBtn">
              Get an invite
              <span className="arrow">
                <img src={Arrow} alt="/" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaInvite;
