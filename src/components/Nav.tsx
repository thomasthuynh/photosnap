import { Link } from "react-router-dom";
import "../scss/_nav.scss";

import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "../assets/shared/mobile/menu.svg";
import Close from "../assets/shared/mobile/close.svg";

type Props = {
  modalToggled: boolean;
  setModalToggled: (value: boolean) => void;
}

const Nav = ({ modalToggled, setModalToggled }: Props) => {

  const handleModal = (): void => {
    setModalToggled(false)
  }

  return (
    <nav>
      <div className="menuContainer">
        {/* MENU */}
        <div className="navMenu wrapper">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <ul className="navList">
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
              <Link to="/stories" onClick={handleModal}>Stories</Link>
            </li>
            <li>
              <Link to="/features" onClick={handleModal}>Features</Link>
            </li>
            <li>
              <Link to="/pricing" onClick={handleModal}>Pricing</Link>
            </li>
          </ul>

          <button className="inviteBtnModal">Get an Invite</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
