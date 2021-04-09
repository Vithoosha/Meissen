import "./styles.scss";
import logo from "../../assets/image/logo.png";
import { ReactComponent as Hamburger } from "../../assets/image/hamburger.svg";
import CartIcon from "../CartIcon";
import { menu_links } from "../../assets/utils";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper_nav">
      <nav>
        <Link to="/">
          <img className="nav_logo" src={logo} alt="Meissen" />
        </Link>
        <button type="button">
          <Hamburger className="Hamburger" />
        </button>
        <ul className="menu">
          {menu_links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
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
