import "./styles.scss";
import logo from "../../assets/image/logo.png";
import { ReactComponent as Hamburger } from "../../assets/image/hamburger.svg";
import { ReactComponent as Close } from "../../assets/image/close.svg";
import CartIcon from "../CartIcon";
import { menu_links } from "../../assets/utils";
import { Link } from "react-router-dom";

function Navbar({ manageMenu, isOpen }) {
  return (
    <div className="Navbar_wrapper">
      <nav className="Navbar">
        <Link to="/">
          <img className="Navbar__logo" src={logo} alt="Meissen" />
        </Link>
        <button className="Navbar__btn" type="button" onClick={manageMenu}>
          {!isOpen ? <Hamburger /> : <Close />}
        </button>
        <ul className="Navbar__menu">
          {menu_links.map((link) => {
            return (
              <li key={link.id} className="Navbar__link">
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <li>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
