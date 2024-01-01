import { useState } from "react";

import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "../assets/shared/mobile/menu.svg";
import Close from "../assets/shared/mobile/close.svg";

import "../scss/_nav.scss";

const Nav = () => {
  const [modalToggled, setModalToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="menuContainer">
        {/* MENU */}
        <div className="navMenu wrapper">
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <ul className="navList">
            <li>
              <a href="">Stories</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>

          <button className="inviteBtn">Get an Invite</button>

          <button
            onClick={() => setModalToggled(!modalToggled)}
            className="hamburgerBtn"
          >
            {modalToggled ? (
              <img src={Close} alt="Close" />
            ) : (
              <img src={Menu} alt="Hamburger menu" />
            )}
          </button>
        </div>
      </div>

      <div className={`modalContainer ${modalToggled ? "active" : ""}`}>
        <div className="navModal">
          <ul className="modalList">
            <li>
              <a href="">Stories</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>

          <button className="inviteBtnModal">Get an Invite</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
