import "./styles.scss";
import { menu_links } from "../../assets/utils";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

function Menu({ isOpen }) {
  return (
    <aside className={`${isOpen ? "Menu isOpen" : "Menu"}`}>
      <ul className="Menu_list">
        {menu_links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="Menu__link">
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
        <li className="Menu__links">
          <CartIcon />
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
